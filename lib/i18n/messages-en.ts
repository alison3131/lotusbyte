export type Messages = {
  common: {
    startProject: string;
    openRoles: string;
    contact: string;
    privacy: string;
    terms: string;
    menu: string;
    applications: string;
    language: string;
    rights: string;
    continue: string;
  };
  nav: {
    services: string;
    work: string;
    howWeWork: string;
    careers: string;
    about: string;
  };
  site: {
    tagline: string;
    location: string;
    description: string;
  };
  footer: {
    ctaTitle: string;
    build: string;
    company: string;
    legal: string;
  };
  home: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    startBuild: string;
    seeCases: string;
    openRolesArrow: string;
    networks: string;
    audiencesEyebrow: string;
    audiencesTitle: string;
    audiencesBody: string;
    capabilitiesEyebrow: string;
    capabilitiesTitle: string;
    capabilitiesBody: string;
    allServices: string;
    casesEyebrow: string;
    casesTitle: string;
    casesBody: string;
    viewAllWork: string;
    readCase: string;
    processEyebrow: string;
    processTitle: string;
    processAction: string;
    careersEyebrow: string;
    careersTitle: string;
    careersBody: string;
    viewOpenSeats: string;
    faqEyebrow: string;
    faqTitle: string;
    ctaTitle: string;
    ctaAction: string;
    stats: {
      capabilities: string;
      chains: string;
      cases: string;
      seats: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    p1: string;
    p2: string;
    p3: string;
    howWeWork: string;
    caseStudies: string;
    company: string;
    presence: string;
    model: string;
    modelValue: string;
    contact: string;
    principlesEyebrow: string;
    principlesTitle: string;
    stackEyebrow: string;
    stackTitle: string;
    networks: string;
    clientWorkEyebrow: string;
    clientWorkTitle: string;
    allCaseStudies: string;
    hiringEyebrow: string;
    hiringTitle: string;
    openRoles: string;
    ctaTitle: string;
    ctaAction: string;
    imageAlt: string;
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    capabilityDetail: string;
    startThisWork: string;
    needMixTitle: string;
    needMixBody: string;
    talkBuild: string;
    allServices: string;
    whatWeShip: string;
    staffingNote: string;
    relatedWork: string;
    startBriefPrefix: string;
    imageAlt: string;
  };
  work: {
    eyebrow: string;
    title: string;
    lead: string;
    readCase: string;
    discussSimilar: string;
    allCases: string;
    theBrief: string;
    whatDelivered: string;
    clientNote: string;
    moreWork: string;
    similarCta: string;
    startBrief: string;
    capabilityArrow: string;
    imageAlt: string;
  };
  howWeWork: {
    eyebrow: string;
    title: string;
    lead: string;
    sendBrief: string;
    applyBench: string;
    engagementEyebrow: string;
    engagementTitle: string;
    engagementBody: string;
    clientsEyebrow: string;
    clientsTitle: string;
    candidatesEyebrow: string;
    candidatesTitle: string;
    candidatesBody: string;
    principlesEyebrow: string;
    principlesTitle: string;
    faqEyebrow: string;
    faqTitle: string;
    ctaTitle: string;
    imageAlt: string;
  };
  careers: {
    eyebrow: string;
    title: string;
    lead: string;
    openSeats: string;
    disciplines: string;
    remote: string;
    allRolesRemote: string;
    allRoles: string;
    howHiring: string;
    howHiringTitle: string;
    differentTitle: string;
    differentBody: string;
    sendOpen: string;
    applyTitle: string;
    applyForRole: string;
    openApplyTitle: string;
    openApplyLead: string;
    openApplyBullets: string[];
    compensation: string;
    fullTime: string;
    partTime: string;
    advisory: string;
    perYear: string;
    hrsWeek: string;
    daysMonth: string;
    whatYouDo: string;
    whatYouBring: string;
    niceToHave: string;
    howHiringWorks: string;
    filterName: string;
    department: string;
    level: string;
    all: string;
    allLevels: string;
    engagementFilter: string;
    allEngagements: string;
    noMatches: string;
    viewRole: string;
    rolesCount: string;
    applyArrow: string;
    imageAlt: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    direct: string;
    bullets: string[];
    faqEyebrow: string;
    faqTitle: string;
    send: string;
    sending: string;
    successTitle: string;
    successBody: string;
    ctaBody: string;
    imageAlt: string;
  };
  apply: {
    fullName: string;
    email: string;
    location: string;
    engagement: string;
    engagementHint: string;
    selectOne: string;
    linkedin: string;
    github: string;
    portfolio: string;
    resume: string;
    resumeHint: string;
    resumeDrop: string;
    why: string;
    submit: string;
    submitting: string;
    received: string;
    submitted: string;
    submittedBody: string;
    another: string;
    privacyNote: string;
  };
  servicesBySlug: Record<
    string,
    { name: string; blurb: string; items: string[] }
  >;
  projectsBySlug: Record<
    string,
    { type: string; blurb: string; challenge: string; delivered: string[] }
  >;
  engagements: Array<{ title: string; body: string; action: string }>;
  audiences: Array<{ name: string; blurb: string }>;
  processSteps: Array<{ title: string; body: string }>;
  hiringSteps: Array<{ title: string; body: string }>;
  values: Array<{ title: string; body: string }>;
  principles: Array<{ title: string; body: string }>;
  clientProcess: Array<{ title: string; body: string }>;
  faqs: Array<{ q: string; a: string }>;
  stackGroups: Record<string, string>;
};

