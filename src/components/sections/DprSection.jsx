import { 
  FileText, 
  CheckCircle2, 
  TrendingUp, 
  Calculator, 
  Building2, 
  Landmark, 
  Factory, 
  HeartPulse, 
  SunMedium, 
  Hotel, 
  Briefcase, 
  ShieldAlert,
  ArrowRight,
  Layers,
  Award,
  Target,
  Compass,
  ArrowUpRight
} from "lucide-react";
import { Reveal } from "../common/Motion";

export default function DprSection() {
  const industries = [
    {
      title: "Manufacturing",
      desc: "Industrial machinery, process plants, engineering, auto ancillaries, specialty chemicals, and materials.",
      icon: Factory,
    },
    {
      title: "MSME / Other",
      desc: "Mid-market enterprise expansions, cluster developments, processing units, and precision engineering.",
      icon: Briefcase,
    },
    {
      title: "Infrastructure",
      desc: "Highways & roads, logistics hubs, warehousing, industrial parks, and core civil utilities.",
      icon: Building2,
    },
    {
      title: "Healthcare",
      desc: "Super-specialty hospitals, medical diagnostic networks, specialty clinics, and pharma infrastructure.",
      icon: HeartPulse,
    },
    {
      title: "Renewable Energy",
      desc: "Ground-mounted solar IPP projects, commercial rooftop installations, and green infrastructure.",
      icon: SunMedium,
    },
    {
      title: "Hospitality",
      desc: "Business hotels, leisure resorts, convention centers, and commercial hospitality assets.",
      icon: Hotel,
    },
    {
      title: "Commercial & Industrial Projects",
      desc: "Commercial office complexes, industrial warehousing parks, integrated logistics hubs, and modern supply-chain facilities.",
      icon: Building2,
    },
  ];

  return (
    <div className="w-full bg-slate-50/60 divide-y divide-slate-200/80 font-sans text-brand-text-dark">
      
      {/* 1. DPR SERVICES (#dpr-services) */}
      <section id="dpr-services" className="py-20 md:py-24 scroll-mt-24">
        <div className="w-full max-w-310 mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-mono uppercase tracking-wider mb-3">
                <FileText className="w-3.5 h-3.5 text-brand-orange" />
                <span>Bankable Project Documentation</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
                Detailed Project Report (DPR) Preparation
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-sm sm:text-base text-slate-700 mt-3 leading-relaxed font-medium">
                Structured Detailed Project Reports for bank financing, project appraisal and investment evaluation.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Project Background & Promoters",
                desc: "Promoter track record, company genesis, operational background, and strategic rationale for the venture.",
              },
              {
                title: "Detailed Project Cost & Capex",
                desc: "Itemized capital expenditure breakdown including land, civil works, plant & machinery, contingencies, and margin money.",
              },
              {
                title: "Means of Finance",
                desc: "Balanced capital structuring outlining promoter equity, term loan debt requirement, internal accruals, and grants.",
              },
              {
                title: "Implementation Plan",
                desc: "Milestone-based project implementation schedule, procurement schedules, and commissioning timelines.",
              },
              {
                title: "Financial Projections",
                desc: "Multi-year revenue forecasts, operating expenditure modeling, EBITDA analysis, and cash flow waterfalls.",
              },
              {
                title: "Repayment & Sensitivity Analysis",
                desc: "Debt service schedule, interest coverage evaluation, break-even point analysis, and downside sensitivity tests.",
              },
            ].map((card, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand-navy/5 text-brand-orange flex items-center justify-center font-mono text-xs font-bold mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold font-heading text-brand-navy mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-8 flex justify-start">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-brand-navy hover:bg-brand-orange text-white text-xs sm:text-sm font-bold font-heading transition-all duration-200 inline-flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Discuss Your DPR Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* 2. FEASIBILITY ANALYSIS (#feasibility) */}
      <section id="feasibility" className="py-20 md:py-24 bg-white scroll-mt-24">
        <div className="w-full max-w-310 mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-mono uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Viability &amp; Market Assessment</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
                  Project Viability &amp; Feasibility Analysis
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We conduct in-depth analysis of project viability, market and business assumptions, capital project cost, expected revenue, profitability, and project funding requirements.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="space-y-3 pt-2">
                  {[
                    "Market demand evaluation, target customer profiles, and competitive environment",
                    "Production capacity utilization curves and cost-of-production parameters",
                    "Operating margins, EBITDA projections, and net profit generation potential",
                    "Working capital cycle assessment and fund deployment timing",
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Crucial Regulatory & Compliance Notice */}
              <Reveal delay={240}>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5 leading-relaxed">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Regulatory Note:</strong> Our studies evaluate techno-economic and commercial feasibility for project decision-making. No wording or advisory implies guaranteed bank approval, sanction, or project success.
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={150}>
                <div className="bg-brand-navy/5 rounded-3xl p-7 sm:p-9 border border-brand-navy/15 relative overflow-hidden">
                  <h3 className="text-lg font-bold font-heading text-brand-navy mb-4">
                    Key Feasibility Pillars Assessed
                  </h3>
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <div className="font-bold text-brand-navy">Technical Viability</div>
                      <div className="text-slate-500 mt-0.5">Technology selection, equipment suitability, raw material availability, and power/water infrastructure.</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <div className="font-bold text-brand-navy">Commercial &amp; Market Feasibility</div>
                      <div className="text-slate-500 mt-0.5">Offtake arrangements, pricing dynamics, distribution logistics, and demand-supply gap analysis.</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <div className="font-bold text-brand-navy">Financial Feasibility &amp; Return Metrics</div>
                      <div className="text-slate-500 mt-0.5">Project IRR, Equity IRR, payback period, net present value (NPV), and sensitivity scenarios.</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FINANCIAL PROJECTIONS (#financial-projections) */}
      <section id="financial-projections" className="py-20 md:py-24 scroll-mt-24">
        <div className="w-full max-w-310 mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-mono uppercase tracking-wider mb-3">
                <Calculator className="w-3.5 h-3.5 text-brand-orange" />
                <span>Quantitative Modeling</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
                Financial Projections &amp; Debt Servicing Analysis
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Quantitative multi-year modeling incorporating project assumptions, operating costs, capacity utilisation schedules, and capital financing structure tailored for lender scrutiny.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Profit & Loss (P&L)",
                desc: "Projected revenue, variable/fixed operational costs, gross margins, EBITDA, depreciation, interest, and PAT over the loan tenure.",
              },
              {
                title: "Cash Flow Statements",
                desc: "Cash inflows from operations, debt drawdowns, capex outflows, tax provisions, and debt service reserves.",
              },
              {
                title: "Balance Sheet Projections",
                desc: "Projected asset base, equity capitalization, long-term debt liabilities, working capital balances, and net worth evolution.",
              },
              {
                title: "DSCR & Coverage Ratios",
                desc: "Debt Service Coverage Ratio (annual & average), Interest Service Coverage Ratio (ISCR), and Debt-to-Equity metrics.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-brand-navy transition-colors h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold font-heading text-brand-navy mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220} className="mt-8">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <strong className="text-brand-navy">Key Assumptions Documented:</strong> Detailed operating costs, phased capacity utilisation curves, raw material price trends, working capital cycle days, and capital financing structure.
              </div>
              <a
                href="#contact"
                className="shrink-0 text-xs font-bold font-heading px-5 py-2.5 rounded-full bg-brand-navy hover:bg-brand-orange text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Discuss Projections</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. CMA DATA PREPARATION (#cma) */}
      <section id="cma" className="py-20 md:py-24 bg-white scroll-mt-24">
        <div className="w-full max-w-310 mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-mono uppercase tracking-wider">
                  <Landmark className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Banking Credit Formats</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
                  CMA Data Preparation &amp; Bank Credit Formats
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Suitable for new term loan proposals, working capital limits, enhancement and renewal of credit facilities. Formatted strictly to lender and RBI guidelines.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>Operating Statements (Form II) reflecting 2–3 historical years and multi-year projections</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>Balance Sheet Analysis (Form III) aligning current assets and liabilities</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>Working Capital Assessment (Form IV &amp; V) using MPBF and turnover norms</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>Funds Flow Statement (Form VI) and critical banking financial ratios (Form VII)</span>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={240}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy hover:bg-brand-orange text-white text-xs font-bold font-heading transition-colors shadow-xs"
                >
                  <span>Request CMA Preparation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={150}>
                <div className="bg-slate-50 rounded-3xl p-7 sm:p-9 border border-slate-200">
                  <h3 className="text-base font-bold font-heading text-brand-navy mb-3">
                    Who Requires CMA Data?
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      <strong>New Term Loan Sanctions:</strong> Banks require comprehensive CMA modeling alongside the DPR to evaluate total indebtedness and debt-bearing capacity.
                    </p>
                    <p>
                      <strong>Working Capital Enhancements:</strong> Businesses seeking Cash Credit (CC), Overdraft (OD), or Letter of Credit (LC) / Bank Guarantee (BG) limits.
                    </p>
                    <p>
                      <strong>Annual Banking Review:</strong> Standardized annual compliance data submission to consortium lenders for limit renewal.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECT FINANCE ADVISORY (#project-finance) */}
      <section id="project-finance" className="py-20 md:py-24 scroll-mt-24">
        <div className="w-full max-w-310 mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-mono uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5 text-brand-orange" />
                <span>Capital Structuring</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
                Project Finance &amp; Means of Finance Advisory
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Support with the funding structure, means of finance, and information for discussions with banks and financial institutions.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Capital Structure Optimization",
                desc: "Determining appropriate Debt-to-Equity ratios that maximize borrowing efficiency while meeting institutional covenant benchmarks.",
              },
              {
                title: "Bankable Documentation",
                desc: "Compiling executive credit briefs, project teasers, and lender appraisal dossiers that address credit committee requirements directly.",
              },
              {
                title: "Lender Interface Support",
                desc: "Providing quantitative support and scenario defenses during technical and financial appraisal interactions with banks and financial institutions.",
              },
            ].map((col, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-brand-navy mb-2.5">
                      {col.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {col.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-brand-orange">Prosync Advisory</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Scope Clarification Notice */}
          <Reveal delay={200} className="mt-8">
            <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong>Scope Clarification:</strong> DPR preparation is an independent appraisal engagement. Additional project finance advisory, loan syndication, and lender coordination services are subject to a separately agreed scope of engagement.
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. INDUSTRIES & SECTORS (#industries) */}
      <section id="industries" className="py-20 md:py-24 bg-white scroll-mt-24">
        <div className="w-full max-w-310 mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-mono uppercase tracking-wider mb-3">
                <Factory className="w-3.5 h-3.5 text-brand-orange" />
                <span>Sector Focus</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
                Industries &amp; Project Sectors Covered
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                We formulate DPRs and feasibility models across diverse capital-intensive industry verticals.
              </p>
            </Reveal>
          </div>

          {/* Grid of 7 Sectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <Reveal key={i} delay={i * 50}>
                  <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 hover:border-brand-navy hover:bg-white transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-navy mb-4">
                        <IconComp className="w-5 h-5 text-brand-orange" />
                      </div>
                      <h3 className="text-base font-bold font-heading text-brand-navy mb-2">
                        {ind.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Mandatory Specific Disclaimer Line */}
          <Reveal delay={200} className="mt-10">
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-xs sm:text-sm text-amber-900 leading-relaxed flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Funding Disclaimer:</strong> Funding support depends on each project&apos;s specifics. No sector is guaranteed a funding route.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. WHY PROSYNC? (#why-prosync) */}
      <section id="why-prosync" className="py-20 md:py-24 scroll-mt-24 bg-slate-50/70">
        <div className="w-full max-w-310 mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-mono uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5 text-brand-orange" />
                <span>Credibility &amp; Track Record</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
                Why Prosync?
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Objective, lender-focused financial advisory grounded in institutional credit standards.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Financial Advisory Since 2015",
                desc: "Over a decade of independent financial advisory, debt syndication, and corporate transaction experience.",
                icon: Award,
              },
              {
                title: "Integrated DPR & Feasibility",
                desc: "Seamless synchronization of market assessments, technical parameters, and rigorous multi-year financial modeling.",
                icon: Calculator,
              },
              {
                title: "Bank Financing & Credit Appraisal",
                desc: "Thorough understanding of institutional lending norms, DSCR covenants, and credit committee requirements.",
                icon: Landmark,
              },
              {
                title: "Sector-Oriented Evaluation",
                desc: "Domain knowledge tailored to manufacturing, infrastructure, healthcare, green energy, hospitality, and MSMEs.",
                icon: Target,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={idx} delay={idx * 60}>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-brand-navy/5 text-brand-orange flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold font-heading text-brand-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. OUR PROCESS (#process) */}
      <section id="process" className="py-20 md:py-24 bg-white scroll-mt-24">
        <div className="w-full max-w-310 mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-mono uppercase tracking-wider mb-3">
                <Compass className="w-3.5 h-3.5 text-brand-orange" />
                <span>Structured Engagement</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
                Our Process
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Four transparent steps from initial briefing to delivery of lender-grade project documentation.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Share Project Details",
                desc: "Submit your preliminary project outline, sector, location, and proposed capex parameters via our enquiry form.",
              },
              {
                step: "02",
                title: "Initial Discussion & Assessment",
                desc: "Consultation with our advisory team to review technical feasibility, operational assumptions, and scope requirements.",
              },
              {
                step: "03",
                title: "Scope & Commercial Proposal",
                desc: "We provide a clearly defined engagement scope, milestone delivery timeline, and transparent professional quote.",
              },
              {
                step: "04",
                title: "DPR Preparation & Delivery",
                desc: "Preparation and handover of the complete Detailed Project Report, interactive financial model, and CMA compliance pack.",
              },
            ].map((p, idx) => (
              <Reveal key={idx} delay={idx * 70}>
                <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-brand-navy transition-colors h-full flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-mono font-extrabold text-brand-orange block mb-3">
                      {p.step}
                    </span>
                    <h3 className="text-base font-bold font-heading text-brand-navy mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-brand-navy hover:bg-brand-orange text-white text-xs sm:text-sm font-bold font-heading transition-all duration-200 inline-flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Submit Project Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
