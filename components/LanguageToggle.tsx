"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { localeLabels, locales, type Locale } from "@/lib/i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, messages } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-line p-0.5 ${className}`}
      role="group"
      aria-label={messages.common.language}
    >
      {locales.map((item) => {
        const active = locale === item;
        return (
          <button
            key={item}
            type="button"
            onClick={() => setLocale(item as Locale)}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
              active
                ? "bg-gold text-[#1a1406]"
                : "text-muted hover:text-ink"
            }`}
            aria-pressed={active}
          >
            {localeLabels[item]}
          </button>
        );
      })}
    </div>
  );
}
