"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import {
  departments,
  engagementTypes,
  jobComp,
  jobs,
  levels,
  type Engagement,
  type Job,
} from "@/lib/jobs";
import { localizeDepartment, localizeJob, localizeLevel } from "@/lib/i18n/localize-job";

export function JobBoard() {
  const { messages, locale } = useLanguage();
  const t = messages.careers;
  const [department, setDepartment] = useState<string>("All");
  const [level, setLevel] = useState<string>("All");
  const [engagement, setEngagement] = useState<string>("All");

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const deptOk = department === "All" || job.department === department;
      const levelOk = level === "All" || job.level === level;
      const engagementOk =
        engagement === "All" || job.engagements.includes(engagement as Engagement);
      return deptOk && levelOk && engagementOk;
    });
  }, [department, level, engagement]);

  const deptCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const job of jobs) {
      map.set(job.department, (map.get(job.department) ?? 0) + 1);
    }
    return map;
  }, []);

  const levelCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const job of jobs) {
      map.set(job.level, (map.get(job.level) ?? 0) + 1);
    }
    return map;
  }, []);

  const engagementLabel = (name: string) => {
    if (name === "Full-time") return t.fullTime;
    if (name === "Part-time") return t.partTime;
    if (name === "Advisory") return t.advisory;
    return name;
  };

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t.department}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <FilterChip
          label={`${t.all} (${jobs.length})`}
          active={department === "All"}
          onClick={() => setDepartment("All")}
        />
        {departments.map((name) => (
          <FilterChip
            key={name}
            label={`${localizeDepartment(name, locale)} (${deptCounts.get(name) ?? 0})`}
            active={department === name}
            onClick={() => setDepartment(name)}
          />
        ))}
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t.level}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <FilterChip label={t.allLevels} active={level === "All"} onClick={() => setLevel("All")} />
        {levels.map((name) => (
          <FilterChip
            key={name}
            label={`${localizeLevel(name, locale)} (${levelCounts.get(name) ?? 0})`}
            active={level === name}
            onClick={() => setLevel(name)}
          />
        ))}
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        {t.engagementFilter}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <FilterChip
          label={t.allEngagements}
          active={engagement === "All"}
          onClick={() => setEngagement("All")}
        />
        {engagementTypes.map((name) => (
          <FilterChip
            key={name}
            label={engagementLabel(name)}
            active={engagement === name}
            onClick={() => setEngagement(name)}
          />
        ))}
      </div>

      <p className="mt-6 text-sm text-muted">
        {filtered.length} {t.rolesCount}
      </p>

      <div className="mt-4 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card">
        {filtered.length === 0 ? (
          <p className="px-5 py-8 text-sm text-muted">{t.noMatches}</p>
        ) : (
          filtered.map((job) => <JobRow key={job.slug} job={job} />)
        )}
      </div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-sm transition ${
        active
          ? "bg-gold font-semibold text-white"
          : "border border-line text-muted hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
}

function JobRow({ job }: { job: Job }) {
  const { messages, locale } = useLanguage();
  const t = messages.careers;
  const localized = localizeJob(job, locale);
  const comp = jobComp(job.salary);

  const engagementLabel = (name: string) => {
    if (name === "Full-time") return t.fullTime;
    if (name === "Part-time") return t.partTime;
    if (name === "Advisory") return t.advisory;
    return name;
  };

  return (
    <Link
      href={`/careers/${job.slug}`}
      className="flex flex-col gap-3 px-5 py-5 transition hover:bg-raised md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h2 className="font-display text-xl text-ink">{localized.title}</h2>
        <p className="mt-1 text-sm text-muted">{localized.summary}</p>
        <p className="mt-2 text-xs text-muted">
          {t.fullTime} {comp.fullTime}
          {t.perYear} · {t.partTime} {comp.partTime} · {t.advisory} {comp.advisory}
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full border border-line px-2.5 py-1 text-gold">
          {localized.department}
        </span>
        {job.engagements.map((item) => (
          <span key={item} className="rounded-full border border-line px-2.5 py-1 text-muted">
            {engagementLabel(item)}
          </span>
        ))}
        <span className="rounded-full border border-line px-2.5 py-1 text-muted">
          {localized.level}
        </span>
        <span className="text-gold">{t.applyArrow}</span>
      </div>
    </Link>
  );
}
