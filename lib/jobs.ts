import { site } from "./site";

export type Department =
  | "Design"
  | "Engineering"
  | "Security"
  | "Data"
  | "Product"
  | "Growth"
  | "Operations"
  | "Leadership";

export type Level = "Mid" | "Senior" | "Staff" | "Lead" | "Executive";

export const engagementTypes = ["Full-time", "Part-time", "Advisory"] as const;
export type Engagement = (typeof engagementTypes)[number];

export function isEngagement(value: string): value is Engagement {
  return (engagementTypes as readonly string[]).includes(value);
}

export type Job = {
  slug: string;
  title: string;
  department: Department;
  level: Level;
  type: Engagement;
  engagements: Engagement[];
  location: string;
  stack: string;
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  salary: { min: number; max: number };
};

export const equityNote =
  "Figures are USD cash and remote, with a few hours of overlap in US Eastern time. Location can move the number. The offer is from Lotusbyte.";

export const partTimeNote = "15–25 hours a week. Billed hourly.";

export const advisoryNote =
  "Day rate for reviews and working sessions. Typical cadence is 1–4 days a month. A monthly retainer is an option in the offer.";

export const hiringNote =
  "Roles are posted by Lotusbyte as full-time, part-time, or advisory — pick one on the form. We interview, and if we hire you, you join the studio. Clients hire Lotusbyte. You work on their products with our team.";

const FT_HOURS = 2080;

function roundTo(value: number, step: number) {
  return Math.round(value / step) * step;
}

export function formatSalary(min: number, max: number) {
  const usd = (n: number) => `$${Math.round(n / 1000)}k`;
  return `${usd(min)}–${usd(max)}`;
}

export function formatHourly(min: number, max: number) {
  return `$${min}–$${max}/hr`;
}

export function formatDaily(min: number, max: number) {
  const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
  return `${usd(min)}–${usd(max)}/day`;
}

export function partTimeHourly(annual: number) {
  return roundTo((annual / FT_HOURS) * 1.2, 5);
}

export function advisoryDaily(annual: number) {
  return roundTo((annual / FT_HOURS) * 8 * 1.5, 50);
}

export type JobComp = {
  fullTime: string;
  partTime: string;
  advisory: string;
};

export function jobComp(salary: { min: number; max: number }): JobComp {
  return {
    fullTime: formatSalary(salary.min, salary.max),
    partTime: formatHourly(partTimeHourly(salary.min), partTimeHourly(salary.max)),
    advisory: formatDaily(advisoryDaily(salary.min), advisoryDaily(salary.max)),
  };
}

const salaryBySlug: Record<string, { min: number; max: number }> = {
  "product-designer": { min: 95000, max: 125000 },
  "senior-product-designer": { min: 130000, max: 165000 },
  "product-engineer": { min: 120000, max: 155000 },
  "senior-product-engineer": { min: 155000, max: 190000 },
  "backend-engineer": { min: 115000, max: 150000 },
  "senior-backend-engineer": { min: 150000, max: 185000 },
  "product-manager": { min: 110000, max: 145000 },
  "delivery-lead": { min: 125000, max: 160000 },
};

function role(
  slug: string,
  title: string,
  department: Department,
  level: Level,
  stack: string,
  summary: string,
  about: string,
  responsibilities: string[],
  requirements: string[],
  niceToHave: string[],
  engagements: Engagement[] = ["Full-time", "Part-time", "Advisory"],
): Job {
  const salary = salaryBySlug[slug];
  if (!salary) throw new Error(`Missing salary for ${slug}`);
  return {
    slug,
    title,
    department,
    level,
    type: engagements[0] ?? "Full-time",
    engagements,
    location: "Remote",
    stack,
    summary,
    about,
    responsibilities,
    requirements,
    niceToHave,
    salary,
  };
}

