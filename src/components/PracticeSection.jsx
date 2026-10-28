import { ArrowUpRight, CheckCircle2, TrendingUp, Landmark, ShieldCheck, Sun, FileSpreadsheet, Handshake } from "lucide-react";
import { companyData } from "../data/companyData";

export default function PracticeSection() {
  const getDisciplineIcon = (category) => {
    switch (category) {
      case "Senior Debt":
        return <Landmark className="w-5 h-5 text-[#FF6B00]" />;
      case "Institutional Capital":
        return <TrendingUp className="w-5 h-5 text-[#FF8A3D]" />;
      case "Public Readiness":
        return <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />;
      case "Clean Energy":
        return <Sun className="w-5 h-5 text-[#FF8A3D]" />;
      case "Tenders & Public Works":
        return <FileSpreadsheet className="w-5 h-5 text-[#FF6B00]" />;
      default:
        return <Handshake className="w-5 h-5 text-[#FF8A3D]" />;
    }
  };

  return (
    <section id="practice" className="py-24 md:py-32 relative fintech-grid-bg">
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FF8A3D]">
            <span>Our Services</span>
            <span aria-hidden="true" className="text-[#38BDF8]">/</span>
            <span className="text-[#94A3B8]">Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F8FAFC]">
            Integrated financial advisory.
          </h2>
          <p className="text-base text-[#CBD5E1] font-normal leading-relaxed">
            How we help businesses raise capital, secure optimal bank financing, and structure complex transactions.
          </p>
        </div>

        {/* 6 Disciplines Grid with Signature Prosync Orange Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.disciplines.map((item, idx) => (
            <div
              key={idx}
              className="fintech-panel rounded-2xl p-7 bg-[#0D1F3C]/95 border border-[rgba(120,150,200,0.18)] hover:border-[#FF6B00]/50 hover:shadow-[0_12px_32px_rgba(255,107,0,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Signature 2px Gradient Orange Corner Accent */}
              <div className="absolute top-0 left-0 w-20 h-[2px] bg-gradient-to-r from-[#FF6B00] via-[#FF8A3D] to-transparent group-hover:w-32 transition-all duration-300" />

              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(120,150,200,0.14)] mb-5">
                  <div className="p-2.5 rounded-xl bg-[#0A1A33] border border-[#FF6B00]/30 shadow-xs group-hover:scale-105 transition-transform duration-200">
                    {getDisciplineIcon(item.category)}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#FF8A3D] font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-white transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Deliverable & Action */}
              <div className="pt-4 border-t border-[rgba(120,150,200,0.12)] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#CBD5E1]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span className="truncate max-w-[190px]">{item.deliverable}</span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[#FF8A3D] hover:text-[#FF6B00] font-semibold transition-colors group-hover:translate-x-0.5 duration-150"
                  aria-label={`Inquire about ${item.title}`}
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Banner with Orange Accent */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-[#0D1F3C] border border-[rgba(120,150,200,0.2)] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-transparent" />
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-[#F8FAFC]">
              Looking for a custom combination of bank debt and equity?
            </h4>
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              We frequently structure hybrid funding packages combining low-cost bank loans with institutional equity.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-vivid-orange px-6 py-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap shrink-0 inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(255,107,0,0.4)]"
          >
            <span>Consult Our Team</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
