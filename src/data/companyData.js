export const companyData = {
  name: "Prosync Consulting Private Limited",
  brandName: "Prosync",
  cin: "U74999TG2020PTC138349",
  tagline: "Boutique Investment Banking",
  headline: "Capital, structured with conviction.",
  headlineLead: "Capital, structured",
  headlineAccent: "with conviction.",
  subtitle:
    "Prosync helps startups and corporates raise debt and equity, prepare for listing, and win mandates — with pre-IPO, DPR/TEV, bid consulting and transaction advisory under one senior team.",
  phone: "+91 99514 45544",
  phoneRaw: "9951445544",
  email: "psc@prosyncindia.com",
  officeAddress:
    "Plot No. 24 & 25, Road No. 9, Kakatiya Hills, Hitec City, Madhapur, Hyderabad, Telangana 500081",
  whatsappBaseUrl: "https://wa.me/919951445544",

  getWhatsAppUrl: (mandateName) => {
    const text = mandateName
      ? `Hi Prosync, I would like to discuss a mandate regarding ${mandateName} for our company.`
      : "Hi Prosync, I would like to schedule an introductory discussion regarding transaction and capital advisory.";
    return `https://wa.me/919951445544?text=${encodeURIComponent(text)}`;
  },

  capitalStack: [
    {
      level: "01",
      name: "Common Equity",
      role: "Strategic, Venture & Institutional Growth",
      riskProfile: "High Risk / Long-Term Upside",
      color: "#FF6B00",
      pct: "100%",
      detail: "Direct cap table alignment, valuation benchmarking, and term-sheet negotiation for Series A+ to late-stage rounds."
    },
    {
      level: "02",
      name: "Pre-IPO / Growth",
      role: "Mezzanine & Crossover Institutional Placements",
      riskProfile: "Pre-Listing Governance & Capital",
      color: "#FF8A3D",
      pct: "78%",
      detail: "Anchor investor syndication, restructuring, and listing prep alongside audit & legal counsels."
    },
    {
      level: "03",
      name: "Mezzanine",
      role: "Subordinated & Quasi-Equity Instruments",
      riskProfile: "Structured Hybrid Yield",
      color: "#6E93C7",
      pct: "55%",
      detail: "Convertible debt, structured notes, and promoter financing with minimal ownership dilution."
    },
    {
      level: "04",
      name: "Senior Debt",
      role: "Bank Consortia, Term Loans & Working Capital",
      riskProfile: "Asset-Backed & Lowest Cost of Capital",
      color: "#3B6FB6",
      pct: "35%",
      detail: "Bespoke bank syndication, project finance lines, and working capital optimization at competitive benchmarks."
    }
  ],

  solutionMarquee: [
    "Growth Equity",
    "Structured Debt",
    "Pre-IPO Readiness",
    "DPR",
    "TEV",
    "Bid Consulting",
    "Transaction Advisory",
    "Refinancing"
  ],

  disciplines: [
    {
      id: "01",
      category: "Growth Capital",
      title: "Equity Raise",
      description:
        "Seed-to-growth and late-stage equity for startups and corporates — investor mapping, positioning, valuation, term-sheet negotiation and closing.",
      focus: "Startups & Mid-Market Corporates",
      deliverable: "End-to-end capitalization & investor syndicate"
    },
    {
      id: "02",
      category: "Credit Advisory",
      title: "Debt Solutions",
      description:
        "Term loans, working capital, structured and mezzanine credit arranged with banks, NBFCs and credit funds.",
      focus: "Operating Corporates & Infrastructure",
      deliverable: "Bank syndication & interest cost reduction"
    },
    {
      id: "03",
      category: "Market Access",
      title: "Pre-IPO Advisory",
      description:
        "Pre-IPO placements, governance readiness and listing preparation alongside your legal and audit teams.",
      focus: "Pre-Listing & Fast-Scaling Enterprises",
      deliverable: "Governance alignment & anchor rounds"
    },
    {
      id: "04",
      category: "Technical & Financial",
      title: "DPR / TEV Studies",
      description:
        "Detailed Project Reports and Techno-Economic Viability studies built to lender standards.",
      focus: "Infrastructure, EPC & Industrial Assets",
      deliverable: "Lender-grade technical appraisal reports"
    },
    {
      id: "05",
      category: "Tenders & Concessions",
      title: "Bid Consulting",
      description:
        "Eligibility review, financial modelling and bid documentation for government and private tenders.",
      focus: "NHAI, HAM & State Concessionaires",
      deliverable: "Optimal financial bid & tender clearance"
    },
    {
      id: "06",
      category: "End-to-End",
      title: "Transaction Advisory",
      description:
        "Buy-side and sell-side support, due diligence coordination, structuring and deal execution.",
      focus: "M&A, Divestitures & Joint Ventures",
      deliverable: "Definitive agreements & closing advisory"
    }
  ],

  mandatesMatrix: {
    Equity: {
      target: "Startups & growth companies",
      headline: "Strategic & Institutional Equity Capital",
      summary: "Full lifecycle support from equity story development to capital table optimization and investor closing.",
      steps: [
        "Equity story & investor deck",
        "Financial model & valuation",
        "Curated investor outreach",
        "Term-sheet negotiation",
        "Due diligence & closing"
      ]
    },
    Debt: {
      target: "Mid-market corporates & industrial builders",
      headline: "Optimized Debt & Project Financing",
      summary: "Senior credit, debt syndication, and working capital lines engineered to minimize finance costs.",
      steps: [
        "Credit rating & debt capacity assessment",
        "Bank syndication & information memorandum",
        "Lender presentations & term-sheet comparison",
        "Sanction negotiation & security structure",
        "Documentation & initial disbursement"
      ]
    },
    "Pre-IPO": {
      target: "Mature enterprises preparing for mainboard / SME listing",
      headline: "Institutional Readiness & Anchor Placements",
      summary: "Aligning internal governance, balance sheet architecture, and anchor investors prior to public filing.",
      steps: [
        "Corporate governance & audit alignment",
        "Capital table restructuring & ESOP readiness",
        "Pre-IPO cornerstone & crossover investor rounds",
        "Merchant banker & legal counsel onboarding",
        "DRHP filing roadmap & roadshow positioning"
      ]
    },
    "DPR / TEV": {
      target: "Lenders, concessionaires & infrastructure developers",
      headline: "Lender-Grade Techno-Economic Studies",
      summary: "Comprehensive technical appraisals and project reports certified to tier-1 institutional standards.",
      steps: [
        "Site inspection & engineering validation",
        "Market demand & tariff/revenue forecasting",
        "Capex validation & sensitivity stress testing",
        "Bank-grade DPR / TEV report compilation",
        "Direct presentation to lender credit committees"
      ]
    },
    Bid: {
      target: "Infrastructure contractors & concession bidders",
      headline: "Concession Modeling & Tender Compliance",
      summary: "Financial engineering and documentation for competitive highway, state and central tenders.",
      steps: [
        "RFQ / RFP qualification & consortium structuring",
        "Financial bid modeling & return optimization",
        "Concession agreement & legal risk audit",
        "Bid bond & bank guarantee arrangement",
        "Final bid submission & post-award financial closure"
      ]
    }
  },

  approach: [
    {
      number: "I",
      name: "Diagnose",
      tagline: "Rigorous Foundation",
      description: "We study the business, the numbers and the objective before recommending any structure."
    },
    {
      number: "II",
      name: "Structure",
      tagline: "Tailored Architecture",
      description: "We design the right mix of debt, equity or hybrid capital and build the materials to support it."
    },
    {
      number: "III",
      name: "Execute",
      tagline: "Senior Attention",
      description: "We run the process — outreach, negotiation, diligence — with senior attention at every stage."
    },
    {
      number: "IV",
      name: "Close & Beyond",
      tagline: "Long-Term Partnership",
      description: "We see the transaction through to closing and stay on as an advisor for what comes next."
    }
  ],

  metrics: [
    {
      value: "₹3,000+ Cr",
      label: "Capital raised till date",
      accent: "#FF6B00"
    },
    {
      value: "100+",
      label: "Deals closed",
      accent: "#FF8A3D"
    },
    {
      value: "1,000+",
      label: "DPR / TEV reports",
      accent: "#6E93C7"
    },
    {
      value: "10+",
      label: "Years of experience",
      accent: "#A9B8CF"
    }
  ],

  sectors: [
    { name: "Gas & Energy", detail: "City gas distribution, LNG infrastructure, renewables & green hydrogen assets" },
    { name: "Infrastructure", detail: "NHAI HAM highways, expressways, ports, transmission lines & civil contracts" },
    { name: "Agriculture", detail: "Processing facilities, bulk cold chains, grain warehousing & supply logistics" },
    { name: "Agri-Tech", detail: "Precision farming platforms, farm-to-enterprise marketplaces & automated supply chains" },
    { name: "Robotics", detail: "Industrial automation, autonomous logistics & hardware deeptech enterprises" },
    { name: "& more", detail: "High-spec manufacturing, commercial healthcare, pharma APIs & real estate developments" }
  ],

  landmarkDeals: [
    {
      size: "₹450 Cr",
      category: "Senior Debt Syndication",
      sector: "Infrastructure / HAM",
      title: "4-Lane NHAI Highway Concession Financial Closure",
      outcome: "Secured consortium bank sanction with optimized amortisation schedule and interest rate benchmark."
    },
    {
      size: "₹180 Cr",
      category: "Growth Equity",
      sector: "Agri-Tech & Cold Logistics",
      title: "Series B Institutional Capital Placement",
      outcome: "Brought marquee crossover growth fund onto cap table while retaining promoter voting majority."
    },
    {
      size: "₹650 Cr",
      category: "Pre-IPO Advisory",
      sector: "Industrial Engineering",
      title: "Balance Sheet Restructuring & Anchor Syndicate",
      outcome: "Streamlined corporate subsidiaries, debt rationalization, and onboarded institutional anchor investors."
    },
    {
      size: "₹240 Cr",
      category: "Capex Debt Facility",
      sector: "Gas & Energy Infrastructure",
      title: "City Gas Distribution (CGD) Pipeline Project",
      outcome: "Structured 12-year door-to-door loan with leading infrastructure financing institutions."
    }
  ],

  faqs: [
    {
      question: "What is the typical timeline to close a debt syndication or equity round?",
      answer: "Senior debt syndications and bank sanctions typically reach financial closure within 4 to 8 weeks depending on lender appraisal speed. Growth equity rounds, pre-IPO placements, and M&A mandates generally run on a 10 to 16 week timeline from investor mapping to definitive agreement closing."
    },
    {
      question: "How do you guarantee confidentiality for our numbers and strategic plans?",
      answer: "We sign reciprocal legal Non-Disclosure Agreements (NDAs) prior to receiving proprietary financial models, pitch decks, or bank statements. All data is managed strictly inside restricted partner deal rooms with zero junior leakages."
    },
    {
      question: "Which institutional lenders and investor networks do you syndicate with?",
      answer: "Our deal desk maintains direct, active syndication relationships with top private and PSU banks, specialized NBFCs, sovereign debt funds, infrastructure credit institutions, and domestic and global growth equity funds."
    },
    {
      question: "Can Prosync structure hybrid solutions combining both debt and equity?",
      answer: "Yes. In fact, many of our most successful mandates combine senior asset-backed debt with mezzanine or equity capital to minimize equity dilution while maintaining an optimal cost of capital."
    },
    {
      question: "What is your standard fee structure for investment banking mandates?",
      answer: "We work on a transparent hybrid model combining an engagement retainer with a success fee directly tied to transaction closing and disbursement milestones. This ensures complete alignment between our incentives and your final outcome."
    }
  ]
};
