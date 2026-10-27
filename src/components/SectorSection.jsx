import { Sun, Zap, Flame, Construction, Wheat, Bot, Building2 } from "lucide-react";
import { companyData } from "../data/companyData";

export default function SectorSection() {
  const getSectorIcon = (name) => {
    if (name.includes("Solar") || name.includes("Clean Energy")) {
      return <Sun className="w-5 h-5 text-[#FF6B00]" />;
    }
    if (name.includes("Gas")) {
      return <Flame className="w-5 h-5 text-[#FF8A3D]" />;
    }
    if (name.includes("Roads") || name.includes("Highways")) {
      return <Construction className="w-5 h-5 text-[#FF8A3D]" />;
    }
    if (name.includes("Agriculture")) {
      return <Wheat className="w-5 h-5 text-[#6E93C7]" />;
    }
    if (name.includes("Agri-Tech")) {
      return <Zap className="w-5 h-5 text-[#FF6B00]" />;
    }
    if (name.includes("Robotics")) {
      return <Bot className="w-5 h-5 text-[#6E93C7]" />;
    }
    return <Building2 className="w-5 h-5 text-[#A9B8CF]" />;
  };

  return (
    <section id="sectors" className="py-24 md:py-32 relative bg-[#07152B]/60 fintech-grid-bg border-y border-[rgba(120,150,200,0.15)]">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6E93C7]">
            <span>Sector Coverage</span>
            <span aria-hidden="true" className="text-[#FF6B00]">/</span>
            <span className="text-[#A9B8CF]">Domain Fluency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F7FA]">
            Fluent in the industries we finance.
          </h2>
          <p className="text-base sm:text-lg text-[#A9B8CF] font-normal leading-relaxed">
            Financial advisory is most effective when bankers understand physical operations. We bring deep sector experience across clean energy, infrastructure, industrial tech, and commercial assets.
          </p>
        </div>

        {/* Sectors Grid (No serial numbers, dedicated Solar highlight boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.sectors.map((sector, index) => {
            const isSolar = sector.isSolar;

            return (
              <div
                key={index}
                className={`fintech-panel p-6 group transition-all duration-300 ${
                  isSolar
                    ? "border-[#FF6B00]/60 bg-[#0E203B] shadow-[0_8px_24px_rgba(255,107,0,0.1)] hover:border-[#FF6B00]"
                    : "hover:border-[#FF6B00]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl border ${
                    isSolar
                      ? "bg-[#FF6B00]/15 border-[#FF6B00]/30"
                      : "bg-[#0A1A33] border-[rgba(120,150,200,0.2)]"
                  }`}>
                    {getSectorIcon(sector.name)}
                  </div>

                  {isSolar ? (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF8A3D] px-2 py-0.5 rounded bg-[#FF6B00]/15 border border-[#FF6B00]/30">
                      Featured Sector
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-[#6E93C7]">
                      Coverage Desk
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-[#F5F7FA] group-hover:text-white transition-colors mb-2">
                  {sector.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#A9B8CF] leading-relaxed">
                  {sector.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Sector Inquiries Strip */}
        <div className="mt-12 text-center text-xs text-[#A9B8CF]/80">
          Have a project in solar, green hydrogen, or specialized manufacturing?{" "}
          <a href="#contact" className="text-[#FF8A3D] hover:text-[#FF6B00] font-medium underline underline-offset-4">
            Discuss mandate feasibility directly with our partners.
          </a>
        </div>

      </div>
    </section>
  );
}
