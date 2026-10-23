import { ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/companyData';
import ShowcaseProjectCard from './visuals/ShowcaseProjectCard';
import InfrastructureHamCard from './visuals/InfrastructureHamCard';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-white relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-mono font-medium tracking-wider uppercase mb-2.5 border border-blue-200/60">
              <span>How We Help You</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Services made simple.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
            Practical financial help to get bank loans, attract investor funding, and grow your business with zero confusion.
          </p>
        </div>

        {/* Numbered Practice Cards Stack */}
        <div className="space-y-3.5 sm:space-y-4 mb-14 sm:mb-18">
          {companyData.services.map((service) => (
            <a
              key={service.id}
              href="#office"
              aria-label={`Inquire about ${service.title}`}
              className={`executive-card group block rounded-2xl p-4.5 sm:p-7 transition-all ${service.pillBorder} min-h-[52px] touch-manipulation`}
            >
              <div className="flex items-center justify-between gap-3 sm:gap-6">
                <div className="flex items-start sm:items-center gap-3 sm:gap-6">
                  {/* Number Badge */}
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors pt-0.5 sm:pt-0 shrink-0">
                    {service.id}.
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                      <h3 className="text-base sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <span className={`text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full border ${service.badgeColor}`}>
                        {service.category}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Clean Professional Action Arrow */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                    <span>Consult</span>
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white flex items-center justify-center transition-all text-slate-500 shadow-xs">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 2 Supporting Visual Cards (Nova Reference Style: Page 3 & Infrastructure) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Advisory Portfolio
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Key Mandates & Sector Leadership
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <ShowcaseProjectCard />
            <InfrastructureHamCard />
          </div>
        </div>

      </div>
    </section>
  );
}
