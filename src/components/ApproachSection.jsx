import { companyData } from "../data/companyData";

export default function ApproachSection() {
  return (
    <section id="approach" className="py-16 md:py-24 relative fintech-grid-bg">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="max-w-xl space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[#FF8A3D] font-medium block">
            Execution Model
          </span>
          <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#F8FAFC]">
            Senior-Led Process
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] font-light">
            Direct partner oversight from financial modeling through to disbursement.
          </p>
        </div>

        {/* 4 Process Cards with Signature Orange Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.approach.map((step, idx) => (
            <div
              key={step.name || idx}
              className="fintech-panel rounded-2xl p-6 bg-[#0D1F3C]/95 border border-[rgba(120,150,200,0.18)] hover:border-[#FF6B00]/50 hover:shadow-[0_12px_28px_rgba(255,107,0,0.1)] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle 2px Orange Corner Line */}
              <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-[#FF6B00] via-[#FF8A3D] to-transparent group-hover:w-24 transition-all duration-300" />

              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-[rgba(120,150,200,0.14)] mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#FF8A3D] font-bold">
                    {step.name}
                  </span>
                  <span className="text-[11px] font-mono text-[#38BDF8]">
                    {step.tagline}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2.5 group-hover:text-white transition-colors">
                  {step.name}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[rgba(120,150,200,0.12)] flex items-center justify-between text-xs text-[#94A3B8] font-mono">
                <span>Stage Milestone</span>
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] group-hover:scale-125 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Quantitative Proof Metrics Strip in Bold Glowing Orange */}
        <div className="mt-20 pt-16 border-t border-[rgba(120,150,200,0.18)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.metrics.map((metric, idx) => (
              <div key={metric.label || idx} className="space-y-2">
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-mono tabular-nums text-[#FF6B00] drop-shadow-sm"
                >
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-[#CBD5E1] leading-snug">
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
