import { Flame, Construction, Wheat, Cpu, Bot, PlusCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function SectorSection() {
  const getSectorIcon = (name) => {
    switch (name) {
      case 'Gas & Energy':
        return <Flame className="w-5 h-5 text-[#FF6B00]" />;
      case 'Infrastructure':
        return <Construction className="w-5 h-5 text-[#FF8A3D]" />;
      case 'Agriculture':
        return <Wheat className="w-5 h-5 text-[#6E93C7]" />;
      case 'Agri-Tech':
        return <Cpu className="w-5 h-5 text-[#FF6B00]" />;
      case 'Robotics':
        return <Bot className="w-5 h-5 text-[#6E93C7]" />;
      default:
        return <PlusCircle className="w-5 h-5 text-[#A9B8CF]" />;
    }
  };

  return (
    <section id="sectors" className="py-24 md:py-32 relative bg-[#07152B]/60 fintech-grid-bg border-y border-[rgba(120,150,200,0.15)]">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6E93C7]">
            <span>Sector Coverage</span>
            <span aria-hidden="true" className="text-[#FF6B00]">/</span>
            <span className="text-[#A9B8CF]">Domain Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F7FA]">
            Fluent in the industries we finance.
          </h2>

          <p className="text-base sm:text-lg text-[#A9B8CF] font-normal leading-relaxed">
            Capital syndication fails when advisors don't understand operations. We bring seasoned domain fluency across core asset-heavy, tech-enabled, and regulated sectors.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.sectors.map((sector, index) => (
            <div
              key={index}
              className="fintech-panel p-6 group hover:border-[#FF6B00]/40 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-[#0A1A33] border border-[rgba(120,150,200,0.2)]">
                  {getSectorIcon(sector.name)}
                </div>
                <span className="text-[11px] font-mono text-[#6E93C7]">
                  Coverage // 0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#F5F7FA] group-hover:text-white transition-colors mb-2">
                {sector.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#A9B8CF] leading-relaxed">
                {sector.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Sector Inquiries Strip */}
        <div className="mt-12 text-center text-xs text-[#A9B8CF]/80">
          Have an unlisted sector or cross-border asset class?{' '}
          <a href="#contact" className="text-[#FF8A3D] hover:text-[#FF6B00] font-medium underline underline-offset-4">
            Discuss mandate feasibility directly with our partners.
          </a>
        </div>

      </div>
    </section>
  );
}
