import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function PracticeSection() {
  return (
    <section id="practice" className="py-24 md:py-32 relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6E93C7]">
            <span>The Practice</span>
            <span aria-hidden="true" className="text-[#FF6B00]">/</span>
            <span className="text-[#A9B8CF]">Core Disciplines</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F7FA]">
            Six disciplines. One mandate:{' '}
            <span className="italic text-[#FF8A3D]">your outcome.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A9B8CF] font-normal leading-relaxed">
            From the first cheque to the listing bell, Prosync brings capital raising, technical evaluation and transaction execution together — so founders and CFOs deal with one accountable advisor.
          </p>
        </div>

        {/* 6 Disciplines Grid (Fintech Panels in #13284A with subtle orange corner accent) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {companyData.disciplines.map((item) => (
            <div
              key={item.id}
              className="fintech-panel p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Number and Category */}
                <div className="flex items-center justify-between pb-5 border-b border-[rgba(120,150,200,0.15)] mb-5">
                  <span className="font-mono text-xs font-bold text-[#FF6B00] tracking-widest">
                    {item.id}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6E93C7]">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#F5F7FA] group-hover:text-white transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A9B8CF] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Deliverable & Action */}
              <div className="pt-4 border-t border-[rgba(120,150,200,0.12)] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#A9B8CF]/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6E93C7] shrink-0" />
                  <span className="truncate max-w-[190px]">{item.deliverable}</span>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[#FF8A3D] hover:text-[#FF6B00] font-medium transition-colors group-hover:translate-x-0.5 duration-150"
                  aria-label={`Inquire about ${item.title}`}
                >
                  <span>Initiate</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Accountability Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0D1F3C] border border-[rgba(120,150,200,0.18)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-[#F5F7FA]">
              Need a bespoke combination of debt and equity?
            </h4>
            <p className="text-xs sm:text-sm text-[#A9B8CF]">
              We frequently structure hybrid syndications combining senior debt lines with mezzanine or equity growth capital.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-vivid-orange px-5 py-2.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap shrink-0 inline-flex items-center gap-2"
          >
            <span>Consult Deal Team</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
