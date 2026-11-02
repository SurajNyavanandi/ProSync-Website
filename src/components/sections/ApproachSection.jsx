import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { companyData } from "../../data/companyData";
import { Reveal, TiltCard } from "../common/Motion";
import { IMAGES } from "../../data/images";

export default function ApproachSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [sectorErrors, setSectorErrors] = useState({});

  const sectorList = [
    {
      id: "roads",
      number: "01",
      name: "Roads & Highways",
      tag: "Infrastructure",
      volume: "₹1,200+ Cr Syndicated",
      summary: "NHAI HAM concessions, expressways, EPC debt syndication, and toll asset monetization with Tier-1 bank consortia.",
      image: IMAGES.SECTOR_HIGHWAYS,
      deliverables: [
        "NHAI HAM Concession Appraisal & Financial Closure",
        "Dynamic Cash-Flow Modeling & Toll Traffic Sensitivity",
        "Lead Consortium Bank Syndication & Security Structuring"
      ]
    },
    {
      id: "solar",
      number: "02",
      name: "Solar & Clean Energy",
      tag: "Renewables",
      volume: "₹450+ Cr Closed",
      summary: "Utility-scale ground mounted solar parks, captive C&I installations, and green debt facilities with competitive spreads.",
      image: IMAGES.SECTOR_SOLAR,
      deliverables: [
        "Bankable PPA & SECI/State Tariff Cash Flow Modeling",
        "Green Term Loan Structuring with Specialized Lenders",
        "140 bps Weighted Borrowing Cost Optimization"
      ]
    },
    {
      id: "manufacturing",
      number: "03",
      name: "Manufacturing & Chemicals",
      tag: "Industrial",
      volume: "₹600+ Cr Sanctioned",
      summary: "Automated precision manufacturing, bulk chemical plants, specialty materials, and greenfield capex expansions.",
      image: IMAGES.SECTOR_MANUFACTURING,
      deliverables: [
        "Lender-Grade Detailed Project Report (DPR) & TEV Study",
        "Capex Construction Moratorium & Amortization Structuring",
        "Working Capital Limit Enhancement & Vendor LC Lines"
      ]
    },
    {
      id: "healthcare",
      number: "04",
      name: "Healthcare & Hospitals",
      tag: "Healthcare",
      volume: "₹350+ Cr Structured",
      summary: "Super-specialty medical centers, regional diagnostic chains, and medical equipment import LC financing.",
      image: IMAGES.SECTOR_HEALTHCARE,
      deliverables: [
        "ARPOB & Bed-Occupancy Financial Feasibility Modeling",
        "Medical Equipment Supplier Credit & Foreign LC Facilities",
        "Long-Tenor Consortium Project Debt Sanctions"
      ]
    },
    {
      id: "realestate",
      number: "05",
      name: "Real Estate & Logistics",
      tag: "Commercial",
      volume: "₹400+ Cr Financed",
      summary: "Class-A commercial IT parks, warehousing logistics parks, and lease rental discounting (LRD) facilities.",
      image: IMAGES.SECTOR_REAL_ESTATE,
      deliverables: [
        "Lease Rental Discounting (LRD) Cash Flow Ring-Fencing",
        "Escrow Account Structuring & Minimum DSCR Covenants",
        "Long-Tenor Refinancing & Moratorium Optimization"
      ]
    }
  ];

  const handleSectorError = (idx) => {
    setSectorErrors((prev) => ({ ...prev, [idx]: true }));
  };

  return (
    <section id="approach" className="py-20 md:py-28 relative bg-white text-[#1D1D1F] border-b border-black/[0.05]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 space-y-16 sm:space-y-20">
        
        {/* SECTION 1: EXECUTION METHODOLOGY */}
        <div>
          <Reveal className="max-w-2xl mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF5500] font-bold block">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-[#002244] leading-[1.15]">
              A Structured Path to Bank Sanction
            </h2>
            <p className="text-base sm:text-lg font-body text-[#52525B] font-normal leading-relaxed">
              Direct partner oversight from initial cash-flow modeling through to final bank disbursement.
            </p>
          </Reveal>

          {/* 4 Connected Execution Milestones with Progress Progression */}
          <div className="relative">
            {/* Desktop Connecting Linear Rail */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#FF5500] via-[#002244] to-emerald-500 z-0 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {companyData.approach.map((step, idx) => {
                const milestoneDeliverables = [
                  ["Historical Audit", "DSCR Baseline", "Debt Sizing"],
                  ["Dynamic CMA", "Sensitivity Models", "Lender Briefs"],
                  ["Credit Committee", "Pricing Defense", "Covenant Tuning"],
                  ["Escrow & DSRA", "Documentation", "100% Fund Release"]
                ][idx] || [];

                const stageImage = [
                  IMAGES.APPROACH_STAGE_1,
                  IMAGES.APPROACH_STAGE_2,
                  IMAGES.APPROACH_STAGE_3,
                  IMAGES.APPROACH_STAGE_4
                ][idx];

                return (
                  <Reveal key={step.step} delay={idx * 90} className="h-full">
                    <TiltCard
                      maxTilt={4}
                      scale={1.015}
                      glowColor="rgba(0, 34, 68, 0.08)"
                      className="h-full rounded-3xl"
                    >
                      <div className="h-full rounded-3xl overflow-hidden bg-[#F5F5F7] border border-black/[0.06] hover:bg-white hover:border-[#002244] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                        
                        {/* Top Stage Photo Strip */}
                        {stageImage && (
                          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 border-b border-black/[0.06]">
                            <img
                              src={stageImage}
                              alt={step.name}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.03]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-[#002244] text-white group-hover:bg-[#FF5500] flex items-center justify-center font-mono font-bold text-xs shadow-sm transition-colors">
                              {step.step}
                            </div>
                            <div className="absolute bottom-2.5 right-3 text-[10px] font-mono text-white font-semibold uppercase tracking-wider bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                              {step.tagline}
                            </div>
                          </div>
                        )}

                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-bold font-heading text-[#002244] mb-2 group-hover:text-[#FF5500] transition-colors">
                              {step.name}
                            </h3>

                          <p className="text-xs sm:text-sm font-body text-[#52525B] leading-relaxed font-normal mb-4">
                            {step.description}
                          </p>

                          {/* Deliverable Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {milestoneDeliverables.map((d, dIdx) => (
                              <span
                                key={dIdx}
                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-black/[0.06] text-[#1D1D1F] font-medium"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 mt-5 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#6E6E73] font-medium">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-[#002244] font-bold">
                            Milestone 0{idx + 1}
                          </span>
                          <span className="flex items-center gap-1 text-emerald-700 text-xs font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Partner Led</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* SECTION 2: SECTOR COVERAGE */}
        <div id="sectors">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-black/[0.06] mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-[#FF5500] uppercase tracking-[0.2em] block mb-2">
                SECTOR COVERAGE
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-[#002244] leading-[1.15]">
                Core Sectors Served
              </h3>
            </div>
            <p className="text-sm sm:text-base font-body text-[#52525B] max-w-md">
              Specialized advisory depth across capital-intensive infrastructure, clean energy, manufacturing, and healthcare.
            </p>
          </Reveal>

          {/* 21st.dev Horizontal Expanding Accordion (Desktop) & Responsive Cards (Mobile) */}
          <div className="hidden lg:flex gap-4 h-[480px] w-full">
            {sectorList.map((sector, idx) => {
              const isActive = activeAccordion === idx;
              return (
                <div
                  key={sector.id}
                  onClick={() => setActiveAccordion(idx)}
                  onMouseEnter={() => setActiveAccordion(idx)}
                  className={`relative rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer border ${
                    isActive
                      ? "flex-[3.5] border-[#002244] shadow-xl"
                      : "flex-[1] border-black/[0.08] hover:border-[#FF5500]/50 bg-slate-900"
                  }`}
                >
                  {/* Background Image */}
                  {!sectorErrors[idx] ? (
                    <img
                      src={sector.image}
                      alt={sector.name}
                      loading="lazy"
                      onError={() => handleSectorError(idx)}
                      className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#002244]" />
                  )}

                  {/* Gradient Vignette */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-[#002244] via-[#002244]/80 to-black/30"
                      : "bg-black/60 hover:bg-black/40"
                  }`} />

                  {/* Collapsed State: Vertical Text */}
                  {!isActive && (
                    <div className="absolute inset-0 p-6 flex flex-col justify-between items-center text-white z-10 select-none">
                      <span className="font-mono text-sm font-bold text-[#FF8A3D]">
                        {sector.number}
                      </span>
                      <div className="writing-mode-vertical rotate-180 text-sm font-bold font-heading tracking-wider uppercase text-white/90">
                        {sector.name}
                      </div>
                      <span className="text-[10px] font-mono text-slate-300">
                        {sector.tag}
                      </span>
                    </div>
                  )}

                  {/* Expanded State: Rich Sector Dossier */}
                  {isActive && (
                    <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10 animate-fade-in">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-[#FF8A3D] uppercase tracking-wider">
                            Discipline {sector.number} • {sector.tag}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-mono font-bold text-white border border-white/20">
                            {sector.volume}
                          </span>
                        </div>
                        <h4 className="text-3xl font-extrabold font-heading tracking-tight text-white pt-1">
                          {sector.name}
                        </h4>
                        <p className="text-xs sm:text-sm font-body text-slate-200 leading-relaxed max-w-lg pt-1">
                          {sector.summary}
                        </p>
                      </div>

                      {/* 3 Mandate Deliverables */}
                      <div className="space-y-2 pt-4">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-bold block">
                          Core Transaction Deliverables
                        </span>
                        <div className="space-y-1.5">
                          {sector.deliverables.map((item, dIdx) => (
                            <div
                              key={dIdx}
                              className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white flex items-center gap-2.5"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                              <span className="leading-tight font-body">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Bar */}
                      <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                        <a
                          href="#contact"
                          className="px-5 py-2.5 rounded-full text-xs font-bold font-heading text-[#002244] bg-white hover:bg-[#FF5500] hover:text-white transition-all shadow-md inline-flex items-center gap-2 active:scale-95 cursor-pointer"
                        >
                          <span>Discuss {sector.name} Mandate</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                        <span className="text-xs font-mono text-slate-300">
                          Senior Partner Oversight
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Fallback: Vertical Stack */}
          <div className="lg:hidden space-y-4">
            {sectorList.map((sector) => (
              <div
                key={sector.id}
                className="rounded-3xl overflow-hidden border border-black/[0.08] bg-white shadow-sm"
              >
                <div className="relative aspect-[16/9] w-full">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono text-[#FF8A3D] font-bold block">
                      {sector.tag} • {sector.volume}
                    </span>
                    <h4 className="text-xl font-bold font-heading">{sector.name}</h4>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-xs font-body text-[#52525B] leading-relaxed">{sector.summary}</p>
                  <ul className="space-y-1.5 pt-1">
                    {sector.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="text-xs font-body text-[#1D1D1F] flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[#FF5500] shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-3 block text-center py-2.5 rounded-xl text-xs font-bold font-heading text-white bg-[#002244] hover:bg-[#FF5500] transition-colors"
                  >
                    Discuss Mandate
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
