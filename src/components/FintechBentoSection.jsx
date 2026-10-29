import { useState } from "react";
import { ArrowRight, Check, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Reveal, WordReveal, TiltCard } from "./common/Motion";

export default function FintechBentoSection() {
  const [activeBadge, setActiveBadge] = useState(null);

  const partners = [
    { name: "State Bank of India", abbr: "SBI" },
    { name: "Canara Bank", abbr: "CANARA" },
    { name: "Kotak Mahindra Bank", abbr: "KOTAK" },
    { name: "Bank of Baroda", abbr: "BOB" },
    { name: "Vivriti Capital", abbr: "VIVRITI" },
    { name: "Edelweiss Alternatives", abbr: "EAAA" },
    { name: "AIMS Institutional", abbr: "AIMS" }
  ];

  const floatingBadges = [
    { id: 1, label: "₹250 Cr Sanctioned", tag: "Term Loan", accent: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
    { id: 2, label: "Consortium Syndication", tag: "Lead Arranger", accent: "bg-sky-500/20 text-sky-400 border-sky-500/30" },
    { id: 3, label: "AAA Credit Appraisal", tag: "TEV Study", accent: "bg-[#FF5500]/20 text-[#FF8A3D] border-[#FF5500]/30" },
    { id: 4, label: "Senior Debt & Mezzanine", tag: "Structured", accent: "bg-amber-500/20 text-amber-400 border-amber-500/30" }
  ];

  return (
    <section id="solutions-bento" className="py-16 md:py-24 bg-white text-[#1D1D1F] overflow-hidden border-b border-black/[0.05]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* ======================================================== */}
        {/* TOP SOCIAL PROOF BADGE & INFINITE LOGO MARQUEE */}
        {/* ======================================================== */}
        <Reveal className="text-center mb-10">
          {/* Subtle social proof pill badge directly as in Servio reference */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-black/[0.06] text-xs font-mono text-[#4B5563] font-medium shadow-2xs hover:border-[#FF5500]/40 transition-colors">
            <span>Join over 100+ enterprise promoters growing with Prosync</span>
          </div>

          {/* Clean grayscale infinite logo marquee */}
          <div className="mt-8 relative overflow-hidden py-2">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee flex items-center gap-12 sm:gap-16 whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity">
              {[...partners, ...partners, ...partners].map((p, idx) => (
                <div key={idx} className="flex items-center gap-3 group cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F5F7] border border-black/[0.06] flex items-center justify-center font-mono text-xs font-bold text-[#002244] group-hover:text-[#FF5500] group-hover:border-[#FF5500]/40 transition-colors">
                    {p.abbr.slice(0, 2)}
                  </div>
                  <span className="text-sm font-semibold tracking-tight text-[#4B5563] group-hover:text-[#002244] transition-colors">
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* ASYMMETRICAL 3-COLUMN BENTO GRID (Linear/Servio style) */}
        {/* ======================================================== */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* ---------------------------------------------------- */}
          {/* COLUMN 1: Large Focus Block (5 cols) */}
          {/* ---------------------------------------------------- */}
          <Reveal delay={100} className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#F5F5F7] border border-black/[0.06] shadow-xs hover:border-black/[0.12] transition-all">
            <div className="space-y-6">
              <div className="space-y-3">
                <WordReveal
                  text="Engineered for your next scale of capital"
                  className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#002244] leading-[1.12]"
                  highlightIndices={[5, 6]}
                  highlightClass="text-[#FF5500]"
                />
              </div>

              {/* Dual CTA buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#002244] hover:bg-[#0A2E5C] transition-all inline-flex items-center gap-2 group shadow-xs active:scale-95 cursor-pointer"
                >
                  <span>Discuss Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#transactions"
                  className="px-6 py-3 rounded-full text-xs font-semibold text-[#002244] bg-white hover:bg-slate-50 border border-black/[0.08] shadow-2xs transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Deal Desk</span>
                </a>
              </div>

              {/* Two-tone body text */}
              <div className="pt-4 space-y-3 text-sm text-[#475569] leading-relaxed">
                <p className="font-semibold text-[#002244]">
                  Experience institutional precision in corporate syndication, project appraisal, and balance sheet structuring. Built for sovereign-grade success.
                </p>
                <p className="text-xs text-[#6E6E73] font-normal leading-relaxed">
                  The execution power of senior investment banking desks, with direct access to lead PSU and private credit committees.
                </p>
              </div>
            </div>

            {/* Bottom mini metric footnote */}
            <div className="pt-8 mt-6 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#6E6E73]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Statutory NDA Protected</span>
              </span>
              <span className="font-bold text-[#002244] tabular-nums">₹2,500+ Cr Delivered</span>
            </div>
          </Reveal>

          {/* ---------------------------------------------------- */}
          {/* COLUMN 2: Soft Mint Gradient Feature Card (4 cols) */}
          {/* ---------------------------------------------------- */}
          <Reveal delay={200} className="lg:col-span-4 h-full">
            <TiltCard
              maxTilt={5}
              scale={1.015}
              glowColor="rgba(16, 185, 129, 0.12)"
              className="h-full rounded-3xl overflow-hidden"
            >
              <div className="h-full p-8 sm:p-9 rounded-3xl bg-gradient-to-br from-[#E6F4EA] via-[#F2FBF6] to-white border border-[#002244]/08 shadow-sm hover:shadow-md flex flex-col justify-between transition-all">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-700 font-semibold block">
                      Capabilities Spectrum
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#002244] leading-snug">
                      Control capital structures effortlessly at any size
                    </h3>
                  </div>

                  {/* Micro-bullet features with custom checkmarks */}
                  <ul className="space-y-3.5 pt-2">
                    {[
                      "Syndicated Term Loans & Consortium Structuring",
                      "Techno-Economic Viability (TEV) & Project Appraisal",
                      "Direct Lender Access to 25+ Lead Banks",
                      "Working Capital Enhancement & Structured Mezzanine"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1E3A2F] font-medium leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-emerald-600/10 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-600/20">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-6 border-t border-emerald-900/10 flex items-center justify-between">
                  <a
                    href="#services"
                    className="px-5 py-2.5 rounded-full text-xs font-bold text-[#002244] bg-white hover:bg-emerald-50 border border-emerald-600/20 shadow-2xs transition-all inline-flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-emerald-700" />
                  </a>
                  <span className="text-[11px] font-mono text-emerald-800 font-semibold">
                    100% Sanction Discipline
                  </span>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* ---------------------------------------------------- */}
          {/* COLUMN 3: High-Contrast Dark Card (3 cols) */}
          {/* ---------------------------------------------------- */}
          <Reveal delay={300} className="lg:col-span-3 h-full">
            <TiltCard
              maxTilt={6}
              scale={1.02}
              glowColor="rgba(255, 85, 0, 0.18)"
              className="h-full rounded-3xl overflow-hidden"
            >
              <div className="h-full p-8 sm:p-9 rounded-3xl bg-[#081B33] text-white border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden group">
                {/* Subtle dark ambient glow */}
                <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#FF5500]/15 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Floating interactive chips / badges */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF8A3D] font-semibold block">
                      Active Mandate Desk
                    </span>
                    <div className="flex flex-col gap-2">
                      {floatingBadges.map((badge) => (
                        <div
                          key={badge.id}
                          onMouseEnter={() => setActiveBadge(badge.id)}
                          onMouseLeave={() => setActiveBadge(null)}
                          className={`p-2.5 rounded-xl border text-xs font-mono font-medium transition-all duration-300 cursor-default flex items-center justify-between ${
                            badge.accent
                          } ${
                            activeBadge === badge.id
                              ? "scale-105 shadow-md bg-white/10 border-white/40"
                              : ""
                          }`}
                        >
                          <span className="font-bold">{badge.label}</span>
                          <span className="text-[10px] opacity-75">{badge.tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* High contrast copy */}
                  <div className="pt-2 space-y-2">
                    <h3 className="text-xl font-bold tracking-tight text-white leading-snug">
                      Fuel enterprise growth with senior debt
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      Direct alignment with bank credit committees, NBFC boards, and private debt syndicates across India.
                    </p>
                  </div>
                </div>

                {/* Bottom action trigger */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                  <a
                    href="#contact"
                    className="text-xs font-bold text-[#FF8A3D] hover:text-white transition-colors inline-flex items-center gap-1 group cursor-pointer"
                  >
                    <span>Request Appraisal</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <span className="text-[10px] font-mono text-slate-400">
                    SLA &lt; 48h
                  </span>
                </div>
              </div>
            </TiltCard>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
