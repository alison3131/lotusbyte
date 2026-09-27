"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export function CtaBand({
  title,
  body,
  href = "/contact",
  action,
}: {
  title?: string;
  body?: string;
  href?: string;
  action?: string;
}) {
  const { messages } = useLanguage();

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 text-center">
        <p className="font-display text-4xl md:text-5xl">{title ?? messages.site.tagline}</p>
        <p className="mx-auto mt-4 max-w-md text-muted">{body ?? messages.contact.ctaBody}</p>
        <Link
          href={href}
          className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[#1a1406] transition hover:bg-gold-soft"
        >
          {action ?? messages.common.startProject}
        </Link>
      </div>
    </section>
  );
}
