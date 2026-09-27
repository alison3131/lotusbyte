"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceVisual } from "@/components/ServiceVisual";
import { StatBar } from "@/components/StatBar";
import { WorkVisual } from "@/components/WorkVisual";
import { jobComp, jobs } from "@/lib/jobs";
import { localizeJob } from "@/lib/i18n/localize-job";
import {
  audiences,
  chains,
  engagements,
  media,
  processSteps,
  projects,
  services,
  site,
} from "@/lib/site";

export default function HomePage() {
  const { messages, locale } = useLanguage();
  const featured = projects[0];
  const rest = projects.slice(1, 4);
  const featuredZh = messages.projectsBySlug[featured.slug];

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image src={media.hero} alt="Lootrushs engineering bench" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/88 to-bg/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
          <p className="rise text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            {messages.home.eyebrow} · {messages.site.location}
          </p>
          <h1 className="rise rise-d1 mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            {messages.home.titleLead}
            <span className="gold-text">{messages.home.titleAccent}</span>
          </h1>
          <p className="rise rise-d2 mt-6 max-w-2xl text-lg leading-8 text-muted">{messages.home.body}</p>
          <div className="rise rise-d3 mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[#1a1406] transition hover:bg-gold-soft"
            >
              {messages.home.startBuild}
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-line bg-bg/40 px-6 py-3 text-sm font-semibold text-ink backdrop-blur transition hover:border-gold/40 hover:text-gold"
            >
              {messages.home.seeCases}
            </Link>
            <Link href="/careers" className="text-sm text-gold hover:text-gold-soft">
              {messages.home.openRolesArrow}
            </Link>
          </div>
          <div className="rise rise-d4 mt-16 grid gap-4 md:grid-cols-3">
            {engagements.map((item, index) => {
              const localized = messages.engagements[index];
              return (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="rounded-2xl border border-line bg-bg/50 p-5 backdrop-blur transition hover:border-gold/35"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-gold">{item.n}</p>
                  <h2 className="mt-3 font-display text-2xl">{localized?.title ?? item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{localized?.body ?? item.body}</p>
                  <p className="mt-4 text-sm text-gold">{localized?.action ?? item.action} →</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <StatBar
        items={[
          { value: String(services.length), label: messages.home.stats.capabilities },
          { value: String(chains.length), label: messages.home.stats.chains },
          { value: String(projects.length), label: messages.home.stats.cases },
          { value: String(jobs.length), label: messages.home.stats.seats },
        ]}
      />

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            {messages.home.networks}
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
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading
            eyebrow={messages.home.audiencesEyebrow}
            title={messages.home.audiencesTitle}
            body={messages.home.audiencesBody}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience, index) => {
              const localized = messages.audiences[index];
              return (
                <Link
                  key={audience.slug}
                  href={audience.href}
                  className="group rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-0.5 hover:border-gold/35"
                >
                  <h3 className="font-display text-2xl group-hover:text-gold-soft">
                    {localized?.name ?? audience.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{localized?.blurb ?? audience.blurb}</p>
                  <p className="mt-5 text-sm text-gold">{messages.common.continue}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading
            eyebrow={messages.home.capabilitiesEyebrow}
            title={messages.home.capabilitiesTitle}
            body={messages.home.capabilitiesBody}
            href="/services"
            action={messages.home.allServices}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const localized = messages.servicesBySlug[service.slug];
              const name = locale === "zh" && localized ? localized.name : service.name;
              const blurb = locale === "zh" && localized ? localized.blurb : service.blurb;
              const items = locale === "zh" && localized ? localized.items : service.items;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="overflow-hidden rounded-2xl border border-line bg-card transition hover:-translate-y-0.5"
                >
                  <ServiceVisual slug={service.slug} className="aspect-[16/10]" />
                  <div className="p-6">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-gold">{service.stack}</span>
                    <h3 className="mt-3 font-display text-2xl">{name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{blurb}</p>
                    <ul className="mt-4 space-y-1.5 text-sm text-ink/80">
                      {items.slice(0, 3).map((item) => (
                        <li key={item}>· {item}</li>
                      ))}
                    </ul>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-raised">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading
            eyebrow={messages.home.casesEyebrow}
            title={messages.home.casesTitle}
            body={messages.home.casesBody}
            href="/work"
            action={messages.home.viewAllWork}
          />
          <article className="mt-10 overflow-hidden rounded-3xl border border-line bg-card lg:grid lg:grid-cols-2 lg:items-stretch">
            <WorkVisual slug={featured.slug} className="aspect-[16/11] min-w-0 lg:aspect-auto lg:h-full lg:min-h-[22rem]" />
            <div className="flex min-w-0 flex-col justify-center p-8 md:p-10">
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-line px-2.5 py-1 text-[11px] uppercase tracking-wide text-gold">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 font-display text-3xl md:text-4xl">{featured.name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {locale === "zh" && featuredZh ? featuredZh.blurb : featured.blurb}
              </p>
              <p className="mt-4 text-xs text-muted">{featured.chain}</p>
              <Link href={`/work/${featured.slug}`} className="mt-6 text-sm text-gold hover:text-gold-soft">
                {messages.home.readCase} →
              </Link>
            </div>
          </article>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {rest.map((project) => {
              const localized = messages.projectsBySlug[project.slug];
              return (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="overflow-hidden rounded-2xl border border-line bg-card transition hover:-translate-y-0.5"
                >
                  <WorkVisual slug={project.slug} className="aspect-[16/10]" />
                  <div className="p-6">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-gold">
                      {locale === "zh" && localized ? localized.type : project.type}
                    </p>
                    <h3 className="mt-3 font-display text-2xl">{project.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {locale === "zh" && localized ? localized.blurb : project.blurb}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading
            eyebrow={messages.home.processEyebrow}
            title={messages.home.processTitle}
            href="/how-we-work"
            action={messages.home.processAction}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => {
              const localized = messages.processSteps[index];
              return (
                <div key={step.n} className="border-t border-gold/30 pt-6">
                  <p className="font-display text-sm text-gold">{step.n}</p>
                  <h3 className="mt-3 font-display text-2xl">{localized?.title ?? step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{localized?.body ?? step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-raised">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading
            eyebrow={messages.home.careersEyebrow}
            title={`${jobs.length} ${messages.home.careersTitle}`}
            body={messages.home.careersBody}
            href="/careers"
            action={messages.home.viewOpenSeats}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {jobs
              .filter((job) =>
                ["web3-designer", "senior-blockchain-developer", "product-manager-web3"].includes(job.slug),
              )
              .map((job) => {
                const pay = jobComp(job.salary);
                const localized = localizeJob(job, locale);
                return (
                  <Link
                    key={job.slug}
                    href={`/careers/${job.slug}`}
                    className="rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-0.5"
                  >
                    <span className="text-[11px] uppercase tracking-[0.16em] text-gold">
                      {localized.department}
                    </span>
                    <h3 className="mt-5 font-display text-2xl">{localized.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{localized.summary}</p>
                    <p className="mt-4 text-sm text-gold">
                      {pay.fullTime}/yr · {pay.partTime} · {pay.advisory}
                    </p>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading eyebrow={messages.home.faqEyebrow} title={messages.home.faqTitle} />
          <div className="mt-10">
            <FaqList />
          </div>
        </div>
      </section>

      <CtaBand title={messages.home.ctaTitle} action={messages.home.ctaAction} />
      <span className="sr-only">{site.name}</span>
    </>
  );
}
