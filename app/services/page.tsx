import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Web3 product development and specialized teams from ${site.name}.`,
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
