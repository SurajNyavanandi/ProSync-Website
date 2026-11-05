export default function TransactionsSection() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 relative bg-[#06182E] text-white overflow-hidden border-b border-white/10"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10 space-y-12">
        
        {/* OUR EXPERIENCE - 3-NUMBER HORIZONTAL STRIP */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#FF8A3D] font-medium block">
              OUR EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
              A Proven Institutional Track Record
            </h2>
          </div>

          {/* Clean 3-Number Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-2">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-mono text-[#FF5500] tracking-tight tabular-nums block">
                ₹800+ CRORE
              </span>
              <div className="mt-3">
                <span className="text-base sm:text-lg font-medium text-white block">
                  Transaction experience
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-mono text-emerald-400 tracking-tight tabular-nums block">
                SINCE 2015
              </span>
              <div className="mt-3">
                <span className="text-base sm:text-lg font-medium text-white block">
                  Financial advisory experience
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-mono text-cyan-400 tracking-tight tabular-nums block">
                MULTI-SECTOR
              </span>
              <div className="mt-3">
                <span className="text-base sm:text-lg font-medium text-white block">
                  Experience across business and infrastructure sectors
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SELECTED EXPERIENCE - 4 CLEAN CARDS */}
        <div className="pt-6 border-t border-white/10 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#FF8A3D] font-medium block mb-1">
              SELECTED EXPERIENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Advisory Capabilities &amp; Mandate Execution
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2 hover:border-[#FF5500]/50 transition-colors">
              <h4 className="text-base font-bold font-heading text-white">
                Project Finance
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-300 font-body leading-relaxed">
                Supporting project promoters with financial structuring and funding proposals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2 hover:border-[#FF5500]/50 transition-colors">
              <h4 className="text-base font-bold font-heading text-white">
                Working Capital Finance
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-300 font-body leading-relaxed">
                Assisting operating businesses with working capital assessment and lender engagement.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2 hover:border-[#FF5500]/50 transition-colors">
              <h4 className="text-base font-bold font-heading text-white">
                Infrastructure &amp; Industrial Projects
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-300 font-body leading-relaxed">
                Supporting project evaluation, TEV studies and financial modelling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2 hover:border-[#FF5500]/50 transition-colors">
              <h4 className="text-base font-bold font-heading text-white">
                Corporate Transactions
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-300 font-body leading-relaxed">
                Providing valuation, due diligence and transaction support.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
