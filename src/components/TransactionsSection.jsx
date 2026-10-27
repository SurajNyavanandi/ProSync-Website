import { ArrowUpRight, Compass, CheckCircle2 } from "lucide-react";
import { companyData } from "../data/companyData";

export default function TransactionsSection() {
  const deal = companyData.flagshipDeal;

  return (
    <section id="transactions" className="py-24 md:py-32 relative fintech-grid-bg">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6E93C7]">
            <span>Proven Track Record</span>
            <span aria-hidden="true" className="text-[#FF6B00]">/</span>
            <span className="text-[#A9B8CF]">Landmark Closings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F7FA]">
            Representative transaction execution.
          </h2>
          <p className="text-base sm:text-lg text-[#A9B8CF] font-normal leading-relaxed">
            We structure complex financial solutions, negotiate terms with lending consortia, and steer high-value capital mandates across the finish line.
          </p>
        </div>

        {/* Single Flagship Featured Transaction Card (₹250 Cr) with Real Project Image */}
        <div className="fintech-panel rounded-3xl overflow-hidden border border-[rgba(120,150,200,0.22)] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group bg-[#0D1F3C]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* Real Project Image Half (Highway & Concession Infrastructure) */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[460px] overflow-hidden bg-[#0A1A33]">
              <img
                src={deal.imageUrl}
                alt={deal.title}
                onError={(e) => {
                  e.currentTarget.src = "/assets/aistudio/Screenshot_2026-10-21_131742_8846fa8c.png";
                }}
                className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Directional scrims */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C] via-transparent to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0D1F3C]/90 hidden lg:block" />

              {/* Corner Badge */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1A33]/90 backdrop-blur-md border border-[rgba(120,150,200,0.3)] text-xs text-[#FF8A3D] font-mono">
                <Compass className="w-3.5 h-3.5" />
                <span>Featured Mandate · Financial Closure</span>
              </div>
            </div>

            {/* Narrative Half */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(120,150,200,0.15)]">
                  <div>
                    <span className="font-mono text-4xl sm:text-5xl font-bold text-[#FF6B00] tabular-nums block">
                      {deal.size}
                    </span>
                    <span className="text-[11px] font-mono text-[#A9B8CF]/80 uppercase tracking-widest mt-1 block">
                      Sanctioned Facility
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#6E93C7] block font-semibold">
                      {deal.category}
                    </span>
                    <span className="text-xs text-[#A9B8CF] font-mono">
                      {deal.sector}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5F7FA] leading-tight">
                  {deal.title}
                </h3>

                <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                  {deal.outcome}
                </p>

                {/* Key Execution Highlights (Simple, clear language) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-[#6E93C7]">
                  <div className="p-3.5 rounded-xl bg-[#0A1A33] border border-[rgba(120,150,200,0.18)]">
                    <span className="text-[10px] text-[#A9B8CF] block uppercase tracking-wider">Appraisal Standard</span>
                    <span className="text-[#F5F7FA] font-semibold text-xs mt-0.5 block">{deal.appraisalStandard}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0A1A33] border border-[rgba(120,150,200,0.18)]">
                    <span className="text-[10px] text-[#A9B8CF] block uppercase tracking-wider">Execution Speed</span>
                    <span className="text-[#F5F7FA] font-semibold text-xs mt-0.5 block">{deal.executionSpeed}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 text-xs text-[#A9B8CF]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span>End-to-end financial modeling, lender consortium negotiation & legal documentation</span>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-[rgba(120,150,200,0.12)] flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#A9B8CF]">Lead Transaction Arranger: <strong className="text-white">Prosync Consulting</strong></span>
                <a
                  href="#contact"
                  className="btn-vivid-orange px-5 py-2.5 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2"
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
