import {
  ArrowRight,
  BarChart3,
  Database,
  Layers,
  ShieldCheck,
  CheckCircle2,
  FileCheck2
} from "lucide-react";
import { companyData } from "../data/companyData";
import { Reveal, TiltCard } from "./common/Motion";

export default function ProsyncGlobalSection() {
  const capabilities = [
    {
      id: "modeling",
      number: "01",
      name: "Valuation & Financial Modeling",
      icon: BarChart3,
      badge: "Core Capability",
      desc: "Lender-grade 3-statement models, DCF valuations, LBO frameworks, and sensitivity stress-testing tailored for bank credit committees.",
      tags: ["Dynamic CMA Data", "DSCR Stress Testing", "LBO & DCF Valuation"],
      span: "lg:col-span-7"
    },
    {
      id: "vdr",
      number: "02",
      name: "Due Diligence Support & VDR",
      icon: Database,
      badge: "Institutional Security",
      desc: "Structured Virtual Data Room management, commercial due diligence dossiers, and quality-of-earnings diligence support.",
      tags: ["Virtual Data Room (VDR)", "Diligence Dossiers", "Quality of Earnings"],
      span: "lg:col-span-5"
    },
    {
      id: "tev",
      number: "03",
      name: "Techno-Economic Appraisal (TEV/DPR)",
      icon: FileCheck2,
      badge: "99% Sanction Rate",
      desc: "Bankable Detailed Project Reports (DPR) and technical feasibility appraisals complying with RBI and lead consortium guidelines.",
      tags: ["Bankable DPR", "Capex Validation", "Consortium Alignment"],
      span: "lg:col-span-5"
    },
    {
      id: "cim",
      number: "04",
      name: "Investor Materials & CIM Formulation",
      icon: Layers,
      badge: "Boardroom Ready",
      desc: "Confidential Information Memorandums, board presentation decks, and institutional Investment Committee (IC) briefing memorandums.",
      tags: ["Confidential IM (CIM)", "IC Board Decks", "Syndicate Teasers"],
      span: "lg:col-span-7"
    }
  ];

  const handleInquireResearch = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(
        new CustomEvent("prosync:selectMandate", {
          detail: { mandate: "Project Advisory & TEV Study" }
        })
      );
    }
  };

  return (
    <section id="global-research" className="py-20 md:py-28 relative bg-[#F5F5F7] border-y border-black/[0.05] text-[#1D1D1F]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 space-y-12 sm:space-y-14">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                            */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
          <Reveal className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#002244]/[0.05] text-[#002244] text-[11px] font-mono font-bold tracking-wider uppercase mb-2 border border-[#002244]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              <span>DEDICATED ANALYTICS UNIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#002244] font-sans">
              Prosync Global Research Desk
            </h2>
            <p className="text-base sm:text-lg text-[#52525B] font-normal leading-relaxed">
              {companyData.prosyncGlobal.subtitle}
            </p>
          </Reveal>

          <Reveal delay={100} className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleInquireResearch}
              className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#002244] hover:bg-[#FF5500] shadow-md shadow-[#002244]/15 hover:shadow-[#FF5500]/25 transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Enquire for Research Desk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>

        {/* ======================================================== */}
        {/* 21ST.DEV BENTO GRID FOR RESEARCH CAPABILITIES            */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isDark = idx === 0; // High-impact dark bento cell for Valuation & Modeling

            return (
              <div key={cap.id} className={`${cap.span} h-full`}>
                <Reveal delay={idx * 100} className="h-full">
                  <TiltCard
                    maxTilt={3}
                    scale={1.01}
                    glowColor={isDark ? "rgba(255, 85, 0, 0.12)" : "rgba(0, 34, 68, 0.06)"}
                    className="h-full rounded-3xl"
                  >
                    <div
                      className={`h-full p-7 sm:p-9 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                        isDark
                          ? "bg-[#002244] text-white border-[#002244] shadow-lg"
                          : "bg-white text-[#1D1D1F] border-black/[0.06] shadow-xs hover:shadow-md"
                      }`}
                    >
                      <div>
                        {/* Top Metadata */}
                        <div className={`flex items-center justify-between pb-4 border-b mb-6 ${
                          isDark ? "border-white/10" : "border-black/[0.06]"
                        }`}>
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                isDark
                                  ? "bg-white/10 text-[#FF8A3D]"
                                  : "bg-[#002244] text-white"
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className={`text-xs font-mono font-bold ${
                              isDark ? "text-[#FF8A3D]" : "text-[#FF5500]"
                            }`}>
                              0{idx + 1}
                            </span>
                          </div>

                          <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                            isDark
                              ? "bg-white/10 text-slate-200"
                              : "bg-[#F5F5F7] text-[#002244] border border-black/[0.04]"
                          }`}>
                            {cap.badge}
                          </span>
                        </div>

                        <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-3 ${
                          isDark ? "text-white" : "text-[#002244]"
                        }`}>
                          {cap.name}
                        </h3>

                        <p className={`text-xs sm:text-sm leading-relaxed font-normal mb-6 ${
                          isDark ? "text-slate-300" : "text-[#52525B]"
                        }`}>
                          {cap.desc}
                        </p>
                      </div>

                      <div>
                        {/* Capability Tags */}
                        <div className={`flex flex-wrap gap-2 pt-4 border-t ${
                          isDark ? "border-white/10" : "border-black/[0.06]"
                        }`}>
                          {cap.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className={`text-[11px] font-mono px-2.5 py-1 rounded-lg font-medium flex items-center gap-1.5 ${
                                isDark
                                  ? "bg-white/5 text-slate-200 border border-white/10"
                                  : "bg-[#F5F5F7] text-[#475569] border border-black/[0.04]"
                              }`}
                            >
                              <CheckCircle2 className={`w-3 h-3 ${isDark ? "text-[#FF5500]" : "text-emerald-600"}`} />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>

                        <div className={`mt-5 flex items-center justify-between text-xs font-mono pt-3 ${
                          isDark ? "text-slate-400" : "text-[#6E6E73]"
                        }`}>
                          <span>Institutional Grade</span>
                          <span className={isDark ? "text-emerald-400" : "text-emerald-700"}>
                            Direct Partner Delivery
                          </span>
                        </div>
                      </div>

                    </div>
                  </TiltCard>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Global Security Banner */}
        <Reveal delay={150}>
          <div className="p-6 rounded-2xl bg-white border border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#52525B]">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                <strong>Bilateral NDA Protection:</strong> All models, cap tables, and research mandates operate under strict statutory non-disclosure protocols.
              </span>
            </div>
            <span className="font-mono text-[#002244] font-bold shrink-0">
              CIN: U74999TG2015PTC099824
            </span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
