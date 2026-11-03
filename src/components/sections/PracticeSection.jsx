import { useState } from "react";
import {
  ArrowRight,
  Landmark,
  TrendingUp,
  Compass,
  Layers,
  CheckCircle2,
  Building2,
  ArrowUpRight,
  Clock,
  Banknote
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../common/Motion";
import { IMAGES } from "../../data/images";

export default function PracticeSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "debt-syndication",
      number: "01",
      title: "Corporate Debt Syndication",
      category: "Senior Debt & Consortium Loans",
      ticketSize: "₹50 Cr - ₹500 Cr+",
      stat: "₹2,500+ Cr Closed",
      icon: Landmark,
      image: IMAGES.SERVICE_DEBT,
      description:
        "Comprehensive debt mobilization for project capital expenditure, multi-bank consortium loans, and financial closure with leading Indian lenders.",
      deliverables: [
        "Lender-grade financial modeling & cash-flow sensitivity",
        "Consortium sanction letters & competitive interest pricing",
        "Security charge creation & collateral covenant structuring",
        "Escrow and debt-service reserve (DSRA) mechanism"
      ],
      lenders: "Tier-1 Public Sector & Private Commercial Bank Consortia",
      turnaround: "4-6 Weeks to Sanction"
    },
    {
      id: "capital-transactions",
      number: "02",
      title: "Structured Capital & Private Credit",
      category: "Mezzanine & Growth Credit",
      ticketSize: "₹25 Cr - ₹200 Cr",
      stat: "Partner Led",
      icon: TrendingUp,
      image: IMAGES.SERVICE_CAPITAL,
      description:
        "Alternative capital advisory, promoter financing, mezzanine credit facilities, and institutional growth capital tailored to promoter goals.",
      deliverables: [
        "Structured credit & promoter share-pledge finance",
        "Alternative Investment Fund (AIF) placement",
        "Flexible repayment moratoriums & milestone amortization",
        "Subordinated debt with customized equity upside"
      ],
      lenders: "Private Credit Funds, NBFCs & AIF Institutions",
      turnaround: "3-5 Weeks Execution"
    },
    {
      id: "project-advisory",
      number: "03",
      title: "Project Appraisal & TEV Studies",
      category: "Infrastructure & Techno-Economic Feasibility",
      ticketSize: "₹25 Cr - ₹500 Cr+",
      stat: "99% Sanction Rate",
      icon: Compass,
      image: IMAGES.SERVICE_PROJECT,
      description:
        "Detailed Project Reports (DPR) and Techno-Economic Viability (TEV) studies prepared to bank consortium and credit committee standards.",
      deliverables: [
        "Techno-Economic Viability (TEV) reports compliant with RBI norms",
        "Comprehensive Detailed Project Reports (DPR) for lead banks",
        "Capex validation and dynamic debt-service coverage models",
        "Direct presentation and defense before bank credit committees"
      ],
      lenders: "Tier-1 PSU Lead Bank Panels & Risk Desks",
      turnaround: "10-14 Days Delivery"
    },
    {
      id: "working-capital",
      number: "04",
      title: "Working Capital Facilities",
      category: "Fund & Non-Fund Consortium Lines",
      ticketSize: "₹25 Cr - ₹300 Cr",
      stat: "Multi-Bank Lines",
      icon: Layers,
      image: IMAGES.SERVICE_WORKING_CAPITAL,
      description:
        "Optimization of cash credit limits, export credit, and non-fund instruments (Letters of Credit and Bank Guarantees) across joint lending consortiums.",
      deliverables: [
        "CMA data modeling & working capital gap assessment",
        "Bank Guarantee (BG) & Letter of Credit (LC) consortium facilities",
        "Working capital cycle optimization to lower interest costs",
        "Consortium interchangeability and security agreements"
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
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
          <Reveal className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF5500] uppercase tracking-[0.2em] block">
              PRACTICE AREAS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-[#002244] leading-[1.15]">
              Capital Advisory Built for Scale
            </h2>
            <p className="text-base sm:text-lg font-body text-[#52525B] font-normal leading-relaxed">
              End-to-end debt syndication, structured capital, and project appraisal led directly by senior partners.
            </p>
          </Reveal>

          <Reveal delay={100} className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#6E6E73]">
            <Building2 className="w-4 h-4 text-[#002244]" />
            <span>Direct Credit Committee Presentation</span>
          </Reveal>
        </div>

        {/* ASYMMETRIC 2-COLUMN SPLIT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: 4 Interactive Service Tabs (Stacked) */}
          <div className="lg:col-span-5 space-y-3">
            {services.map((service, idx) => {
              const isSelected = activeTab === idx;
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer group ${
                    isSelected
                      ? "bg-[#002244] text-white border-[#002244] shadow-lg shadow-[#002244]/15 scale-[1.01]"
                      : "bg-white text-[#1D1D1F] border-black/[0.06] hover:border-[#FF5500]/40 hover:bg-slate-50/80 shadow-2xs"
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#FF5500] text-white"
                          : "bg-[#F5F5F7] text-[#002244] group-hover:bg-[#002244] group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="truncate">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                          isSelected ? "text-[#FF8A3D]" : "text-[#FF5500]"
                        }`}>
                          Stage {service.number}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.2 rounded-full ${
                          isSelected ? "bg-white/10 text-slate-300" : "bg-black/[0.04] text-[#6E6E73]"
                        }`}>
                          {service.ticketSize.split(" - ")[0]}
                        </span>
                      </div>
                      <h3 className={`text-sm sm:text-base font-bold font-heading truncate leading-snug ${
                        isSelected ? "text-white" : "text-[#002244]"
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-xs font-body truncate mt-0.5 ${
                        isSelected ? "text-slate-300" : "text-[#6E6E73]"
                      }`}>
                        {service.category}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected
                      ? "text-[#FF8A3D] translate-x-1"
                      : "text-slate-400 group-hover:text-[#002244] group-hover:translate-x-1"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Spotlight Card (Asymmetric Deep Dive) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-3xl bg-white border border-black/[0.08] overflow-hidden shadow-[0_20px_50px_rgba(0,34,68,0.06)]"
              >
                {/* Photo Top Banner Strip */}
                {currentService.image && (
                  <div className="relative aspect-[21/9] w-full overflow-hidden bg-slate-900 border-b border-black/[0.06]">
                    <img
                      src={currentService.image}
                      alt={currentService.title}
                      className="w-full h-full object-cover filter contrast-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-xs font-mono font-bold text-[#FF8A3D] uppercase tracking-wider">
                        Practice Area 0{currentService.number}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                        {currentService.ticketSize}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-7 sm:p-9 lg:p-10 space-y-6">
                  {/* Header Metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-black/[0.06]">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#FF5500]/10 text-[#FF5500] text-xs font-mono font-bold uppercase tracking-wider">
                        {currentService.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200/60">
                        {currentService.stat}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#6E6E73]">
                      Milestone 0{currentService.number}
                    </span>
                  </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#002244] text-[#FF8A3D] flex items-center justify-center shrink-0 shadow-xs">
                      <CurrentIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#002244] tracking-tight">
                      {currentService.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base font-body text-[#52525B] leading-relaxed font-normal">
                    {currentService.description}
                  </p>
                </div>

                {/* Target Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white text-[#FF5500] flex items-center justify-center shrink-0 shadow-2xs border border-black/[0.04]">
                      <Banknote className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] font-bold block">
                        Target Ticket Size
                      </span>
                      <span className="text-sm sm:text-base font-mono font-extrabold text-[#002244]">
                        {currentService.ticketSize}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs border border-black/[0.04]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] font-bold block">
                        Sanction Timeline
                      </span>
                      <span className="text-sm sm:text-base font-mono font-extrabold text-emerald-700">
                        {currentService.turnaround}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Institutional Deliverables Card */}
                <div className="rounded-2xl bg-[#002244] text-white p-5 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#FF8A3D] uppercase tracking-wider flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Deliverables &amp; Loan Documents</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-300">
                      Bank Consortium Grade
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentService.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                        <span className="text-xs font-body text-slate-200 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-300">
                    <span className="text-slate-400">Target Lending Partners:</span>
                    <span className="text-white font-semibold">{currentService.lenders}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => handleDiscussMandate(currentService.title)}
                    className="px-7 py-3.5 rounded-full text-xs font-bold font-heading text-white bg-[#002244] hover:bg-[#FF5500] shadow-md shadow-[#002244]/15 hover:shadow-[#FF5500]/25 transition-all inline-flex items-center gap-2 min-h-[46px] active:scale-95 cursor-pointer"
                  >
                    <span>Discuss {currentService.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#transactions"
                    className="px-6 py-3.5 rounded-full text-xs font-semibold font-heading text-[#002244] bg-white border border-black/[0.08] hover:bg-slate-50 transition-all inline-flex items-center gap-2 min-h-[46px] cursor-pointer"
                  >
                    <span>View Closed Mandates</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
