export const companyData = {
  name: "Prosync Consulting",
  logoUrl: "/assets/aistudio/Prosync_Circular_P_Logo_166619fe.png",
  monogramUrl: "/assets/aistudio/Prosync_Circular_P_Logo_166619fe.png",
  fullLogoUrl: "/assets/aistudio/Prosync_Circular_P_Logo_166619fe.png",
  legalName: "Prosync Consulting Advisory Private Limited",
  tagline: "Corporate Finance & Capital Advisory",
  founded: "2015",
  cin: "U74999TG2015PTC099824",
  address: "Plot 82, Road No 7, Jubilee Hills & Hitec City, Hyderabad, Telangana 500033",
  shortAddress: "Jubilee Hills & Hitec City, Hyderabad",
  email: "info@prosync.in",
  careersEmail: "info@prosync.in",
  phone: "+91 99514 45544",
  phoneRaw: "+919951445544",
  brandName: "Prosync Consulting",
  websiteUrl: "https://prosyncindia.com",
  domain: "prosyncindia.com",
  officeAddress: "Plot 82, Road No 7, Jubilee Hills & Hitec City, Hyderabad, Telangana 500033",
  
  // Specification 2: Strict Headline & Concise 2-Sentence Description
  heroHeadline: "Financial Advisory. Built Around Your Business.",
  subtitle:
    "We provide corporate debt syndication, private credit, and growth equity advisory across infrastructure, energy, and mid-market enterprises. Our senior partners lead every mandate from financial modeling to final disbursement.",

  // WhatsApp helper
  getWhatsAppUrl: function (text) {
    const msg = text
      ? encodeURIComponent(text)
      : encodeURIComponent("Hello Prosync, I would like to discuss a financial advisory mandate.");
    return `https://wa.me/919951445544?text=${msg}`;
  },
  whatsappBaseUrl: "https://wa.me/919951445544?text=Hello%20Prosync%2C%20I%20would%20like%20to%20discuss%20a%20mandate.",

  // Specification 5: Verified Deal Credentials (No placeholder stats)
  metrics: [
    {
      value: "₹250+ Cr",
      label: "Flagship Project Closure",
      detail: "NHAI HAM Highway Concession",
    },
    {
      value: "15+ Yrs",
      label: "Partner Track Record",
      detail: "Institutional Advisory Experience",
    },
    {
      value: "5+",
      label: "Core Focus Sectors",
      detail: "Infra, Clean Energy & EPC",
    },
    {
      value: "100%",
      label: "Partner-Led Execution",
      detail: "Modeling to Disbursement",
    },
  ],

  // Specification 6 & 7: Exactly Three Clear Pillars with 2-3 sentence descriptions
  servicePillars: [
    {
      id: "corporate-finance",
      title: "Corporate Finance",
      category: "Debt Syndication & Bank Lines",
      summary:
        "We structure and syndicate term loans, working capital consortia, and project debt facilities from premier Indian banks and financial institutions. Our team evaluates enterprise debt capacity, optimizes repayment schedules, and interfaces directly with credit committees.",
      deliverable: "Bank sanction letters, CMA documentation & consortium agreements",
      cta: "Discuss Corporate Finance",
    },
    {
      id: "capital-transactions",
      title: "Capital & Transactions",
      category: "Growth Equity & Private Credit",
      summary:
        "We guide high-growth enterprises and mid-market promoters through growth equity rounds, structured mezzanine capital, and Pre-IPO advisory. We build institutional financial models, design cap tables, and negotiate investor term sheets to secure closing certainty.",
      deliverable: "Term sheets, cap-table models & closing governance",
      cta: "Discuss Transactions",
    },
    {
      id: "project-advisory",
      title: "Project Advisory",
      category: "Infrastructure & Techno-Economic Feasibility",
      summary:
        "We advise infrastructure concessionaires, solar developers, and industrial builders on project viability, techno-economic valuation (TEV), and tender bid modeling. From NHAI highway concessions to renewable power assets, we ensure full statutory compliance through to financial closure.",
      deliverable: "TEV appraisal, concession bid models & financial closure",
      cta: "Discuss Project Finance",
    },
  ],

  // Specification 9: 2-3 genuine, structured transaction case studies (Assignment, Scope, Outcome)
  caseStudies: [
    {
      id: "nhai-ham-highway",
      title: "National Highway HAM Concession Debt Syndication",
      size: "₹250 Cr",
      sector: "Transportation & Highway Concession",
      client: "DRM Infrastructure Projects",
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
      step: "01",
      name: "Financial Diagnostic",
      tagline: "Balance Sheet & Capacity Audit",
      description:
        "We evaluate historical financials, debt-servicing capability, and project cash flows to establish real borrowing and equity capacity.",
    },
    {
      step: "02",
      name: "Capital Architecture",
      tagline: "Bankable Financial Engineering",
      description:
        "We build institutional financial models, dynamic CMA data, and valuation matrices that align with current lender and fund mandates.",
    },
    {
      step: "03",
      name: "Lender & Investor Negotiation",
      tagline: "Credit Committee Engagement",
      description:
        "Senior partners present credit briefs directly to bank credit committees and fund managers, defending assumptions and negotiating rates.",
    },
    {
      step: "04",
      name: "Execution & Closure",
      tagline: "Disbursement & Documentation",
      description:
        "We manage loan documentation, compliance with pre-disbursement conditions, and coordinate consortium legal clearance through to fund release.",
    },
  ],

  // Specification 10: Company Profile
  aboutProfile: {
    headline: "Senior Partner-Led Advisory for Critical Financial Decisions",
    paragraphs: [
      "Founded in 2015 and headquartered in Hyderabad, Prosync Consulting is an executive financial advisory firm. We specialize in corporate debt syndication, project finance, and capital transactions across infrastructure, renewables, and mid-market enterprises.",
      "Unlike conventional brokerage firms, Prosync operates with direct senior partner involvement from inception to completion. Our multidisciplinary team combines chartered accountancy, project finance modeling, and techno-economic appraisal to structure transactions that stand up to institutional scrutiny.",
    ],
    sectorsServed: [
      "Roads & Highways (NHAI HAM & EPC)",
      "Solar & Clean Energy IPP",
      "Industrial Infrastructure & Civil Works",
      "Agribusiness & Cold Chain Logistics",
      "Automated Manufacturing & Advanced Materials",
    ],
  },

  // Specification 18: Prosync Global / Research (separated from domestic corporate finance flow)
  prosyncGlobal: {
    title: "Financial Research & Analytics Desk",
    subtitle: "Dedicated institutional modeling, valuation, and transaction support for enterprises, boards, and global deal teams.",
    capabilities: [
      {
        name: "Valuation & Financial Modeling",
        desc: "3-statement financial models, discounted cash flow (DCF), LBO, and peer trading multiples.",
      },
      {
        name: "Due Diligence Support & VDR",
        desc: "Virtual data room setup, commercial due diligence dossiers, and quality of earnings analysis.",
      },
      {
        name: "Techno-Economic Appraisal (TEV/DPR)",
        desc: "Detailed project reports and technical feasibility models compliant with bank consortium standards.",
      },
      {
        name: "Investor Materials & CIM",
        desc: "Confidential Information Memorandums, board decks, and institutional investment committee briefs.",
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
      name: "ANAND BANDAM",
      role: "PARTNER - BANKING & TRANSACTIONS",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793095926/anandsir_jusx9i.jpg",
      bio: "Anand Bandam brings deep experience across banking institutions and corporate financial services. His cross-sector background strengthens Prosync's credit syndication capability, structuring bankable proposals tailored to institutional lender requirements.",
      focus: ["Corporate Banking", "Consortium Credit", "Transaction Strategy"],
    },
  ],

  // Team - All Project Finance Analysts + Full Stack Developer & Technical Lead (no LinkedIn icons)
  employees: [
    {
      name: "Prasad",
      role: "",
      department: "",
      initials: "P",
    },
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
    { name: "DRM Infrastructure", fullName: "DRM Infrastructure Projects", tag: "Highway Concessions" },
    { name: "MEIL", fullName: "Megha Engineering & Infrastructures Ltd", tag: "Infrastructure & EPC" },
    { name: "AR Petro", fullName: "AR Petrochem & Fuels", tag: "Energy & Petrochemicals" },
    { name: "AARA Group", fullName: "AARA Group Agribusiness", tag: "Agri-Enterprise" },
    { name: "Saradha Foods", fullName: "Saradha Foods & Processing", tag: "Food Processing" },
    { name: "Husuro Robotics", fullName: "Husuro Robotics Automation", tag: "Industrial Automation" },
    { name: "Chrome Silicon", fullName: "Chrome Silicon Technologies", tag: "Advanced Materials" },
    { name: "Joist Group", fullName: "Joist Group Construction", tag: "Civil & Commercial" },
    { name: "Blue Lotus", fullName: "Blue Lotus Logistics", tag: "Warehousing & Supply Chain" },
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
      answer: "We execute formal bilateral Non-Disclosure Agreements (NDAs) prior to examining any internal financial records, forecasts, or corporate documents. All communications and documentation are handled strictly by our senior partners.",
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
