"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { Logo } from "./Logo";
import { services, site } from "@/lib/site";

export function Footer() {
  const pathname = usePathname();
  const { messages, locale } = useLanguage();
  if (pathname.startsWith("/admin")) return null;

  const nav = [
    { href: "/services", label: messages.nav.services },
    { href: "/work", label: messages.nav.work },
    { href: "/how-we-work", label: messages.nav.howWeWork },
    { href: "/careers", label: messages.nav.careers },
    { href: "/about", label: messages.nav.about },
  ];

  return (
    <footer className="border-t border-line bg-raised">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl md:text-3xl">{messages.footer.ctaTitle}</p>
          <p className="mt-2 text-sm text-muted">
            {messages.site.location} · {site.email}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold-soft"
          >
            {messages.common.startProject}
          </Link>
          <Link
            href="/careers"
            className="rounded-full border border-line px-6 py-3 text-sm text-ink hover:border-gold/40"
          >
            {messages.common.openRoles}
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 text-gold">
              <Logo className="h-7 w-7" />
              <span className="font-display text-lg font-semibold text-ink">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">{messages.site.description}</p>
            <p className="mt-4 text-sm text-gold">{site.domain}</p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              {messages.footer.build}
            </p>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 6).map((service) => {
                const localized = messages.servicesBySlug[service.slug];
                return (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-sm text-ink/90 hover:text-gold">
                      {locale === "zh" && localized ? localized.name : service.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              {messages.footer.company}
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink/90 hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-sm text-ink/90 hover:text-gold">
                  {messages.common.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              {messages.footer.legal}
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-ink/90 hover:text-gold">
                  {messages.common.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-ink/90 hover:text-gold">
                  {messages.common.terms}
                </Link>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-sm text-ink/90 hover:text-gold">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line">
          <p className="mx-auto max-w-7xl px-5 py-5 text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. {messages.site.location}.{" "}
            {messages.common.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
