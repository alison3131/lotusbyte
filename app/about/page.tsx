import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, a product studio that designs and builds custom software for operating companies.`,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
