"use client";

import { BrandHero } from "@/components/BrandHero";
import { ContactForm } from "@/components/ContactForm";
import { FaqList } from "@/components/FaqList";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { clientProcess, media, site } from "@/lib/site";

export function ContactPageContent() {
  const { messages, locale } = useLanguage();
  const t = messages.contact;

  return (
    <>
      <BrandHero eyebrow={t.eyebrow} title={t.title} image={media.contact} imageAlt={t.imageAlt}>
        <p className="mt-5 max-w-xl text-muted">{t.lead}</p>
      </BrandHero>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{t.direct}</p>
          <a href={`mailto:${site.email}`} className="mt-3 block font-display text-2xl text-gold md:text-3xl">
            {site.email}
          </a>
          <p className="mt-6 text-sm leading-6 text-muted">{messages.site.location}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{site.domain}</p>
          <ul className="mt-10 space-y-4 text-sm leading-6 text-muted">
            {t.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-10 space-y-5 border-t border-line pt-8">
            {clientProcess.slice(0, 4).map((step, index) => {
              const localized = messages.clientProcess[index];
              return (
                <div key={step.n}>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-gold">{step.n}</p>
                  <p className="mt-1 font-display text-xl">
                    {locale === "zh" && localized ? localized.title : step.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {locale === "zh" && localized ? localized.body : step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <ContactForm />
      </div>

      <section className="border-t border-line bg-raised">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading eyebrow={t.faqEyebrow} title={t.faqTitle} />
          <div className="mt-10">
            <FaqList />
          </div>
        </div>
      </section>
    </>
  );
}
