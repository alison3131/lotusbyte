export const site = {
  name: "Lotusbyte",
  domain: "lotusbyte.org",
  url: "https://lotusbyte.org",
  email: "hello@lotusbyte.org",
  tagline: "Software for companies that run real work.",
  location: "Remote · Worldwide",
  description:
    "Lotusbyte is a product studio. We design and build custom software for property groups, clinics, logistics teams, and other companies that have outgrown spreadsheets.",
};

export const media = {
  hero: "/media/hero.jpg",
  about: "/media/about.jpg",
  careers: "/media/careers.jpg",
  contact: "/media/contact.jpg",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/careers", label: "Careers" },
  { href: "/about", label: "About" },
];

export const chains = [
  "Property",
  "Clinics",
  "Logistics",
  "Wholesale",
  "Field teams",
  "Professional firms",
];

export const services = [
  {
    slug: "product-design",
    name: "Product design",
    stack: "Research · Figma · prototypes",
    photo: "/media/about.jpg",
    blurb:
      "Interfaces for people who use the product all day: clear flows, honest empty states, and a system your engineers can build from.",
    items: [
      "Research with the people who do the work",
      "Flows, screens, and the states in between",
      "A design system that matches the product",
      "Prototypes you can click before we write code",
    ],
  },
  {
    slug: "web-applications",
    name: "Web applications",
    stack: "TypeScript · Next.js · Postgres",
    photo: "/media/hero.jpg",
    blurb:
      "Custom web software for a job your team already has — scheduling, records, approvals — built to be used on Monday morning.",
    items: [
      "Accounts, roles, and permissions",
      "Forms, queues, and review steps",
      "Search, filters, and audit history",
      "A release your staff can learn in a sitting",
    ],
  },
  {
    slug: "customer-portals",
    name: "Customer portals",
    stack: "Self-service · accounts · status",
    photo: "/media/northline.jpg",
    blurb:
      "A place for your customers to see status, upload documents, and ask for help without calling the front desk.",
    items: [
      "Sign-in, invites, and account recovery",
      "Orders, bookings, or cases they can follow",
      "Document upload and message threads",
      "Notifications that say what changed",
    ],
  },
  {
    slug: "operations",
    name: "Operations software",
    stack: "Workflows · vendors · records",
    photo: "/media/stratafi.jpg",
    blurb:
      "The internal system that replaces the shared inbox and the master spreadsheet: work orders, vendors, and a record of what happened.",
    items: [
      "Work orders, assignments, and due dates",
      "Vendor and customer records in one place",
      "Approvals with a name and a timestamp",
      "Exports your finance team can reconcile",
    ],
  },
  {
    slug: "data-reporting",
    name: "Data and reporting",
    stack: "Dashboards · exports · alerts",
    photo: "/media/paperlane.jpg",
    blurb:
      "Numbers your operators trust: a few dashboards, scheduled exports, and an alert when something is late.",
    items: [
      "Dashboards tied to the live product",
      "Scheduled reports for managers",
      "Exports that match the source of truth",
      "Alerts when a queue or deadline slips",
    ],
  },
  {
    slug: "sites",
    name: "Sites and brand",
    stack: "Marketing · content · identity",
    photo: "/media/careers.jpg",
    blurb:
      "A public site that explains the company in plain language, and a visual system that still looks like you inside the product.",
    items: [
      "Site structure, writing, and page design",
      "A mark, type, and color that travel",
      "Case studies and a careers path",
      "A handoff your team can edit",
    ],
  },
];

