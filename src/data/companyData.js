export const companyData = {
  name: "Prosync Consulting",
  logoUrl: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793258172/Navy_and_Orange_CP_Monogram_Logo_xkgmso.jpg",
  monogramUrl: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793258172/Navy_and_Orange_CP_Monogram_Logo_xkgmso.jpg",
  fullLogoUrl: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793258172/Navy_and_Orange_CP_Monogram_Logo_xkgmso.jpg",
  legalName: "Prosync Consulting Advisory Private Limited",
  tagline: "Financial Advisory | Debt & Structured Finance | Transaction Advisory",
  founded: "2015",
  cin: "U74999TG2015PTC099824",
  address: "Plot 82, Road No 7, Jubilee Hills & Hitec City, Hyderabad, Telangana 500033",
  shortAddress: "Hyderabad, Vijayawada, Mumbai",
  locations: ["Hyderabad", "Vijayawada", "Mumbai"],
  email: "psc@prosyncindia.com",
  careersEmail: "psc@prosyncindia.com",
  phone: "+91 99514 45544",
  phoneRaw: "+919951445544",
  brandName: "Prosync",
  websiteUrl: "https://prosyncindia.com",
  domain: "prosyncindia.com",
  officeAddress: "Plot 82, Road No 7, Jubilee Hills & Hitec City, Hyderabad, Telangana 500033",
  
  // Leadership Specifications
  heroHeadline: "CAPITAL. STRATEGY. GROWTH.",
  heroSubheadline: "Financial expertise for businesses navigating their next phase of growth.",
  subtitle:
    "Prosync is an independent financial advisory firm providing debt syndication, structured finance, transaction advisory and strategic financial solutions.",

  // WhatsApp helper
  getWhatsAppUrl: function (text) {
    const msg = text
      ? encodeURIComponent(text)
      : encodeURIComponent("Hello Prosync, I would like to discuss a financial advisory mandate.");
    return `https://wa.me/919951445544?text=${msg}`;
  },
  whatsappBaseUrl: "https://wa.me/919951445544?text=Hello%20Prosync%2C%20I%20would%20like%20to%20discuss%20a%20mandate.",

  // Our Experience - Simple 3-metric strip
  experienceNumbers: [
    {
      value: "₹800+ CRORE",
      label: "Transaction experience",
      detail: "Completed & syndicated transaction volume"
    },
    {
      value: "SINCE 2015",
      label: "Financial advisory experience",
      detail: "Over a decade of advisory track record"
    },
    {
      value: "MULTI-SECTOR",
      label: "Experience across business and infrastructure sectors",
      detail: "Highways, energy, industry & mid-market"
    }
  ],

  // 4 Core Practice Areas / Services
  expertiseIntro:
    "We provide financial advisory across four key areas, supporting businesses from project planning and capital structuring to financing and strategic transactions.",

  servicePillars: [
    {
      id: "debt-structured-finance",
      title: "DEBT & STRUCTURED FINANCE",
      shortTitle: "Debt & Structured Finance",
      description:
        "We help businesses evaluate, structure and raise debt capital aligned with their funding requirements and business plans.",
      points: [
        "Project Finance",
        "Working Capital Finance",
        "Structured & Mezzanine Finance",
        "Acquisition Finance",
        "Refinancing & Debt Restructuring",
      ],
      cta: "ENQUIRE ABOUT DEBT FINANCING",
    },
    {
      id: "investment-transaction-advisory",
      title: "INVESTMENT & TRANSACTION ADVISORY",
      shortTitle: "Investment & Transaction Advisory",
      description:
        "We support businesses and investors through financial analysis, transaction evaluation and capital-raising assignments.",
      points: [
        "Mergers & Acquisitions Advisory",
        "Equity Capital Raising Support",
        "Business Valuation",
        "Financial Due Diligence",
        "Transaction Structuring",
      ],
      cta: "DISCUSS A TRANSACTION",
    },
    {
      id: "project-infrastructure-advisory",
      title: "PROJECT & INFRASTRUCTURE ADVISORY",
      shortTitle: "Project & Infrastructure Advisory",
      description:
        "We assist project promoters and businesses in assessing project viability, preparing financial plans and navigating project-related advisory requirements.",
      points: [
        "Techno-Economic Viability (TEV) Studies",
        "Detailed Project Reports (DPRs)",
        "Project Financial Modelling",
        "Infrastructure Advisory",
        "Bid & Tender Advisory",
      ],
      cta: "DISCUSS YOUR PROJECT",
    },
    {
      id: "corporate-finance-research",
      title: "CORPORATE FINANCE & RESEARCH",
      shortTitle: "Corporate Finance & Research",
      description:
        "We provide financial analysis and research support to businesses and investment institutions for better-informed decisions.",
      points: [
        "Financial Modelling & Analysis",
        "Credit Assessment",
        "Management Reporting",
        "Sector & Industry Research",
        "Investment and Portfolio Research Support",
      ],
      cta: "EXPLORE RESEARCH SUPPORT",
    },
  ],

  // 10. Selected Experience (Capability descriptions, not client case studies)
  selectedExperience: [
    {
      id: "exp-project-finance",
      title: "Project Finance",
      description: "Supporting project promoters with financial structuring and funding proposals.",
    },
    {
      id: "exp-working-capital",
      title: "Working Capital Finance",
      description: "Assisting operating businesses with working capital assessment and lender engagement.",
    },
    {
      id: "exp-infrastructure",
      title: "Infrastructure & Industrial Projects",
      description: "Supporting project evaluation, TEV studies and financial modelling.",
    },
    {
      id: "exp-corporate-tx",
      title: "Corporate Transactions",
      description: "Providing valuation, due diligence and transaction support.",
    },
  ],

  // 11. Who We Work With
  whoWeServe: [
    {
      id: "corporates",
      title: "Corporates & Mid-sized Enterprises",
      desc: "Balancing debt capacity, working capital consortia, and expansion credit."
    },
    {
      id: "infra-devs",
      title: "Infrastructure & Project Developers",
      desc: "Concession appraisal, TEV modeling, and project debt structuring."
    },
    {
      id: "promoters",
      title: "Promoters & Entrepreneurs",
      desc: "Cap-table advisory, promoter equity financing, and strategic transactions."
    },
    {
      id: "investors-funds",
      title: "Investors, Family Offices & Funds",
      desc: "Transaction due diligence, financial modeling, and portfolio analytics."
    },
  ],

  // 12. Why Prosync (4 short blocks)
  whyProsync: [
    {
      title: "Financial Perspective",
      desc: "We assess funding needs, financial position and business objectives before recommending a course of action.",
    },
    {
      title: "Structured Solutions",
      desc: "We evaluate suitable financing and transaction structures around each assignment.",
    },
    {
      title: "Execution Focus",
      desc: "We support clients through analysis, preparation and engagement with relevant stakeholders.",
    },
    {
      title: "Cross-sector Experience",
      desc: "We work with businesses and projects across multiple sectors.",
    },
  ],

  // Specification 9: 2-3 genuine, structured transaction case studies (Assignment, Scope, Outcome)
  caseStudies: [
    {
      id: "nhai-ham-highway",
      title: "National Highway HAM Concession Debt Syndication",
      size: "₹250 Cr",
      sector: "Transportation & Highway Concession",
      client: "National Highway Concessionaire",
      assignment:
        "Sole financial advisor for debt syndication and financial closure of a Four-Laning National Highway HAM project under NHAI.",
      scope:
        "Formulated dynamic financial model, structured lender appraisal memorandums, evaluated concession cash flows, and coordinated consortium bank approvals.",
      outcome:
        "Achieved 100% financial closure with a leading public and private bank consortium within 6 weeks at benchmark interest rates.",
      imageUrl: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=1200&auto=format&fit=crop",
      badge: "Exclusive Advisor",
    },
    {
      id: "solar-clean-energy",
      title: "Utility Solar & Commercial Clean Energy Financing",
      size: "₹85 Cr",
      sector: "Solar & Clean Energy",
      client: "Renewable EPC & Independent Power Producer",
      assignment:
        "Debt syndication and capital structuring for utility-scale ground-mounted and rooftop commercial solar portfolios.",
      scope:
        "Conducted tariff sensitivity modeling, bankable PPA analysis, techno-economic feasibility (TEV) validation, and green term loan negotiation.",
      outcome:
        "Secured long-tenor debt sanctions from specialized renewable energy lenders, lowering weighted borrowing costs by 140 bps.",
      imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
      badge: "Project Advisory",
    },
    {
      id: "epc-infrastructure",
      title: "Industrial EPC & Core Infrastructure Facility Structuring",
      size: "₹65 Cr",
      sector: "Industrial Infrastructure & Energy EPC",
      client: "Infrastructure Engineering Contractor",
      assignment:
        "Comprehensive working capital, bank guarantee (BG), and letter of credit (LC) syndication for major EPC contract execution.",
      scope:
        "Assessed order-book cash flows, restructured existing banking limits, ring-fenced project milestones, and negotiated multi-bank consortium lines.",
      outcome:
        "Expanded non-fund and fund-based credit limits, enabling timely procurement mobilization and enhanced balance-sheet liquidity.",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      badge: "Corporate Finance",
    },
  ],

  // Specification 8: Unified approach - senior partner oversight from modeling to financial closure
  approach: [
    {
      id: "diagnostic",
      name: "Financial Diagnostic",
      tagline: "Balance Sheet & Capacity Audit",
      description:
        "We evaluate historical financials, debt-servicing capability, and project cash flows to establish real borrowing and equity capacity.",
    },
    {
      id: "architecture",
      name: "Capital Architecture",
      tagline: "Bankable Financial Engineering",
      description:
        "We build institutional financial models, dynamic CMA data, and valuation matrices that align with current lender and fund mandates.",
    },
    {
      id: "negotiation",
      name: "Lender & Investor Negotiation",
      tagline: "Credit Committee Engagement",
      description:
        "Senior partners present credit briefs directly to bank credit committees and fund managers, defending assumptions and negotiating rates.",
    },
    {
      id: "closure",
      name: "Execution & Closure",
      tagline: "Disbursement & Documentation",
      description:
        "We manage loan documentation, compliance with pre-disbursement conditions, and coordinate consortium legal clearance through to fund release.",
    },
  ],

  // 3. About Prosync – homepage
  aboutParagraph:
    "Since 2015, Prosync has been helping businesses make informed financial decisions and access the capital required to grow. We work with promoters, corporates and institutions across financing, project advisory and strategic transactions. Our approach combines financial analysis, structured thinking and execution-focused support.",

  aboutProfile: {
    headline: "Financial Advisory Built on Deep Institutional Relationships",
    paragraph:
      "Since 2015, Prosync has been helping businesses make informed financial decisions and access the capital required to grow. We work with promoters, corporates and institutions across financing, project advisory and strategic transactions. Our approach combines financial analysis, structured thinking and execution-focused support.",
    sectorsServed: [
      "Roads & Highways (NHAI HAM & EPC)",
      "Solar & Clean Energy IPP",
      "Industrial Infrastructure & Civil Works",
      "Agribusiness & Cold Chain Logistics",
      "Automated Manufacturing & Advanced Materials",
    ],
  },

  // 13. Prosync Global
  prosyncGlobal: {
    title: "PROSYNC GLOBAL",
    subtitle: "Financial Research. Better Decisions.",
    description:
      "Prosync Global provides research and analytical support to family offices, AIFs, fund houses and investment institutions.",
    cta: "DISCUSS RESEARCH SUPPORT",
    capabilities: [
      {
        name: "Due Diligence Reports",
        desc: "Comprehensive financial, commercial, and risk due diligence dossiers for funds and institutions.",
      },
      {
        name: "Investment & Investment Committee Notes",
        desc: "Institutional IC memos, thesis articulation, and capital allocation frameworks.",
      },
      {
        name: "Portfolio Monitoring & Updates",
        desc: "Covenant tracking, quarterly performance dashboards, and portfolio risk reviews.",
      },
      {
        name: "Sector and Industry Analysis",
        desc: "Deep-dive sector research, regulatory impact assessments, and competitor benchmark studies.",
      },
      {
        name: "Financial Research Support",
        desc: "Dedicated modeling, DCF valuations, and custom analytical support for global deal teams.",
      },
    ],
  },

  // Specification 10 & 13: Executive Leadership
  leadership: [
    {
      name: "PRADEEP TANUKU",
      role: "FOUNDER & MANAGING PARTNER",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793095926/pradeepsir_ffnpct.jpg",
      bio: "Pradeep Tanuku is a Chartered Accountant with extensive experience in debt syndication, project finance, financial structuring, and institutional capital raising. He founded Prosync to provide mid-market enterprises and concessionaires with rigorous, partner-led transaction advisory.",
      focus: ["Debt Syndication", "Project Finance", "Strategic Advisory"],
    },
    {
      name: "ANAND BANDHAM",
      role: "PARTNER - BANKING & TRANSACTIONS",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793095926/anandsir_jusx9i.jpg",
      bio: "Anand Bandham brings deep experience across banking institutions and corporate financial services. His cross-sector background strengthens Prosync's credit syndication capability, structuring bankable proposals tailored to institutional lender requirements.",
      focus: ["Corporate Banking", "Consortium Credit", "Transaction Strategy"],
    },
    {
      name: "PRASAD",
      role: "PARTNER - FINANCIAL DUE DILIGENCE",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793258172/Navy_and_Orange_CP_Monogram_Logo_xkgmso.jpg",
      bio: "Prasad leads Prosync's Financial Due Diligence practice. He brings specialized expertise in forensic balance sheet analysis, Quality of Earnings (QoE) auditing, working capital evaluation, and financial risk assessment for corporate acquisitions and institutional credit syndication.",
      focus: ["Financial Due Diligence", "Quality of Earnings", "Transaction Audit"],
    },
  ],

  // Team - All Project Finance Analysts + Full Stack Developer & Technical Lead (no LinkedIn icons)
  employees: [
    {
      name: "Naveen P",
      role: "Manager",
      department: "Execution & Deal Desk",
      initials: "NP",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793180514/naveenpic_mybwbt.png",
    },
    {
      name: "Shekhar K",
      role: "Project Finance Analyst",
      department: "Credit Appraisal",
      initials: "SK",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793176994/shekarprofile_hfof26.png",
    },
    {
      name: "Akanksha K",
      role: "Project Finance Analyst",
      department: "Techno-Economic Appraisal",
      initials: "AK",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793176947/akanshaprofile_azshe1.png",
    },
    {
      name: "Sankar S",
      role: "Project Finance Analyst",
      department: "Syndication & Structuring",
      initials: "SS",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793180957/sankarpic_gtozri.png",
    },
    {
      name: "Bhavana N",
      role: "Project Finance Analyst",
      department: "Quantitative Valuation",
      initials: "BN",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793181904/bavana1_qvueol.jpg",
    },
    {
      name: "Suraj N",
      role: "Full Stack Developer",
      department: "Technical Lead",
      initials: "SN",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793180139/virattompic_gw3ytf.png",
    },
  ],

  // Specification 11: Verified Client Logos & Authorized Credentials
  clients: [
    { name: "MEIL", fullName: "Megha Engineering & Infrastructures Ltd", tag: "Infrastructure & EPC" },
    { name: "DRN Infra", fullName: "DRN Infrastructure Projects", tag: "Highway Concessions" },
    { name: "HUSORO Robotics", fullName: "HUSORO Robotics Automation", tag: "Industrial Automation" },
    { name: "Rasavardhana Foods", fullName: "Rasavardhana Foods", tag: "Food Processing" },
    { name: "Chrome Silicon", fullName: "Chrome Silicon Technologies", tag: "Advanced Materials" },
    { name: "AR Petro", fullName: "AR Petrochem & Fuels", tag: "Energy & Petrochemicals" },
    { name: "AARA Group", fullName: "AARA Group Agribusiness", tag: "Agri-Enterprise" },
    { name: "Joist Group", fullName: "Joist Group Construction", tag: "Civil & Commercial" }
  ],

  // Institutional Bankers
  bankers: [
    { name: "State Bank of India", short: "SBI", type: "Public Sector Bank" },
    { name: "Canara Bank", short: "Canara", type: "Public Sector Bank" },
    { name: "Kotak Mahindra Bank", short: "Kotak", type: "Private Sector Bank" },
    { name: "Bank of Baroda", short: "BOB", type: "Public Sector Bank" },
    { name: "Vivriti Capital", short: "Vivriti", type: "Private Debt & NBFC" },
    { name: "Edelweiss Alternatives", short: "EAAA", type: "Alternative Investment Fund" },
    { name: "AIMS Institutional", short: "AIMS", type: "Specialized Credit Fund" },
  ],

  // Core Sectors
  sectors: [
    {
      name: "Roads & Highways",
      detail: "NHAI HAM concessions, expressways, EPC debt syndication, and toll asset monetization.",
    },
    {
      name: "Solar & Clean Energy",
      detail: "Utility-scale ground mounted solar parks, captive C&I installations, and green debt facilities.",
    },
    {
      name: "Industrial EPC & Civil",
      detail: "Large infrastructure engineering projects, multi-bank guarantee lines, and working capital.",
    },
    {
      name: "Agriculture & Food Processing",
      detail: "Mega food parks, automated cold chains, processing plants, and warehousing infrastructure.",
    },
    {
      name: "Manufacturing & Core Industry",
      detail: "Chemical and materials manufacturing, automated engineering plants, and industrial expansions.",
    },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "What is the typical timeline for debt syndication and financial closure?",
      answer: "Bank loan approvals and financial sanctions typically take between 4 to 8 weeks depending on bank processes and project complexity. Equity rounds and M&A transactions generally span 10 to 16 weeks from marketing to definitive agreement closing.",
    },
    {
      question: "How does Prosync manage confidentiality throughout the mandate?",
      answer: "We execute formal bilateral non-disclosure agreements prior to reviewing internal corporate records, forecasts, or transaction details. All communications and documentation are managed directly by our senior partners.",
    },
    {
      question: "Which institutions does Prosync work with for debt and equity?",
      answer: "We maintain direct, active working relationships with major Indian public sector banks (SBI, Canara, BOB), private lenders (Kotak Mahindra Bank), and specialized credit and private equity funds (Vivriti Capital, AIFs).",
    },
    {
      question: "Does Prosync advise on hybrid structures combining debt and equity?",
      answer: "Yes. Many of our corporate clients benefit from a balanced combination of low-cost bank loans and structured growth equity to support expansion without diluting unnecessary ownership.",
    },
    {
      question: "What is Prosync's advisory fee engagement model?",
      answer: "We operate on an institutional model combining a commitment retainer with a performance success fee payable upon transaction closing and disbursement.",
    },
  ],
};
