export const companyData = {
  name: "Prosync Consulting",
  logoUrl: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793098353/prosync_ufbcfj.jpg",
  legalName: "Prosync Consulting Advisory Private Limited",
  tagline: "Boutique Investment Banking & Strategic Finance",
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
  headlineLead: "Where Ambition Meets",
  officeAddress: "Plot 82, Road No 7, Jubilee Hills & Hitec City, Hyderabad, Telangana 500033",
  office: {
    title: "Hyderabad Executive Deal Desk",
    line1: "Plot 82, Road No 7, Jubilee Hills",
    line2: "Hitec City Corridor, Hyderabad, Telangana 500033",
    landmark: "Near Tech Hub & Financial District",
    mapsUrl: "https://maps.google.com"
  },
  getWhatsAppUrl: function (text) {
    const msg = text ? encodeURIComponent(text) : encodeURIComponent("Hello Prosync, I would like to discuss an investment banking / advisory mandate.");
    return `https://wa.me/919951445544?text=${msg}`;
  },
  whatsappBaseUrl: "https://wa.me/919951445544?text=Hello%20Prosync%2C%20I%20would%20like%20to%20discuss%20a%20capital%20or%20advisory%20mandate.",
  heroHeadline: "Where Ambition Meets",
  headlineAccent: "Strategic Capital",
  subtitle:
    "We help business leaders raise equity, arrange bank debt, and execute landmark transactions with direct partner guidance from start to finish.",

  solutionMarquee: [
    "Debt Syndication",
    "Growth Equity",
    "Pre-IPO Advisory",
    "Solar & Clean Energy Finance",
    "DPR & TEV Studies",
    "Infrastructure Finance",
    "M&A Advisory",
    "Working Capital Lines"
  ],

  // Executive Leadership (Modeled directly after reference layout)
  leadership: [
    {
      name: "PRADEEP TANUKU",
      role: "FOUNDER",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793095926/pradeepsir_ffnpct.jpg",
      bio: "Pradeep Tanuku is a Chartered Accountant and investment banking professional with extensive experience in debt syndication, project finance, financial structuring, capital raising, and strategic advisory. He founded Prosync to help businesses access capital, structure complex financing solutions, and pursue strategic growth opportunities.",
      focus: ["Debt Syndication", "Project Finance", "Strategic Advisory"],
      reverse: false
    },
    {
      name: "ANAND BANDAM",
      role: "LEADERSHIP",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793095926/anandsir_jusx9i.jpg",
      bio: "Anand Bandam brings experience across the banking, financial services, and corporate sectors. His cross-sector exposure strengthens Prosync’s understanding of business operations, financial services, and client requirements, supporting the firm’s efforts to deliver practical financial and strategic advisory solutions.",
      focus: ["Corporate Banking", "Financial Services", "Client Strategy"],
      reverse: true
    }
  ],

  // Team & Employees (DPR specialists, Bankers & Engineers with verified profiles)
  employees: [
    {
      name: "Naveen Potnuru",
      role: "Manager",
      department: "Execution & Deal Desk",
      initials: "NP",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793180514/naveenpic_mybwbt.png",
      linkedin: "https://www.linkedin.com/in/potnuru-sai-nagakrupa-naveen/"
    },
    {
      name: "Shekhar Kanukula",
      role: "Project Finance Analyst",
      department: "Credit Appraisal",
      initials: "SK",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793176994/shekarprofile_hfof26.png",
      linkedin: "https://www.linkedin.com/in/shekhar-kanukula-a240bb299"
    },
    {
      name: "Akanksha Kolluri",
      role: "Project Finance Analyst",
      department: "Techno-Economic Appraisal",
      initials: "AK",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793176947/akanshaprofile_azshe1.png",
      linkedin: "https://www.linkedin.com/in/akanksha-kolluri-625793244/"
    },
    {
      name: "Sankar Sayyala",
      role: "Project Finance Analyst",
      department: "Syndication & Structuring",
      initials: "SS",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793180957/sankarpic_gtozri.png",
      linkedin: "https://www.linkedin.com/in/sankar-sayala-43a3a0237/"
    },
    {
      name: "Bhavana Nayanala",
      role: "Project Finance Analyst",
      department: "Quantitative Valuation",
      initials: "BN",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793181904/bavana1_qvueol.jpg",
      linkedin: "https://www.linkedin.com/in/bhavana-nayanala-6325902a8/"
    },
    {
      name: "Suraj Nyavanandi",
      role: "Full Stack Developer",
      department: "Building Urbanico & Inisio",
      initials: "SN",
      image: "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793180139/virattompic_gw3ytf.png",
      linkedin: "https://www.linkedin.com/in/suraj-nyavanandi-305962286"
    }
  ],

  // Clients
  clients: [
    { name: "MEIL", fullName: "Megha Engineering & Infrastructures Ltd", tag: "Infrastructure & EPC" },
    { name: "AR Petro", fullName: "AR Petrochem & Fuels", tag: "Energy & Petrochemicals" },
    { name: "AARA Group", fullName: "AARA Group Farms & Agribusiness", tag: "Agri-Enterprise" },
    { name: "Saradha Foods", fullName: "Saradha Foods & Processing", tag: "Food Processing" },
    { name: "Husuro Robotics", fullName: "Husuro Robotics Automation", tag: "Industrial Robotics" },
    { name: "Chrome Silicon", fullName: "Chrome Silicon Technologies", tag: "Advanced Materials" },
    { name: "Joist Group", fullName: "Joist Group Construction", tag: "Civil & Commercial" },
    { name: "Blue Lotus", fullName: "Blue Lotus Logistics", tag: "Supply Chain & Warehousing" },
    { name: "DR Infrastructures", fullName: "DR Infrastructure Projects", tag: "Highway Concessions" }
  ],

  // Bankers and Lenders
  bankers: [
    { name: "State Bank of India", short: "SBI", type: "Public Sector Bank", badge: "Consortium Leader" },
    { name: "Bank of Baroda", short: "BOB", type: "Public Sector Bank", badge: "Project Credit" },
    { name: "Canara Bank", short: "Canara", type: "Public Sector Bank", badge: "Term Loans & BG" },
    { name: "Kotak Mahindra Bank", short: "Kotak", type: "Private Sector Bank", badge: "Corporate Banking" },
    { name: "Vivriti Capital", short: "Vivriti", type: "Private Debt & NBFC", badge: "Structured Debt" },
    { name: "EAAA", short: "EAAA", type: "Alternative Investment Fund", badge: "Growth Credit" },
    { name: "AIMS", short: "AIMS", type: "Specialized Credit Fund", badge: "Mezzanine Capital" }
  ],

  // Capital Stack (without serial numbers, clean financial categories)
  capitalStack: [
    {
      level: "Senior",
      name: "Senior Debt & Bank Lines",
      riskProfile: "Lowest Cost of Capital",
      role: "Term Loans, Working Capital, NHAI HAM Loans",
      detail: "Secured consortium credit lines with competitive pricing and customized repayment schedules."
    },
    {
      level: "Mezzanine",
      name: "Subordinated & Structured Debt",
      riskProfile: "Hybrid Flexibility",
      role: "Mezzanine Credit, Promoter Financing",
      detail: "Flexible funding solutions designed to bridge capital gaps without giving away equity control."
    },
    {
      level: "Growth",
      name: "Institutional Growth Equity",
      riskProfile: "Strategic Value-Add",
      role: "Series A/B/C, Strategic Investors",
      detail: "Direct equity rounds with venture and private equity funds to accelerate business growth."
    },
    {
      level: "Pre-IPO",
      name: "Pre-IPO & Anchor Placements",
      riskProfile: "Public Market Readiness",
      role: "Anchor Investors, Qualified Institutions",
      detail: "Late-stage capital and cap-table structuring ahead of domestic mainboard and SME filings."
    }
  ],

  // Core Disciplines (No serial numbers)
  disciplines: [
    {
      category: "Senior Debt",
      title: "Debt Syndication & Project Credit",
      description:
        "We help companies secure term loans, working capital lines, and project financing from top Indian banks and institutions at optimal interest rates.",
      focus: "Mid-Market Corporates & Builders",
      deliverable: "Bank sanction letters & loan agreements"
    },
    {
      category: "Institutional Capital",
      title: "Growth Equity Placement",
      description:
        "We assist fast-growing businesses in raising private equity and venture capital from reputable institutional funds.",
      focus: "Profitable & High-Growth Companies",
      deliverable: "Investor term sheets & definitive deals"
    },
    {
      category: "Public Readiness",
      title: "Pre-IPO Advisory",
      description:
        "We guide enterprises through financial structuring, balance sheet preparation, and institutional anchor rounds ahead of public listing.",
      focus: "Mainboard & SME IPO Candidates",
      deliverable: "Clean cap table & anchor placements"
    },
    {
      category: "Clean Energy",
      title: "Solar & Renewable Projects",
      description:
        "Dedicated debt and equity financing for utility-scale solar parks, rooftop installations, and green infrastructure assets.",
      focus: "Solar EPCs & IPP Developers",
      deliverable: "Project loan sanctions & tariff models"
    },
    {
      category: "Tenders & Public Works",
      title: "Bid Advisory & Modeling",
      description:
        "Financial viability models, tender compliance checks, and bank guarantee coordination for government concessions.",
      focus: "Highway, Rail & Civil Bidders",
      deliverable: "Verified financial bid & bank guarantees"
    },
    {
      category: "Strategic Advisory",
      title: "Mergers & Acquisitions",
      description:
        "Comprehensive buy-side and sell-side advisory, business valuation, and closing support for acquisitions and joint ventures.",
      focus: "Corporate Divestitures & Expansions",
      deliverable: "Valuation reports & closing contracts"
    }
  ],

  // Mandate Matrix (DPR / TEV intentionally empty for future points)
  mandatesMatrix: {
    Equity: {
      target: "Founders & expanding businesses",
      headline: "Institutional Equity Capital",
      summary: "End-to-end support to raise capital, optimize shareholding, and negotiate favorable terms with funds.",
      steps: [
        "Create pitch deck and financial projection model",
        "Perform company valuation and cap-table planning",
        "Targeted introduction to active institutional funds",
        "Negotiate term sheet terms and valuation metrics",
        "Complete investor due diligence and legal closing"
      ]
    },
    Debt: {
      target: "Industrial enterprises & project developers",
      headline: "Optimized Bank Loan Syndication",
      summary: "We design bankable credit proposals to secure multi-crore project loans and working capital lines.",
      steps: [
        "Evaluate company borrowing capacity and collateral",
        "Draft bank information memorandum and CMA data",
        "Present proposal to bank credit committees",
        "Negotiate sanction terms, interest rates, and limits",
        "Assist legal documentation and initial loan payout"
      ]
    },
    "Pre-IPO": {
      target: "Established companies planning an IPO",
      headline: "Pre-IPO Structuring & Anchor Rounds",
      summary: "Strengthen governance, simplify debt, and secure institutional anchor investors prior to DRHP filing.",
      steps: [
        "Review financial statements and corporate governance",
        "Restructure debts and clean up shareholding",
        "Introduce pre-IPO cornerstone and family office investors",
        "Help coordinate merchant bankers and legal advisors",
        "Plan filing timeline and market launch positioning"
      ]
    },
    "DPR / TEV": {
      target: "Lenders, contractors & project developers",
      headline: "Detailed Project Reports & Feasibility",
      summary: "Workstream details for DPR and TEV studies will be updated shortly.",
      steps: []
    },
    Bid: {
      target: "Infrastructure contractors & concession bidders",
      headline: "Concession Modeling & Tender Compliance",
      summary: "Financial engineering and documentation for competitive infrastructure tenders.",
      steps: [
        "Review RFP qualification and consortium structure",
        "Build financial bid models and test returns",
        "Audit concession contracts and key obligations",
        "Arrange tender bid bonds and bank guarantees",
        "Complete submission and post-award bank closure"
      ]
    }
  },

  // Approach (No Roman numerals, simple language)
  approach: [
    {
      name: "Diagnose",
      tagline: "Understand the Business",
      description: "We review your operations, historical financials, and growth goals before suggesting any capital structure."
    },
    {
      name: "Structure",
      tagline: "Design the Right Mix",
      description: "We decide the right balance of bank debt, equity, or hybrid instruments and build bankable financial models."
    },
    {
      name: "Execute",
      tagline: "Lead Negotiation",
      description: "Our partners personally handle lender meetings, investor calls, and term sheet discussions from start to finish."
    },
    {
      name: "Close",
      tagline: "Deliver Results",
      description: "We coordinate legal agreements, satisfaction of pre-disbursement conditions, and funds receipt."
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
      label: "Deals closed successfully",
      accent: "#FF8A3D"
    },
    {
      value: "1,000+",
      label: "Technical reports prepared",
      accent: "#6E93C7"
    },
    {
      value: "10+",
      label: "Years of market trust",
      accent: "#A9B8CF"
    }
  ],

  // Sectors including extra boxes for Solar Projects (no serial numbers)
    sectors: [
    {
      name: "Solar & Clean Energy",
      detail: "Utility-scale ground mounted solar parks, captive C&I installations, solar EPC debt syndication, and green financing."
    },
    {
      name: "Roads & Highways",
      detail: "NHAI HAM concessions, expressways, bridges, ports, and tollway asset monetization mandates."
    },
    {
      name: "Gas & Energy Infrastructure",
      detail: "City gas distribution networks, LNG terminals, bulk storage facilities, and pipeline infrastructure."
    },
    {
      name: "Agriculture & Food Processing",
      detail: "Mega food parks, bulk cold chain facilities, automated dairy processing, and grain supply logistics."
    },
    {
      name: "Agri-Tech & Farm Automation",
      detail: "Precision agriculture platforms, sensor networks, supply chain automation, and cold storage logistics."
    },
    {
      name: "Robotics & Automation",
      detail: "Industrial robotics, automated warehouse machinery, smart manufacturing lines, and deep-tech hardware."
    },
    {
      name: "Solar Rooftop & Captive Power",
      detail: "Commercial and industrial captive solar units, power purchase agreements (PPA) financing, and debt refinancing."
    },
    {
      name: "Manufacturing & Core Industry",
      detail: "Pharma API facilities, auto component plants, data centers, high-spec industrial warehousing, and commercial assets."
    }
  ],

  // Single Flagship Landmark Deal (₹250 Cr Highway Concession)
  flagshipDeal: {
    size: "₹250 Cr",
    category: "Senior Debt Syndication",
    sector: "Infrastructure / Highway Concession",
    title: "NHAI Highway Concession Project Financing",
    outcome:
      "Structured and closed a ₹250 Cr senior debt facility with a leading bank consortium, securing an optimized repayment period and low-cost interest rate benchmark.",
    appraisalStandard: "Tier-1 Bank Consortium",
    executionSpeed: "Financial Closure in 6 Weeks",
    // Realistic high quality infrastructure bridge / highway photography
    imageUrl: "https://images.cnbctv18.com/uploads/2026/05/ai-generated-nhai-07may-2026-05-9b01721636dc09de923a6cd03815afd3.jpg?impolicy=website&width=1200&height=900"
  },

  faqs: [
    {
      question: "How long does a bank loan syndication or equity raise usually take?",
      answer: "Bank loan approvals and financial sanctions typically take between 4 to 8 weeks depending on bank processes. Equity rounds and M&A transactions usually take 10 to 16 weeks from creating the pitch materials to final closing."
    },
    {
      question: "How do you ensure our financial data remains safe and confidential?",
      answer: "We sign mutual Non-Disclosure Agreements (NDAs) before reviewing any business plans, financial models, or internal records. All documents are handled directly by senior partners."
    },
    {
      question: "Which banks and lending institutions does Prosync work with?",
      answer: "We maintain direct, active working relationships with major public sector banks (like SBI, Bank of Baroda, Canara Bank), private banks (such as Kotak), and dedicated credit funds (like Vivriti Capital, EAAA, and AIMS)."
    },
    {
      question: "Can Prosync combine bank debt with equity funding?",
      answer: "Yes. Many of our clients benefit from a balanced combination of low-cost bank loans and growth equity to expand rapidly without giving up unnecessary ownership."
    },
    {
      question: "What is your standard fee structure?",
      answer: "We operate on a straightforward structure that combines a modest work retainer with a success fee paid only upon successful transaction closing and loan disbursement."
    }
  ]
};
