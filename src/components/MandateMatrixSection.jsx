import { useState } from "react";
import { ArrowRight, CheckCircle2, TrendingUp, Landmark, ShieldCheck, FileText, FileSpreadsheet } from "lucide-react";
import { companyData } from "../data/companyData";

export default function MandateMatrixSection() {
  const mandateKeys = ["Equity", "Debt", "Pre-IPO", "DPR / TEV", "Bid"];
  const [activeMandate, setActiveMandate] = useState("Equity");
  const currentMandateData = companyData.mandatesMatrix[activeMandate];

  const getMandateIcon = (key) => {
    switch (key) {
      case "Equity":
        return <TrendingUp className="w-4 h-4 text-[#FF8A3D]" />;
      case "Debt":
        return <Landmark className="w-4 h-4 text-[#FF8A3D]" />;
      case "Pre-IPO":
        return <ShieldCheck className="w-4 h-4 text-[#FF8A3D]" />;
      case "DPR / TEV":
        return <FileText className="w-4 h-4 text-[#FF8A3D]" />;
      case "Bid":
        return <FileSpreadsheet className="w-4 h-4 text-[#FF8A3D]" />;
      default:
        return <TrendingUp className="w-4 h-4 text-[#FF8A3D]" />;
    }
  };

  const isDprTev = activeMandate === "DPR / TEV";

  return (
    <section id="mandates" className="py-24 md:py-32 relative fintech-grid-bg">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FF8A3D]">
            <span>How We Work</span>
            <span aria-hidden="true" className="text-[#38BDF8]">/</span>
            <span className="text-[#94A3B8]">Execution Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F8FAFC]">
            Step-by-step roadmap for your funding.
          </h2>
          <p className="text-base text-[#CBD5E1] font-normal leading-relaxed">
            Select an advisory mandate below to see the key milestones and deliverables we manage.
          </p>
        </div>

        {/* Segmented Control Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0D1F3C] border border-[rgba(120,150,200,0.2)] rounded-xl max-w-2xl mb-10">
          {mandateKeys.map((key) => {
            const isActive = activeMandate === key;
            return (
              <button
                key={key}
                onClick={() => setActiveMandate(key)}
                className={`flex-1 min-w-[90px] py-2.5 px-4 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap text-center cursor-pointer ${
                  isActive
                    ? "bg-[#13284A] text-[#F8FAFC] shadow-[0_4px_16px_rgba(0,0,0,0.4)] border border-[#FF6B00]/60 text-white"
                    : "text-[#94A3B8] hover:text-white hover:bg-[#13284A]/40"
                }`}
              >
                {key}
              </button>
            );
          })}
        </div>

        {/* Showcase Panel with Signature Orange Corner Accent */}
        <div className="fintech-panel rounded-2xl bg-[#0D1F3C] border border-[rgba(120,150,200,0.22)] p-7 md:p-10 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-28 h-[2px] bg-gradient-to-r from-[#FF6B00] via-[#FF8A3D] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38BDF8]">
                  {getMandateIcon(activeMandate)}
                  <span>For · {currentMandateData.target}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#F8FAFC]">
                  {currentMandateData.headline}
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  {currentMandateData.summary}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0A1A33] border border-[rgba(120,150,200,0.18)] space-y-3 shadow-inner">
                <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                  <span>Mandate Oversight</span>
                  <span className="font-mono text-[#FF8A3D] font-semibold">Direct Partner Lead</span>
                </div>
                <div className="w-full h-1.5 bg-[#183159] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#FF6B00] via-[#FF8A3D] to-[#38BDF8] w-full rounded-full" />
                </div>
                <div className="text-[11px] text-[#94A3B8]">
                  Senior deal leads are present in all bank presentations, term sheet negotiations, and credit reviews.
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="btn-vivid-orange px-6 py-3 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(255,107,0,0.4)]"
                >
                  <span>Discuss {activeMandate} Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs uppercase font-mono tracking-wider text-[#94A3B8] mb-2 font-semibold">
                Milestone Execution Steps
              </div>

              {isDprTev ? (
                <div className="rounded-xl p-8 bg-[#0A1A33]/80 border border-dashed border-[rgba(120,150,200,0.25)] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0D1F3C] border border-[#FF6B00]/30 text-[#FF8A3D] flex items-center justify-center mx-auto shadow-sm">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-[#F8FAFC]">
                    DPR & TEV Points Coming Soon
                  </h4>
                  <p className="text-xs text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                    Custom technical appraisal scopes and project report roadmaps will be updated here shortly. Contact our advisory desk for specific appraisal scopes.
                  </p>
                </div>
              ) : (
                currentMandateData.steps.map((step, index) => (
                  <div
                    key={index}
                    className="group rounded-xl p-4 bg-[#0A1A33] border border-[rgba(120,150,200,0.15)] hover:border-[#FF6B00]/50 hover:bg-[#0E203B] transition-all duration-200 flex items-center justify-between gap-4 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B00] shrink-0" />
                      <span className="text-sm md:text-base font-medium text-[#F8FAFC] group-hover:text-white transition-colors">
                        {step}
                      </span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] group-hover:scale-110 transition-transform shrink-0" />
                  </div>
                ))
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
