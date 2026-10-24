import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Product design, web applications, portals, and operations software from ${site.name}.`,
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
