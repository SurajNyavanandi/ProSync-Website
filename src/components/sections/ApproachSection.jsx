import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { companyData } from "../../data/companyData";
import { Reveal } from "../common/Motion";
import { IMAGES } from "../../data/images";

export default function ApproachSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [sectorErrors, setSectorErrors] = useState({});

  const audienceList = [
    {
      title: "Corporates & Mid-sized Enterprises",
      description: "Evaluating funding requirements, balance sheet debt capacity, and corporate credit syndication.",
    },
    {
      title: "Infrastructure & Project Developers",
      description: "Concession project appraisal, bankable TEV / DPR formulation, and financial closure.",
    },
    {
      title: "Promoters & Entrepreneurs",
      description: "Cap-table optimization, promoter share-pledge finance, and structured growth transactions.",
    },
    {
      title: "Investors, Family Offices & Funds",
      description: "Financial due diligence, portfolio monitoring, and institutional analytics support.",
    },
  ];

  const whyProsyncBlocks = [
    {
      title: "Financial Perspective",
      body: "We assess funding needs, financial position and business objectives before recommending a course of action.",
    },
    {
      title: "Structured Solutions",
      body: "We evaluate suitable financing and transaction structures around each assignment.",
    },
    {
      title: "Execution Focus",
      body: "We support clients through analysis, preparation and engagement with relevant stakeholders.",
    },
    {
      title: "Cross-sector Experience",
      body: "We work with businesses and projects across multiple sectors.",
    },
  ];

  const sectorList = [
    {
      id: "roads",
      name: "Roads & Highways",
      tag: "Infrastructure",
      volume: "HAM & EPC Concessions",
      summary: "NHAI HAM concessions, expressways, EPC debt syndication, and toll asset monetization with bank consortia.",
      image: IMAGES.SECTOR_HIGHWAYS,
      deliverables: [
        "NHAI HAM Concession Appraisal & Financial Closure",
        "Dynamic Cash-Flow Modeling & Toll Traffic Sensitivity",
        "Lead Consortium Bank Syndication & Security Structuring",
      ],
    },
    {
      id: "solar",
      name: "Solar & Clean Energy",
      tag: "Renewables",
      volume: "Utility & C&I Portfolios",
      summary: "Utility-scale ground mounted solar parks, captive C&I installations, and green debt facilities with competitive spreads.",
      image: IMAGES.SECTOR_SOLAR,
      deliverables: [
        "Bankable PPA & SECI/State Tariff Cash Flow Modeling",
        "Green Term Loan Structuring with Specialized Lenders",
        "Long-Tenor Debt Amortization Alignment",
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Chemicals",
      tag: "Industrial",
      volume: "Capex Expansions",
      summary: "Automated precision manufacturing, bulk chemical plants, specialty materials, and greenfield capex expansions.",
      image: IMAGES.SECTOR_MANUFACTURING,
      deliverables: [
        "Lender-Grade Detailed Project Report (DPR) & TEV Study",
        "Capex Construction Moratorium & Amortization Structuring",
        "Working Capital Limit Enhancement & Vendor LC Lines",
      ],
    },
    {
      id: "healthcare",
      name: "Healthcare & Hospitals",
      tag: "Healthcare",
      volume: "Tertiary Networks",
      summary: "Super-specialty medical centers, regional diagnostic chains, and medical equipment import LC financing.",
      image: IMAGES.SECTOR_HEALTHCARE,
      deliverables: [
        "ARPOB & Bed-Occupancy Financial Feasibility Modeling",
        "Medical Equipment Supplier Credit & Foreign LC Facilities",
        "Long-Tenor Consortium Project Debt Sanctions",
      ],
    },
    {
      id: "realestate",
      name: "Real Estate & Logistics",
      tag: "Commercial",
      volume: "Commercial Parks",
      summary: "Class-A commercial IT parks, warehousing logistics parks, and lease rental discounting (LRD) facilities.",
      image: IMAGES.SECTOR_REAL_ESTATE,
      deliverables: [
        "Lease Rental Discounting (LRD) Cash Flow Ring-Fencing",
        "Escrow Account Structuring & Minimum DSCR Covenants",
        "Long-Tenor Refinancing & Moratorium Optimization",
      ],
    },
  ];

  const handleSectorError = (idx) => {
    setSectorErrors((prev) => ({ ...prev, [idx]: true }));
  };

  return (
    <section id="approach" className="py-20 md:py-28 relative bg-white text-[#1D1D1F] border-b border-black/[0.05]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 space-y-20 md:space-y-24">
        
        {/* 11. WHO WE WORK WITH (WHO WE SERVE) */}
        <div>
          <Reveal className="max-w-2xl mb-8 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F] leading-[1.15]">
              WHO WE WORK WITH
            </h2>
            <p className="text-base sm:text-lg text-[#515154] font-normal leading-relaxed">
              We partner with businesses and institutions navigating critical financing, project structuring, and growth milestones.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audienceList.map((aud, idx) => (
              <Reveal key={idx} delay={idx * 70} className="h-full">
                <div className="h-full p-6 sm:p-7 rounded-3xl bg-[#F5F5F7] border border-black/[0.06] hover:bg-white hover:border-[#002244] transition-all duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-md">
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-[#1D1D1F] mb-2 leading-snug">
                      {aud.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#515154] leading-relaxed">
                      {aud.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 12. WHY PROSYNC (4 SHORT BLOCKS) */}
        <div>
          <Reveal className="max-w-2xl mb-8 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F] leading-[1.15]">
              WHY PROSYNC
            </h2>
            <p className="text-base sm:text-lg text-[#515154] font-normal leading-relaxed">
              Objective financial perspective and disciplined execution around every assignment.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyProsyncBlocks.map((block, idx) => (
              <Reveal key={idx} delay={idx * 80} className="h-full">
                <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-black/[0.08] hover:border-[#002244] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md">
                  <div>
                    <div className="pb-3 mb-3 border-b border-black/[0.06]">
                      <h3 className="text-base font-medium text-[#1D1D1F]">
                        {block.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#515154] leading-relaxed">
                      {block.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* METHODOLOGY: STRUCTURED PATH */}
        <div>
          <Reveal className="max-w-2xl mb-10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF5500] font-bold block">
              EXECUTION PROCESS
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading tracking-tight text-[#002244]">
              Structured Engagement Methodology
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.approach.map((step, idx) => (
              <Reveal key={step.id || step.name} delay={idx * 70} className="h-full">
                <div className="h-full rounded-3xl bg-[#F5F5F7] border border-black/[0.06] p-6 flex flex-col justify-between hover:bg-white hover:border-[#002244] transition-all duration-200">
                  <div>
                    <h4 className="text-lg font-bold font-heading text-[#002244] mb-1">
                      {step.name}
                    </h4>
                    <span className="text-[11px] font-mono text-[#FF5500] font-semibold block mb-3">
                      {step.tagline}
                    </span>
                    <p className="text-xs font-body text-[#52525B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* SECTOR COVERAGE */}
        <div id="sectors">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-black/[0.06] mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-[#FF5500] uppercase tracking-[0.2em] block mb-2">
                SECTOR DEPTH
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading tracking-tight text-[#002244]">
                Multi-Sector Domain Experience
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-body text-[#52525B] max-w-md">
              Advisory depth across core infrastructure, renewable power, manufacturing, healthcare, and commercial logistics.
            </p>
          </Reveal>

          {/* Desktop Accordion & Mobile cards */}
          <div className="hidden lg:flex gap-4 h-[440px] w-full">
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

                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-[#002244] via-[#002244]/80 to-black/30"
                      : "bg-black/60 hover:bg-black/40"
                  }`} />

                  {!isActive && (
                    <div className="absolute inset-0 p-6 flex flex-col justify-between items-center text-white z-10 select-none">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF8A3D] font-bold">
                        {sector.tag}
                      </span>
                      <div className="writing-mode-vertical rotate-180 text-sm font-bold font-heading tracking-wider uppercase text-white/90">
                        {sector.name}
                      </div>
                      <span className="text-[10px] font-mono text-slate-300">
                        {sector.volume}
                      </span>
                    </div>
                  )}

                  {isActive && (
                    <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10 animate-fade-in">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-[#FF8A3D] uppercase tracking-wider">
                            {sector.tag}
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

                      <div className="space-y-2 pt-4">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-bold block">
                          Core Mandate Deliverables
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

          {/* Mobile Fallback */}
          <div className="lg:hidden space-y-4">
            {sectorList.map((sector) => (
              <div
                key={sector.id}
                className="rounded-3xl overflow-hidden border border-black/[0.08] bg-white shadow-sm"
              >
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#FF5500] font-bold uppercase tracking-wider">
                      {sector.tag}
                    </span>
                    <span className="text-xs font-mono text-[#6E6E73]">{sector.volume}</span>
                  </div>
                  <h4 className="text-xl font-bold font-heading text-[#002244]">{sector.name}</h4>
                  <p className="text-xs font-body text-[#52525B] leading-relaxed">{sector.summary}</p>
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
