import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { companyData } from "../data/companyData";
import { Reveal, TiltCard } from "./common/Motion";
import { IMAGES } from "../data/images";

export default function ApproachSection() {
  const [activeSector, setActiveSector] = useState(0);
  const [sectorErrors, setSectorErrors] = useState({});

  const sectorImages = [
    {
      name: "Roads & Highways",
      detail: "NHAI HAM concessions, expressways, EPC debt syndication, and toll asset monetization with Tier-1 bank consortia.",
      image: IMAGES.SECTOR_HIGHWAYS,
      tag: "Infrastructure",
      deliverables: ["NHAI HAM Concession Appraisal", "Dynamic Cash-Flow Modeling", "Lead Consortium Syndication"]
    },
    {
      name: "Solar & Clean Energy",
      detail: "Utility-scale ground mounted solar parks, captive C&I installations, and green debt facilities with competitive spreads.",
      image: IMAGES.SECTOR_SOLAR,
      tag: "Renewables",
      deliverables: ["Bankable PPA & Tariff Modeling", "Green Term Loan Structuring", "140 bps Spread Optimization"]
    },
    {
      name: "Manufacturing & Precision Engineering",
      detail: "Chemical and materials manufacturing, automated engineering plants, and greenfield industrial expansions.",
      image: IMAGES.SECTOR_MANUFACTURING,
      tag: "Industrial",
      deliverables: ["Lender-Grade TEV Study", "Capex Moratorium Structuring", "Working Capital Enhancement"]
    },
    {
      name: "Healthcare & Hospitals",
      detail: "Super-specialty medical centers, diagnostic chains, and medical equipment import LC financing.",
      image: IMAGES.SECTOR_HEALTHCARE,
      tag: "Healthcare",
      deliverables: ["ARPOB & Concession Feasibility", "Equipment Supplier Credit", "Consortium Term Debt"]
    },
    {
      name: "Real Estate & Commercial Assets",
      detail: "Class-A commercial IT parks, warehousing logistics, and lease rental discounting (LRD) facilities.",
      image: IMAGES.SECTOR_REAL_ESTATE,
      tag: "Commercial",
      deliverables: ["LRD Cash Flow Ring-Fencing", "Escrow Account Structuring", "Long-Tenor Refinancing"]
    }
  ];

  const handleSectorError = (idx) => {
    setSectorErrors((prev) => ({ ...prev, [idx]: true }));
  };

  return (
    <section id="approach" className="py-20 md:py-28 relative bg-white text-[#1D1D1F] border-b border-black/[0.05]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#002244] mb-3 font-sans">
            Our Approach
          </h2>
          <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            Direct partner oversight from financial modeling through to final bank disbursement.
          </p>
        </Reveal>

        {/* 4 Execution Stages with TiltCard and Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {companyData.approach.map((step, idx) => (
            <Reveal key={step.step} delay={idx * 100} className="h-full">
              <TiltCard
                maxTilt={5}
                scale={1.015}
                glowColor="rgba(255, 85, 0, 0.08)"
                className="h-full rounded-3xl"
              >
                <div className="h-full rounded-3xl p-8 bg-[#F5F5F7] border border-black/[0.04] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-5">
                      <span className="text-base font-mono font-bold text-[#FF5500]">
                        {step.step}
                      </span>
                      <span className="text-xs font-mono text-[#6E6E73] font-medium">
                        {step.tagline}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#002244] mb-3 group-hover:text-[#FF5500] transition-colors">
                      {step.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#6E6E73] font-medium">
                    <span>Partner Led</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Visual Core Sectors Showcase with Asymmetric Interactive Split */}
        <div className="pt-4">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-black/[0.06] mb-8">
            <div>
              <span className="text-xs font-mono text-[#FF5500] uppercase tracking-wider font-semibold block mb-1">
                Coverage Disciplines
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#002244] tracking-tight font-sans">
                Core Sectors Served
              </h3>
            </div>
            <span className="text-xs text-[#6E6E73] font-mono font-medium">
              Click a sector to explore transaction scope &amp; execution
            </span>
          </Reveal>

          {/* Asymmetric 2-Column Split: Sector Selector Left + Expansive Card Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Interactive Sector Navigation Tab List */}
            <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                {sectorImages.map((sector, idx) => {
                  const isActive = activeSector === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSector(idx)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? "bg-[#002244] text-white border-[#002244] shadow-md shadow-[#002244]/15"
                          : "bg-[#F5F5F7] hover:bg-white text-[#1D1D1F] border-black/[0.04] hover:border-black/[0.12] shadow-2xs"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-mono font-bold ${isActive ? "text-[#FF8A3D]" : "text-[#FF5500]"}`}>
                            0{idx + 1}.
                          </span>
                          <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                            isActive ? "bg-white/10 text-white" : "bg-black/[0.04] text-[#6E6E73]"
                          }`}>
                            {sector.tag}
                          </span>
                        </div>
                        <h4 className={`text-base sm:text-lg font-bold tracking-tight ${
                          isActive ? "text-white" : "text-[#002244] group-hover:text-[#FF5500]"
                        }`}>
                          {sector.name}
                        </h4>
                      </div>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform shrink-0 ${
                        isActive
                          ? "bg-[#FF5500] text-white rotate-0"
                          : "bg-white text-slate-400 group-hover:text-[#002244] group-hover:translate-x-1"
                      }`}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Inquiry prompt */}
              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs flex items-center justify-between gap-4 mt-3">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-[#002244] block">Have another industry mandate?</span>
                  <p className="text-[11px] text-[#6E6E73]">We structure debt for unlisted enterprise capex across India.</p>
                </div>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#002244] hover:bg-[#FF5500] transition-colors shrink-0 cursor-pointer"
                >
                  Inquire
                </a>
              </div>
            </div>

            {/* Right Column: Expansive Selected Sector Card */}
            <div className="lg:col-span-7">
              <TiltCard
                maxTilt={3}
                scale={1.01}
                glowColor="rgba(0, 34, 68, 0.06)"
                className="h-full rounded-3xl overflow-hidden"
              >
                <div className="h-full rounded-3xl bg-white border border-black/[0.08] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                  
                  {/* Cinematic Photo Banner */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    {!sectorErrors[activeSector] ? (
                      <img
                        src={sectorImages[activeSector].image}
                        alt={sectorImages[activeSector].name}
                        key={sectorImages[activeSector].name}
                        loading="lazy"
                        onError={() => handleSectorError(activeSector)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#002244] to-[#0A1A33] text-white p-6">
                        <span className="font-mono text-sm text-[#FF8A3D] font-bold">{sectorImages[activeSector].tag} Advisory</span>
                      </div>
                    )}
                    
                    {/* Gradient Overlay & Floating Badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-mono font-bold text-[#002244] shadow-xs">
                      {sectorImages[activeSector].tag} Desk
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <span className="text-xs font-mono text-[#FF8A3D] font-bold block mb-1">
                        Discipline 0{activeSector + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                        {sectorImages[activeSector].name}
                      </h3>
                    </div>
                  </div>

                  {/* Body & Key Institutional Deliverables */}
                  <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
                      {sectorImages[activeSector].detail}
                    </p>

                    {/* 3 Deliverable Pills */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E6E73] font-bold block">
                        Core Transaction Deliverables
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {sectorImages[activeSector].deliverables.map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className="p-3 rounded-xl bg-[#F5F5F7] border border-black/[0.04] text-xs font-semibold text-[#002244] flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                            <span className="leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Link Strip */}
                    <div className="pt-4 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="#contact"
                        className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#002244] hover:bg-[#FF5500] transition-all shadow-sm inline-flex items-center gap-2 active:scale-95 cursor-pointer"
                      >
                        <span>Discuss {sectorImages[activeSector].name} Mandate</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <span className="text-xs font-mono text-[#6E6E73]">
                        Statutory Bilateral NDA Protected
                      </span>
                    </div>

                  </div>

                </div>
              </TiltCard>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
