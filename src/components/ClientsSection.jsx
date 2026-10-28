import { companyData } from "../data/companyData";

export default function ClientsSection() {
  return (
    <section id="clients" className="py-16 md:py-24 relative bg-[#07152B]/80 border-b border-[rgba(120,150,200,0.15)] overflow-hidden">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 mb-8 sm:mb-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF8A3D] font-medium block">
              Clients & Sponsors
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#F8FAFC]">
              Corporate Credentials
            </h2>
            <p className="text-sm text-[#94A3B8] font-light">
              Selected enterprises and infrastructure concessionaires advised by Prosync.
            </p>
          </div>

          <span className="text-[11px] font-mono text-[#64748B] hidden md:inline-block">
            Auto-scrolling • Hover to pause
          </span>
        </div>

      </div>

      {/* Infinite Seamless Scrolling Client Cards Carousel */}
      <div className="py-4 overflow-hidden relative">
        {/* Soft edge fade gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#07152B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#07152B] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-cards flex items-center gap-5 sm:gap-6 whitespace-nowrap">
          {[...companyData.clients, ...companyData.clients, ...companyData.clients].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="fintech-panel w-[280px] sm:w-[340px] p-5 rounded-2xl bg-[#0D1F3C]/95 border border-[rgba(120,150,200,0.18)] hover:border-[#FF6B00]/60 hover:shadow-[0_8px_24px_rgba(255,107,0,0.15)] transition-all duration-300 flex flex-col justify-between shrink-0 group relative overflow-hidden"
            >
              {/* Subtle top orange indicator line on hover */}
              <div className="absolute top-0 left-0 w-12 h-[2px] bg-gradient-to-r from-[#FF6B00] to-transparent group-hover:w-24 transition-all duration-300" />

              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base sm:text-lg text-[#F8FAFC] group-hover:text-white transition-colors">
                    {client.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0A1A33] border border-[rgba(120,150,200,0.2)] text-[#38BDF8] group-hover:border-[#FF6B00]/40 group-hover:text-[#FF8A3D] transition-colors shrink-0">
                  {client.tag}
                </span>
              </div>

              <p className="text-xs text-[#94A3B8] font-medium leading-tight whitespace-normal">
                {client.fullName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
