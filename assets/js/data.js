/* ==========================================================================
   DATA — All portfolio content lives here.
   Edit this file to update the site without touching markup or logic.
   ========================================================================== */

const DK = window.DK || (window.DK = {});

DK.profile = {
  name: "Devanand K",
  title: "Banking Technologist · Enterprise Integration · Cloud-native Architect · AI Explorer",
  class: "Enterprise Architect",
  level: 13, // years of experience
  location: "Navi Mumbai, India",
  email: "devanand1234@gmail.com",
  linkedin: "https://www.linkedin.com/in/devanandkmenon",
  github: "https://github.com/devanandk",
  summary:
    "Passionate technologist with 13+ years of experience crafting enterprise solutions that make a difference. " +
    "My journey has taken me from coding full-stack applications to architecting cloud-native systems that power " +
    "international banking operations for India's largest bank.",
  traits: [
    { icon: "⚔️", name: "Team Leadership", desc: "Leading talented engineering teams to turn ambitious goals into reality" },
    { icon: "🧭", name: "Solution Design", desc: "Transforming intricate business needs into elegant technical solutions" },
    { icon: "🌍", name: "Global Collaboration", desc: "Building bridges between teams and stakeholders across 20+ countries" },
    { icon: "⚡", name: "Automation Instinct", desc: "Finding innovative ways to automate and optimize processes" },
  ],
  languages: [
    { name: "Malayalam", level: "Native", pct: 100 },
    { name: "English", level: "Full Professional", pct: 95 },
    { name: "Hindi", level: "Full Professional", pct: 90 },
    { name: "Tamil", level: "Limited Working", pct: 55 },
    { name: "Sanskrit", level: "Elementary", pct: 30 },
  ],
  certifications: [
    "Oracle Certified Professional, Java SE6 Programmer (OCJP)",
    "Introduction to Blockchain for Financial Services",
    "Pair Programming with a Large Language Model",
    "Introduction to Generative AI",
    "Foundations: Data, Data, Everywhere",
  ],
  hobbies: [
    { icon: "📚", name: "Sci-Fi & Fantasy", desc: "Avid reader — usually lost in a Kindle or an audiobook" },
    { icon: "✈️", name: "Virtual Aviation", desc: "Flying the Airbus A320 in Microsoft Flight Simulator" },
    { icon: "🤖", name: "AI Tinkering", desc: "RAG pipelines in n8n, local LLMs with Ollama, prompt engineering" },
    { icon: "🎓", name: "Continuous Learning", desc: "Regularly challenging myself with new tech and certifications" },
  ],
  education: [
    { school: "Anna University, Chennai", degree: "B.E. Computer Science and Engineering", years: "2008 – 2012" },
  ],
};

DK.stats = [
  { value: 13, suffix: "+", label: "Years in Enterprise Tech" },
  { value: 20, suffix: "+", label: "Countries Served" },
  { value: 120, suffix: "+", label: "Banking Servers Orchestrated" },
  { value: 700, suffix: "+", label: "Reports Generated Daily" },
];

