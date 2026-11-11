import { useState } from "react";
import {
  ArrowRight,
  Landmark,
  TrendingUp,
  Compass,
  BarChart3,
  CheckCircle2,
  X,
  ShieldCheck,
  FileText
} from "lucide-react";
import { Reveal } from "../common/Motion";
import { companyData } from "../../data/companyData";

export default function PracticeSection() {
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState(null);

  const services = [
    {
      id: "debt-structured-finance",
      title: "DEBT & STRUCTURED FINANCE",
      shortTitle: "Debt & Structured Finance",
      icon: Landmark,
      description:
        "We help businesses evaluate, structure and raise debt capital aligned with their funding requirements and business plans.",
      bullets: [
        "Project Finance",
        "Working Capital Finance",
        "Structured & Mezzanine Finance",
        "Acquisition Finance",
        "Refinancing & Debt Restructuring",
      ],
      buttonText: "ENQUIRE ABOUT DEBT FINANCING",
      deepDive: {
        headline: "End-to-End Debt Capital Structuring",
        overview:
          "From project capex syndication to multi-bank working capital lines, Prosync evaluates enterprise debt capacity, structures bankable CMAs, and interfaces directly with credit committees.",
        deliverables: [
          "Detailed Project Feasibility & Cash-Flow Stress Models",
          "Consortium & Sole Banking Lines Structuring",
          "Credit Committee Presentation & Terms Defense",
          "Escrow, Security Charge & Pre-Disbursement Compliance",
        ],
      },
    },
    {
      id: "investment-transaction-advisory",
      title: "INVESTMENT & TRANSACTION ADVISORY",
      shortTitle: "Investment & Transaction Advisory",
      icon: TrendingUp,
      description:
        "We support businesses and investors through financial analysis, transaction evaluation and capital-raising assignments.",
      bullets: [
        "Mergers & Acquisitions Advisory",
        "Equity Capital Raising Support",
        "Business Valuation",
        "Financial Due Diligence",
        "Transaction Structuring",
      ],
      buttonText: "DISCUSS A TRANSACTION",
      deepDive: {
        headline: "Institutional Capital Raising & M&A Strategy",
        overview:
          "We assist growth enterprises, mid-market founders, and institutional investors through rigorous valuation, cap-table modeling, and transaction execution from term sheet to closing.",
        deliverables: [
          "Enterprise DCF, Trading Multiples & Precedent Valuations",
          "Confidential Information Memorandum (CIM) & Investor Decks",
          "Virtual Data Room (VDR) & Due Diligence Dossiers",
          "Negotiation Governance & Definitive Agreement Support",
        ],
      },
    },
    {
      id: "project-infrastructure-advisory",
      title: "PROJECT & INFRASTRUCTURE ADVISORY",
      shortTitle: "Project & Infrastructure Advisory",
      icon: Compass,
      description:
        "We assist project promoters and businesses in assessing project viability, preparing financial plans and navigating project-related advisory requirements.",
      bullets: [
        "Techno-Economic Viability (TEV) Studies",
        "Detailed Project Reports (DPRs)",
        "Project Financial Modelling",
        "Infrastructure Advisory",
        "Bid & Tender Advisory",
      ],
      buttonText: "DISCUSS YOUR PROJECT",
      deepDive: {
        headline: "Bankable Feasibility & Concession Advisory",
        overview:
          "We prepare lender-grade techno-economic viability studies and detailed project reports for NHAI HAM concessions, utility-scale solar parks, manufacturing plants, and urban infrastructure.",
        deliverables: [
          "Techno-Economic Viability (TEV) Reports Compliant with RBI Norms",
          "Bankable Detailed Project Reports (DPR) for Lead Institutions",
          "Concession Financial Feasibility & Tariff Sensitivity",
          "Bid Advisory & Tender Feasibility Models",
        ],
      },
    },
    {
      id: "corporate-finance-research",
      title: "CORPORATE FINANCE & RESEARCH",
      shortTitle: "Corporate Finance & Research",
      icon: BarChart3,
      description:
        "We provide financial analysis and research support to businesses and investment institutions for better-informed decisions.",
      bullets: [
        "Financial Modelling & Analysis",
        "Credit Assessment",
        "Management Reporting",
        "Sector & Industry Research",
        "Investment and Portfolio Research Support",
      ],
      buttonText: "EXPLORE RESEARCH SUPPORT",
      deepDive: {
        headline: "Financial Analytics & Institutional Research Desk",
        overview:
          "We deliver institutional-quality research, independent credit assessment, and bespoke financial modeling to boards, family offices, AIFs, and enterprise finance heads.",
        deliverables: [
          "Dynamic 3-Statement Forecasting & Sensitivity Testing",
          "Counterparty & Independent Credit Risk Assessments",
          "Management Information Systems (MIS) & Executive Dashboards",
          "Sector Intelligence & Thematic Industry Studies",
        ],
      },
    },
  ];

  const handleServiceClick = (serviceTitle) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(
        new CustomEvent("prosync:selectMandate", {
          detail: { mandate: serviceTitle },
        })
      );
    }
  };

  return (
    <section
      id="services"
      className="py-20 md:py-28 relative bg-[#F7F8FA] text-[#1D1D1F] border-b border-black/[0.05]"
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12 sm:space-y-14">
        
        {/* SECTION HEADER & 4. EXACT INTRODUCTION */}
        <div className="max-w-3xl space-y-3 pb-4 border-b border-black/[0.06]">
          <Reveal delay={50}>
            <span className="text-xs font-mono font-medium text-[#002244] uppercase tracking-[0.15em] block">
              OUR EXPERTISE
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F] leading-[1.14]">
              Financial Advisory Built on Execution
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm sm:text-lg text-[#515154] leading-relaxed font-normal pt-1">
              {companyData.expertiseIntro}
            </p>
          </Reveal>
        </div>

        {/* 4 EQUAL SERVICE CARDS (GRID: 1-col mobile, 2-col tablet, 4-col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <Reveal key={svc.id} delay={idx * 80} className="h-full">
                <div className="h-full rounded-3xl bg-white border border-black/[0.08] hover:border-[#002244] p-5 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                  
                  {/* Top: Category Icon */}
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-5">
                      <div className="w-10 h-10 rounded-2xl bg-[#002244] text-white group-hover:bg-[#FF5500] flex items-center justify-center transition-colors shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-medium text-[#1D1D1F] tracking-tight leading-snug mb-3">
                      {svc.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#515154] leading-relaxed mb-5 font-normal">
                      {svc.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2 pb-5 border-b border-black/[0.06]">
                      {svc.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2 text-xs font-body text-[#1D1D1F] leading-tight"
                        >
                          <span className="text-[#FF5500] font-bold mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom: Direct CTA Button */}
                  <div className="pt-5">
                    <button
                      type="button"
                      onClick={() => handleServiceClick(svc.title)}
                      className="w-full py-3 px-4 rounded-xl text-xs font-bold font-heading text-white bg-[#002244] hover:bg-[#FF5500] transition-colors shadow-xs flex items-center justify-center gap-1.5 active:scale-98 cursor-pointer"
                    >
                      <span className="truncate">{svc.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </button>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>

      {/* DEDICATED DETAIL SECTION / MODAL FOR DEEP DIVE */}
      {selectedServiceForDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setSelectedServiceForDetail(null)}
        >
          <div
            className="w-full max-w-2xl rounded-3xl bg-white text-[#1D1D1F] border border-black/[0.08] p-6 sm:p-9 shadow-2xl relative max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedServiceForDetail(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3 pr-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5500]">
                Practice Scope
              </span>
              <h3 className="text-2xl font-bold font-heading text-[#002244]">
                {selectedServiceForDetail.title}
              </h3>
              <p className="text-sm font-body text-[#52525B] leading-relaxed">
                {selectedServiceForDetail.description}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-black/[0.06] space-y-4">
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                <h4 className="text-xs font-mono font-bold text-[#002244] uppercase tracking-wider mb-1">
                  Scope of Engagement
                </h4>
                <p className="text-xs sm:text-sm font-body text-[#475569] leading-relaxed">
                  {selectedServiceForDetail.deepDive.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-[#6E6E73] uppercase tracking-wider mb-2.5">
                  Core Mandate Offerings
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedServiceForDetail.bullets.map((b, bIdx) => (
                    <div
                      key={bIdx}
                      className="p-2.5 rounded-xl bg-white border border-black/[0.08] text-xs font-medium text-[#1D1D1F] flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-[#6E6E73] uppercase tracking-wider mb-2.5">
                  Standard Deliverables
                </h4>
                <ul className="space-y-2">
                  {selectedServiceForDetail.deepDive.deliverables.map((d, dIdx) => (
                    <li
                      key={dIdx}
                      className="text-xs font-body text-[#475569] flex items-start gap-2"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#002244] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-[#6E6E73] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Partner-led mandate execution</span>
              </span>

              <button
                type="button"
                onClick={() => {
                  const title = selectedServiceForDetail.title;
                  setSelectedServiceForDetail(null);
                  handleServiceClick(title);
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold font-heading text-white bg-[#002244] hover:bg-[#FF5500] transition-colors cursor-pointer"
              >
                {selectedServiceForDetail.buttonText}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
