import {
  ArrowRight,
  BarChart3,
  Database,
  Layers,
  ShieldCheck,
  CheckCircle2,
  FileCheck2
} from "lucide-react";
import { companyData } from "../../data/companyData";
import { Reveal, TiltCard } from "../common/Motion";
import { IMAGES } from "../../data/images";

export default function ProsyncGlobalSection() {
  const capabilities = [
    {
      id: "modeling",
      number: "01",
      name: "Valuation & Financial Modeling",
      icon: BarChart3,
      badge: "Core Capability",
      image: IMAGES.RESEARCH_YIELD_CURVE,
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
      image: IMAGES.RESEARCH_DEBT_REPORTS,
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
        
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
          <Reveal className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold text-[#FF5500] uppercase tracking-[0.2em] block mb-2">
              DEDICATED ANALYTICS UNIT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-[#002244] leading-[1.15]">
              Prosync Global Research Desk
            </h2>
            <p className="text-base sm:text-lg font-body text-[#52525B] font-normal leading-relaxed pt-1">
              {companyData.prosyncGlobal.subtitle}
            </p>
          </Reveal>

          <Reveal delay={100} className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleInquireResearch}
              className="px-6 py-3 rounded-full text-xs font-bold font-heading text-white bg-[#002244] hover:bg-[#FF5500] shadow-md shadow-[#002244]/15 hover:shadow-[#FF5500]/25 transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Enquire for Research Desk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>

        {/* BENTO GRID FOR RESEARCH CAPABILITIES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isDark = idx === 0;

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
                      className={`h-full overflow-hidden rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                        isDark
                          ? "bg-[#002244] text-white border-[#002244] shadow-lg"
                          : "bg-white text-[#1D1D1F] border-black/[0.06] shadow-xs hover:shadow-md"
                      }`}
                    >
                      {/* Optional Photo Strip */}
                      {cap.image && (
                        <div className="relative aspect-[21/9] w-full overflow-hidden bg-slate-900 border-b border-black/[0.06]">
                          <img
                            src={cap.image}
                            alt={cap.name}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-white">
                            <span className="text-[10px] font-mono text-[#FF8A3D] uppercase tracking-wider font-bold">
                              Desk Analytics 0{idx + 1}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/20 backdrop-blur-md text-white border border-white/20 font-semibold">
                              {cap.badge}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
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

                        <h3 className={`text-xl sm:text-2xl font-bold font-heading tracking-tight mb-3 ${
                          isDark ? "text-white" : "text-[#002244]"
                        }`}>
                          {cap.name}
                        </h3>

                        <p className={`text-xs sm:text-sm font-body leading-relaxed font-normal mb-6 ${
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

                    </div>
                  </TiltCard>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Global Security Banner */}
        <Reveal delay={150}>
          <div className="p-6 rounded-2xl bg-white border border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-[#52525B]">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                <strong>Confidentiality Safeguards:</strong> All financial models, cap tables, and research mandates operate under strict non-disclosure protocols.
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
