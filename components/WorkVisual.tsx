import type { ReactNode } from "react";
import Image from "next/image";

function Overlay({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
      <div className="rounded-xl border border-line bg-card/90 p-3 shadow-[0_16px_40px_rgba(20,32,51,0.12)] backdrop-blur-md sm:p-4">
        <p className="truncate text-[10px] uppercase tracking-[0.16em] text-gold">{title}</p>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
}

function StratafiBody() {
  return (
    <>
      <p className="font-display text-lg text-ink">Harbor Court · leak in 4B</p>
      <div className="mt-2 flex gap-3 text-[11px] text-muted">
        <span className="text-gold">Assigned · Maya</span>
        <span>Due today</span>
      </div>
    </>
  );
}

function NorthlineBody() {
  return (
    <div className="space-y-1.5">
      {[
        ["NL-1842", "In transit"],
        ["NL-1848", "Delivered"],
      ].map(([name, status]) => (
        <div key={name} className="flex justify-between text-[11px]">
          <span className="text-ink">{name}</span>
          <span className="text-gold">{status}</span>
        </div>
      ))}
    </div>
  );
}

function MarlowBody() {
  return (
    <>
      <p className="text-sm text-ink">Tuesday · Dr. Shah · 14 open</p>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-bg">
        <div className="h-full w-[64%] bg-gold" />
      </div>
      <p className="mt-2 text-[11px] text-muted">Intake received · 9 of 14</p>
    </>
  );
}

function FieldnoteBody() {
  return (
    <div className="flex gap-2">
      {["Photo", "Note", "Signed"].map((item) => (
        <span key={item} className="rounded-md border border-line bg-bg px-2 py-1 text-[10px] text-ink">
          {item}
        </span>
      ))}
    </div>
  );
}

function PaperlaneBody() {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted">Draft</span>
      <span className="text-gold">Edit →</span>
      <span className="text-muted">Thursday</span>
    </div>
  );
}

function KeelBody() {
  return (
    <>
      <p className="font-display text-lg text-ink">Reorder · 24 cases</p>
      <p className="font-mono text-[11px] text-muted">Invoice K-220 · in stock</p>
    </>
  );
}

const visuals: Record<string, { photo: string; alt: string; title: string; body: () => ReactNode }> = {
  stratafi: {
    photo: "/media/stratafi.jpg",
    alt: "A residential building managed in Stratafi",
    title: "Stratafi · Work order",
    body: StratafiBody,
  },
  northline: {
    photo: "/media/northline.jpg",
    alt: "Freight moving for a Northline customer",
    title: "Northline · Shipments",
    body: NorthlineBody,
  },
  marlow: {
    photo: "/media/marlow.jpg",
    alt: "A clinic day scheduled in Marlow",
    title: "Marlow · Today",
    body: MarlowBody,
  },
  fieldnote: {
    photo: "/media/fieldnote.jpg",
    alt: "A technician closing a Fieldnote job",
    title: "Fieldnote · On site",
    body: FieldnoteBody,
  },
  paperlane: {
    photo: "/media/paperlane.jpg",
    alt: "An editorial desk using Paperlane",
    title: "Paperlane · Calendar",
    body: PaperlaneBody,
  },
  keel: {
    photo: "/media/keel.jpg",
    alt: "A retailer reordering through Keel",
    title: "Keel · Reorder",
    body: KeelBody,
  },
};

export function WorkVisual({ slug, className = "aspect-[16/10]" }: { slug: string; className?: string }) {
  const visual = visuals[slug] ?? visuals.stratafi;
  const Body = visual.body;

  return (
    <div className={`relative overflow-hidden bg-raised ${className}`}>
      <Image src={visual.photo} alt={visual.alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/10" />
      <Overlay title={visual.title}>
        <Body />
      </Overlay>
    </div>
  );
}
