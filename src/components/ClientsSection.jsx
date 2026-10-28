import { Sparkles } from "lucide-react";
import { companyData } from "../data/companyData";

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 md:py-28 relative bg-[#07152B]/80 border-b border-[rgba(120,150,200,0.15)] overflow-hidden">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FF8A3D]">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Client Mandates</span>
            <span aria-hidden="true" className="text-[#38BDF8]">/</span>
            <span className="text-[#94A3B8]">Corporate Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F8FAFC]">
            Our Clients
          </h2>
          <p className="text-base text-[#CBD5E1] font-normal leading-relaxed">
            Leading companies and infrastructure developers we have structured financing for.
          </p>
        </div>

        {/* Clean Logo Cloud Grid with Subtle Orange Hover Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {companyData.clients.map((client) => (
            <div
              key={client.name}
              className="fintech-panel p-5 rounded-2xl bg-[#0D1F3C]/95 border border-[rgba(120,150,200,0.18)] hover:border-[#FF6B00]/50 hover:shadow-[0_8px_24px_rgba(255,107,0,0.1)] transition-all duration-300 flex items-center justify-between group relative overflow-hidden"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base sm:text-lg text-[#F8FAFC] group-hover:text-white transition-colors">
                    {client.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                </div>
                <p className="text-xs text-[#94A3B8] font-medium leading-tight">
                  {client.fullName}
                </p>
              </div>

              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0A1A33] border border-[rgba(120,150,200,0.2)] text-[#38BDF8] group-hover:border-[#FF6B00]/40 group-hover:text-[#FF8A3D] transition-colors shrink-0 pl-3">
                {client.tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
