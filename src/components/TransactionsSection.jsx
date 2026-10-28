import { ArrowUpRight, Compass, CheckCircle2 } from "lucide-react";
import { companyData } from "../data/companyData";

export default function TransactionsSection() {
  const deal = companyData.flagshipDeal;

  return (
    <section id="transactions" className="py-24 md:py-32 relative fintech-grid-bg">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="max-w-xl space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[#FF8A3D] font-medium block">
            Track Record
          </span>
          <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#F8FAFC]">
            Selected Mandates
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] font-light">
            Flagship syndication and project execution benchmarks.
          </p>
        </div>

        {/* Landmark Featured Deal Card with Signature Prosync Orange Accent */}
        <div className="fintech-panel rounded-3xl overflow-hidden border border-[rgba(120,150,200,0.22)] bg-[#0D1F3C] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group transition-all duration-300 hover:border-[#FF6B00]/50 hover:shadow-[0_20px_50px_rgba(255,107,0,0.15)] relative">
          {/* Signature 2px Gradient Orange Accent */}
          <div className="absolute top-0 left-0 w-32 h-[2px] bg-gradient-to-r from-[#FF6B00] via-[#FF8A3D] to-transparent z-20 group-hover:w-48 transition-all duration-300" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* NHAI Project Photograph */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[460px] overflow-hidden bg-[#0A1A33]">
              <img
                src={deal.imageUrl}
                alt={deal.title}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=1200&auto=format&fit=crop";
                }}
                className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C] via-transparent to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0D1F3C]/95 hidden lg:block" />

              {/* Badge Overlaid on Photo */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1A33]/90 backdrop-blur-md border border-[rgba(120,150,200,0.3)] text-xs text-[#FF8A3D] font-mono shadow-md">
                <Compass className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Featured Mandate · Financial Closure</span>
              </div>
            </div>

            {/* Narrative Half */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(120,150,200,0.15)]">
                  <div>
                    <span className="font-mono text-4xl sm:text-5xl font-bold text-[#FF6B00] tracking-tight tabular-nums block drop-shadow-sm">
                      {deal.size}
                    </span>
                    <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mt-1 block font-semibold">
                      Sanctioned Facility
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] block font-semibold">
                      {deal.category}
                    </span>
                    <span className="text-xs text-[#CBD5E1] font-mono">
                      {deal.sector}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-[#F8FAFC] leading-tight">
                  {deal.title}
                </h3>

                <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                  {deal.outcome}
                </p>

                {/* Key Execution Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-[#38BDF8]">
                  <div className="p-3.5 rounded-xl bg-[#0A1A33] border border-[rgba(120,150,200,0.18)]">
                    <span className="text-[10px] text-[#94A3B8] block uppercase tracking-wider">Appraisal Standard</span>
                    <span className="text-white font-semibold text-xs mt-0.5 block">{deal.appraisalStandard}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0A1A33] border border-[rgba(120,150,200,0.18)]">
                    <span className="text-[10px] text-[#94A3B8] block uppercase tracking-wider">Execution Speed</span>
                    <span className="text-white font-semibold text-xs mt-0.5 block">{deal.executionSpeed}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 text-xs text-[#94A3B8]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Full bank syndication, financial modeling, and legal closing</span>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-[rgba(120,150,200,0.14)] flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#94A3B8]">Lead Advisor: <strong className="text-white">Prosync Consulting</strong></span>
                <a
                  href="#contact"
                  className="btn-vivid-orange px-6 py-2.5 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(255,107,0,0.4)]"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
