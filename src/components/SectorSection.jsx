import { Sun, Flame, Construction, Wheat, Zap, Bot, Building2 } from "lucide-react";
import { companyData } from "../data/companyData";

export default function SectorSection() {
  const getSectorIcon = (name) => {
    if (name.includes("Solar") || name.includes("Clean Energy")) {
      return <Sun className="w-5 h-5 text-amber-400" />;
    }
    if (name.includes("Gas")) {
      return <Flame className="w-5 h-5 text-orange-400" />;
    }
    if (name.includes("Roads") || name.includes("Highways")) {
      return <Construction className="w-5 h-5 text-cyan-400" />;
    }
    if (name.includes("Agriculture")) {
      return <Wheat className="w-5 h-5 text-emerald-400" />;
    }
    if (name.includes("Agri-Tech")) {
      return <Zap className="w-5 h-5 text-yellow-400" />;
    }
    if (name.includes("Robotics")) {
      return <Bot className="w-5 h-5 text-purple-400" />;
    }
    return <Building2 className="w-5 h-5 text-blue-400" />;
  };

  return (
    <section id="sectors" className="py-20 md:py-28 relative bg-[#0D1F38] border-b border-white/[0.08]">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8">

        {/* Clear Section Header */}
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-2">
            Sectors
          </h2>
          <p className="text-sm sm:text-base text-[#A9B8CF] font-light">
            Physical infrastructure, clean energy, and modern manufacturing.
          </p>
        </div>

        {/* Uniform Cards Grid with Apple-grade hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {companyData.sectors.map((sector, index) => (
            <div
              key={sector.name || index}
              className="rounded-2xl p-6 bg-[#112440]/90 border border-white/[0.1] hover:border-[#FF6B00]/50 hover:shadow-[0_8px_25px_rgba(255,107,0,0.12)] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle Orange Corner Accent */}
              <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-[#FF6B00] to-transparent group-hover:w-full transition-all duration-300" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#060E1C] border border-white/10 group-hover:scale-105 transition-transform duration-200">
                    {getSectorIcon(sector.name)}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400">
                    Coverage Desk
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-white transition-colors mb-2">
                  {sector.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#A9B8CF] group-hover:text-white/95 leading-relaxed font-normal transition-colors">
                  {sector.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.08] text-[11px] font-mono text-[#A9B8CF] group-hover:text-white flex items-center justify-between transition-colors">
                <span>Advisory Mandate</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] group-hover:scale-125 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Inquiries Note */}
        <div className="mt-12 text-center text-xs text-[#A9B8CF]">
          Have an unlisted sector or special infrastructure project?{" "}
          <a href="#contact" className="text-[#FF8A3D] hover:text-[#FF6B00] font-medium underline underline-offset-4">
            Discuss project feasibility directly with our partners.
          </a>
        </div>

      </div>
    </section>
  );
}
