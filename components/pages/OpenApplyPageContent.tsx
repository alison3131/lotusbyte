"use client";

import { ApplyForm } from "@/components/ApplyForm";
import { useLanguage } from "@/components/LanguageProvider";
import { Photo } from "@/components/Photo";
import { media } from "@/lib/site";

export function OpenApplyPageContent() {
  const { messages } = useLanguage();
  const t = messages.careers;

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t.eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl">{t.openApplyTitle}</h1>
        <p className="mt-5 max-w-md text-muted">{t.openApplyLead}</p>
        <Photo src={media.careers} alt={t.imageAlt} className="mt-10 aspect-[16/11] rounded-3xl" />
        <ul className="mt-8 space-y-3 text-sm leading-6 text-muted">
          {t.openApplyBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <ApplyForm role={t.openApplyTitle} roleSlug="open-application" />
    </div>
  );
}
