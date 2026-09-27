import type { Job } from "@/lib/jobs";
import {
  advisoryNote,
  equityNote,
  hiringNote,
  partTimeNote,
} from "@/lib/jobs";
import type { Locale } from "./config";
import {
  departmentsZh,
  jobNotesZh,
  jobsBySlugZh,
  levelsZh,
  type JobCopy,
} from "./jobs-zh";

export type LocalizedJob = JobCopy & {
  slug: string;
  stack: string;
  engagements: Job["engagements"];
  salary: Job["salary"];
};

export function localizeDepartment(name: string, locale: Locale) {
  if (locale !== "zh") return name;
  return departmentsZh[name] ?? name;
}

export function localizeLevel(name: string, locale: Locale) {
  if (locale !== "zh") return name;
  return levelsZh[name] ?? name;
}

export function localizeJobNotes(locale: Locale) {
  if (locale !== "zh") {
    return { equityNote, partTimeNote, advisoryNote, hiringNote };
  }
  return jobNotesZh;
}

export function localizeJob(job: Job, locale: Locale): LocalizedJob {
  const zh = locale === "zh" ? jobsBySlugZh[job.slug] : undefined;
  return {
    slug: job.slug,
    stack: job.stack,
    engagements: job.engagements,
    salary: job.salary,
    title: zh?.title ?? job.title,
    department: zh?.department ?? job.department,
    level: zh?.level ?? job.level,
    location: zh?.location ?? job.location,
    summary: zh?.summary ?? job.summary,
    about: zh?.about ?? job.about,
    responsibilities: zh?.responsibilities ?? job.responsibilities,
    requirements: zh?.requirements ?? job.requirements,
    niceToHave: zh?.niceToHave ?? job.niceToHave,
  };
}
