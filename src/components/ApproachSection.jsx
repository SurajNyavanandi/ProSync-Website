import { companyData } from "../data/companyData";

export default function ApproachSection() {
  return (
    <section id="approach" className="py-24 md:py-32 relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6E93C7]">
            <span>Our Approach</span>
            <span aria-hidden="true" className="text-[#FF6B00]">/</span>
            <span className="text-[#A9B8CF]">Execution Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F7FA]">
            Partner-led, <span className="italic text-[#FF8A3D]">start to close.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A9B8CF] font-normal leading-relaxed">
            Every mandate is spearheaded directly by a partner. Your numbers, financial models, and lender negotiations receive dedicated executive scrutiny at every step.
          </p>
        </div>

        {/* 4 Steps (No Roman numerals, unique key={step.name}) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.approach.map((step, idx) => (
            <div
              key={step.name || idx}
              className="fintech-panel p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(120,150,200,0.15)] mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#FF8A3D] font-bold">
                    {step.name}
                  </span>
                  <span className="text-[11px] font-mono text-[#6E93C7]">
                    {step.tagline}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-2.5 group-hover:text-white transition-colors">
                  {step.name}
                </h3>
                <p className="text-sm text-[#A9B8CF] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Milestone Indicator */}
              <div className="pt-6 mt-6 border-t border-[rgba(120,150,200,0.1)] flex items-center justify-between text-xs text-[#A9B8CF]/70 font-mono">
                <span>Stage Milestone</span>
                <span className="w-2 h-2 rounded-full bg-[#6E93C7] group-hover:bg-[#FF6B00] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Quantitative Proof Metrics Strip */}
        <div className="mt-20 pt-16 border-t border-[rgba(120,150,200,0.18)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.metrics.map((metric, idx) => (
              <div key={metric.label || idx} className="space-y-2">
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight font-mono tabular-nums"
                  style={{ color: metric.accent }}
                >
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-[#A9B8CF] leading-snug">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
