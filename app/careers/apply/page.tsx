import type { Metadata } from "next";
import { OpenApplyPageContent } from "@/components/pages/OpenApplyPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Open application",
  description: `Apply to ${site.name} even if you do not see a matching role.`,
};

export default function OpenApplyPage() {
  return <OpenApplyPageContent />;
}
