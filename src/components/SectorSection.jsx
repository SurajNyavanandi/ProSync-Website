import { Sun, Flame, Construction, Wheat, Zap, Bot, Building2 } from "lucide-react";
import { companyData } from "../data/companyData";

export default function SectorSection() {
  const getSectorIcon = (name) => {
    if (name.includes("Solar") || name.includes("Clean Energy")) {
      return <Sun className="w-5 h-5 text-[#FF8A3D]" />;
    }
    if (name.includes("Gas")) {
      return <Flame className="w-5 h-5 text-[#FF8A3D]" />;
    }
    if (name.includes("Roads") || name.includes("Highways")) {
      return <Construction className="w-5 h-5 text-[#FF8A3D]" />;
    }
    if (name.includes("Agriculture")) {
      return <Wheat className="w-5 h-5 text-[#FF8A3D]" />;
    }
    if (name.includes("Agri-Tech")) {
      return <Zap className="w-5 h-5 text-[#FF8A3D]" />;
    }
    if (name.includes("Robotics")) {
      return <Bot className="w-5 h-5 text-[#FF8A3D]" />;
    }
    return <Building2 className="w-5 h-5 text-[#FF8A3D]" />;
  };

  return (
    <section id="sectors" className="py-24 md:py-32 relative fintech-grid-bg border-y border-[rgba(120,150,200,0.15)] bg-[#07152B]/60">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FF8A3D]">
            <span>Industries We Support</span>
            <span aria-hidden="true" className="text-[#38BDF8]">/</span>
            <span className="text-[#94A3B8]">Domain Fluency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F8FAFC]">
            Fluent in the sectors we finance.
          </h2>
          <p className="text-base text-[#CBD5E1] font-normal leading-relaxed">
            Key physical and technology industries where we structure debt, raise equity, and deliver project advisory.
          </p>
        </div>

        {/* Uniform Cards Grid with Vivid Orange Touches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {companyData.sectors.map((sector, index) => (
            <div
              key={sector.name || index}
              className="fintech-panel rounded-2xl p-6 bg-[#0D1F3C]/95 border border-[rgba(120,150,200,0.18)] hover:border-[#FF6B00]/50 hover:shadow-[0_8px_25px_rgba(255,107,0,0.1)] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle 2px Orange Corner Line */}
              <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-[#FF6B00] to-transparent group-hover:w-24 transition-all duration-300" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0A1A33] border border-[#FF6B00]/25 shadow-xs group-hover:scale-105 transition-transform duration-200">
                    {getSectorIcon(sector.name)}
                  </div>
                  <span className="text-[11px] font-mono text-[#38BDF8]">
                    Coverage Desk
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-white transition-colors mb-2">
                  {sector.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-normal">
                  {sector.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[rgba(120,150,200,0.12)] text-[11px] font-mono text-[#64748B] flex items-center justify-between">
                <span>Advisory Mandate</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] group-hover:scale-125 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Inquiries Note */}
        <div className="mt-12 text-center text-xs text-[#94A3B8]">
          Have an unlisted sector or special infrastructure project?{" "}
          <a href="#contact" className="text-[#FF8A3D] hover:text-[#FF6B00] font-medium underline underline-offset-4">
            Discuss project feasibility directly with our partners.
          </a>
        </div>

      </div>
    </section>
  );
}
