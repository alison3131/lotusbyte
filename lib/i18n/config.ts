export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const LOCALE_COOKIE = "lb_locale";
export const LOCALE_STORAGE_KEY = "lb-locale";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
