import { ArrowUpRight } from 'lucide-react';

export default function ExperienceSection({ onOpenConsultation }) {
  const credentials = [
    {
      sector: "Hybrid Annuity Model (HAM) & Expressways",
      mandate: "Concession Financial Structuring & Debt Syndication",
      detail: "Advised Tier-1 EPC developers on NHAI concession bids totaling over ₹2,400+ Cr with optimized debt-equity ratios and swift financial closure."
    },
    {
      sector: "Commercial Real Estate & Mixed-Use",
      mandate: "Structured Construction Finance & Mezzanine Debt",
      detail: "Orchestrated consortium banking and private credit facilities for prime residential and commercial township projects across South India."
    },
    {
      sector: "Industrial Manufacturing & Capital Goods",
      mandate: "Consortium Debt Realignment & Working Capital",
      detail: "Enhanced working capital consortium lines and long-term Capex debt, lowering blended financing costs by 185 bps."
    },
    {
      sector: "Corporate M&A & Strategic Divestment",
      mandate: "Buy-side Valuation & Regulatory Compliance",
      detail: "Conducted independent DCF fairness opinions and cross-border regulatory certifications for high-value strategic acquisitions."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Mandate Diagnostics",
      desc: "Granular audit of balance sheet, capital requirements, and financial viability parameters."
    },
    {
      num: "02",
      title: "Financial Structuring",
      desc: "Precision financial modeling, risk sensitivity analysis, and institutional memorandum creation."
    },
    {
      num: "03",
      title: "Lender / Investor Roadshow",
      desc: "Targeted outreach across our trusted network of public/private banks, NBFCs, and PE funds."
    },
    {
      num: "04",
      title: "Execution & Closure",
      desc: "Term-sheet negotiation, documentation review, escrow mechanisms, and final disbursement."
    }
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#050608] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
              Institutional Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              A decade of disciplined deal execution.
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-400 leading-relaxed">
            Over 10 years of trusted advisory across Hyderabad and major Indian financial centers, delivering structured capital with uncompromised discretion.
          </p>
        </div>

        {/* 4 Representative Mandate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="apple-glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  {cred.sector}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {cred.mandate}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {cred.detail}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <span>Executed Mandate</span>
                <span className="font-mono text-neutral-400">100% Closed</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Advisory Execution Architecture */}
        <div className="apple-glass rounded-3xl p-8 sm:p-12 border border-neutral-800">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-2">
              Execution Methodology
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              The Prosync Mandate Lifecycle
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="space-y-3">
                <span className="text-2xl font-mono font-bold text-neutral-500">
                  {step.num}
                </span>
                <h4 className="text-base font-semibold text-white">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-neutral-400">
              Need custom terms or confidential valuation advisory?
            </div>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-neutral-200 transition-colors"
            >
              <span>Speak with a Managing Partner</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
