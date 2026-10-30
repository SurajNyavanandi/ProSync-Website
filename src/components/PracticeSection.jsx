import { useState } from "react";
import {
  ArrowRight,
  Landmark,
  TrendingUp,
  Compass,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Banknote
} from "lucide-react";
import { Reveal, TiltCard } from "./common/Motion";

export default function PracticeSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "debt-syndication",
      number: "01",
      title: "Corporate Debt Syndication",
      category: "Senior Debt & Consortiums",
      ticketSize: "₹50 Cr - ₹500 Cr+",
      stat: "₹5,000Cr+ Mobilized",
      icon: Landmark,
      description:
        "End-to-end debt mobilization for project capital expenditure, consortium loan structuring, and multi-bank financial closure with top Indian lenders.",
      deliverables: [
        "Lender-grade financial modeling & TEV validation",
        "Consortium sanction letters & pricing negotiations",
        "Security charge creation & benchmark rate alignment",
        "Escrow & DSRA account mechanism structuring"
      ],
      lenders: "State Bank of India, Bank of Baroda, Canara Bank, PNB Consortia",
      turnaround: "4-6 Weeks to Sanction"
    },
    {
      id: "capital-transactions",
      number: "02",
      title: "Structured Capital & Private Credit",
      category: "Mezzanine & Growth Funding",
      ticketSize: "₹25 Cr - ₹200 Cr",
      stat: "Partner Led",
      icon: TrendingUp,
      description:
        "Bespoke alternative capital advisory, promoter debt refinancing, mezzanine facilities, and private credit placement tailored to promoter cap-tables.",
      deliverables: [
        "Structured credit & promoter share pledge finance",
        "Alternative investment fund (AIF) placement",
        "Flexible covenants & milestone-based amortization",
        "Subordinated debt with equity upside options"
      ],
      lenders: "Vivriti Capital, Edelweiss Alternatives, Specialized AIFs",
      turnaround: "3-5 Weeks Execution"
    },
    {
      id: "project-advisory",
      number: "03",
      title: "Project Appraisal & TEV Studies",
      category: "Infrastructure & Valuation",
      ticketSize: "₹25 Cr - ₹500 Cr+",
      stat: "99% Sanction Rate",
      icon: Compass,
      description:
        "Rigorous techno-economic appraisal, detailed project reports (DPR), sensitivity stress-testing, and compliance modeling for institutional sanction.",
      deliverables: [
        "Techno-Economic Viability (TEV) appraisal reports",
        "DPR preparation for Public & Private lead banks",
        "Capex validation & dynamic cash-flow stress testing",
        "Credit committee presentation & defense"
      ],
      lenders: "Tier-1 PSU Lead Bank Panels & Risk Desks",
      turnaround: "10-14 Days Delivery"
    },
    {
      id: "working-capital",
      number: "04",
      title: "Working Capital Facilities",
      category: "Consortium Lines & Limits",
      ticketSize: "₹25 Cr - ₹300 Cr",
      stat: "Multi-Bank Lines",
      icon: Layers,
      description:
        "Optimization of fund-based cash credit limits, export financing, and non-fund instruments (Letter of Credit & Bank Guarantees) across multi-bank consortiums.",
      deliverables: [
        "CMA data modeling & assessment of working capital",
        "Bank Guarantee (BG) & Letter of Credit (LC) consortiums",
        "Working capital cycle optimization & debtor limits",
        "Consortium interchangeability agreements"
      ],
      lenders: "Multi-Bank Consortiums & Joint Lending Forums",
      turnaround: "3-4 Weeks Enhancement"
    }
  ];

  const currentService = services[activeTab];
  const CurrentIcon = currentService.icon;

  const handleDiscussMandate = (title) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(
        new CustomEvent("prosync:selectMandate", {
          detail: { mandate: title }
        })
      );
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-[#FBFBFC] text-[#1D1D1F] border-b border-black/[0.05]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 space-y-12 sm:space-y-16">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                            */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
          <Reveal className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#002244]/[0.05] text-[#002244] text-[11px] font-mono font-bold tracking-wider uppercase mb-2 border border-[#002244]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              <span>WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#002244] font-sans">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed">
              Comprehensive financial advisory and debt syndication tailored for your business.
            </p>
          </Reveal>

          <Reveal delay={100} className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#6E6E73]">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Direct Credit Committee Presentation</span>
          </Reveal>
        </div>

        {/* ======================================================== */}
        {/* 21ST.DEV SEGMENTED SELECTOR PILLS (NO 1,2 PAGINATION)    */}
        {/* ======================================================== */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl bg-[#F5F5F7] border border-black/[0.06]">
          {services.map((service, idx) => {
            const isSelected = activeTab === idx;
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex-1 min-w-[240px] sm:min-w-0 py-3 px-4 rounded-xl sm:rounded-2xl text-left transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer ${
                  isSelected
                    ? "bg-[#002244] text-white shadow-md shadow-[#002244]/15"
                    : "bg-transparent text-[#52525B] hover:text-[#002244] hover:bg-white/60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-white/10 text-[#FF8A3D]"
                        : "bg-white text-[#002244] border border-black/[0.06]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${
                      isSelected ? "text-slate-300" : "text-[#6E6E73]"
                    }`}>
                      Stage {service.number}
                    </span>
                    <span className="text-xs sm:text-sm font-bold block leading-tight">
                      {service.title}
                    </span>
                  </div>
                </div>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 hidden xl:inline-block ${
                    isSelected
                      ? "bg-[#FF5500] text-white font-bold"
                      : "bg-black/[0.04] text-[#6E6E73]"
                  }`}
                >
                  {service.ticketSize.split(" - ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* ACTIVE SERVICE DEEP-DIVE SPOTLIGHT SHOWCASE              */}
        {/* ======================================================== */}
        <Reveal key={currentService.id}>
          <div className="rounded-3xl bg-white border border-black/[0.08] p-7 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,34,68,0.06)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Scope & Ticket Parameters */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#FF5500]/10 text-[#FF5500] text-xs font-mono font-bold uppercase tracking-wider">
                    {currentService.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200/60">
                    {currentService.stat}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#002244] text-[#FF8A3D] flex items-center justify-center shrink-0">
                      <CurrentIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002244] tracking-tight">
                      {currentService.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#52525B] leading-relaxed font-normal pt-2">
                    {currentService.description}
                  </p>
                </div>

                {/* Key Underwriting Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] font-bold block">
                      Target Mandate Ticket Size
                    </span>
                    <span className="text-base font-mono font-extrabold text-[#002244]">
                      {currentService.ticketSize}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] font-bold block">
                      Sanction Timeline
                    </span>
                    <span className="text-base font-mono font-extrabold text-emerald-700">
                      {currentService.turnaround}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleDiscussMandate(currentService.title)}
                    className="px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#002244] hover:bg-[#FF5500] shadow-md shadow-[#002244]/15 hover:shadow-[#FF5500]/25 transition-all inline-flex items-center gap-2 min-h-[46px] active:scale-95 cursor-pointer"
                  >
                    <span>Discuss {currentService.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#transactions"
                    className="px-6 py-3.5 rounded-full text-xs font-semibold text-[#002244] bg-white border border-black/[0.08] hover:bg-slate-50 transition-all inline-flex items-center gap-2 min-h-[46px] cursor-pointer"
                  >
                    <span>View Closed Mandates</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Institutional Deliverables & Bank Panel */}
              <div className="lg:col-span-5 space-y-6 rounded-2xl bg-[#002244] text-white p-6 sm:p-8">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-[#FF8A3D] uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#FF8A3D]" />
                    <span>Lender Deliverables</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-300">
                    RBI / IBA Standards
                  </span>
                </div>

                <div className="space-y-3">
                  {currentService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                    Target Institutional Syndicate
                  </span>
                  <p className="text-xs text-slate-300 font-mono">
                    {currentService.lenders}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* 4-CARD QUICK OVERVIEW GRID (ALL 4 VISIBLE AT A GLANCE)   */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, index) => {
            const isSelected = activeTab === index;
            const CardIcon = item.icon;
            return (
              <TiltCard
                key={item.id}
                maxTilt={4}
                scale={1.015}
                glowColor="rgba(0, 34, 68, 0.08)"
                className="h-full rounded-2xl"
              >
                <div
                  onClick={() => setActiveTab(index)}
                  className={`h-full p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? "bg-white border-[#002244] shadow-md ring-2 ring-[#002244]/10"
                      : "bg-white border-black/[0.06] hover:border-[#FF5500]/50 hover:shadow-xs"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-[#002244] text-[#FF8A3D]"
                            : "bg-[#F5F5F7] text-[#002244]"
                        }`}
                      >
                        <CardIcon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#FF5500]">
                        {item.number}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-[#002244] leading-snug">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-mono text-[#6E6E73] block mt-1">
                        {item.ticketSize}
                      </span>
                    </div>

                    <p className="text-xs text-[#52525B] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold">
                    <span className={isSelected ? "text-[#002244]" : "text-[#6E6E73]"}>
                      {isSelected ? "Active View" : "Inspect Specs"}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "text-[#FF5500] translate-x-1" : "text-slate-400"}`} />
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Bottom Underwriting Scope Banner */}
        <Reveal delay={150} className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 max-w-2xl text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Banknote className="w-4 h-4 text-[#FF5500]" />
              <h4 className="text-base sm:text-lg font-bold text-[#002244]">
                Need customized bank consortium underwriting?
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
              We structure debt and mezzanine facilities directly aligned with Tier-1 PSU and private bank credit committees.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleDiscussMandate("Consortium Syndication")}
            className="shrink-0 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#002244] hover:bg-[#FF5500] transition-all min-h-[44px] flex items-center shadow-md active:scale-95 cursor-pointer"
          >
            Discuss a Mandate
          </button>
        </Reveal>

      </div>
    </section>
  );
}
