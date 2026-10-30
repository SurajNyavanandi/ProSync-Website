import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Building2,
  TrendingUp,
  FileCheck2,
  Layers,
  Landmark
} from "lucide-react";
import { Reveal } from "./common/Motion";

export default function Hero() {
  const [selectedPill, setSelectedPill] = useState("term-debt");

  const heroBgUrl =
    "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793334844/Executive_Presentation_with_City_View_xv9uyz.png";
  const heroFallbackUrl =
    "/assets/aistudio/Executive_Presentation_with_City_View_f9a1ae0a.png";

  const mandatePills = [
    {
      id: "term-debt",
      label: "Term Debt",
      icon: Landmark,
      ticket: "₹50 Cr - ₹500 Cr+",
      desc: "Project capex & consortium loan syndication with Tier-1 PSU and private banks.",
      turnaround: "4-6 Weeks",
      rate: "Competitive Spread"
    },
    {
      id: "mezzanine",
      label: "Mezzanine",
      icon: TrendingUp,
      ticket: "₹25 Cr - ₹200 Cr",
      desc: "Subordinated growth capital, bridge credit, and promoter debt refinancing.",
      turnaround: "3-5 Weeks",
      rate: "Flexible Covenants"
    },
    {
      id: "working-capital",
      label: "Working Capital",
      icon: Layers,
      ticket: "₹25 Cr - ₹300 Cr",
      desc: "Cash credit limits, Letter of Credit (LC), and Bank Guarantee (BG) consortium syndication.",
      turnaround: "3-4 Weeks",
      rate: "Multi-Bank Lines"
    },
    {
      id: "tev-report",
      label: "TEV Report",
      icon: FileCheck2,
      ticket: "Institutional Grade",
      desc: "Bankable Techno-Economic Viability (TEV) and Detailed Project Report (DPR) appraisal.",
      turnaround: "10-14 Days",
      rate: "99% Sanction Rate"
    }
  ];

  const activePillData = mandatePills.find((p) => p.id === selectedPill) || mandatePills[0];

  const handleDiscussMandate = (mandateLabel) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      // Dispatch custom event to sync with contact form
      window.dispatchEvent(
        new CustomEvent("prosync:selectMandate", {
          detail: { mandate: mandateLabel }
        })
      );
    }
  };

  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white text-[#1D1D1F]"
    >
      {/* 21st.dev Ambient Spotlight Glow Effect */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#002244]/[0.04] to-[#FF5500]/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Full-Bleed Executive Boardroom Presentation Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <img
          src={heroBgUrl}
          alt="Executive Financial Advisory Presentation in City Boardroom"
          className="w-full h-full object-cover object-right opacity-95 transition-opacity duration-700"
          onError={(e) => {
            if (e.currentTarget.src !== heroFallbackUrl) {
              e.currentTarget.src = heroFallbackUrl;
            }
          }}
        />
        {/* Desktop left-fade mask ensuring headline contrast across all wide resolutions */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
        {/* Mobile/Tablet gradient overlay ensuring contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:hidden pointer-events-none" />
        {/* Bottom soft gradient fade into subsequent section */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
      </div>

      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* ------------------------------------------------------ */}
        {/* SPLIT 2-COLUMN HERO                                    */}
        {/* ------------------------------------------------------ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[460px] md:min-h-[500px]">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Two-tiered Headline with refined modern tracking */}
            <div className="space-y-1 sm:space-y-2">
              <Reveal delay={50}>
                <span className="block text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-[-0.03em] text-[#1D1D1F] leading-[1.1]">
                  Financial Advisory.
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="block text-4xl sm:text-6xl lg:text-[70px] font-black tracking-[-0.035em] text-[#002244] leading-[1.04]">
                  Built Around Your Business.
                </h1>
              </Reveal>
            </div>

            {/* Concise 2-Sentence Description */}
            <Reveal delay={200}>
              <p className="text-base sm:text-lg text-[#52525B] leading-relaxed max-w-xl font-normal tracking-[-0.01em]">
                We provide corporate debt syndication, private credit, and growth capital advisory across infrastructure, manufacturing, and mid-market enterprises. Partner-led execution from financial modeling to sanction.
              </p>
            </Reveal>

            {/* Dual Action Buttons matching design reference */}
            <Reveal delay={280} className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Primary Solid Pill Button */}
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#002244] hover:bg-[#FF5500] shadow-md shadow-[#002244]/15 hover:shadow-[#FF5500]/25 transition-all duration-200 inline-flex items-center gap-2 min-h-[48px] active:scale-95 cursor-pointer"
              >
                <span>Discuss a Mandate</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary Circular Outline Icon Button ("Explore Transactions") */}
              <a
                href="#transactions"
                className="inline-flex items-center gap-3 text-sm font-semibold text-[#002244] hover:text-[#FF5500] group transition-colors cursor-pointer py-2"
              >
                <div className="w-10 h-10 rounded-full border-2 border-[#002244] group-hover:border-[#FF5500] flex items-center justify-center transition-all duration-200 group-hover:scale-105 shadow-2xs">
                  <Play className="w-4 h-4 fill-[#002244] group-hover:fill-[#FF5500] text-[#002244] group-hover:text-[#FF5500] ml-0.5 transition-colors" />
                </div>
                <span>Explore Transactions</span>
              </a>
            </Reveal>

            {/* Micro Credential Trust Line */}
            <Reveal delay={340} className="pt-1 flex items-center gap-6 text-xs text-[#6E6E73] font-mono">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Statutory NDA</span>
              </span>
              <span>•</span>
              <span>₹2,500+ Cr Syndicated</span>
              <span>•</span>
              <span>25+ Lead Banks</span>
            </Reveal>
          </div>

          {/* Right Column: Floating Frosted Badges Over Scene */}
          <div className="lg:col-span-5 relative hidden lg:flex flex-col justify-between items-end min-h-[440px] pointer-events-none select-none">
            
            {/* Floating Frosted Pill 1: Lead Arranger Desk */}
            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-[0_14px_35px_rgba(0,34,68,0.1)] flex items-center gap-3.5 pointer-events-auto mt-6">
              <div className="w-10 h-10 rounded-xl bg-[#002244] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Building2 className="w-5 h-5 text-[#FF8A3D]" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] font-bold block">
                  Institutional Syndicate Desk
                </span>
                <span className="text-xs font-bold text-[#002244]">
                  Tier-1 PSU &amp; Private Bank Consortia
                </span>
              </div>
            </div>

            {/* Floating Frosted Badge 2: ₹2,500+ Cr Capital Syndicated */}
            <div className="p-4 rounded-2xl bg-white/92 backdrop-blur-md border border-white/80 shadow-[0_18px_40px_rgba(0,34,68,0.12)] flex items-center gap-3.5 pointer-events-auto mb-8">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] font-bold block">
                  Capital Syndicated
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-extrabold font-mono text-[#002244] tracking-tight">
                    ₹2,500+ Cr
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                    100% Closure
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* 21ST.DEV FLOATING SEGMENTED PILL & MANDATE FILTER        */}
        {/* ======================================================== */}
        <div className="mt-12 sm:mt-16 lg:mt-20 relative z-30">
          <div className="max-w-4xl mx-auto rounded-3xl bg-white/95 backdrop-blur-xl border border-black/[0.08] p-3 sm:p-5 shadow-[0_20px_50px_rgba(0,34,68,0.08)]">
            
            {/* Top Segmented Controls Track */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-1.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
              {mandatePills.map((pill) => {
                const isSelected = selectedPill === pill.id;
                const IconComponent = pill.icon;
                return (
                  <button
                    key={pill.id}
                    type="button"
                    onClick={() => setSelectedPill(pill.id)}
                    className={`relative flex-1 min-w-[140px] sm:min-w-0 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isSelected
                        ? "text-[#002244] shadow-xs"
                        : "text-[#6E6E73] hover:text-[#002244]"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeHeroPill"
                        className="absolute inset-0 bg-white rounded-xl shadow-sm border border-black/[0.04]"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <IconComponent className={`w-4 h-4 ${isSelected ? "text-[#FF5500]" : "text-slate-400"}`} />
                      <span>{pill.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Expanded Active Mandate Details Bar & Direct 1-Click CTA */}
            <div className="mt-3.5 px-3 py-3 rounded-2xl bg-white border border-black/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full md:w-auto">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] font-bold block">
                    Typical Ticket Size
                  </span>
                  <span className="text-sm font-extrabold text-[#002244] font-mono">
                    {activePillData.ticket}
                  </span>
                </div>

                <div className="hidden sm:block w-px h-8 bg-black/[0.08]" />

                <div className="space-y-0.5 max-w-sm">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] font-bold block">
                    Advisory Scope
                  </span>
                  <p className="text-xs text-[#52525B] leading-tight">
                    {activePillData.desc}
                  </p>
                </div>

                <div className="hidden lg:block w-px h-8 bg-black/[0.08]" />

                <div className="hidden lg:flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-mono font-bold border border-emerald-200/60">
                    {activePillData.rate}
                  </span>
                </div>
              </div>

              {/* Direct 1-Click CTA */}
              <button
                type="button"
                onClick={() => handleDiscussMandate(activePillData.label)}
                className="w-full md:w-auto px-6 py-3 rounded-xl bg-[#002244] hover:bg-[#FF5500] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#002244]/15 hover:shadow-[#FF5500]/25 transition-all duration-200 inline-flex items-center justify-center gap-2 shrink-0 active:scale-95 cursor-pointer"
              >
                <span>Discuss {activePillData.label} Mandate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
