"use client";

import Link from "next/link";
import { BrandHero } from "@/components/BrandHero";
import { CtaBand } from "@/components/CtaBand";
import { JumpNav } from "@/components/JumpNav";
import { useLanguage } from "@/components/LanguageProvider";
import { WorkVisual } from "@/components/WorkVisual";
import { media, projects } from "@/lib/site";

export function WorkPageContent() {
  const { messages, locale } = useLanguage();
  const t = messages.work;
  const types = [...new Set(projects.map((project) => project.type))];

  return (
    <>
      <BrandHero eyebrow={t.eyebrow} title={t.title} image={media.hero} imageAlt={t.imageAlt}>
        <p className="mt-5 max-w-2xl text-muted">{t.lead}</p>
      </BrandHero>

      <div className="border-t border-line bg-raised">
        <div className="mx-auto max-w-7xl px-5 py-8">
          <JumpNav
            items={types.map((type) => {
              const match = projects.find((project) => project.type === type);
              const localized = match ? messages.projectsBySlug[match.slug] : undefined;
              return {
                href: `#${match?.slug}`,
                label: locale === "zh" && localized ? localized.type : type,
              };
            })}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-6 px-5 py-16">
        {projects.map((project) => {
          const localized = messages.projectsBySlug[project.slug];
          const type = locale === "zh" && localized ? localized.type : project.type;
          const blurb = locale === "zh" && localized ? localized.blurb : project.blurb;
          return (
            <article
              id={project.slug}
              key={project.slug}
              className="scroll-mt-24 overflow-hidden rounded-3xl border border-line bg-card md:grid md:grid-cols-[1.05fr_0.95fr]"
            >
              <WorkVisual slug={project.slug} className="aspect-[16/10] md:min-h-full" />
              <div className="flex flex-col justify-center p-6 md:p-10">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-1 text-[11px] uppercase tracking-wide text-gold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-gold">{type}</p>
                <h2 className="mt-2 font-display text-3xl md:text-4xl">{project.name}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{blurb}</p>
                <p className="mt-4 text-xs text-muted">{project.chain}</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href={`/work/${project.slug}`} className="text-sm text-gold hover:text-gold-soft">
                    {t.readCase}
                  </Link>
                  <Link href="/contact" className="text-sm text-muted hover:text-gold">
                    {t.discussSimilar}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <CtaBand />
    </>
  );
}
