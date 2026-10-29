import { useState } from "react";
import { ArrowRight, CheckCircle2, TrendingUp, Landmark, ShieldCheck, FileSpreadsheet, Search, ClipboardCheck } from "lucide-react";
import { companyData } from "../data/companyData";

export default function MandateMatrixSection() {
  const mandateKeys = ["Equity", "Debt", "Pre-IPO", "Equity Research", "Due Diligence", "Bid"];
  const [activeMandate, setActiveMandate] = useState("Equity");
  const currentMandateData = companyData.mandatesMatrix[activeMandate] || companyData.mandatesMatrix["Equity"];

  const getMandateTheme = (key) => {
    switch (key) {
      case "Equity":
        return {
          icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
          accent: "text-emerald-400",
          border: "border-emerald-500/40",
          bgActive: "bg-emerald-500/15 text-emerald-300 border-emerald-500/50",
          bullet: "bg-emerald-400",
          button: "bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_4px_16px_rgba(16,185,129,0.35)]",
          badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
        };
      case "Debt":
        return {
          icon: <Landmark className="w-4 h-4 text-blue-400" />,
          accent: "text-blue-400",
          border: "border-blue-500/40",
          bgActive: "bg-blue-500/15 text-blue-300 border-blue-500/50",
          bullet: "bg-blue-400",
          button: "bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_16px_rgba(37,99,235,0.35)]",
          badge: "bg-blue-500/10 text-blue-300 border-blue-500/30",
        };
      case "Pre-IPO":
        return {
          icon: <ShieldCheck className="w-4 h-4 text-purple-400" />,
          accent: "text-purple-400",
          border: "border-purple-500/40",
          bgActive: "bg-purple-500/15 text-purple-300 border-purple-500/50",
          bullet: "bg-purple-400",
          button: "bg-purple-600 hover:bg-purple-700 text-white shadow-[0_4px_16px_rgba(147,51,234,0.35)]",
          badge: "bg-purple-500/10 text-purple-300 border-purple-500/30",
        };
      case "Equity Research":
        return {
          icon: <Search className="w-4 h-4 text-amber-400" />,
          accent: "text-amber-400",
          border: "border-amber-500/40",
          bgActive: "bg-amber-500/15 text-amber-300 border-amber-500/50",
          bullet: "bg-amber-400",
          button: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-[0_4px_16px_rgba(245,158,11,0.35)]",
          badge: "bg-amber-500/10 text-amber-300 border-amber-500/30",
        };
      case "Due Diligence":
        return {
          icon: <ClipboardCheck className="w-4 h-4 text-rose-400" />,
          accent: "text-rose-400",
          border: "border-rose-500/40",
          bgActive: "bg-rose-500/15 text-rose-300 border-rose-500/50",
          bullet: "bg-rose-400",
          button: "bg-rose-600 hover:bg-rose-700 text-white shadow-[0_4px_16px_rgba(225,29,72,0.35)]",
          badge: "bg-rose-500/10 text-rose-300 border-rose-500/30",
        };
      case "Bid":
        return {
          icon: <FileSpreadsheet className="w-4 h-4 text-cyan-400" />,
          accent: "text-cyan-400",
          border: "border-cyan-500/40",
          bgActive: "bg-cyan-500/15 text-cyan-300 border-cyan-500/50",
          bullet: "bg-cyan-400",
          button: "bg-cyan-600 hover:bg-cyan-700 text-white shadow-[0_4px_16px_rgba(8,145,178,0.35)]",
          badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
        };
      default:
        return {
          icon: <TrendingUp className="w-4 h-4 text-[#FF8A3D]" />,
          accent: "text-[#FF8A3D]",
          border: "border-[#FF6B00]/40",
          bgActive: "bg-[#FF6B00]/15 text-white border-[#FF6B00]/50",
          bullet: "bg-[#FF6B00]",
          button: "btn-vivid-orange",
          badge: "bg-[#FF6B00]/10 text-[#FF8A3D] border-[#FF6B00]/30",
        };
    }
  };

  const currentTheme = getMandateTheme(activeMandate);

  return (
    <section id="mandates" className="py-20 md:py-28 relative bg-[#09172E] border-b border-white/[0.08]">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8">

        {/* Clear Section Header */}
        <div className="max-w-xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-2">
            Mandate Workflows
          </h2>
          <p className="text-sm sm:text-base text-[#A9B8CF] font-light">
            Milestones, research protocols, and deliverables across institutional disciplines.
          </p>
        </div>

        {/* Colorful Segmented Control Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#060E1C] border border-white/[0.1] rounded-2xl max-w-3xl mb-10 shadow-lg">
          {mandateKeys.map((key) => {
            const isActive = activeMandate === key;
            const theme = getMandateTheme(key);
            return (
              <button
                key={key}
                onClick={() => setActiveMandate(key)}
                className={`flex-1 min-w-[100px] py-2.5 px-3 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap text-center cursor-pointer border ${
                  isActive
                    ? theme.bgActive
                    : "text-[#A9B8CF] border-transparent hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <span className="flex items-center justify-center gap-1.5">
                  {theme.icon}
                  <span>{key}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Colorful Showcase Panel */}
        <div className="rounded-2xl bg-[#0D1F3C] border border-white/[0.12] p-7 md:p-10 relative overflow-hidden shadow-2xl">
          {/* Dynamic Top Gradient */}
          <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-${activeMandate === 'Equity' ? 'emerald' : activeMandate === 'Debt' ? 'blue' : activeMandate === 'Pre-IPO' ? 'purple' : activeMandate === 'Equity Research' ? 'amber' : activeMandate === 'Due Diligence' ? 'rose' : 'cyan'}-500 to-transparent`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className={`inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full border ${currentTheme.badge}`}>
                  {currentTheme.icon}
                  <span>Target · {currentMandateData.target}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {currentMandateData.headline}
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  {currentMandateData.summary}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#060E1C] border border-white/[0.08] space-y-3 shadow-inner">
                <div className="flex items-center justify-between text-xs text-[#A9B8CF]">
                  <span>Mandate Governance</span>
                  <span className={`font-mono font-semibold ${currentTheme.accent}`}>Direct Partner Lead</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className={`h-full ${currentTheme.bullet} w-full rounded-full transition-all duration-500`} />
                </div>
                <div className="text-[11px] text-[#A9B8CF]">
                  Dedicated deal heads oversee end-to-end deliverables, models, reports, and negotiations.
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className={`px-6 py-3 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2 rounded-xl transition-all duration-200 ${currentTheme.button}`}
                >
                  <span>Discuss {activeMandate} Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Realistic Step-by-Step Milestones */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs uppercase font-mono tracking-wider text-[#A9B8CF] mb-2 font-semibold">
                Execution Deliverables & Milestones
              </div>

              {currentMandateData.steps && currentMandateData.steps.map((step, index) => (
                <div
                  key={index}
                  className="group rounded-xl p-4 bg-[#060E1C] border border-white/[0.08] hover:border-white/30 hover:bg-[#11233F] transition-all duration-200 flex items-center justify-between gap-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full ${currentTheme.bullet} shrink-0`} />
                    <span className="text-sm md:text-base font-medium text-white group-hover:text-white transition-colors">
                      {step}
                    </span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