/* Skill tree — six branches. `lvl` is out of 100. */
DK.skills = [
  {
    id: "enterprise",
    icon: "🏗️",
    name: "Enterprise Development",
    blurb: "The core class. Building robust, scalable backend systems for over a decade.",
    items: [
      { name: "Java", lvl: 95, note: "13+ yrs — OCJP certified, primary weapon" },
      { name: "Spring Boot", lvl: 90, note: "Microservices powering global banking ops" },
      { name: "REST APIs", lvl: 90, note: "Designing & integrating service ecosystems" },
      { name: "React / Next.js", lvl: 72, note: "Modern frontends for enterprise portals" },
    ],
  },
  {
    id: "data",
    icon: "🗄️",
    name: "Data & Integration",
    blurb: "Moving and transforming data across systems, formats and borders.",
    items: [
      { name: "Oracle 19c · SQL/PL-SQL", lvl: 90, note: "Core banking scale data engineering" },
      { name: "Enterprise Service Bus", lvl: 85, note: "UltraESB, JMS queuing, proxy services" },
      { name: "Oracle GoldenGate", lvl: 78, note: "Real-time replication for reporting" },
      { name: "EDI · cXML", lvl: 76, note: "ANSI X12, Ariba Network integrations" },
    ],
  },
  {
    id: "cloud",
    icon: "☁️",
    name: "Cloud & Infrastructure",
    blurb: "Cloud-native architecture on private banking clouds.",
    items: [
      { name: "Kubernetes", lvl: 85, note: "Cloud-native LLMS on private K8s clusters" },
      { name: "Podman / Docker", lvl: 85, note: "Containerizing enterprise workloads" },
      { name: "IT Infra & DC Ops", lvl: 80, note: "Security audits, BCP, VA/PT closure" },
    ],
  },
  {
    id: "analytics",
    icon: "📊",
    name: "Analytics & Reporting",
    blurb: "Turning complex data into actionable insight — at 700+ reports a day.",
    items: [
      { name: "Jasper Reports", lvl: 95, note: "In-house engine that supersedes Finacle reporting" },
      { name: "Apache Airflow", lvl: 78, note: "ETL automation workflows" },
      { name: "Apache Superset", lvl: 74, note: "Self-service dashboards & BI" },
    ],
  },
  {
    id: "banking",
    icon: "🏦",
    name: "Banking Systems",
    blurb: "Domain mastery earned across 20+ regulatory environments.",
    items: [
      { name: "Finacle Core Banking", lvl: 90, note: "9+ yrs on SBI's international network" },
      { name: "SWIFT Payments", lvl: 84, note: "Cross-border payment infrastructure" },
      { name: "AML / CFT Compliance", lvl: 80, note: "Regulatory systems across countries" },
      { name: "Trade Finance", lvl: 75, note: "International trade solutions" },
    ],
  },
  {
    id: "ai",
    icon: "🤖",
    name: "AI & Automation",
    blurb: "The newest skill branch — actively levelling up.",
    items: [
      { name: "Anthropic Claude / Claude Code", lvl: 85, note: "Subagents, agentic workflows" },
      { name: "Local LLMs (Ollama)", lvl: 80, note: "Llama, Phi, Qwen — hands-on exploration" },
      { name: "RAG Pipelines (n8n)", lvl: 76, note: "Retrieval-augmented generation experiments" },
      { name: "Prompt Engineering", lvl: 80, note: "Certified pair-programmer with LLMs" },
    ],
  },
];

/* Quest log — career history, newest first. */
DK.quests = [
  {
    id: "sbi-dm",
    status: "active",
    period: "Apr 2024 – Present",
    title: "Deputy Manager (Systems)",
    org: "State Bank of India · Global IT Centre, Navi Mumbai",
    xp: 400,
    summary:
      "Leading enterprise-scale technical initiatives for SBI's international operations, including the bank's fully in-house Loan Lifecycle Management System (LLMS) for Foreign Offices.",
    log: [
      "Architecting a cloud-native LLMS deployed on Kubernetes clusters within SBI's private cloud",
      "Designed an in-house report generation engine that supersedes Finacle's reporting — multi-format output (PDF, Excel, Word, HTML, CSV) with AES-256 encryption",
      "Deployed a Java-based aggregation agent across 100+ core banking servers for centralized report distribution",
      "Orchestrating annual closing exercises for core banking systems across multiple countries",
      "Overseeing regulatory compliance: VA/PT closure, business continuity, security audits",
    ],
    loot: ["Java", "Spring Boot", "Kubernetes", "Oracle 19c", "Airflow", "Superset"],
  },
  {
    id: "sbi-am",
    status: "complete",
    period: "Aug 2016 – Apr 2024",
    title: "Assistant Manager (Systems)",
    org: "State Bank of India · Global IT Centre, Navi Mumbai",
    xp: 350,
    summary:
      "Lead Java Developer for software projects deployed across SBI's international network spanning 20+ countries.",
    log: [
      "Spearheaded development initiatives with 7+ IT service provider teams",
      "Managed IT deliverables for stakeholders across 15+ countries",
      "Delivered solutions for Core Banking (Finacle), Trade Finance, SWIFT payments, AML/CFT and mobile/internet banking",
      "Drove technology across diverse regulatory environments and operational frameworks",
    ],
    loot: ["Finacle", "SWIFT", "Oracle", "Jasper Reports", "REST APIs"],
  },
  {
    id: "zafin",
    status: "complete",
    period: "May 2015 – Jul 2016",
    title: "Software Engineer",
    org: "Zafin · Technopark, Thiruvananthapuram",
    xp: 150,
    summary:
      "Implemented MiRevenue, a Product & Pricing Lifecycle Management platform, for Barclays Bank UK.",
    log: [
      "Engineered backend services for data ingestion and transformation",
      "Built complex financial reporting — customer statements, financial statements — with Jasper Reports",
      "Collaborated with Barclays and Capgemini teams to translate business needs into solutions",
    ],
    loot: ["Java", "Spring", "Jasper Reports", "Banking PPLM"],
  },
  {
    id: "faes",
    status: "complete",
    period: "Aug 2013 – Apr 2015",
    title: "Software Engineer",
    org: "Faes Packaging Solutions · Technopark, Trivandrum",
    xp: 120,
    summary:
      "Built e-commerce, EDI integration and enterprise web solutions for clients including Amazon, Philips, ASML and Ariba.",
    log: [
      "Optimized the Amazon–SKB Europe EDI connection with ANSI X12 validation for automated order processing",
      "Delivered ASML e-Invoicing via Ariba Supplier Network (cXML 1.2.024) — zero production issues since deployment",
      "Engineered the StackAssist backend suite: RESTful APIs, JMS queuing, multi-format pipelines on UltraESB",
      "Built an SCM Vendor Rating Portal with secure ERP integration and dashboards",
    ],
    loot: ["Java", "UltraESB", "EDI", "cXML", "JMS", "jQuery"],
  },
  {
    id: "lxi",
    status: "complete",
    period: "Nov 2012 – Jul 2013",
    title: "Software Engineer Trainee",
    org: "LXI Technologies · Palakkad, Kerala",
    xp: 80,
    summary:
      "The tutorial level — launched the software engineering career and earned the OCJP certification independently.",
    log: [
      "Developed full-stack web apps with Java Spring/Hibernate and jQuery/PHP",
      "Built responsive interfaces with HTML, CSS, JavaScript and WordPress",
      "Designed MySQL database solutions for web applications",
    ],
    loot: ["Java SE (OCJP)", "Spring", "Hibernate", "MySQL"],
  },
];

