import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JobDetailContent } from "@/components/pages/JobDetailContent";
import { getJob, jobs } from "@/lib/jobs";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return { title: "Role" };
  return {
    title: job.title,
    description: `${job.title} at ${site.name} — ${job.summary}`,
  };
}

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();
  return <JobDetailContent job={job} />;
}