export const projects = [
  {
    slug: "stratafi",
    name: "Stratafi",
    type: "Property operations",
    tags: ["Property", "Operations", "Portals"],
    chain: "Residential groups",
    service: "operations",
    photo: "/media/stratafi.jpg",
    blurb:
      "Operations software for a residential property group: buildings, owners, work orders, and vendor invoices in one product.",
    challenge:
      "Staff tracked buildings in a spreadsheet, vendors in email, and owner questions in a shared inbox. Nothing agreed on what was open.",
    delivered: [
      "Building, unit, and owner records",
      "Work orders with assignment and history",
      "A vendor portal for invoices and status",
      "A weekly report managers actually open",
    ],
    stack: ["Next.js", "TypeScript", "Postgres"],
  },
  {
    slug: "northline",
    name: "Northline",
    type: "Logistics portal",
    tags: ["Logistics", "Portal", "Tracking"],
    chain: "Freight",
    service: "customer-portals",
    photo: "/media/northline.jpg",
    blurb:
      "A customer portal for a regional freight company so shippers can book, track, and download documents without a phone call.",
    challenge:
      "Customers called for every status update. Dispatch copied the same fields into three tools.",
    delivered: [
      "Booking and document upload",
      "Live shipment status for the customer",
      "A dispatch queue that matches the portal",
      "Proof-of-delivery files in the account",
    ],
    stack: ["Next.js", "TypeScript", "Postgres"],
  },
  {
    slug: "marlow",
    name: "Marlow",
    type: "Clinic software",
    tags: ["Clinics", "Scheduling", "Intake"],
    chain: "Outpatient care",
    service: "web-applications",
    photo: "/media/marlow.jpg",
    blurb:
      "Scheduling and intake for a small clinic group: appointments, forms, and a front-desk view that stays in sync.",
    challenge:
      "Patients booked by phone. Forms lived on paper. The front desk retyped the same details into the chart.",
    delivered: [
      "Online booking with real availability",
      "Intake forms sent before the visit",
      "A day view for the front desk",
      "Reminders that cut no-shows",
    ],
    stack: ["Next.js", "TypeScript", "Postgres"],
  },
  {
    slug: "fieldnote",
    name: "Fieldnote",
    type: "Field service",
    tags: ["Field teams", "Mobile", "Jobs"],
    chain: "Facilities",
    service: "operations",
    photo: "/media/fieldnote.jpg",
    blurb:
      "A job app for a facilities company: technicians see the day’s work, capture photos, and close the ticket on site.",
    challenge:
      "Jobs were printed in the morning. Photos came back by text. Invoicing waited on someone to retype the notes.",
    delivered: [
      "A daily job list on the phone",
      "Photo, note, and signature capture",
      "Office review before an invoice",
      "A history on the customer record",
    ],
    stack: ["React", "TypeScript", "Postgres"],
  },
  {
    slug: "paperlane",
    name: "Paperlane",
    type: "Editorial workflow",
    tags: ["Publishing", "Workflow", "Reporting"],
    chain: "Media",
    service: "data-reporting",
    photo: "/media/paperlane.jpg",
    blurb:
      "A production desk for an independent publisher: assignments, drafts, and a calendar the editors can trust.",
    challenge:
      "Assignments lived in chat. Deadlines slipped because nobody shared one calendar.",
    delivered: [
      "Assignment and draft status",
      "A shared production calendar",
      "Review comments in the piece",
      "A weekly load report for editors",
    ],
    stack: ["Next.js", "TypeScript", "Postgres"],
  },
  {
    slug: "keel",
    name: "Keel",
    type: "Wholesale ordering",
    tags: ["Wholesale", "Orders", "Accounts"],
    chain: "Housewares",
    service: "customer-portals",
    photo: "/media/keel.jpg",
    blurb:
      "An ordering portal for a housewares brand so retailers can reorder, see inventory, and check invoices themselves.",
    challenge:
      "Buyers emailed spreadsheets. Sales rekeyed orders. Inventory on the site never matched the warehouse.",
    delivered: [
      "Account pricing and a catalog",
      "Reorder from past invoices",
      "Inventory that matches the warehouse",
      "Order status the buyer can see",
    ],
    stack: ["Next.js", "TypeScript", "Postgres"],
  },
];

export const values = [
  {
    title: "Start from the work",
    body: "We sit with the people who do the job before we draw a screen. The product follows their day, not a template.",
  },
  {
    title: "Ship something usable",
    body: "A smaller release that staff open on Monday beats a large plan that stays in a deck.",
  },
  {
    title: "Say it plainly",
    body: "Scope, dates, and tradeoffs are written down. If we are the wrong studio, we say so before a contract.",
  },
  {
    title: "Stay after launch",
    body: "The first month in real use is part of the work. We fix what the team actually hits.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Learn the operation",
    body: "We map who does the work, what they use today, and what must be true on the first release.",
  },
  {
    n: "02",
    title: "Design and build",
    body: "Design and engineering sit on one team. You see the product weekly, not at the end.",
  },
  {
    n: "03",
    title: "Launch and stay",
    body: "We train the people who will use it, watch the first weeks, and keep a short list of what to fix.",
  },
];

export const hiringSteps = [
  {
    n: "01",
    title: "Apply",
    body: "Send a resume and a short note on this site. Tell us the kind of product work you want.",
  },
  {
    n: "02",
    title: "Conversation and a sample",
    body: "We talk about work you have shipped. Some roles include a small, paid exercise on a real problem.",
  },
  {
    n: "03",
    title: "An offer from Lotusbyte",
    body: "If it is a fit, the offer is from us: full-time, part-time, or advisory. You join the studio, not a client’s payroll.",
  },
  {
    n: "04",
    title: "Join a project",
    body: "You work with our designers and engineers on a client product. The client hires Lotusbyte. You stay on our team.",
  },
];

