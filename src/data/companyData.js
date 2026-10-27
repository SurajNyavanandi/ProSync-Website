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

  // Team & Employees (DPA specialists & Manager Naveen matching grid reference layout)
  employees: [
    {
      name: "Naveen",
      role: "Manager — Deal Execution & DPA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      department: "DPA & Deal Desk"
    },
    {
      name: "Dr. Devulapalli Sai",
      role: "Senior DPA & Appraisal Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
      department: "Techno-Economic Appraisal"
    },
    {
      name: "Aswini Mylai",
      role: "DPA Financial Modeler",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      department: "Financial Modeling"
    },
    {
      name: "T. Malathi",
      role: "Project Finance Associate",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
      department: "Syndication Desk"
    },
    {
      name: "D Hemanth Kumar",
      role: "Credit & Due Diligence Analyst",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      department: "Lender Coordination"
    },
    {
      name: "K. Sravan Kumar",
      role: "Solar & Clean Energy Associate",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      department: "Renewables Desk"
    },
    {
      name: "P. Rithika Reddy",
      role: "DPA Research Analyst",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
      department: "Industry Research"
    },
    {
      name: "V. Harish Rao",
      role: "Documentation & Closing Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
      department: "Transaction Closing"
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
    { name: "Bank of Baroda", short: "BPB", type: "Public Sector Bank", badge: "Project Credit" },
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
      detail: "Utility-scale ground mounted solar plants, rooftop C&I installations, solar park development, and solar EPC project debt.",
      isSolar: true
    },
    {
      name: "Solar Rooftop & Captive",
      detail: "Commercial and industrial captive solar units, power purchase agreements (PPA) financing, and renewable debt refinancing.",
      isSolar: true
    },
    {
      name: "Gas & Energy Infrastructure",
      detail: "City gas distribution networks, LNG terminals, storage facilities, and green energy infrastructure.",
      isSolar: false
    },
    {
      name: "Roads & Highways",
      detail: "NHAI HAM concessions, expressways, bridges, ports, and tollway monetization mandates.",
      isSolar: false
    },
    {
      name: "Agriculture & Food Processing",
      detail: "Modern food parks, bulk cold chain storage, grain logistics, and automated dairy plants.",
      isSolar: false
    },
    {
      name: "Agri-Tech & Farm Automation",
      detail: "Precision agriculture, farm-to-consumer platforms, sensor-based supply chain tech, and cold storage networks.",
      isSolar: false
    },
    {
      name: "Robotics & Automation",
      detail: "Industrial robotics, automated warehouse machinery, smart manufacturing, and deep-tech hardware.",
      isSolar: false
    },
    {
      name: "Manufacturing & Commercial Real Estate",
      detail: "Pharma API facilities, auto component manufacturing units, data centers, and industrial parks.",
      isSolar: false
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
    imageUrl: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=1200&auto=format&fit=crop"
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
