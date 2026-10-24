import Image from "next/image";

const visuals: Record<string, { photo: string; alt: string; kicker: string; title: string }> = {
  "product-design": {
    photo: "/media/about.jpg",
    alt: "A product design review",
    kicker: "Research · Figma",
    title: "Flows people can finish",
  },
  "web-applications": {
    photo: "/media/hero.jpg",
    alt: "A custom web application in use",
    kicker: "TypeScript · Next.js",
    title: "The app the team opens",
  },
  "customer-portals": {
    photo: "/media/northline.jpg",
    alt: "A customer checking status",
    kicker: "Accounts · status",
    title: "Self-service instead of a call",
  },
  operations: {
    photo: "/media/stratafi.jpg",
    alt: "An operations desk",
    kicker: "Work orders · records",
    title: "One system for the day",
  },
  "data-reporting": {
    photo: "/media/paperlane.jpg",
    alt: "A reporting view",
    kicker: "Dashboards · exports",
    title: "Numbers the team trusts",
  },
  sites: {
    photo: "/media/careers.jpg",
    alt: "A company site",
    kicker: "Writing · identity",
    title: "A public face that matches the product",
  },
};

export function ServiceVisual({ slug, className = "aspect-[16/10]" }: { slug: string; className?: string }) {
  const visual = visuals[slug] ?? visuals["product-design"];

  return (
    <div className={`relative min-w-0 overflow-hidden bg-raised ${className}`}>
      <Image src={visual.photo} alt={visual.alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/45 to-bg/10" />
      <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
        <div className="rounded-xl border border-line bg-card/90 p-3 backdrop-blur-md sm:p-4">
          <p className="text-[10px] uppercase tracking-[0.16em] text-gold">{visual.kicker}</p>
          <p className="mt-2 font-display text-lg text-ink">{visual.title}</p>
        </div>
      </div>
    </div>
  );
}
