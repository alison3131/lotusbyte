import type { Metadata } from "next";
import { CareersPageContent } from "@/components/pages/CareersPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: `Open Web3 jobs at ${site.name}. We hire under our name and match developers to client projects — apply on ${site.domain}.`,
};

export default function CareersPage() {
  return <CareersPageContent />;
}
