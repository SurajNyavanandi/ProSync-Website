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
        return <TrendingUp className="w-4 h-4 text-[#FF6B00]" />;
      case "Debt":
        return <Landmark className="w-4 h-4 text-[#FF8A3D]" />;
      case "Pre-IPO":
        return <ShieldCheck className="w-4 h-4 text-[#6E93C7]" />;
      case "DPR / TEV":
        return <FileText className="w-4 h-4 text-[#A9B8CF]" />;
      case "Bid":
        return <FileSpreadsheet className="w-4 h-4 text-[#FF8A3D]" />;
      default:
        return <TrendingUp className="w-4 h-4 text-[#FF6B00]" />;
    }
  };

  const isDprTev = activeMandate === "DPR / TEV";

  return (
    <section id="mandates" className="py-24 md:py-32 relative bg-[#07152B]/60 fintech-grid-bg border-y border-[rgba(120,150,200,0.15)]">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6E93C7]">
            <span>Mandate Matrix</span>
            <span aria-hidden="true" className="text-[#FF6B00]">/</span>
            <span className="text-[#A9B8CF]">Execution Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F7FA]">
            What a Prosync mandate looks like.
          </h2>
          <p className="text-base sm:text-lg text-[#A9B8CF] font-normal leading-relaxed">
            Select an advisory mandate below to see the key steps we manage from start to completion.
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
                className={`flex-1 min-w-[90px] py-2.5 px-4 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap text-center ${
                  isActive
                    ? "bg-[#13284A] text-[#F5F7FA] shadow-[0_4px_16px_rgba(0,0,0,0.4)] border border-[rgba(255,107,0,0.4)]"
                    : "text-[#A9B8CF] hover:text-[#F5F7FA] hover:bg-[#13284A]/40"
                }`}
              >
                {key}
              </button>
            );
          })}
        </div>

        {/* Active Mandate Showcase Panel */}
        <div className="floating-card-apple rounded-2xl bg-[#13284A] border border-[rgba(120,150,200,0.22)] p-7 md:p-10 relative overflow-hidden">
          {/* Subtle Orange Accent */}
          <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-[#FF6B00] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left Column: Target profile & summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#6E93C7]">
                  {getMandateIcon(activeMandate)}
                  <span>For · {currentMandateData.target}</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#F5F7FA]">
                  {currentMandateData.headline}
                </h3>
                <p className="text-sm text-[#A9B8CF] leading-relaxed">
                  {currentMandateData.summary}
                </p>
              </div>

              {/* Progress & Milestone info (No serial numbers) */}
              <div className="p-4 rounded-xl bg-[#0A1A33]/80 border border-[rgba(120,150,200,0.18)] space-y-3">
                <div className="flex items-center justify-between text-xs text-[#A9B8CF]">
                  <span>Mandate Execution Quality</span>
                  <span className="font-mono text-[#FF8A3D]">Partner-Led</span>
                </div>
                <div className="w-full h-1.5 bg-[#183159] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#6E93C7] to-[#FF6B00] w-full rounded-full" />
                </div>
                <div className="text-[11px] text-[#A9B8CF]/70">
                  Senior deal lead present in all bank presentations, credit discussions, and documentation.
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="btn-vivid-orange px-5 py-3 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2"
                >
                  <span>Discuss {activeMandate} Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Execution Roadmap (No serial numbers, DPR / TEV empty) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs uppercase font-mono tracking-wider text-[#A9B8CF]/70 mb-2">
                Workstream Phases
              </div>

              {isDprTev ? (
                <div className="rounded-xl p-8 bg-[#0D1F3C]/60 border border-dashed border-[rgba(120,150,200,0.25)] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0A1A33] border border-[rgba(120,150,200,0.2)] text-[#6E93C7] flex items-center justify-center mx-auto">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-semibold text-[#F5F7FA]">
                    DPR & TEV Points Coming Soon
                  </h4>
                  <p className="text-xs text-[#A9B8CF] max-w-md mx-auto leading-relaxed">
                    Custom milestones and technical appraisal scopes for DPR and TEV studies will be detailed here. Contact our advisory desk for specific terms.
                  </p>
                </div>
              ) : (
                currentMandateData.steps.map((step, index) => (
                  <div
                    key={index}
                    className="group rounded-xl p-4 bg-[#0D1F3C]/90 border border-[rgba(120,150,200,0.15)] hover:border-[#FF6B00]/50 hover:bg-[#0E2242] transition-all duration-200 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B00] shrink-0" />
                      <span className="text-sm md:text-base font-medium text-[#F5F7FA] group-hover:text-white transition-colors">
                        {step}
                      </span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#6E93C7] group-hover:text-[#FF6B00] transition-colors shrink-0" />
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
