"use client";

import Link from "next/link";
import { ApplyForm } from "@/components/ApplyForm";
import { BrandHero } from "@/components/BrandHero";
import { useLanguage } from "@/components/LanguageProvider";
import { jobComp, type Job } from "@/lib/jobs";
import { localizeJob, localizeJobNotes } from "@/lib/i18n/localize-job";
import { media } from "@/lib/site";

export function JobDetailContent({ job }: { job: Job }) {
  const { messages, locale } = useLanguage();
  const t = messages.careers;
  const localized = localizeJob(job, locale);
  const notes = localizeJobNotes(locale);
  const comp = jobComp(job.salary);

  const engagementLabel = (name: string) => {
    if (name === "Full-time") return t.fullTime;
    if (name === "Part-time") return t.partTime;
    if (name === "Advisory") return t.advisory;
    return name;
  };

  return (
    <>
      <BrandHero
        eyebrow={localized.department}
        title={localized.title}
        image={media.careers}
        imageAlt={t.imageAlt}
      >
        <p className="mt-5 max-w-2xl text-muted">{localized.summary}</p>
      </BrandHero>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <article>
          <Link href="/careers" className="text-sm text-gold hover:text-gold-soft">
            {t.allRoles}
          </Link>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {job.engagements.map((item) => (
              <span key={item} className="rounded-full border border-line px-2.5 py-1 text-gold">
                {engagementLabel(item)}
              </span>
            ))}
            <span className="rounded-full border border-line px-2.5 py-1 text-muted">
              {localized.level}
            </span>
            <span className="rounded-full border border-line px-2.5 py-1 text-muted">
              {localized.location}
            </span>
            <span className="rounded-full border border-line px-2.5 py-1 text-gold">{job.stack}</span>
          </div>
          <div className="mt-8 rounded-2xl border border-line bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {t.compensation}
            </p>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">{t.fullTime}</dt>
                <dd className="mt-1 font-display text-2xl text-ink">
                  {comp.fullTime} <span className="text-lg text-muted">{t.perYear}</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">{t.partTime}</dt>
                <dd className="mt-1 font-display text-2xl text-ink">
                  {comp.partTime} <span className="text-lg text-muted">{t.hrsWeek}</span>
                </dd>
                <p className="mt-1 text-sm leading-6 text-muted">{notes.partTimeNote}</p>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">{t.advisory}</dt>
                <dd className="mt-1 font-display text-2xl text-ink">
                  {comp.advisory} <span className="text-lg text-muted">{t.daysMonth}</span>
                </dd>
                <p className="mt-1 text-sm leading-6 text-muted">{notes.advisoryNote}</p>
              </div>
            </dl>
            <p className="mt-5 text-sm leading-6 text-muted">{notes.equityNote}</p>
          </div>
          <p className="mt-8 text-lg leading-8 text-muted">{localized.summary}</p>
          <p className="mt-5 whitespace-pre-line text-base leading-8 text-muted">{localized.about}</p>
          <div className="mt-8 rounded-2xl border border-line bg-raised p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {t.howHiringWorks}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">{notes.hiringNote}</p>
          </div>

          <section className="mt-12">
            <h2 className="font-display text-2xl">{t.whatYouDo}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
              {localized.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl">{t.whatYouBring}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
              {localized.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl">{t.niceToHave}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
              {localized.niceToHave.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <ApplyForm
            role={localized.title}
            roleSlug={job.slug}
            engagements={job.engagements}
          />
        </aside>
      </div>
    </>
  );
}
