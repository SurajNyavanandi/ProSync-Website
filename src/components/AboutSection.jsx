import { Shield, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';
import TeamAdvisoryCard from './visuals/TeamAdvisoryCard';

export default function AboutSection() {
  const highlights = [
    {
      icon: Sparkles,
      iconColor: "text-blue-600 bg-blue-50 border-blue-100",
      title: "Data-Driven Approach",
      desc: "We analyze real market valuation multiples and banking benchmarks to get you the most favorable deal terms."
    },
    {
      icon: Building2,
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
      title: "Direct Banking Relationships",
      desc: "Deep consortium ties with major Indian public/private sector banks and NBFCs for fast loan sanctions."
    },
    {
      icon: Shield,
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
      title: "Full Regulatory Rigor",
      desc: "Over 10 years of statutory experience ensuring full compliance with RBI, SEBI, NHAI, and Companies Act norms."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#f8fafc] border-t border-b border-slate-200/80">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* 2-Column Split: Story on Left, Executive Team Visual Card on Right (Nova Page 4 Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-[11px] sm:text-xs font-mono font-medium tracking-wider uppercase">
              <span>About Prosync Consulting</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              We make business finance simple and straightforward.
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Prosync Consulting was founded in 2015 in Hyderabad. Over the last 10+ years, we have helped dozens of companies raise equity, secure structured bank credit, and navigate complex transactions.
              </p>
              <p>
                Instead of complicated banker jargon, we provide clear numbers, actionable roadmaps, and dedicated partner attention from mandate kickoff through final disbursement.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <TeamAdvisoryCard />
          </div>
        </div>

        {/* 3 Pillar Cards: Stack on Mobile, Grid on Tablet/Desktop */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3.5 ${item.iconColor}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick Credentials Strip */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs sm:text-sm">
          <div>
            <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Headquarters</div>
            <div className="font-semibold text-slate-900 mt-0.5">Hyderabad, Telangana</div>
          </div>
          <div>
            <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Founded</div>
            <div className="font-semibold text-slate-900 mt-0.5">2015 (10+ Years)</div>
          </div>
          <div>
            <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Direct Telephone</div>
            <a href={`tel:${companyData.phoneRaw}`} className="font-semibold text-blue-600 hover:underline mt-0.5 block">
              {companyData.phone}
            </a>
          </div>
          <div>
            <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Governance</div>
            <div className="font-semibold text-emerald-600 mt-0.5 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Institutional NDA
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
