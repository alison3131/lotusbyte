import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/ContactPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a software project with ${site.name}.`,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
