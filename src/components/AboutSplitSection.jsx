import { useState, useEffect } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Award,
  Users2,
  CheckCircle2,
  Landmark,
  Coins
} from "lucide-react";
import { Reveal, TiltCard } from "./common/Motion";
import { IMAGES } from "../data/images";

// 21st.dev Animated Number Ticker component
function NumberTicker({ target = 5000, suffix = "+ Cr", prefix = "₹" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1600;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="font-mono font-extrabold text-[#002244] tracking-tight">
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function AboutSplitSection() {
  const [imageError, setImageError] = useState(false);
  const [activeStep, setActiveStep] = useState(2); // default step 3 selected

  const lifecycleSteps = [
    {
      num: "01",
      name: "Mandate Inception",
      detail: "Capital sizing, dynamic financial modeling, and DSCR stress-testing under base and adverse market conditions."
    },
    {
      num: "02",
      name: "TEV & Appraisal",
      detail: "Lender-grade Techno-Economic Viability report formulation and pre-sanction diligence aligned with RBI standards."
    },
    {
      num: "03",
      name: "Consortium Formulation",
      detail: "Lead bank placement with Tier-1 PSU & private institutions; syndicate allotment to minimize borrowing spreads."
    },
    {
      num: "04",
      name: "Credit Sanction",
      detail: "Direct partner defense before bank credit committees, negotiating competitive security margins and moratoriums."
    },
    {
      num: "05",
      name: "100% Disbursement",
      detail: "Escrow and DSRA creation, statutory documentation perfection, and timely tranches release into project accounts."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#FBFBFC] text-[#1D1D1F] border-b border-black/[0.05]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 space-y-16 sm:space-y-20">
        
        {/* ======================================================== */}
        {/* SECTION HEADER & PROPORTIONAL EDITORIAL SPLIT            */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Mission Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={50} className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#FF5500] uppercase tracking-[0.2em] block">
                ABOUT PROSYNC ADVISORY
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#002244] leading-tight font-sans">
                Senior Financial Partners Behind Landmark Mandates
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
                Prosync Advisory delivers partner-led corporate debt syndication, project appraisal, and growth capital advisory for mid-market enterprises and concessionaires across India. We bridge enterprise promoters with Tier-1 bank credit committees, ensuring swift sanctions and benchmark borrowing terms.
              </p>
            </Reveal>

            <Reveal delay={180} className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#leadership"
                className="px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#002244] hover:bg-[#FF5500] shadow-md transition-all inline-flex items-center gap-2 min-h-[46px] active:scale-95 cursor-pointer"
              >
                <span>Meet Managing Partners</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full text-xs font-semibold text-[#002244] bg-white border border-black/[0.08] hover:bg-slate-50 transition-all inline-flex items-center gap-2 min-h-[46px] cursor-pointer"
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
                    <div className="w-full h-full flex flex-col justify-between p-8 bg-gradient-to-br from-[#0A2240] to-[#041224] text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#FF8A3D] font-bold">
                          Hyderabad HQ
                        </span>
                        <Building2 className="w-6 h-6 text-[#FF8A3D]" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-2xl font-bold text-white">Jubilee Hills Office</h3>
                        <p className="text-xs text-slate-300">Plot 82, Road No 7, Jubilee Hills Corridor</p>
                      </div>
                      <span className="text-xs font-mono text-emerald-400">CIN: U74999TG2015PTC099824</span>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#6E6E73] uppercase tracking-wider block font-bold">
                        Corporate Headquarters
                      </span>
                      <span className="text-xs font-bold text-[#002244]">
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

        {/* ======================================================== */}
        {/* 21ST.DEV BENTO GRID + METRIC PROOF & LOAN LIFECYCLE      */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ------------------------------------------------------ */}
          {/* BENTO CELL 1 (Span 7): 20+ Years Banking Relationships */}
          {/* Animated Number Ticker (₹5,000+ Cr mobilized)          */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-black/[0.08] p-7 sm:p-9 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF5500] uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#FF5500]" />
                  <span>Metric Proof &amp; Track Record</span>
                </span>
                <span className="text-xs font-mono text-[#6E6E73]">
                  2015 — 2026
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6E6E73] font-semibold block">
                  Cumulative Capital Syndicated
                </span>
                <div className="text-4xl sm:text-6xl">
                  <NumberTicker target={5000} suffix="+ Cr" prefix="₹" />
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
                Over 20 cumulative years of institutional banking relationships with India's premier public and private sector lenders. Deep credit desk relationships facilitate frictionless mandate structuring.
              </p>
            </div>

            {/* 3 Metric Pills inside Cell 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-black/[0.06]">
              <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                <div className="flex items-center gap-1.5 text-xs text-[#002244] font-bold">
                  <Landmark className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>25+ Lenders</span>
                </div>
                <span className="text-[11px] text-[#6E6E73] block mt-0.5">PSU &amp; Private Consortia</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                <div className="flex items-center gap-1.5 text-xs text-[#002244] font-bold">
                  <Coins className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Closure</span>
                </div>
                <span className="text-[11px] text-[#6E6E73] block mt-0.5">Zero deal leakage</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                <div className="flex items-center gap-1.5 text-xs text-[#002244] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#002244]" />
                  <span>Statutory NDA</span>
                </div>
                <span className="text-[11px] text-[#6E6E73] block mt-0.5">Promoter confidentiality</span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* BENTO CELL 2 (Span 5): Partner-Led Execution           */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-5 rounded-3xl bg-[#002244] text-white p-7 sm:p-9 shadow-md flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#FF5500_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF8A3D] uppercase tracking-wider">
                  <Users2 className="w-4 h-4" />
                  <span>Execution Philosophy</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white">
                  Zero Junior Handoffs
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Partner-Led Execution
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Every mandate is directly steered by our Managing Partners—from proprietary financial modeling and CMA preparation to personal presentations before bank credit committees.
              </p>

              <div className="space-y-3 pt-6 mt-6 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-200">
                    <strong>Direct Credit Committee Access:</strong> High-trust dialogue with Zonal Heads, GM Credits, and Chief Risk Officers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-200">
                    <strong>Tailored Covenants:</strong> Proactively neutralizing restrictive negative covenants, DSRA locks, and collateral hurdles.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between text-xs text-slate-300 font-mono border-t border-white/10 mt-6">
              <span>Hyderabad • Mumbai • Delhi</span>
              <span className="text-[#FF8A3D] font-bold">100% Focused</span>
            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* BENTO CELL 3 (Span 12): 99% Sanction Certainty &       */}
          {/* Interactive Loan Lifecycle Timeline                   */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-12 rounded-3xl bg-white border border-black/[0.08] p-7 sm:p-9 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-black/[0.06] mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200/60">
                    99% Sanction Certainty
                  </span>
                  <span className="text-xs font-mono text-[#6E6E73]">
                    Structured Lifecycle
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#002244] tracking-tight">
                  The Institutional Loan Lifecycle
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6E6E73] max-w-md">
                Click any milestone below to inspect our partner-led deliverables at each stage of bank sanction.
              </p>
            </div>

            {/* Interactive Timeline Stepper */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6">
              {lifecycleSteps.map((step, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#002244] text-white border-[#002244] shadow-md scale-[1.02]"
                        : "bg-[#F5F5F7] text-[#1D1D1F] border-black/[0.04] hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-mono font-bold ${isSelected ? "text-[#FF8A3D]" : "text-[#FF5500]"}`}>
                        {step.num}
                      </span>
                      {isSelected ? (
                        <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-slate-300" />
                      )}
                    </div>
                    <span className="text-xs sm:text-sm font-bold block leading-tight">
                      {step.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detailed Active Step Banner */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-black/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#002244] text-white flex items-center justify-center shrink-0 font-mono font-bold text-xs mt-0.5">
                  {lifecycleSteps[activeStep].num}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#002244]">
                    Stage {lifecycleSteps[activeStep].num}: {lifecycleSteps[activeStep].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#52525B] mt-0.5 leading-relaxed">
                    {lifecycleSteps[activeStep].detail}
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#002244] hover:bg-[#FF5500] transition-colors"
              >
                Inquire on this Stage
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