/* Side quests — projects. rarity: legendary | epic | rare | common */
DK.projects = [
  {
    id: "llms",
    rarity: "legendary",
    name: "Loan Lifecycle Management System (LLMS)",
    org: "State Bank of India",
    status: "Active",
    desc: "The bank's fully in-house, cloud-native loan platform for Foreign Offices — comprehensive loan processing aligned with international banking standards.",
    points: [
      "Designed and developed the core financial calculations engine",
      "Secure document management with AES-256 encryption",
      "Deployed on Kubernetes within SBI's private cloud",
      "Regulatory compliance across multiple countries",
    ],
    tags: ["Java", "Spring Boot", "Kubernetes", "Oracle", "Security"],
  },
  {
    id: "rge",
    rarity: "epic",
    name: "Report Generation Engine",
    org: "State Bank of India",
    status: "Active",
    desc: "An in-house engine that supersedes Finacle's reporting capabilities, transforming how critical reports reach SBI Foreign Offices.",
    points: [
      "700+ reports generated and distributed daily",
      "Real-time data replication with Oracle GoldenGate",
      "Multi-format output: PDF, Excel, Word, HTML, CSV",
      "AES-256 encryption and password protection",
    ],
    tags: ["Jasper Reports", "GoldenGate", "PL/SQL", "Security"],
  },
  {
    id: "redis",
    rarity: "epic",
    name: "Report Distribution System (ReDiS)",
    org: "State Bank of India",
    status: "Active",
    desc: "Secure, centralized report distribution across SBI's global network of Foreign Offices and branches.",
    points: [
      "Java aggregation agent across 120+ core banking servers",
      "Role-based access controls and automated schedules",
      "Real-time notification system",
    ],
    tags: ["Java", "Distributed Systems", "Oracle", "Security"],
  },
  {
    id: "cmp",
    rarity: "rare",
    name: "IT-FO Change Management Portal",
    org: "State Bank of India",
    status: "Active",
    desc: "A structured portal for IT change requests, approvals and implementations across Foreign Offices.",
    points: [
      "Multi-stage approval workflows",
      "Interactive dashboards and comprehensive audit trails",
      "Integration with deployment systems",
    ],
    tags: ["Java", "Spring Boot", "Oracle", "Workflow"],
  },
  {
    id: "mirevenue",
    rarity: "epic",
    name: "MiRevenue Strategic Billing",
    org: "Zafin · for Barclays Bank UK",
    status: "Completed",
    desc: "Implementation of Zafin's miRevenue Product & Pricing Lifecycle Management platform for Barclays Bank UK.",
    points: [
      "Critical business reports and complex financial calculations",
      "Integration with core banking systems",
      "Cross-functional delivery with Barclays and Capgemini",
    ],
    tags: ["Java", "Spring", "Jasper Reports", "FinTech"],
  },
  {
    id: "edi",
    rarity: "rare",
    name: "Amazon EDI Connection",
    org: "Faes · SKB Europe",
    status: "Completed",
    desc: "Automated order processing and invoicing between SKB Europe and Amazon over EDI.",
    points: [
      "ANSI X12 validation for data consistency",
      "Scaled for growing order volumes with significant bug reduction",
    ],
    tags: ["Java", "Spring MVC", "EDI", "REST"],
  },
  {
    id: "ariba",
    rarity: "rare",
    name: "ASML e-Invoicing via Ariba",
    org: "Faes Packaging Solutions",
    status: "Completed",
    desc: "Automated e-Invoicing on the Ariba Supplier Network with a flawless production record.",
    points: [
      "cXML 1.2.024 standard compliance",
      "Direct ERP integration with file-polling proxy on UltraESB",
      "Zero production issues since deployment",
    ],
    tags: ["Java", "cXML", "UltraESB"],
  },
  {
    id: "stackassist",
    rarity: "rare",
    name: "StackAssist Backend Suite",
    org: "Faes Packaging Concepts",
    status: "Completed",
    desc: "Backend services for intelligent stacking solutions — order processing, tracking and document generation.",
    points: [
      "RESTful services and JMS queuing with timeout management",
      "PDF generation with JasperReports",
      "Multi-format processing pipeline (Excel, XML)",
    ],
    tags: ["Java", "UltraESB", "JMS", "Jasper Reports"],
  },
  {
    id: "vendor",
    rarity: "common",
    name: "SCM Vendor Rating Portal",
    org: "Faes Group BV",
    status: "Completed",
    desc: "Supply chain web app with secure ERP integration and an interactive supplier performance dashboard.",
    points: [
      "Secure ESB proxy for ERP data access",
      "Automated data synchronization",
      "Custom WordPress plugin for administration",
    ],
    tags: ["WordPress", "Java", "jQuery", "ESB"],
  },
  {
    id: "casecreator",
    rarity: "common",
    name: "Case Creator Measurement Tools",
    org: "Faes Packaging Solutions",
    status: "Completed",
    desc: "Interactive measurement and visualization tools for custom case interior design on casecreator.com.",
    points: [
      "Dynamic scaling ruler system built with Raphaël.js",
      "Portable, customizable design tooling",
    ],
    tags: ["JavaScript", "Raphaël.js", "Spring MVC"],
  },
  {
    id: "contour",
    rarity: "rare",
    name: "3D Contour & Depth Estimation",
    org: "Faes Packaging Solutions",
    status: "PoC",
    desc: "Proof of concept for 3D modeling and object analysis from multi-view images.",
    points: [
      "Image processing and multi-view object analysis",
      "3D model generation pipeline",
    ],
    tags: ["Python", "Image Processing"],
  },
];

