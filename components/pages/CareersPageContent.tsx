"use client";

import Image from "next/image";
import Link from "next/link";
import { BrandHero } from "@/components/BrandHero";
import { JobBoard } from "@/components/JobBoard";
import { useLanguage } from "@/components/LanguageProvider";
import { jobs, departments } from "@/lib/jobs";
import { hiringSteps, media } from "@/lib/site";

export function CareersPageContent() {
  const { messages, locale } = useLanguage();
  const t = messages.careers;

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={media.careers}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/55 via-bg/78 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-bg/40 to-bg/25" />
      </div>

      <BrandHero plain eyebrow={t.eyebrow} title={t.title}>
        <p className="mt-5 max-w-2xl text-muted">{t.lead}</p>
        <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-8">
          <div>
            <dt className="font-display text-3xl text-gold">{jobs.length}</dt>
            <dd className="mt-1 text-xs uppercase tracking-wide text-muted">{t.openSeats}</dd>
          </div>
          <div>
            <dt className="font-display text-3xl text-gold">{departments.length}</dt>
            <dd className="mt-1 text-xs uppercase tracking-wide text-muted">{t.disciplines}</dd>
          </div>
          <div>
            <dt className="font-display text-3xl text-gold">{t.remote}</dt>
            <dd className="mt-1 text-xs uppercase tracking-wide text-muted">{t.allRolesRemote}</dd>
          </div>
        </dl>
      </BrandHero>

      <div className="relative mx-auto max-w-6xl px-5 py-16">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t.howHiring}</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">{t.howHiringTitle}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {hiringSteps.map((step, index) => {
              const localized = messages.hiringSteps[index];
              return (
                <div key={step.n} className="border-t border-gold/30 pt-6">
                  <p className="font-display text-sm text-gold">{step.n}</p>
                  <h3 className="mt-3 font-display text-xl">
                    {locale === "zh" && localized ? localized.title : step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {locale === "zh" && localized ? localized.body : step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <JobBoard />

        <div className="mt-12 rounded-3xl border border-line bg-raised/90 p-8 backdrop-blur-sm md:flex md:items-center md:justify-between md:gap-10 md:p-10">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">{t.differentTitle}</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{t.differentBody}</p>
          </div>
          <Link
            href="/careers/apply"
            className="mt-6 inline-flex shrink-0 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[#1a1406] hover:bg-gold-soft md:mt-0"
          >
            {t.sendOpen}
          </Link>
        </div>
      </div>
    </div>
  );
}
