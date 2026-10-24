import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-28 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">404</p>
      <h1 className="mt-3 font-display text-4xl md:text-6xl">This page is not here.</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        That address does not match a page. Head back and pick a live one.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold-soft"
      >
        Return home
      </Link>
    </div>
  );
}
