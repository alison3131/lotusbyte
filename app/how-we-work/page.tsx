import type { Metadata } from "next";
import { HowWeWorkPageContent } from "@/components/pages/HowWeWorkPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How we work",
  description: `How ${site.name} learns an operation, designs the software, and stays through launch.`,
};

export default function HowWeWorkPage() {
  return <HowWeWorkPageContent />;
}
