"use client";

import Link from "next/link";
import { BrandHero } from "@/components/BrandHero";
import { CtaBand } from "@/components/CtaBand";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkVisual } from "@/components/WorkVisual";
import { chains, hiringSteps, media, principles, site, stack, values } from "@/lib/site";

export function AboutPageContent() {
  const { messages, locale } = useLanguage();
  const t = messages.about;

  return (
    <>
      <BrandHero eyebrow={t.eyebrow} title={t.title} image={media.about} imageAlt={t.imageAlt}>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{t.lead}</p>
      </BrandHero>

      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5 text-base leading-8 text-muted">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/how-we-work" className="text-sm text-gold hover:text-gold-soft">
              {t.howWeWork}
            </Link>
            <Link href="/work" className="text-sm text-gold hover:text-gold-soft">
              {t.caseStudies}
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-line bg-card p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{t.company}</p>
          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">{t.presence}</dt>
              <dd className="mt-1 text-ink">{messages.site.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">{t.model}</dt>
              <dd className="mt-1 text-ink">{t.modelValue}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">{t.contact}</dt>
              <dd className="mt-1 text-gold">{site.email}</dd>
            </div>
          </dl>
        </div>
      </div>

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
          <SectionHeading eyebrow={t.stackEyebrow} title={t.stackTitle} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stack.map((group) => (
              <div key={group.group} className="rounded-2xl border border-line bg-card p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-gold">
                  {messages.stackGroups[group.group] ?? group.group}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink/90">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            {t.networks}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {chains.map((chain) => (
              <span key={chain} className="rounded-full border border-line px-3 py-1.5 text-sm text-ink/90">
                {chain}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-raised">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <SectionHeading
            eyebrow={t.clientWorkEyebrow}
            title={t.clientWorkTitle}
            href="/work"
            action={t.allCaseStudies}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <WorkVisual slug="brickfi" className="aspect-[16/10] rounded-2xl border border-line" />
            <WorkVisual slug="vaultlayer" className="aspect-[16/10] rounded-2xl border border-line" />
            <WorkVisual slug="keystone-aa" className="aspect-[16/10] rounded-2xl border border-line" />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading
            eyebrow={t.hiringEyebrow}
            title={t.hiringTitle}
            href="/careers"
            action={t.openRoles}
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
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {values.map((value, index) => {
              const localized = messages.values[index];
              return (
                <article key={value.title} className="rounded-2xl border border-line bg-card p-6">
                  <h3 className="font-display text-2xl text-gold-soft">
                    {locale === "zh" && localized ? localized.title : value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {locale === "zh" && localized ? localized.body : value.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title={t.ctaTitle} action={t.ctaAction} />
    </>
  );
}
