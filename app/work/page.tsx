import type { Metadata } from "next";
import { WorkPageContent } from "@/components/pages/WorkPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected client Web3 products developed and delivered by ${site.name}.`,
};

export default function WorkPage() {
  return <WorkPageContent />;
}
