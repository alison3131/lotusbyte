"use client";

import Link from "next/link";
import { BrandHero } from "@/components/BrandHero";
import { CtaBand } from "@/components/CtaBand";
import { useLanguage } from "@/components/LanguageProvider";
import { ServiceVisual } from "@/components/ServiceVisual";
import { getService, projects } from "@/lib/site";

type Service = NonNullable<ReturnType<typeof getService>>;

export function ServiceDetailContent({ service }: { service: Service }) {
  const { messages, locale } = useLanguage();
  const t = messages.services;
  const localized = messages.servicesBySlug[service.slug];
  const name = locale === "zh" && localized ? localized.name : service.name;
  const blurb = locale === "zh" && localized ? localized.blurb : service.blurb;
  const items = locale === "zh" && localized ? localized.items : service.items;
  const related = projects.filter((project) => project.service === service.slug);

  return (
    <>
      <BrandHero eyebrow={t.eyebrow} title={name} image={service.photo} imageAlt={name}>
        <p className="mt-4 text-xs uppercase tracking-[0.16em] text-gold">{service.stack}</p>
        <p className="mt-5 max-w-2xl text-muted">{blurb}</p>
      </BrandHero>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Link href="/services" className="text-sm text-gold hover:text-gold-soft">
            {t.allServices}
          </Link>
          <h2 className="mt-8 font-display text-3xl">{t.whatWeShip}</h2>
          <ul className="mt-6 space-y-4">
            {items.map((item) => (
              <li key={item} className="border-t border-line pt-4 text-sm leading-7 text-muted">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-7 text-muted">{t.staffingNote}</p>
        </div>
        <ServiceVisual slug={service.slug} className="aspect-[16/11] rounded-3xl border border-line" />
      </div>

      {related.length ? (
        <div className="border-t border-line bg-raised">
          <div className="mx-auto max-w-7xl px-5 py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              {t.relatedWork}
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {related.map((project) => {
                const projectZh = messages.projectsBySlug[project.slug];
                return (
                  <Link
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    className="rounded-2xl border border-line bg-card p-6 hover:border-gold/35"
                  >
                    <p className="text-[11px] uppercase tracking-[0.16em] text-gold">
                      {locale === "zh" && projectZh ? projectZh.type : project.type}
                    </p>
                    <h3 className="mt-3 font-display text-2xl">{project.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {locale === "zh" && projectZh ? projectZh.blurb : project.blurb}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      <CtaBand title={t.talkBuild} action={messages.about.ctaAction} />
    </>
  );
}