export const audiences = [
  {
    slug: "property",
    name: "Property groups",
    blurb: "Buildings, owners, work orders, and vendors in one system instead of five inboxes.",
    href: "/work/stratafi",
  },
  {
    slug: "clinics",
    name: "Clinics and care",
    blurb: "Booking, intake, and a front desk that is not retyping the same form.",
    href: "/work/marlow",
  },
  {
    slug: "logistics",
    name: "Logistics operators",
    blurb: "A portal where customers book and track, and dispatch sees the same record.",
    href: "/work/northline",
  },
  {
    slug: "wholesale",
    name: "Wholesale brands",
    blurb: "Retailers reorder themselves, with pricing and inventory that match the warehouse.",
    href: "/work/keel",
  },
  {
    slug: "field",
    name: "Field teams",
    blurb: "Jobs, photos, and sign-off on the phone, so the office is not waiting on a text.",
    href: "/work/fieldnote",
  },
  {
    slug: "firms",
    name: "Teams leaving spreadsheets",
    blurb: "When the master file is the product, it is time for software your staff can share.",
    href: "/contact",
  },
];

export const engagements = [
  {
    slug: "build",
    n: "01",
    title: "A defined build",
    body: "A scoped product: discovery, design, and a first release. You own the software. We stay through launch.",
    href: "/contact",
    action: "Send a brief",
  },
  {
    slug: "retainer",
    n: "02",
    title: "A retained team",
    body: "Designers and engineers on a monthly rhythm after the first release, for the next slice of the product.",
    href: "/how-we-work",
    action: "See how it works",
  },
  {
    slug: "care",
    n: "03",
    title: "Care after launch",
    body: "Fixes, small features, and a person who already knows the system when something breaks.",
    href: "/contact",
    action: "Ask about care",
  },
];

export const clientProcess = [
  {
    n: "01",
    title: "Send the brief",
    body: "What the team does today, what is breaking, and the date that matters. A screen recording is enough to start.",
  },
  {
    n: "02",
    title: "A read before the call",
    body: "Someone who will do the work reads what you sent. We only book a call if we can help.",
  },
  {
    n: "03",
    title: "Working session",
    body: "We walk the current process with the people who use it. You meet the studio, not a sales deck.",
  },
  {
    n: "04",
    title: "A written plan",
    body: "Scope, phases, who is on it, and a first release. We decline work that is a poor fit.",
  },
  {
    n: "05",
    title: "Build in the open",
    body: "Weekly product you can click. Decisions stay in writing so the team is not guessing.",
  },
  {
    n: "06",
    title: "Hand off and stay",
    body: "Training, access, and a short care window. The software is yours. We remain available.",
  },
];

export const principles = [
  {
    title: "No work we cannot staff",
    body: "If the date and the team do not match, the plan says no. We would rather lose a brief than miss a launch.",
  },
  {
    title: "Fewer tools, used well",
    body: "We start from a small stack we know. New technology has to earn a place in the product.",
  },
  {
    title: "The operators are the users",
    body: "We test with the people who will live in the software, not only with the person who hired us.",
  },
  {
    title: "You own the result",
    body: "Code, design files, and accounts transfer with the engagement. Handoff is part of delivery.",
  },
];

export const stack = [
  { group: "Product", items: ["Figma", "Prototypes", "Design systems", "Content"] },
  { group: "Application", items: ["TypeScript", "Next.js", "React", "Node"] },
  { group: "Data", items: ["Postgres", "Reports", "Exports", "Background jobs"] },
  { group: "Delivery", items: ["GitHub", "Preview deploys", "Monitoring", "Care windows"] },
];

export const faqs = [
  {
    q: "What kind of company is Lotusbyte?",
    a: "A product studio. We design and build custom software for companies that run real operations — property, care, logistics, wholesale, and field work.",
  },
  {
    q: "Do you only take greenfield products?",
    a: "No. Many projects replace a spreadsheet, a shared inbox, or a tool the team has outgrown. Some are new products. We say which it is in the plan.",
  },
  {
    q: "Is Stratafi your product?",
    a: "No. Stratafi is operations software we designed and built for a residential property group. It is an example of the work, not a Lotusbyte-owned company.",
  },
  {
    q: "Who is on the team?",
    a: "Designers and engineers employed by Lotusbyte. You work with the people who will build the product. We do not place contractors inside your company.",
  },
  {
    q: "How do I start?",
    a: "Send a brief on the contact page: what the team does, what is painful, and any date you cannot miss. We reply within two business days. An NDA is available before a detailed read.",
  },
  {
    q: "How do I join Lotusbyte?",
    a: "Apply on this site. We interview, and some roles include a short paid exercise. Offers come from Lotusbyte. You then work on client products as part of our studio.",
  },
  {
    q: "Who owns the software?",
    a: "The client. Repositories, design files, and documentation transfer with the engagement.",
  },
  {
    q: "Do you take every brief?",
    a: "No. We decline work outside the kinds of products we ship, and work we cannot staff in the time you need.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
