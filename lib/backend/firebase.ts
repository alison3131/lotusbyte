import "server-only";
import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getFirestore, initializeFirestore, type Firestore } from "firebase-admin/firestore";
import { serverConfig } from "@/lib/server-config";

type Credentials = {
  projectId: string;
  clientEmail: string;
  privateKey: string;
};

const DAILY_QUOTA_COOLDOWN_MS = 6 * 60 * 60 * 1000;

function normalizePrivateKey(value: string) {
  let key = value.trim();
  if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
    key = key.slice(1, -1);
  }
  key = key.replace(/\\n/g, "\n").replace(/\r\n/g, "\n").trim();
  if (!key.includes("BEGIN PRIVATE KEY") || !key.includes("END PRIVATE KEY")) {
    throw new Error("Firebase private key is missing or malformed");
  }
  return key;
}

function loadServiceAccount(): Credentials {
  const fb = serverConfig.firebase;
  const projectId = (fb.project_id || "").trim();
  const clientEmail = (fb.client_email || "").trim();
  const privateKey = fb.private_key ? normalizePrivateKey(fb.private_key) : "";

  if (!projectId || !clientEmail || !privateKey) {
    const local = process.env.VERCEL !== "1";
    throw new Error(
      local
        ? "Could not open Firestore. Add FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY to .env.local, then restart npm run dev."
        : "Could not open Firestore. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY in Vercel environment variables.",
    );
  }

  return { projectId, clientEmail, privateKey };
}

/** Lotusbyte uses a named database id `default` — not Firebase’s usual `(default)`. */
function databaseId() {
  const configured = serverConfig.firestoreDatabaseId?.trim();
  if (!configured || configured === "(default)") return "default";
  return configured;
}

function isQuotaError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  return /RESOURCE_EXHAUSTED|Quota exceeded|rateLimitExceeded|"code":\s*429/i.test(message);
}

export function formatFirestoreError(error: unknown, id = databaseId()) {
  const message = error instanceof Error ? error.message : String(error);
  if (isQuotaError(error)) {
    return `Could not open Firestore database "${id}": free-tier quota exceeded (50k reads/day). Wait until the daily reset (usually midnight Pacific), or upgrade billing. Avoid leaving admin open with live checks enabled.`;
  }
  if (/NOT_FOUND|does not exist/i.test(message)) {
    return `Could not open Firestore database "${id}". Set FIRESTORE_DATABASE_ID to the database id shown in Firebase Console → Firestore.`;
  }
  return message.startsWith("Could not open Firestore")
    ? message
    : `Could not open Firestore database "${id}" (${message})`;
}

const globalForFirebase = globalThis as typeof globalThis & {
  lotusbyteAdminApp?: App;
  lotusbyteFirestore?: Firestore;
  lotusbyteQuotaBlockedUntil?: number;
};

function adminApp() {
  if (globalForFirebase.lotusbyteAdminApp) return globalForFirebase.lotusbyteAdminApp;
  if (getApps().length) {
    globalForFirebase.lotusbyteAdminApp = getApps()[0];
    return globalForFirebase.lotusbyteAdminApp;
  }

  const credentials = loadServiceAccount();
  globalForFirebase.lotusbyteAdminApp = initializeApp({
    credential: cert({
      projectId: credentials.projectId,
      clientEmail: credentials.clientEmail,
      privateKey: credentials.privateKey,
    }),
    projectId: credentials.projectId,
  });
  return globalForFirebase.lotusbyteAdminApp;
}

function createClient(id: string) {
  const app = adminApp();
  try {
    return initializeFirestore(app, { preferRest: true }, id);
  } catch {
    return getFirestore(app, id);
  }
}

/** After a quota error, skip Firestore so we do not keep burning the free 50k/day cap. */
export function markFirestoreQuota(error: unknown) {
  if (!isQuotaError(error)) return;
  // Prefer a long pause — free-tier daily caps and short rate limits both surface as 429.
  globalForFirebase.lotusbyteQuotaBlockedUntil = Date.now() + DAILY_QUOTA_COOLDOWN_MS;
  console.warn(
    `Firestore quota cooldown ${DAILY_QUOTA_COOLDOWN_MS / 3600000}h until ${new Date(globalForFirebase.lotusbyteQuotaBlockedUntil).toISOString()}`,
  );
}

export async function firestore() {
  const blockedUntil = globalForFirebase.lotusbyteQuotaBlockedUntil ?? 0;
  if (Date.now() < blockedUntil) {
    throw new Error(formatFirestoreError(new Error("Quota exceeded."), databaseId()));
  }

  if (!globalForFirebase.lotusbyteFirestore) {
    loadServiceAccount();
    const id = databaseId();
    globalForFirebase.lotusbyteFirestore = createClient(id);
    console.info(`Firestore client ready for database "${id}"`);
  }

  return globalForFirebase.lotusbyteFirestore;
}

export async function runFirestore<T>(fn: (db: Firestore) => Promise<T>): Promise<T> {
  try {
    return await fn(await firestore());
  } catch (error) {
    markFirestoreQuota(error);
    throw new Error(formatFirestoreError(error));
  }
}
