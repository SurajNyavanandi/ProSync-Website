import { ArrowUpRight, Award, Compass } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function TransactionsSection() {
  const [featuredDeal, ...otherDeals] = companyData.landmarkDeals;

  return (
    <section id="transactions" className="py-24 md:py-32 relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6E93C7]">
            <Award className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Track Record</span>
            <span aria-hidden="true" className="text-[#FF6B00]">/</span>
            <span className="text-[#A9B8CF]">Selected Mandates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F7FA]">
            Representative <span className="italic text-[#FF8A3D]">transactions.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A9B8CF] font-normal leading-relaxed">
            A sample of high-conviction mandates structured across debt syndication, growth equity, and pre-IPO institutional positioning.
          </p>
        </div>

        {/* 1. Featured Marquee Infrastructure Concession Deal Card with Visual Flyover Scene */}
        <div className="fintech-panel rounded-3xl overflow-hidden mb-8 border border-[rgba(120,150,200,0.22)] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Scene Half (Highway & Concession Infrastructure) */}
            <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[380px] overflow-hidden bg-[#0A1A33]">
              {/* Twilight Civil Engineering Vector Illustration */}
              <svg
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                viewBox="0 0 800 480"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="sky-navy" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0D1F3C" />
                    <stop offset="60%" stopColor="#0A1A33" />
                    <stop offset="100%" stopColor="#071224" />
                  </linearGradient>

                  <linearGradient id="bridge-deck" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B6FB6" />
                    <stop offset="50%" stopColor="#1E3860" />
                    <stop offset="100%" stopColor="#122442" />
                  </linearGradient>
                </defs>

                <rect x="0" y="0" width="800" height="480" fill="url(#sky-navy)" />
                <ellipse cx="400" cy="260" rx="420" ry="25" fill="rgba(255, 107, 0, 0.25)" filter="blur(16px)" />

                {/* Curved Multi-Level Flyover Deck */}
                <path
                  d="M -50 320 Q 280 190 850 150 L 850 195 Q 280 235 -50 365 Z"
                  fill="url(#bridge-deck)"
                  stroke="#6E93C7"
                  strokeWidth="1.5"
                />

                {/* Concrete Support Piers */}
                <rect x="180" y="260" width="26" height="190" fill="#13284A" stroke="rgba(120,150,200,0.3)" />
                <rect x="360" y="230" width="28" height="220" fill="#13284A" stroke="rgba(120,150,200,0.3)" />
                <rect x="560" y="195" width="30" height="255" fill="#183460" stroke="rgba(120,150,200,0.3)" />

                {/* Expressway Ground Plane */}
                <polygon points="0,480 340,320 460,320 800,480" fill="#061122" />
                <line x1="400" y1="320" x2="400" y2="480" stroke="#FF6B00" strokeWidth="2.5" strokeDasharray="14 10" />

                {/* Speed Light Trails */}
                <path d="M -50 338 Q 280 208 850 168" fill="none" stroke="#FF8A3D" strokeWidth="3" opacity="0.9" />
                <path d="M -50 342 Q 280 212 850 172" fill="none" stroke="#FFB074" strokeWidth="2" opacity="0.75" />
              </svg>

              {/* Directional scrims */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#13284A] via-transparent to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#13284A] hidden lg:block" />

              {/* Corner Badge */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A1A33]/85 backdrop-blur-md border border-[rgba(120,150,200,0.3)] text-xs text-[#FF8A3D] font-mono">
                <Compass className="w-3.5 h-3.5" />
                <span>Featured Concession Syndication</span>
              </div>
            </div>

            {/* Narrative Half */}
            <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[rgba(120,150,200,0.15)]">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-[#FF6B00] tabular-nums">
                    {featuredDeal.size}
                  </span>
                  <div className="text-right">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#6E93C7] block">
                      {featuredDeal.category}
                    </span>
                    <span className="text-[11px] text-[#A9B8CF]/70 font-mono">
                      {featuredDeal.sector}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-[#F5F7FA]">
                  {featuredDeal.title}
                </h3>

                <p className="text-sm text-[#A9B8CF] leading-relaxed">
                  {featuredDeal.outcome} Mandate encompassed financial modeling, bid pricing, sensitivity analysis, and debt syndication with a consortium of public and private sector lenders.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-[#6E93C7]">
                  <div className="p-2.5 rounded-xl bg-[#0A1A33] border border-[rgba(120,150,200,0.18)]">
                    <span className="text-[10px] text-[#A9B8CF] block uppercase">Appraisal Standard</span>
                    <span className="text-[#F5F7FA] font-semibold">Tier-1 Consortia</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0A1A33] border border-[rgba(120,150,200,0.18)]">
                    <span className="text-[10px] text-[#A9B8CF] block uppercase">Execution Speed</span>
                    <span className="text-[#F5F7FA] font-semibold">Financial Closure in 7 Wks</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[rgba(120,150,200,0.12)] flex items-center justify-between">
                <span className="text-xs text-[#A9B8CF]">Lead Transaction Arranger</span>
                <a
                  href="#contact"
                  className="btn-vivid-orange px-4 py-2 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-1.5"
                >
                  <span>Explore Mandate</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Remaining Landmark Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherDeals.map((deal, idx) => (
            <div
              key={idx}
              className="fintech-panel p-6 flex flex-col justify-between group hover:border-[#FF6B00]/40 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[rgba(120,150,200,0.15)] mb-3">
                  <span className="font-mono text-2xl font-bold text-[#FF6B00] tabular-nums">
                    {deal.size}
                  </span>
                  <div className="text-right">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E93C7] block">
                      {deal.category}
                    </span>
                    <span className="text-[10px] text-[#A9B8CF]/70 font-mono">
                      {deal.sector}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-[#F5F7FA] group-hover:text-white transition-colors mb-2">
                  {deal.title}
                </h3>

                <p className="text-xs text-[#A9B8CF] leading-relaxed mb-4">
                  {deal.outcome}
                </p>
              </div>

              <div className="pt-3 border-t border-[rgba(120,150,200,0.1)] flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-[#A9B8CF]/60">Verified Mandate</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[#FF8A3D] hover:text-[#FF6B00] font-medium transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
