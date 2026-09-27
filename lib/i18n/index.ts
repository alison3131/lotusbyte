import type { Locale } from "./config";
import { en, type Messages } from "./messages-en";
import { zh } from "./zh";

export type { Messages };
export type { Locale } from "./config";
export { locales, localeLabels, LOCALE_COOKIE, LOCALE_STORAGE_KEY, isLocale } from "./config";
export { en };

export function getMessages(locale: Locale): Messages {
  return locale === "zh" ? zh : en;
}
