import { useState } from "react";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import { companyData } from "../data/companyData";
import { Reveal, TiltCard } from "./common/Motion";
import { IMAGES } from "../data/images";

export default function ApproachSection() {
  const [sectorErrors, setSectorErrors] = useState({});

  const sectorImages = [
    {
      name: "Roads & Highways",
      detail: "NHAI HAM concessions, expressways, EPC debt syndication, and toll asset monetization.",
      image: IMAGES.SECTOR_HIGHWAYS,
      tag: "Infrastructure"
    },
    {
      name: "Solar & Clean Energy",
      detail: "Utility-scale ground mounted solar parks, captive C&I installations, and green debt facilities.",
      image: IMAGES.SECTOR_SOLAR,
      tag: "Renewables"
    },
    {
      name: "Manufacturing & Precision Engineering",
      detail: "Chemical and materials manufacturing, automated engineering plants, and industrial expansions.",
      image: IMAGES.SECTOR_MANUFACTURING,
      tag: "Industrial"
    },
    {
      name: "Healthcare & Hospitals",
      detail: "Super-specialty medical centers, diagnostic chains, and medical infrastructure financing.",
      image: IMAGES.SECTOR_HEALTHCARE,
      tag: "Healthcare"
    },
    {
      name: "Real Estate & Commercial Assets",
      detail: "Class-A commercial IT parks, warehousing logistics, and lease rental discounting (LRD).",
      image: IMAGES.SECTOR_REAL_ESTATE,
      tag: "Commercial"
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

        {/* Visual Core Sectors Showcase with Photographic Cards */}
        <div className="pt-4">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-black/[0.06] mb-8">
            <div>
              <span className="text-xs font-mono text-[#FF5500] uppercase tracking-wider font-semibold block mb-1">
                Coverage Disciplines
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#002244] tracking-tight">
                Core Sectors Served
              </h3>
            </div>
            <span className="text-xs text-[#6E6E73] font-mono font-medium">
              Direct Syndicate & Appraisal Experience
            </span>
          </Reveal>

          {/* 5 Photographic Sector Cards + 1 Inquiry Tile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {sectorImages.map((sector, idx) => {
              const hasError = sectorErrors[idx];

              return (
                <Reveal key={idx} delay={idx * 80} className="h-full">
                  <TiltCard
                    maxTilt={4}
                    scale={1.015}
                    glowColor="rgba(0, 34, 68, 0.05)"
                    className="h-full rounded-2xl overflow-hidden"
                  >
                    <div className="h-full rounded-2xl bg-white border border-black/[0.06] hover:border-black/[0.12] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group overflow-hidden">
                      
                      {/* Photographic Sector Banner */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-black/[0.04]">
                        {!hasError ? (
                          <img
                            src={sector.image}
                            alt={sector.name}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={() => handleSectorError(idx)}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#EEF4FB] to-[#E1EAF4] p-4 text-center">
                            <Building2 className="w-6 h-6 text-[#002244] mb-1 opacity-70" />
                            <span className="text-xs font-mono font-bold text-[#002244]">{sector.name}</span>
                          </div>
                        )}
                        
                        {/* Overlay Tag */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/92 backdrop-blur-xs text-[10px] font-mono font-bold text-[#002244] shadow-2xs border border-black/[0.05]">
                          {sector.tag}
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-xs font-mono font-bold text-[#FF5500]">0{idx + 1}.</span>
                            <h4 className="text-base font-bold text-[#002244] group-hover:text-[#FF5500] transition-colors leading-snug">
                              {sector.name}
                            </h4>
                          </div>
                          <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed font-normal">
                            {sector.detail}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-black/[0.04] flex items-center justify-between text-[11px] font-mono text-[#002244] font-semibold">
                          <span>Bank Syndicate Ready</span>
                          <span className="text-[#FF5500] group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>

                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}

            {/* Inquiries Action Tile */}
            <Reveal delay={450} className="h-full">
              <div className="h-full rounded-2xl bg-[#002244] text-white p-7 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden group">
                <div className="space-y-3 relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF8A3D] font-bold block">
                    Tailored Mandates
                  </span>
                  <h4 className="text-xl font-bold text-white tracking-tight leading-snug">
                    Have an unlisted industrial or infrastructure mandate?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    We structure specialized bank debt and private equity for complex industrial, energy, and commercial projects across India.
                  </p>
                </div>

                <div className="pt-6 relative z-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#002244] bg-white hover:bg-[#FF5500] hover:text-white transition-all shadow-xs cursor-pointer active:scale-95"
                  >
                    <span>Discuss Feasibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>

          </div>
        </div>

      </div>
    </section>
  );
}
