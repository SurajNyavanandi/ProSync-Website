import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Building2 } from "lucide-react";
import { Reveal, TiltCard } from "./common/Motion";
import { IMAGES } from "../data/images";

export default function AboutSplitSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 relative bg-white text-[#1D1D1F] border-b border-black/[0.05]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* ======================================================== */}
        {/* 2-COLUMN SPLIT: TEXT LEFT + LARGE PHOTO RIGHT */}
        {/* (Inspired directly by image_ed04aee0.png "About Crescent") */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ------------------------------------------------------ */}
          {/* LEFT COLUMN: Text, Narrative, Button, 2 Feature Columns */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-6 space-y-7">
            <Reveal delay={50} className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#002244] leading-tight font-sans">
                About Prosync
              </h2>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
                Prosync Consulting delivers executive financial advisory, debt syndication, and project appraisal for mid-market enterprises and concessionaires across India. We blend rigorous financial engineering with direct credit committee access to elevate capital certainty and set new standards in institutional execution.
              </p>
            </Reveal>

            {/* Primary Action Button ("Learn More About Us") */}
            <Reveal delay={150}>
              <a
                href="#leadership"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#002244] hover:bg-[#FF5500] shadow-md transition-all duration-200 inline-flex items-center gap-2 min-h-[46px] active:scale-95 cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>

            {/* 2 Feature Highlight Columns (image_ed04aee0.png reference style) */}
            <Reveal delay={250} className="pt-4 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Feature 1: Trusted Experience */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#002244]/10 text-[#002244] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                  </span>
                  <h4 className="text-sm font-bold text-[#002244] tracking-tight">
                    Trusted Experience
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed pl-8 font-normal">
                  Over 15 years of senior banking relationships across India's premier public and private lending institutions.
                </p>
              </div>

              {/* Feature 2: Practice Quality */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#002244]/10 text-[#002244] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#002244]" />
                  </span>
                  <h4 className="text-sm font-bold text-[#002244] tracking-tight">
                    Practice Quality
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed pl-8 font-normal">
                  Bilateral statutory NDA safeguards and institutional financial modeling rigor across all corporate mandates.
                </p>
              </div>

            </Reveal>
          </div>

          {/* ------------------------------------------------------ */}
          {/* RIGHT COLUMN: Large Photo Card */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-6">
            <Reveal delay={200}>
              <TiltCard
                maxTilt={4}
                scale={1.015}
                glowColor="rgba(0, 34, 68, 0.08)"
                className="rounded-3xl overflow-hidden"
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-3xl overflow-hidden bg-slate-100 border border-black/[0.08] shadow-[0_20px_50px_rgba(0,34,68,0.1)] group">
                  {!imageError ? (
                    <img
                      src={IMAGES.ABOUT_HEADQUARTERS}
                      alt="Prosync Headquarters & Financial Advisory"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.02]"
                    />
                  ) : (
                    // Elegant CSS/SVG Architectural Fallback
                    <div className="w-full h-full flex flex-col justify-between p-8 bg-gradient-to-br from-[#0F2744] via-[#0A1D36] to-[#061426] text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#FF8A3D] font-bold">
                          Hyderabad HQ
                        </span>
                        <Building2 className="w-6 h-6 text-[#FF8A3D]" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold tracking-tight text-white">
                          Institutional Financial Advisory
                        </h3>
                        <p className="text-xs text-slate-300 font-normal">
                          Plot 82, Road No 7, Jubilee Hills & Hitec City Corridor, Hyderabad
                        </p>
                      </div>
                      <div className="text-xs font-mono text-slate-400 border-t border-white/10 pt-3 flex justify-between">
                        <span>Established 2015</span>
                        <span className="text-emerald-400 font-bold">CIN: U74999TG2015PTC099824</span>
                      </div>
                    </div>
                  )}

                  {/* Clean bottom glass caption badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/92 backdrop-blur-md border border-white/40 shadow-sm flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-[#6E6E73] uppercase tracking-wider block">
                        Headquarters
                      </span>
                      <span className="text-xs font-bold text-[#002244]">
                        Jubilee Hills & Hitec City, Hyderabad
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#FF5500] px-2.5 py-1 rounded-lg bg-[#FF5500]/10">
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
