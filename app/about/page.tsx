import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, a Web3 development and talent company that builds blockchain products for clients.`,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