export const en: Messages = {
  common: {
    startProject: "Start a project",
    openRoles: "Open roles",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    menu: "Menu",
    applications: "Applications",
    language: "Language",
    rights: "All rights reserved.",
    continue: "Continue →",
  },
  nav: {
    services: "Services",
    work: "Work",
    howWeWork: "How we work",
    careers: "Careers",
    about: "About",
  },
  site: {
    tagline: "Software for companies that run real work.",
    location: "Remote · Worldwide",
    description:
      "Lotusbyte is a product studio. We design and build custom software for property groups, clinics, logistics teams, and other companies that have outgrown spreadsheets.",
  },
  footer: {
    ctaTitle: "Need software your team will actually use?",
    build: "Build",
    company: "Company",
    legal: "Legal",
  },
  home: {
    eyebrow: "Product studio",
    titleLead: "Software your team",
    titleAccent: " actually uses.",
    body: "Lotusbyte designs and builds custom software for companies that run real operations. Property, clinics, logistics, wholesale, and field teams. The product is yours. The studio stays ours.",
    startBuild: "Start a project",
    seeCases: "See the work",
    openRolesArrow: "Open roles →",
    networks: "Industries we know",
    audiencesEyebrow: "Who we work with",
    audiencesTitle: "Start from the operation.",
    audiencesBody:
      "Each path leads to a service, a case study, or a conversation about the work — not a generic pitch.",
    capabilitiesEyebrow: "Services",
    capabilitiesTitle: "The software an operation actually needs.",
    capabilitiesBody:
      "Design, the application, and the records behind it — one studio, from the first screen to launch.",
    allServices: "All services",
    casesEyebrow: "Case studies",
    casesTitle: "Client products we delivered.",
    casesBody:
      "Stratafi and the other studies are client products. We designed them, built them, and stayed through launch.",
    viewAllWork: "View all work",
    readCase: "Read the case study",
    processEyebrow: "How we work",
    processTitle: "From the current process to software people open.",
    processAction: "Full process",
    careersEyebrow: "Careers",
    careersTitle: "open roles.",
    careersBody:
      "You join Lotusbyte. Then you work with our team on a client product. Clients hire the studio, not a contractor placed on their payroll.",
    viewOpenSeats: "View open seats",
    faqEyebrow: "FAQ",
    faqTitle: "Straight answers before a call.",
    ctaTitle: "Tell us what the team does all day.",
    ctaAction: "Start a project",
    stats: {
      capabilities: "services",
      chains: "industries we know",
      cases: "case studies",
      seats: "open roles",
    },
  },
  about: {
    eyebrow: "About",
    title: "A studio for software people use at work.",
    lead:
      "Lotusbyte designs and builds custom software for companies that have outgrown the spreadsheet, the shared inbox, or the tool that no longer fits.",
    p1: "We are a delivery studio. Clients hire us to design and build a product. We do not place contractors inside their company, and we do not sell a platform of our own.",
    p2: "Designers and engineers are employed by Lotusbyte. Stratafi is one example: operations software we built for a residential property group — buildings, work orders, and vendors, not a product we own.",
    p3: "You will find us at lotusbyte.org. If your team needs software for the work they already do, that is the conversation we want.",
    howWeWork: "How we work →",
    caseStudies: "Case studies →",
    company: "Company",
    presence: "Presence",
    model: "Model",
    modelValue: "Design · build · care",
    contact: "Contact",
    principlesEyebrow: "How we decide",
    principlesTitle: "Principles we will not trade.",
    stackEyebrow: "Stack",
    stackTitle: "What we build with.",
    networks: "Industries",
    clientWorkEyebrow: "Client work",
    clientWorkTitle: "Products we designed and built.",
    allCaseStudies: "All case studies",
    hiringEyebrow: "Hiring",
    hiringTitle: "How people join the studio.",
    openRoles: "Open roles",
    ctaTitle: "Tell us what the team does all day.",
    ctaAction: "Contact Lotusbyte",
    imageAlt: "Collaborators in the studio",
  },
  services: {
    eyebrow: "Services",
    title: "Design, build, and the care that follows.",
    lead:
      "Pick a service. Each page has what we ship, related work, and a way to start. The people on the project are Lotusbyte.",
    capabilityDetail: "Capability detail →",
    startThisWork: "Start this work",
    needMixTitle: "Need a mix of all of this?",
    needMixBody:
      "Most products need design, the application, and the records behind it. We staff that as one studio team.",
    talkBuild: "Talk about a build",
    allServices: "← All services",
    whatWeShip: "What we ship in this area",
    staffingNote:
      "The people on this work are employed by Lotusbyte. You hire the studio. They stay on our team.",
    relatedWork: "Related work",
    startBriefPrefix: "Start a",
    imageAlt: "Engineers collaborating",
  },
  work: {
    eyebrow: "Work",
    title: "Client products we delivered.",
    lead:
      "Client products from Lotusbyte — property operations, clinics, freight, field service, publishing, and wholesale.",
    readCase: "Read case study →",
    discussSimilar: "Discuss a similar build",
    allCases: "← All case studies",
    theBrief: "The brief",
    whatDelivered: "What Lotusbyte delivered",
    clientNote:
      "This is a client product. Lotusbyte designed it, built it, and stayed through launch. The client owns the software.",
    moreWork: "More work",
    similarCta: "Need a similar build?",
    startBrief: "Start a brief",
    capabilityArrow: "capability →",
    imageAlt: "Lotusbyte team at work",
  },
  howWeWork: {
    eyebrow: "How we work",
    title: "We learn the work before we propose the software.",
    lead:
      "Tell us what the team does today. Someone who will build it reads that before the call. You get a written plan — or a clear no.",
    sendBrief: "Send a brief",
    applyBench: "See open roles",
    engagementEyebrow: "Engagement",
    engagementTitle: "Three ways to work with the studio.",
    engagementBody:
      "A defined build, a retained team, or care after launch. You own the software. We remain the team that knows it.",
    clientsEyebrow: "For clients",
    clientsTitle: "From the first note to a product in use.",
    candidatesEyebrow: "For candidates",
    candidatesTitle: "Apply to Lotusbyte. Join the studio.",
    candidatesBody:
      "Roles are posted under our name. If we hire you, the offer is from Lotusbyte. You then work on client products with our team.",
    principlesEyebrow: "Principles",
    principlesTitle: "What we tell you straight.",
    faqEyebrow: "FAQ",
    faqTitle: "Process questions.",
    ctaTitle: "Ready to describe the build?",
    imageAlt: "A project conversation",
  },
  careers: {
    eyebrow: "Careers",
    title: "Roles open at the studio.",
    lead:
      "Designers, engineers, a product manager, and a delivery lead. Each role is open as full-time, part-time, or advisory. Full-time is an annual cash range. Part-time is hourly for 15–25 hours a week. Advisory is a day rate, usually 1–4 days a month. Remote, with a few hours of US Eastern overlap. You join Lotusbyte.",
    openSeats: "open seats",
    disciplines: "disciplines",
    remote: "Remote",
    allRolesRemote: "all roles",
    allRoles: "← All roles",
    howHiring: "How hiring works",
    howHiringTitle: "Apply to Lotusbyte. Join the studio.",
    differentTitle: "Different specialty?",
    differentBody:
      "The board is short on purpose. If you design, build, or run product work we have not listed, send an open application.",
    sendOpen: "Send an open application",
    applyTitle: "Application",
    applyForRole: "Apply for this role",
    openApplyTitle: "Open application",
    openApplyLead:
      "Tell us the work you want and whether you want full-time, part-time, or advisory. You apply to Lotusbyte. Your application is stored privately.",
    openApplyBullets: [
      "You apply to Lotusbyte",
      "We interview, and some roles include a short paid exercise",
      "If hired, you join the studio and work on client products with our team",
    ],
    compensation: "Compensation",
    fullTime: "Full-time",
    partTime: "Part-time",
    advisory: "Advisory",
    perYear: "/ year",
    hrsWeek: "· 15–25 hrs / week",
    daysMonth: "· 1–4 days / month",
    whatYouDo: "What you will do",
    whatYouBring: "What you bring",
    niceToHave: "Nice to have",
    howHiringWorks: "How hiring works",
    filterName: "Filter by name",
    department: "Department",
    level: "Level",
    all: "All",
    allLevels: "All levels",
    engagementFilter: "Engagement",
    allEngagements: "All engagements",
    noMatches: "No roles match these filters.",
    viewRole: "View role →",
    rolesCount: "roles",
    applyArrow: "Apply →",
    imageAlt: "Lotusbyte hiring",
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us what the team does all day.",
    lead:
      "A process stuck in spreadsheets, a portal your customers need, or software you want replaced. We reply within two business days with whether we are the right studio and a first step.",
    direct: "Direct",
    bullets: [
      "Typical reply within two business days",
      "NDA available before a detailed brief",
      "Someone who would do the work reads what you send before the call",
      "We say no if we are not the right team",
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Before you write.",
    send: "Send brief",
    sending: "Sending…",
    successTitle: "Message received",
    successBody: "We will reply from hello@lotusbyte.org within two business days.",
    ctaBody:
      "Tell us the work, who does it today, and whether you need a build, a retained team, or care after launch.",
    imageAlt: "A project conversation",
  },
  apply: {
    fullName: "Full name",
    email: "Email",
    location: "Location",
    engagement: "Engagement",
    engagementHint: "PT is 15–25 hrs / week · Advisory is a day rate",
    selectOne: "Select one",
    linkedin: "LinkedIn",
    github: "GitHub / GitLab",
    portfolio: "Portfolio / website",
    resume: "Resume / CV",
    resumeHint: "Required · PDF or Word · up to 3MB",
    resumeDrop: "Drop a PDF or Word file, or browse",
    why: "Why Lotusbyte, and this role?",
    submit: "Submit application",
    submitting: "Submitting…",
    received: "Received",
    submitted: "Application submitted",
    submittedBody:
      "We saved your details, resume, and the role you applied for. If there is a fit, we will follow up by email.",
    another: "Submit another",
    privacyNote:
      "Your application is stored privately. We use it to hire at Lotusbyte.",
  },
  servicesBySlug: {},
  projectsBySlug: {},
  engagements: [
    {
      title: "A defined build",
      body: "A scoped product: discovery, design, and a first release. You own the software. We stay through launch.",
      action: "Send a brief",
    },
    {
      title: "A retained team",
      body: "Designers and engineers on a monthly rhythm after the first release, for the next slice of the product.",
      action: "See how it works",
    },
    {
      title: "Care after launch",
      body: "Fixes, small features, and a person who already knows the system when something breaks.",
      action: "Ask about care",
    },
  ],
  audiences: [
    { name: "Property groups", blurb: "Buildings, owners, work orders, and vendors in one system instead of five inboxes." },
    { name: "Clinics and care", blurb: "Booking, intake, and a front desk that is not retyping the same form." },
    { name: "Logistics operators", blurb: "A portal where customers book and track, and dispatch sees the same record." },
    { name: "Wholesale brands", blurb: "Retailers reorder themselves, with pricing and inventory that match the warehouse." },
    { name: "Field teams", blurb: "Jobs, photos, and sign-off on the phone, so the office is not waiting on a text." },
    { name: "Teams leaving spreadsheets", blurb: "When the master file is the product, it is time for software your staff can share." },
  ],
  processSteps: [
    { title: "Learn the operation", body: "We map who does the work, what they use today, and what must be true on the first release." },
    { title: "Design and build", body: "Design and engineering sit on one team. You see the product weekly, not at the end." },
    { title: "Launch and stay", body: "We train the people who will use it, watch the first weeks, and keep a short list of what to fix." },
  ],
  hiringSteps: [
    { title: "Apply", body: "Send a resume and a short note on this site. Tell us the kind of product work you want." },
    { title: "Conversation and a sample", body: "We talk about work you have shipped. Some roles include a small, paid exercise on a real problem." },
    { title: "An offer from Lotusbyte", body: "If it is a fit, the offer is from us: full-time, part-time, or advisory. You join the studio, not a client’s payroll." },
    { title: "Join a project", body: "You work with our designers and engineers on a client product. The client hires Lotusbyte. You stay on our team." },
  ],
  values: [
    { title: "Start from the work", body: "We sit with the people who do the job before we draw a screen. The product follows their day, not a template." },
    { title: "Ship something usable", body: "A smaller release that staff open on Monday beats a large plan that stays in a deck." },
    { title: "Say it plainly", body: "Scope, dates, and tradeoffs are written down. If we are the wrong studio, we say so before a contract." },
    { title: "Stay after launch", body: "The first month in real use is part of the work. We fix what the team actually hits." },
  ],
  principles: [
    { title: "No work we cannot staff", body: "If the date and the team do not match, the plan says no. We would rather lose a brief than miss a launch." },
    { title: "Fewer tools, used well", body: "We start from a small stack we know. New technology has to earn a place in the product." },
    { title: "The operators are the users", body: "We test with the people who will live in the software, not only with the person who hired us." },
    { title: "You own the result", body: "Code, design files, and accounts transfer with the engagement. Handoff is part of delivery." },
  ],
  clientProcess: [
    { title: "Send the brief", body: "What the team does today, what is breaking, and the date that matters. A screen recording is enough to start." },
    { title: "A read before the call", body: "Someone who will do the work reads what you sent. We only book a call if we can help." },
    { title: "Working session", body: "We walk the current process with the people who use it. You meet the studio, not a sales deck." },
    { title: "A written plan", body: "Scope, phases, who is on it, and a first release. We decline work that is a poor fit." },
    { title: "Build in the open", body: "Weekly product you can click. Decisions stay in writing so the team is not guessing." },
    { title: "Hand off and stay", body: "Training, access, and a short care window. The software is yours. We remain available." },
  ],
  faqs: [
    { q: "What kind of company is Lotusbyte?", a: "A product studio. We design and build custom software for companies that run real operations — property, care, logistics, wholesale, and field work." },
    { q: "Do you only take greenfield products?", a: "No. Many projects replace a spreadsheet, a shared inbox, or a tool the team has outgrown. Some are new products. We say which it is in the plan." },
    { q: "Is Stratafi your product?", a: "No. Stratafi is operations software we designed and built for a residential property group. It is an example of the work, not a Lotusbyte-owned company." },
    { q: "Who is on the team?", a: "Designers and engineers employed by Lotusbyte. You work with the people who will build the product. We do not place contractors inside your company." },
    { q: "How do I start?", a: "Send a brief on the contact page: what the team does, what is painful, and any date you cannot miss. We reply within two business days. An NDA is available before a detailed read." },
    { q: "How do I join Lotusbyte?", a: "Apply on this site. We interview, and some roles include a short paid exercise. Offers come from Lotusbyte. You then work on client products as part of our studio." },
    { q: "Who owns the software?", a: "The client. Repositories, design files, and documentation transfer with the engagement." },
    { q: "Do you take every brief?", a: "No. We decline work outside the kinds of products we ship, and work we cannot staff in the time you need." },
  ],
  stackGroups: {
    Product: "Product",
    Application: "Application",
    Data: "Data",
    Delivery: "Delivery",
  },
};
