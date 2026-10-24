import type { Metadata } from "next";
import { CareersPageContent } from "@/components/pages/CareersPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: `Open roles at ${site.name}. Join the studio and work on client products — apply on ${site.domain}.`,
};

export default function CareersPage() {
  return <CareersPageContent />;
}
