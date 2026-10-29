import { ArrowUpRight, BarChart3, Database, FileSpreadsheet, Layers } from "lucide-react";
import { companyData } from "../data/companyData";

export default function ProsyncGlobalSection() {
  const icons = [
    <BarChart3 className="w-5 h-5 text-[#002244]" />,
    <Database className="w-5 h-5 text-emerald-600" />,
    <Layers className="w-5 h-5 text-[#FF5500]" />,
    <FileSpreadsheet className="w-5 h-5 text-[#002244]" />,
  ];

  return (
    <section id="global-research" className="py-14 md:py-16 relative bg-[#F5F5F7] border-y border-black/[0.05] text-[#1D1D1F]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Specification 18: Dedicated sub-unit for Outsourced Financial Research & Analytics */}
        <div className="rounded-3xl p-6 sm:p-10 md:p-12 bg-white border border-black/[0.06] relative overflow-hidden shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-black/[0.06]">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF5500] font-semibold block">
                Prosync Global Research • Dedicated Desk
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#002244] tracking-tight">
                {companyData.prosyncGlobal.title}
              </h3>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-normal">
                {companyData.prosyncGlobal.subtitle}
              </p>
            </div>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#FF5500] hover:bg-[#FF661A] transition-all inline-flex items-center gap-1.5 self-start lg:self-center shrink-0 shadow-md shadow-[#FF5500]/20 active:scale-95"
            >
              <span>Enquire for Research Desk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 4 Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {companyData.prosyncGlobal.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] hover:bg-white hover:border-[#FF5500]/40 hover:shadow-sm transition-all duration-300 space-y-3"
              >
                <div className="p-2.5 rounded-xl bg-white border border-black/[0.06] shadow-xs w-fit">
                  {icons[idx % icons.length]}
                </div>
                <h4 className="text-base font-bold text-[#002244]">
                  {cap.name}
                </h4>
                <p className="text-xs text-[#6E6E73] leading-relaxed font-normal">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