/* Achievements — id, icon, name, how to unlock, xp reward, secret flag */
DK.achievements = [
  { id: "new-game", icon: "🎮", name: "New Game", desc: "Started the experience", xp: 10 },
  { id: "storyseeker", icon: "📜", name: "Storyseeker", desc: "Read the character profile", xp: 20 },
  { id: "skill-scout", icon: "🌟", name: "Skill Scout", desc: "Inspected a skill branch", xp: 20 },
  { id: "tree-climber", icon: "🌳", name: "Tree Climber", desc: "Explored every skill branch", xp: 50 },
  { id: "historian", icon: "🗺️", name: "Quest Historian", desc: "Opened every chapter of the quest log", xp: 50 },
  { id: "specialist", icon: "🎯", name: "Mission Specialist", desc: "Examined 5 side quests (projects)", xp: 40 },
  { id: "headhunter", icon: "🤝", name: "Headhunter", desc: "Reached out via contact links", xp: 30 },
  { id: "shapeshifter", icon: "🌓", name: "Shapeshifter", desc: "Switched the light/dark theme", xp: 15 },
  { id: "completionist", icon: "🏆", name: "Completionist", desc: "Visited every section of the site", xp: 60 },
  { id: "hacker", icon: "💻", name: "Terminal Velocity", desc: "Opened the hidden terminal", xp: 40, secret: true },
  { id: "konami", icon: "🕹️", name: "30 Lives", desc: "Entered the Konami code", xp: 50, secret: true },
  { id: "pilot", icon: "✈️", name: "Cleared for Takeoff", desc: "Found the flight simulator easter egg", xp: 25, secret: true },
];