const catalog: Job[] = [
  role(
    "product-designer",
    "Product Designer",
    "Design",
    "Mid",
    "Figma · research · UI",
    "Design the software operators use all day — records, queues, and the states in between.",
    "Lotusbyte is a product studio. We design and build custom software for companies that run real work: property, clinics, logistics, and field teams. This seat is product design, not a brand-only role.\n\nYou will spend most weeks in the product: research with the people who do the job, screens they can use, and files engineers can build. First projects are likely Stratafi’s work-order flows and one customer portal. Remote, with a few hours of US Eastern overlap.",
    [
      "Own flows for an assigned client product, from research through the shipped UI.",
      "Design empty, loading, error, and permission states, not only the happy path.",
      "Keep lotusbyte.org and client products visually consistent.",
      "Hand off Figma that an engineer can build without a meeting for every frame.",
      "Sit with operators and write down where they get stuck.",
    ],
    [
      "3+ years designing software people use for work, not only marketing sites.",
      "A portfolio with shipped product UI and a short note on what changed after launch.",
      "Comfortable in Figma and in a working session with engineers.",
      "Clear writing. We decide in documents.",
    ],
    ["Operations or healthcare software", "Design systems", "Light usability testing"],
  ),
  role(
    "senior-product-designer",
    "Senior Product Designer",
    "Design",
    "Senior",
    "Product UI · systems · critique",
    "Set the bar for product UI and review the work before it reaches engineering.",
    "You still design the hard screens. You also review mid-level work and sit in client workshops. Current load is Stratafi and the customer portals. You report to the studio lead. You are not asked to run a large design org.",
    [
      "Lead design on flagship surfaces: admin, records, and reporting.",
      "Run critique and keep a small design system the team can use.",
      "Partner with a product manager on what we will not build.",
      "Join client workshops and translate what you hear into a flow.",
    ],
    [
      "5+ years of product design on tools people use daily.",
      "You have defended a simpler flow to a stakeholder and then shipped it.",
      "Evidence of mentoring or reviewing other designers.",
    ],
    ["B2B operations products", "Content design", "Workshop facilitation"],
  ),
  role(
    "product-engineer",
    "Product Engineer",
    "Engineering",
    "Mid",
    "TypeScript · React · Next.js",
    "Build the interface and the application logic behind the screens we design.",
    "You turn a designed flow into software: forms, tables, permissions, and the awkward middle of a real workflow. You work with one designer and one backend engineer. Code is in GitHub. Reviews are expected while a release is open.\n\nTypical starting work is a Stratafi screen or a customer portal page.",
    [
      "Build responsive product UI in React and Next.js from Figma.",
      "Wire forms, tables, and filters to real data.",
      "Handle loading, empty, and error states.",
      "Write tests for the paths that break when data is missing.",
    ],
    [
      "3+ years shipping web applications in TypeScript.",
      "You have taken a feature from design to production.",
      "You can explain a permission bug without a slide.",
    ],
    ["Postgres", "Design-system implementation", "Accessibility"],
  ),
  role(
    "senior-product-engineer",
    "Senior Product Engineer",
    "Engineering",
    "Senior",
    "TypeScript · architecture · delivery",
    "Own a product slice end to end: interface, API shape, and the release.",
    "You still write the feature. You also split work so a small team ships. You are the engineer we put on a client when the product needs one technical owner who can talk to them without overselling.\n\nYou unblock mid-level engineers and keep the architecture from growing a second dashboard that nobody asked for.",
    [
      "Architect a feature and write the plan before the branch.",
      "Review pull requests the same day when a release is close.",
      "Pair with design on what should be a setting and what should be code.",
      "Stay through launch and the first fixes.",
    ],
    [
      "5+ years shipping production web software.",
      "You have owned a release, not only a ticket.",
      "Comfortable in React, TypeScript, and a relational database.",
    ],
    ["Next.js", "Multi-tenant apps", "Mentoring"],
  ),
  role(
    "backend-engineer",
    "Backend Engineer",
    "Engineering",
    "Mid",
    "Node · Postgres · APIs",
    "Build the records, permissions, and jobs behind the product.",
    "This is an application backend seat. You write the APIs the product calls, the data model, and the jobs that send a reminder or build a report. You are not asked to own the interface.",
    [
      "Design tables and APIs for records, status, and history.",
      "Enforce roles so a customer cannot see another customer’s data.",
      "Add background jobs for email, exports, and reminders.",
      "Write migrations and tests for the paths that must not double-write.",
    ],
    [
      "3+ years on backend services with a relational database.",
      "You have shipped an API that a real client used.",
      "Careful about idempotency and audit trails.",
    ],
    ["Postgres", "TypeScript", "Queue workers"],
  ),
  role(
    "senior-backend-engineer",
    "Senior Backend Engineer",
    "Engineering",
    "Senior",
    "Postgres · APIs · reliability",
    "Own the data model and the services that have to stay correct after launch.",
    "You set patterns, review mid-level backend work, and stay through deploy. Current load includes Stratafi’s records and reporting, plus one portal. You will say no when a shortcut would corrupt a customer’s history.",
    [
      "Own schema design and the migration plan.",
      "Review APIs for auth, pagination, and failure behavior.",
      "Add monitoring for jobs that must not stall.",
      "Write the runbook the team uses on launch week.",
    ],
    [
      "5+ years of backend work on production systems.",
      "You have debugged a data bug in production and written down the fix.",
      "Strong SQL and an eye for permissions.",
    ],
    ["TypeScript or Go", "Reporting pipelines", "On-call habits"],
  ),
  role(
    "product-manager",
    "Product Manager",
    "Product",
    "Mid",
    "Scope · writing · delivery",
    "Turn an operation into a shippable product: scope, sequence, and honest calls.",
    "You sit between the client, design, and engineering. You know which step is the job and which is decoration. You write a spec that includes the empty state. You sequence a first release the team can actually finish.\n\nYou own one product surface at a time, often Stratafi or a portal. Remote, with US Eastern overlap.",
    [
      "Write the problem, the users, and the first release in a short doc.",
      "Sequence work with design and engineering, including what waits.",
      "Run the weekly review with the client.",
      "Keep a backlog that matches what was agreed.",
    ],
    [
      "3+ years as a product manager on software people use for work.",
      "You have shipped a v1 and then cut scope without drama.",
      "Clear writing. We do not manage by slide.",
    ],
    ["B2B tools", "Operations or healthcare", "Workshop facilitation"],
  ),
  role(
    "delivery-lead",
    "Delivery Lead",
    "Operations",
    "Senior",
    "Plans · clients · launch",
    "Keep one or two projects honest: dates, dependencies, and a launch the client can follow.",
    "You are not a people manager. You run the plan. You understand why a preview is not a launch. You keep status the client can forward, and a checklist that matches how we deploy.\n\nLinear or an equivalent is fine. We will not ask you to run process for its own sake.",
    [
      "Own the written plan and the weekly status.",
      "Surface risk early, with a date and an owner.",
      "Run launch checklists with engineering.",
      "Keep scope changes in writing.",
    ],
    [
      "You have delivered software projects with designers and engineers.",
      "You can say a date is wrong before the week it breaks.",
      "Calm with clients. Specific in writing.",
    ],
    ["Studio or agency delivery", "B2B product launches", "Care and support handoff"],
  ),
];

export const jobs: Job[] = catalog;

export const departments: Department[] = [...new Set(jobs.map((job) => job.department))];

export const levels: Level[] = [...new Set(jobs.map((job) => job.level))];

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug);
}

export const careersEmail = `careers@${site.domain.replace("www.", "")}`;
