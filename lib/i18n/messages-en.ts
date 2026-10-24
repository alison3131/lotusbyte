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
    tagline: "Web3 products for clients. Talent to ship them.",
    location: "Remote · Worldwide",
    description:
      "Lotusbyte is a Web3 development and talent company. We build blockchain products for client companies, and we hire and manage the developers who do that work.",
  },
  footer: {
    ctaTitle: "Need a product built or a team staffed?",
    build: "Build",
    company: "Company",
    legal: "Legal",
  },
  home: {
    eyebrow: "Web3 development and talent",
    titleLead: "Blockchain products for clients.",
    titleAccent: " Built and staffed.",
    body: "Lotusbyte designs, ships, and supports on-chain products for Web3 companies — and hires the developers who do that work. You work through Lotusbyte. The product belongs to the client.",
    startBuild: "Start a build",
    seeCases: "See case studies",
    openRolesArrow: "Open roles →",
    networks: "Networks we build on",
    audiencesEyebrow: "Who we work with",
    audiencesTitle: "Route by your context.",
    audiencesBody:
      "Every path leads to a capability, a case study, or a hiring conversation — not a generic landing.",
    capabilitiesEyebrow: "Capabilities",
    capabilitiesTitle: "The stack a Web3 product actually needs.",
    capabilitiesBody:
      "Contracts, product UI, and infrastructure — staffed as one team through Lotusbyte.",
    allServices: "All services",
    casesEyebrow: "Case studies",
    casesTitle: "Client products we delivered.",
    casesBody:
      "Stratafi and the rest of the bench are client work. We stay responsible for development, completion, and delivery.",
    viewAllWork: "View all work",
    readCase: "Read the case study",
    processEyebrow: "How we work",
    processTitle: "From brief to a staffed, shipped product.",
    processAction: "Full process",
    careersEyebrow: "Careers",
    careersTitle: "seats we can staff now.",
    careersBody:
      "We hire under our name, then match you to client work. After our process you may interview with the client.",
    viewOpenSeats: "View open seats",
    faqEyebrow: "FAQ",
    faqTitle: "Straight answers before a call.",
    ctaTitle: "Tell us what you are building.",
    ctaAction: "Start a build",
    stats: {
      capabilities: "capability areas",
      chains: "chains we ship on",
      cases: "published case studies",
      seats: "open seats on the bench",
    },
  },
  about: {
    eyebrow: "About",
    title: "Engineering and talent behind client chain products.",
    lead:
      "Lotusbyte is a Web3 development and talent company. We build blockchain products for client companies, and we hire and manage the people who do that work.",
    p1: "The model is services plus staffing — not a single in-house product company. Clients come for specialized blockchain products, a development team, or both.",
    p2: "We recruit under our own name. Once hired, developers work through Lotusbyte while they develop, maintain, and support the client’s product. Stratafi is one example: a real estate investment platform we developed and delivered for a client.",
    p3: "You will find us at lotusbyte.org. If you need a product built, a team staffed, or both, that is the conversation we want.",
    howWeWork: "How we work →",
    caseStudies: "Case studies →",
    company: "Company",
    presence: "Presence",
    model: "Model",
    modelValue: "Client products · talent · delivery",
    contact: "Contact",
    principlesEyebrow: "How we decide",
    principlesTitle: "Principles we will not trade.",
    stackEyebrow: "Stack",
    stackTitle: "What we build with.",
    networks: "Networks",
    clientWorkEyebrow: "Client work",
    clientWorkTitle: "Products we developed for other companies.",
    allCaseStudies: "All case studies",
    hiringEyebrow: "Hiring",
    hiringTitle: "How people join client projects.",
    openRoles: "Open roles",
    ctaTitle: "Tell us what you are building.",
    ctaAction: "Contact Lotusbyte",
    imageAlt: "Collaborators in the studio",
  },
  services: {
    eyebrow: "Services",
    title: "Every layer of a Web3 product, plus the team that ships it.",
    lead:
      "Route by capability. Each page has the engineering detail, related case studies, and a way to start. People on the work are hired through Lotusbyte.",
    capabilityDetail: "Capability detail →",
    startThisWork: "Start this work",
    needMixTitle: "Need a mix of all of this?",
    needMixBody:
      "Most client work is a protocol plus a product surface. We hire through Lotusbyte and staff contracts, indexers, and frontend as one team.",
    talkBuild: "Talk about a build",
    allServices: "← All services",
    whatWeShip: "What we ship in this area",
    staffingNote:
      "Developers on this work are hired through Lotusbyte. After our process they may interview with you, then join the project through us.",
    relatedWork: "Related work",
    startBriefPrefix: "Start a",
    imageAlt: "Engineers collaborating",
  },
  work: {
    eyebrow: "Work",
    title: "Client products we delivered.",
    lead:
      "Case studies from Lotusbyte engagements — real estate, DeFi, governance, gaming, bridges, and wallets.",
    readCase: "Read case study →",
    discussSimilar: "Discuss a similar build",
    allCases: "← All case studies",
    theBrief: "The brief",
    whatDelivered: "What Lotusbyte delivered",
    clientNote:
      "This is a client product. Lotusbyte was responsible for development, completion, and delivery. People on the project worked through Lotusbyte.",
    moreWork: "More work",
    similarCta: "Need a similar build?",
    startBrief: "Start a brief",
    capabilityArrow: "capability →",
    imageAlt: "Lotusbyte team at work",
  },
  howWeWork: {
    eyebrow: "How we work",
    title: "The work starts before any contract.",
    lead:
      "Tell us what you are building. An engineer reads it before the call. You get a written plan: scope, who we would staff, and a first step — or a clear no.",
    sendBrief: "Send a brief",
    applyBench: "Apply to the bench",
    engagementEyebrow: "Engagement",
    engagementTitle: "Three ways clients work with us.",
    engagementBody:
      "Build, staff, or both. The product stays the client’s. People on the project work through Lotusbyte.",
    clientsEyebrow: "For clients",
    clientsTitle: "From first message to a staffed bench.",
    candidatesEyebrow: "For candidates",
    candidatesTitle: "Apply to Lotusbyte. Join a client project.",
    candidatesBody:
      "Roles are posted under our name. A client can also introduce someone. After our hiring process you may interview with the client.",
    principlesEyebrow: "Principles",
    principlesTitle: "What we tell you straight.",
    faqEyebrow: "FAQ",
    faqTitle: "Process questions.",
    ctaTitle: "Ready to describe the build?",
    imageAlt: "A project conversation",
  },
  careers: {
    eyebrow: "Careers",
    title: "Seats we are staffing now.",
    lead:
      "These are live openings for client benches — designers, engineers, and a PM we can place this quarter. Each seat is open as full-time, part-time, or advisory. Full-time is an annual cash range. Part-time is hourly for 15–25 hours a week. Advisory is a day rate, usually 1–4 days a month. Remote, with US Eastern overlap. Token or equity only appears if that client has it. Apply here; after our process you may interview with the client.",
    openSeats: "open seats",
    disciplines: "disciplines",
    remote: "Remote",
    allRolesRemote: "all roles",
    allRoles: "← All roles",
    howHiring: "How hiring works",
    howHiringTitle: "Apply to Lotusbyte. Join a client project.",
    differentTitle: "Different specialty?",
    differentBody:
      "We keep the board short on purpose. If you do protocol, data, or another seat we have not listed, send an open application.",
    sendOpen: "Send an open application",
    applyTitle: "Application",
    applyForRole: "Apply for this role",
    openApplyTitle: "Open application",
    openApplyLead:
      "Tell us what you want to build and whether you want full-time, part-time, or advisory. You apply to Lotusbyte; we match qualified people to client projects. Your application is stored privately.",
    openApplyBullets: [
      "You apply to Lotusbyte, or a client can introduce you to us",
      "After our hiring process you may interview with the client",
      "If hired, you work through Lotusbyte on that client’s product",
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
    title: "Tell us what you are building.",
    lead:
      "New protocol, dApp, RWA platform, or a team you need staffed through Lotusbyte. We reply within two business days with scope, whether we can staff it, and a first step.",
    direct: "Direct",
    bullets: [
      "Typical reply within two business days",
      "NDA available before a detailed brief",
      "An engineer reads what you send before we get on a call",
      "We say no if we are not the right team",
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Before you write.",
    send: "Send brief",
    sending: "Sending…",
    successTitle: "Message received",
    successBody: "We will reply from hello@lotusbyte.org within two business days.",
    ctaBody:
      "Tell us the chain, the product, and whether you need a build, a team, or both. We will tell you what it takes to ship it.",
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
      "We saved your details, resume, and the role you applied for. If there is a fit, we will follow up by email — including a client match or next interview when that is the path.",
    another: "Submit another",
    privacyNote:
      "Your application is stored privately. We use it to hire through Lotusbyte and match you to client work.",
  },
  servicesBySlug: {},
  projectsBySlug: {},
  engagements: [
    {
      title: "Build the product",
      body: "A scoped engagement: contracts, indexer, and UI as one delivery. You own the product. We stay through launch.",
      action: "Send a brief",
    },
    {
      title: "Staff the team",
      body: "We hire under the Lotusbyte name and assign people to your project. You may do a final interview. They work through us.",
      action: "See the hiring path",
    },
    {
      title: "Build and staff",
      body: "Most clients need both: a first ship, then a standing bench for maintenance. One partner for delivery and talent.",
      action: "Start that conversation",
    },
  ],
  audiences: [
    { name: "DeFi & protocol teams", blurb: "Contracts, oracles, vaults, and the dApp your users actually finish." },
    { name: "RWA & real estate", blurb: "Issuance, eligibility, distributions, and investor reporting — Stratafi-class delivery." },
    { name: "Studios & consumer apps", blurb: "Mints, wallets, game economies, and drops that hold up under load." },
    { name: "Fintechs & product companies", blurb: "A staffed bench through Lotusbyte when you need chain work inside your product." },
    { name: "L1 / L2 and infra", blurb: "Indexers, RPCs, bridges, and the operator tools support teams can run." },
    { name: "Teams hiring Web3 talent", blurb: "We source, screen, and employ developers who then join your project through us." },
  ],
  processSteps: [
    { title: "Scope the client work", body: "We map the protocol, threat model, and product surface — what lives on-chain, what stays off, and what must ship first." },
    { title: "Staff and build", body: "We hire or assign developers through Lotusbyte, then ship contracts, indexers, and dApp UI as one team." },
    { title: "Deliver and support", body: "Mainnet deploy, monitoring, and ongoing development. The product stays the client’s. The bench stays ours." },
  ],
  hiringSteps: [
    { title: "Apply or get introduced", body: "Roles are posted under the Lotusbyte name. We source candidates, or a client finds someone and sends them to us for the formal process." },
    { title: "Lotusbyte hiring", body: "We screen, interview, and decide if you are a fit for our bench and for the kind of client work we take." },
    { title: "Client interview", body: "After you pass our process, you may complete a final interview with the client company before joining that project." },
    { title: "Join through Lotusbyte", body: "If both sides agree, you work through Lotusbyte — developing, maintaining, and supporting the client’s blockchain product." },
  ],
  values: [
    { title: "Talent plus delivery", body: "We recruit under the Lotusbyte name and stay the employer. Developers work through us while they build and support the client’s product." },
    { title: "Ship the client’s product", body: "Contracts, tests, and product surfaces that go to mainnet. Discovery is short. Delivery is the point." },
    { title: "Security is part of the build", body: "Invariants, fuzzing, access control, and upgrade safety sit in the same sprint as features — not a week after launch." },
    { title: "Multi-chain by default", body: "Ethereum, L2s, Solana, and adjacent ecosystems. We pick the chain for the client’s product, not the other way around." },
  ],
  principles: [
    { title: "Honesty before contract", body: "If you do not need a chain, or we cannot staff the work, the plan says so. We would rather lose a brief than ship a bad one." },
    { title: "Novelty only where it pays", body: "Vaults, tokens, and wallet flows start from patterns that have survived mainnet. New design work goes where your product differs." },
    { title: "Operate what we build", body: "Deploy keys, monitoring, and a handoff your team can run are part of delivery — not a week after launch." },
    { title: "One employer of record", body: "People on your project work through Lotusbyte. That keeps hiring, access, and accountability in one place." },
  ],
  clientProcess: [
    { title: "Send the brief", body: "Chain, product, what exists, and the date you cannot miss. A repo or demo helps. A clear description is enough to start." },
    { title: "Technical read", body: "An engineer reads what you sent before a call. We decide if we can staff it and whether the work belongs on-chain." },
    { title: "Discovery call", body: "We walk through constraints: chain, custody, compliance, runway. You meet the people who would do the work." },
    { title: "Written plan", body: "Scope, phases, who we would staff, and a first step. We say no if we are not the right bench." },
    { title: "Staff and ship", body: "Developers join through Lotusbyte. Contracts, tests, and product surfaces move together until mainnet." },
    { title: "Operate", body: "Monitoring, incident paths, and ongoing development. The product stays yours. The bench stays ours." },
  ],
  faqs: [
    { q: "What kind of company is Lotusbyte?", a: "A Web3 development and talent company. We build blockchain products for client companies, and we hire and manage the developers who do that work. The product belongs to the client. People on the project work through Lotusbyte." },
    { q: "Do you only write code, or do you also staff teams?", a: "Both. Some clients need a scoped build. Some need a standing bench. Most need a first ship and then people who stay. Roles are posted under our name; after our hiring process you may interview with the client." },
    { q: "Is Stratafi your product?", a: "No. Stratafi is a client real estate platform we developed and delivered. It is an example of the work, not a Lotusbyte-owned company." },
    { q: "Which chains do you work on?", a: "Ethereum, Solana, Polygon, Arbitrum, Base, Optimism, BNB Chain, and Avalanche. We pick the chain for the client’s product." },
    { q: "How do I start a project?", a: "Send a brief on the contact page: what you are building, the chain, and what already exists. We reply within two business days with whether we can staff it and a first step. An NDA is available before a detailed read." },
    { q: "How do developers join a client project?", a: "Apply on this site, or a client can introduce you. We screen and interview. You may then do a final interview with the client. If both sides agree, you work through Lotusbyte on that product." },
    { q: "Who owns the code?", a: "The client. Repositories, keys, and documentation transfer with the engagement. Handoff is part of delivery." },
    { q: "Do you take every brief?", a: "No. We refuse work we cannot staff or cannot secure — including unaudited upgrades on a deadline we cannot meet." },
  ],
  stackGroups: {
    Contracts: "Contracts",
    Product: "Product",
    Data: "Data",
    Accounts: "Accounts",
  },
};
