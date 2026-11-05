import {
  ArrowRight,
  BarChart3,
  Database,
  Layers,
  TrendingUp,
  FileText
} from "lucide-react";
import { Reveal } from "../common/Motion";

export default function ProsyncGlobalSection() {
  const globalOfferings = [
    {
      title: "Due Diligence Reports",
      desc: "Comprehensive financial, commercial, and risk due diligence dossiers for funds and institutions evaluating direct investments.",
      icon: Database,
    },
    {
      title: "Investment & Investment Committee Notes",
      desc: "Institutional IC memos, thesis articulation, downside sensitivity modeling, and investment committee briefing packs.",
      icon: FileText,
    },
    {
      title: "Portfolio Monitoring & Updates",
      desc: "Continuous financial health tracking, loan covenant surveillance, quarterly reviews, and portfolio risk dashboards.",
      icon: TrendingUp,
    },
    {
      title: "Sector and Industry Analysis",
      desc: "Macro trends, regulatory policy shifts, competitive benchmarking, and specialized industry landscape research.",
      icon: Layers,
    },
    {
      title: "Financial Research Support",
      desc: "Dedicated analyst desks providing dynamic 3-statement models, DCF valuations, and custom analytical support.",
      icon: BarChart3,
    },
  ];

  const handleDiscussResearch = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(
        new CustomEvent("prosync:selectMandate", {
          detail: { mandate: "Prosync Global Research" },
        })
      );
    }
  };

  return (
    <section
      id="global-research"
      className="py-20 md:py-28 relative bg-[#EEF1F6] border-y border-black/[0.08] text-[#1D1D1F]"
    >
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 space-y-12 sm:space-y-14">
        
        {/* 13. PROSYNC GLOBAL - SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
          <Reveal className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-medium text-[#002244] uppercase tracking-[0.15em] block mb-2">
              PROSYNC GLOBAL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F] leading-[1.15]">
              Financial Research. Better Decisions.
            </h2>
            <p className="text-base sm:text-lg text-[#515154] font-normal leading-relaxed pt-1">
              Prosync Global provides research and analytical support to family offices, AIFs, fund houses and investment institutions.
            </p>
          </Reveal>

          <Reveal delay={100} className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleDiscussResearch}
              className="px-7 py-3.5 rounded-full text-xs font-bold font-heading text-white bg-[#002244] hover:bg-[#FF5500] shadow-md shadow-[#002244]/15 hover:shadow-[#FF5500]/25 transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>DISCUSS RESEARCH SUPPORT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>

        {/* 5 OFFERINGS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {globalOfferings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 60} className="h-full">
                <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-black/[0.06] hover:border-[#002244] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/[0.06]">
                      <div className="w-10 h-10 rounded-2xl bg-[#002244] text-white group-hover:bg-[#FF5500] flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-medium text-[#1D1D1F] mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#515154] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}

          {/* 6th Card: Direct Desk Access */}
          <Reveal delay={300} className="h-full">
            <div className="h-full p-6 sm:p-7 rounded-3xl bg-[#002244] text-white border border-[#002244] shadow-md flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-mono text-[#FF8A3D] uppercase tracking-wider font-bold block mb-2">
                  DEDICATED ANALYTICS DESK
                </span>
                <h3 className="text-xl font-bold font-heading text-white mb-2 leading-tight">
                  Custom Analytical Mandates
                </h3>
                <p className="text-xs sm:text-[13px] font-body text-slate-300 leading-relaxed">
                  Tailored research retainers and project-based analytical support for investment committees, CIOs, and family offices.
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleDiscussResearch}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold font-heading text-[#002244] bg-white hover:bg-[#FF5500] hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Connect with Research Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
