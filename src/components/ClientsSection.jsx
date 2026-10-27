import { Building2, CheckCircle2, Sparkles } from "lucide-react";
import { companyData } from "../data/companyData";

export default function ClientsSection() {
  const clientAccents = [
    { border: "hover:border-[#0EA5E9]", badge: "text-sky-300 bg-sky-950/60 border-sky-800/50", glow: "group-hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)]" },
    { border: "hover:border-[#10B981]", badge: "text-emerald-300 bg-emerald-950/60 border-emerald-800/50", glow: "group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]" },
    { border: "hover:border-[#F59E0B]", badge: "text-amber-300 bg-amber-950/60 border-amber-800/50", glow: "group-hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)]" },
    { border: "hover:border-[#8B5CF6]", badge: "text-purple-300 bg-purple-950/60 border-purple-800/50", glow: "group-hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]" },
    { border: "hover:border-[#06B6D4]", badge: "text-cyan-300 bg-cyan-950/60 border-cyan-800/50", glow: "group-hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)]" },
    { border: "hover:border-[#EC4899]", badge: "text-pink-300 bg-pink-950/60 border-pink-800/50", glow: "group-hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)]" },
    { border: "hover:border-[#14B8A6]", badge: "text-teal-300 bg-teal-950/60 border-teal-800/50", glow: "group-hover:shadow-[0_8px_30px_rgba(20,184,166,0.15)]" },
    { border: "hover:border-[#3B82F6]", badge: "text-blue-300 bg-blue-950/60 border-blue-800/50", glow: "group-hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]" },
    { border: "hover:border-[#FF6B00]", badge: "text-orange-300 bg-orange-950/60 border-orange-800/50", glow: "group-hover:shadow-[0_8px_30px_rgba(255,107,0,0.15)]" },
  ];

  return (
    <section id="clients" className="py-20 md:py-28 relative bg-[#07152B]/75 border-b border-[rgba(120,150,200,0.15)] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Section Header with Multi-Color Balance */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#38BDF8]">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Corporate Relationships</span>
            <span aria-hidden="true" className="text-[#F59E0B]">/</span>
            <span className="text-[#94A3B8]">Client Mandates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F8FAFC]">
            Trusted by leading industrial & infrastructure groups.
          </h2>
          <p className="text-base text-[#CBD5E1] font-normal leading-relaxed">
            We have structured, evaluated, and closed financing mandates across high-growth corporations, industrial developers, and tech innovators.
          </p>
        </div>

        {/* Clients Grid with Rich Palette and Micro-Interactions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-6">
          {companyData.clients.map((client, idx) => {
            const styling = clientAccents[idx % clientAccents.length];

            return (
              <div
                key={client.name}
                className={`fintech-panel p-6 rounded-2xl bg-[#0D1F3C]/95 border border-[rgba(120,150,200,0.2)] ${styling.border} ${styling.glow} transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between shadow-md`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[rgba(120,150,200,0.14)]">
                    <div className="w-10 h-10 rounded-xl bg-[#0A1A33] border border-[rgba(120,150,200,0.25)] flex items-center justify-center text-[#38BDF8] group-hover:scale-110 group-hover:text-white transition-all">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-md border font-medium ${styling.badge}`}>
                      {client.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-white transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed font-sans">
                    {client.fullName}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[rgba(120,150,200,0.12)] flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Advisory Mandate</span>
                  </span>
                  <span className="text-[#64748B]">Verified Corporate</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
