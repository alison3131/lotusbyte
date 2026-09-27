"use client";

import Link from "next/link";
import { BrandHero } from "@/components/BrandHero";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { clientProcess, engagements, hiringSteps, media, principles } from "@/lib/site";

export function HowWeWorkPageContent() {
  const { messages, locale } = useLanguage();
  const t = messages.howWeWork;

  return (
    <>
      <BrandHero eyebrow={t.eyebrow} title={t.title} image={media.hero} imageAlt={t.imageAlt}>
        <p className="mt-5 max-w-2xl text-muted">{t.lead}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[#1a1406] hover:bg-gold-soft"
          >
            {t.sendBrief}
          </Link>
          <Link
            href="/careers"
            className="rounded-full border border-line px-6 py-3 text-sm text-ink hover:border-gold/40"
          >
            {t.applyBench}
          </Link>
        </div>
      </BrandHero>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading
            eyebrow={t.engagementEyebrow}
            title={t.engagementTitle}
            body={t.engagementBody}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {engagements.map((item, index) => {
              const localized = messages.engagements[index];
              return (
                <article key={item.slug} className="rounded-2xl border border-line bg-card p-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-gold">{item.n}</p>
                  <h3 className="mt-3 font-display text-2xl">
                    {locale === "zh" && localized ? localized.title : item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {locale === "zh" && localized ? localized.body : item.body}
                  </p>
                  <Link href={item.href} className="mt-6 inline-block text-sm text-gold hover:text-gold-soft">
                    {locale === "zh" && localized ? localized.action : item.action} →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-raised">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading eyebrow={t.clientsEyebrow} title={t.clientsTitle} />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clientProcess.map((step, index) => {
              const localized = messages.clientProcess[index];
              return (
                <div key={step.n} className="border-t border-gold/30 pt-6">
                  <p className="font-display text-sm text-gold">{step.n}</p>
                  <h3 className="mt-3 font-display text-2xl">
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
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading
            eyebrow={t.candidatesEyebrow}
            title={t.candidatesTitle}
            body={t.candidatesBody}
            href="/careers"
            action={messages.common.openRoles}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-4">
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
      </section>

      <section className="border-t border-line bg-raised">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading eyebrow={t.principlesEyebrow} title={t.principlesTitle} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {principles.map((item, index) => {
              const localized = messages.principles[index];
              return (
                <article key={item.title} className="rounded-2xl border border-line bg-card p-6">
                  <h3 className="font-display text-2xl text-gold-soft">
                    {locale === "zh" && localized ? localized.title : item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {locale === "zh" && localized ? localized.body : item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading eyebrow={t.faqEyebrow} title={t.faqTitle} />
          <div className="mt-10">
            <FaqList />
          </div>
        </div>
      </section>

      <CtaBand title={t.ctaTitle} action={messages.common.startProject} />
    </>
  );
}
