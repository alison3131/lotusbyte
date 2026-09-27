import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkDetailContent } from "@/components/pages/WorkDetailContent";
import { getProject, projects } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return { title: project.name, description: project.blurb };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <WorkDetailContent project={project} />;
}
