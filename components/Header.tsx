"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { messages } = useLanguage();
  const isAdmin = pathname.startsWith("/admin");

  const nav = [
    { href: "/services", label: messages.nav.services },
    { href: "/work", label: messages.nav.work },
    { href: "/how-we-work", label: messages.nav.howWeWork },
    { href: "/careers", label: messages.nav.careers },
    { href: "/about", label: messages.nav.about },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 shadow-[inset_0_1px_0_0_rgba(232,184,74,0.28)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5">
        <Link href="/" className="flex items-center gap-2.5 text-gold" onClick={() => setOpen(false)}>
          <Logo className="h-7 w-7" />
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            {site.name}
          </span>
        </Link>

        {isAdmin ? (
          <nav className="flex items-center gap-4">
            <LanguageToggle />
            <Link href="/admin" className="text-sm text-gold">
              {messages.common.applications}
            </Link>
          </nav>
        ) : (
          <nav className="hidden items-center gap-4 lg:flex lg:gap-6">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition ${
                    active ? "text-gold" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <LanguageToggle />
            <Link
              href="/contact"
              className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-[#1a1406] transition hover:bg-gold-soft"
            >
              {messages.common.startProject}
            </Link>
          </nav>
        )}

        {isAdmin ? null : (
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <button
              type="button"
              className="rounded-md border border-line px-3 py-1.5 text-sm text-ink"
              aria-expanded={open}
              aria-label={messages.common.menu}
              onClick={() => setOpen((v) => !v)}
            >
              {messages.common.menu}
            </button>
          </div>
        )}
      </div>

      {open && !isAdmin ? (
        <nav className="border-t border-line bg-raised px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm text-gold"
              onClick={() => setOpen(false)}
            >
              {messages.common.startProject}
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
