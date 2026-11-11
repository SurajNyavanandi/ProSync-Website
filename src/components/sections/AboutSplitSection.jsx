import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal, TiltCard } from "../common/Motion";
import { IMAGES } from "../../data/images";

export default function AboutSplitSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#FBFBFC] text-[#1D1D1F] border-b border-black/[0.05]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* EDITORIAL ABOUT PROSYNC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Essential About Narrative & Direct Action */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={50} className="space-y-3">
              <span className="text-xs font-mono font-medium text-[#002244] uppercase tracking-[0.15em] block">
                ABOUT PROSYNC
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F] leading-[1.15]">
                Senior Capital Partners Behind Landmark Closures
              </h2>
            </Reveal>

            {/* Exactly Requested Single Paragraph */}
            <Reveal delay={120}>
              <p className="text-sm sm:text-lg text-[#515154] leading-relaxed font-normal">
                Since 2015, Prosync has been helping businesses make informed financial decisions and access the capital required to grow. We work with promoters, corporates and institutions across financing, project advisory and strategic transactions. Our approach combines financial analysis, structured thinking and execution-focused support.
              </p>
            </Reveal>

            <Reveal delay={180} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href="#leadership"
                className="px-7 py-3.5 rounded-full text-xs font-bold font-heading text-white bg-[#002244] hover:bg-[#FF5500] shadow-md transition-all inline-flex items-center justify-center gap-2 min-h-[46px] active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <span>Meet Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full text-xs font-semibold font-heading text-[#002244] bg-white border border-black/[0.08] hover:bg-slate-50 transition-all inline-flex items-center justify-center gap-2 min-h-[46px] cursor-pointer w-full sm:w-auto"
              >
                <span>Discuss Your Mandate</span>
              </a>
            </Reveal>
          </div>

          {/* Right Column: Headquarters Showcase Photo */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <TiltCard
                maxTilt={4}
                scale={1.015}
                glowColor="rgba(0, 34, 68, 0.08)"
                className="rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-slate-100 border border-black/[0.08] group">
                  {!imageError ? (
                    <img
                      src={IMAGES.ABOUT_HEADQUARTERS}
                      alt="Prosync Headquarters Hyderabad"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#002244] to-[#0A2240] text-white">
                      <div>
                        <span className="text-[10px] font-mono text-[#FF8A3D] uppercase tracking-widest block font-bold">
                          Headquarters
                        </span>
                        <h3 className="text-2xl font-bold font-heading text-white">Jubilee Hills Office</h3>
                        <p className="text-xs font-body text-slate-300">ARC Property Solutions, Kakatiya Hills, Jubilee Hills</p>
                      </div>
                      <span className="text-xs font-mono text-emerald-400">CIN: U74999TG2015PTC099824</span>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#6E6E73] uppercase tracking-wider block font-bold">
                        Corporate Headquarters
                      </span>
                      <span className="text-xs font-bold font-heading text-[#002244]">
                        Jubilee Hills, Hyderabad
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#FF5500] px-2.5 py-1 rounded-md bg-[#FF5500]/10">
                      Est. 2015
                    </span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
