import type { Metadata } from "next";
import { HowWeWorkPageContent } from "@/components/pages/HowWeWorkPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How we work",
  description: `How ${site.name} scopes client builds, staffs developers, and delivers blockchain products.`,
};

export default function HowWeWorkPage() {
  return <HowWeWorkPageContent />;
}
