"use client";

import Link from "next/link";
import { BrandHero } from "@/components/BrandHero";
import { CtaBand } from "@/components/CtaBand";
import { JumpNav } from "@/components/JumpNav";
import { useLanguage } from "@/components/LanguageProvider";
import { ServiceVisual } from "@/components/ServiceVisual";
import { media, services } from "@/lib/site";

export function ServicesPageContent() {
  const { messages, locale } = useLanguage();
  const t = messages.services;

  return (
    <>
      <BrandHero eyebrow={t.eyebrow} title={t.title} image={media.hero} imageAlt={t.imageAlt}>
        <p className="mt-5 max-w-2xl text-muted">{t.lead}</p>
      </BrandHero>

      <div className="border-t border-line bg-raised">
        <div className="mx-auto max-w-7xl px-5 py-8">
          <JumpNav
            items={services.map((service) => {
              const localized = messages.servicesBySlug[service.slug];
              return {
                href: `#${service.slug}`,
                label: locale === "zh" && localized ? localized.name : service.name,
                count: service.items.length,
              };
            })}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-16">
        {services.map((service, index) => {
          const localized = messages.servicesBySlug[service.slug];
          const name = locale === "zh" && localized ? localized.name : service.name;
          const blurb = locale === "zh" && localized ? localized.blurb : service.blurb;
          const items = locale === "zh" && localized ? localized.items : service.items;
          return (
            <article
              id={service.slug}
              key={service.slug}
              className="scroll-mt-24 overflow-hidden rounded-3xl border border-line bg-card lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch"
            >
              <ServiceVisual
                slug={service.slug}
                className="aspect-[16/10] min-w-0 lg:aspect-auto lg:h-full lg:min-h-[22rem]"
              />
              <div className="min-w-0 p-6 md:p-10">
                <p className="text-[11px] uppercase tracking-[0.18em] text-gold">
                  {String(index + 1).padStart(2, "0")} · {service.stack}
                </p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">{name}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{blurb}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {items.map((item) => (
                    <li key={item} className="border-t border-line pt-3 text-sm leading-6 text-ink/90">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href={`/services/${service.slug}`} className="text-sm text-gold hover:text-gold-soft">
                    {t.capabilityDetail}
                  </Link>
                  <Link href="/contact" className="text-sm text-muted hover:text-gold">
                    {t.startThisWork}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <CtaBand title={t.needMixTitle} body={t.needMixBody} action={t.talkBuild} />
    </>
  );
}
