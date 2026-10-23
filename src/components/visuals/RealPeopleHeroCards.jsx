import { TrendingUp, FileCheck2, Handshake, ArrowUpRight } from 'lucide-react';

export default function RealPeopleHeroCards() {
  const cards = [
    {
      id: "advisory",
      tag: "Executive Advisory",
      title: "Founders & Advisors in Discussion",
      subtitle: "Capital structuring & growth equity modeling",
      accentBg: "from-blue-600 to-indigo-800",
      accentTag: "bg-blue-50 text-blue-700 border-blue-200",
      icon: TrendingUp,
      svgScene: (
        <svg viewBox="0 0 400 320" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          {/* Sunlit Modern Conference Room Background */}
          <rect width="400" height="320" fill="#f8fafc" />
          <line x1="200" y1="0" x2="200" y2="180" stroke="#e2e8f0" strokeWidth="1.5" />
          <rect x="30" y="20" width="140" height="150" rx="4" fill="#ffffff" stroke="#e2e8f0" />
          <line x1="50" y1="50" x2="150" y2="50" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="50" y1="80" x2="130" y2="80" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="50" y1="110" x2="140" y2="110" stroke="#cbd5e1" strokeWidth="2" />

          {/* Sunlit window glow */}
          <polygon points="220,0 400,0 400,220 220,120" fill="rgba(254, 243, 199, 0.45)" />

          {/* Conference Table */}
          <path d="M 40 240 Q 200 200 360 240 L 370 320 L 30 320 Z" fill="#0f172a" />
          <path d="M 60 240 Q 200 205 340 240 L 345 280 Q 200 250 55 280 Z" fill="#1e293b" />

          {/* Person 1: Advisor at Table (Left) */}
          <circle cx="120" cy="170" r="26" fill="#fbcfe8" /> {/* face/head */}
          <path d="M 98 160 Q 120 142 142 160 Q 140 180 120 178 Q 100 180 98 160 Z" fill="#334155" /> {/* hair */}
          <path d="M 85 205 Q 120 195 155 205 L 165 310 L 75 310 Z" fill="#1d4ed8" /> {/* professional blue blazer */}
          <polygon points="112,200 128,200 120,235" fill="#ffffff" /> {/* white shirt */}

          {/* Person 2: Founder in Discussion (Right) */}
          <circle cx="280" cy="165" r="26" fill="#fed7aa" />
          <path d="M 258 155 Q 280 138 302 155 Q 300 175 280 173 Q 260 175 258 155 Z" fill="#1e293b" />
          <path d="M 245 200 Q 280 190 315 200 L 325 310 L 235 310 Z" fill="#334155" /> {/* executive charcoal suit */}
          <polygon points="272,195 288,195 280,230" fill="#ffffff" />

          {/* Laptop & Documents on Table */}
          <polygon points="175,235 225,235 235,255 165,255" fill="#94a3b8" />
          <rect x="180" y="205" width="40" height="30" rx="2" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1" />
          <polyline points="186,225 194,215 202,220 214,212" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: "consulting",
      tag: "Strategic Consulting",
      title: "Debt & Syndication Strategy",
      subtitle: "Consortium banking & credit review",
      accentBg: "from-emerald-600 to-teal-800",
      accentTag: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: FileCheck2,
      svgScene: (
        <svg viewBox="0 0 400 320" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          {/* Modern Executive Office Background */}
          <rect width="400" height="320" fill="#f1f5f9" />
          <rect x="0" y="0" width="400" height="140" fill="#e2e8f0" />
          <line x1="0" y1="140" x2="400" y2="140" stroke="#cbd5e1" strokeWidth="2" />

          {/* Wall Dashboard with Financial Trends */}
          <rect x="130" y="20" width="140" height="90" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="2" />
          <polyline points="145,85 165,65 185,75 210,45 235,55 255,35" fill="none" stroke="#10b981" strokeWidth="2.5" />
          <circle cx="255" cy="35" r="3" fill="#34d399" />

          {/* Standing Senior Partner (Center-Right) Presenting */}
          <circle cx="270" cy="130" r="25" fill="#fde68a" />
          <path d="M 248 120 Q 270 105 292 120 Q 290 140 270 138 Q 250 140 248 120 Z" fill="#475569" />
          <path d="M 235 165 Q 270 155 305 165 L 315 320 L 225 320 Z" fill="#047857" /> {/* Emerald tailored blazer */}
          <polygon points="263,160 277,160 270,195" fill="#ffffff" />
          {/* Arm holding tablet */}
          <path d="M 235 175 L 205 205 L 215 220 L 245 190 Z" fill="#047857" />
          <rect x="190" y="200" width="30" height="20" rx="2" fill="#1e293b" stroke="#e2e8f0" strokeWidth="1" />

          {/* Seated Partner (Left) Reviewing */}
          <circle cx="110" cy="180" r="25" fill="#fed7aa" />
          <path d="M 88 170 Q 110 155 132 170 Q 130 190 110 188 Q 90 190 88 170 Z" fill="#1e293b" />
          <path d="M 75 215 Q 110 205 145 215 L 155 320 L 65 320 Z" fill="#0f172a" />
          <polygon points="103,210 117,210 110,245" fill="#ffffff" />

          {/* Desk with Blueprints & Reports */}
          <rect x="20" y="250" width="220" height="70" fill="#334155" rx="3" />
          <rect x="50" y="260" width="60" height="40" fill="#ffffff" stroke="#e2e8f0" />
          <rect x="120" y="260" width="60" height="40" fill="#ffffff" stroke="#e2e8f0" />
        </svg>
      )
    },
    {
      id: "execution",
      tag: "Deal Execution",
      title: "Transaction Handshake",
      subtitle: "Closing high-value M&A & HAM mandates",
      accentBg: "from-purple-600 to-indigo-900",
      accentTag: "bg-purple-50 text-purple-700 border-purple-200",
      icon: Handshake,
      svgScene: (
        <svg viewBox="0 0 400 320" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          {/* Twilight Glass Window Backdrop */}
          <rect width="400" height="320" fill="#0f172a" />
          <polygon points="0,0 400,0 400,240 0,160" fill="#1e293b" />
          <line x1="200" y1="0" x2="200" y2="200" stroke="#334155" strokeWidth="1.5" />

          {/* Subtle City Skyline Lights */}
          <circle cx="140" cy="70" r="1.5" fill="#fde047" />
          <circle cx="170" cy="90" r="1.5" fill="#fde047" />
          <circle cx="230" cy="60" r="1.5" fill="#fde047" />
          <circle cx="260" cy="80" r="1.5" fill="#fde047" />

          {/* Person 1: Partner on Left */}
          <circle cx="110" cy="110" r="26" fill="#fed7aa" />
          <path d="M 88 100 Q 110 85 132 100 Q 130 120 110 118 Q 90 120 88 100 Z" fill="#334155" />
          <path d="M 75 145 Q 110 135 145 145 L 155 320 L 65 320 Z" fill="#1e293b" />
          <polygon points="102,140 118,140 110,175" fill="#ffffff" />

          {/* Person 2: Corporate Client on Right */}
          <circle cx="290" cy="110" r="26" fill="#fbcfe8" />
          <path d="M 268 100 Q 290 85 312 100 Q 310 120 290 118 Q 270 120 268 100 Z" fill="#1e1b4b" />
          <path d="M 255 145 Q 290 135 325 145 L 335 320 L 245 320 Z" fill="#4338ca" /> {/* Indigo suit */}
          <polygon points="282,140 298,140 290,175" fill="#ffffff" />

          {/* Confident Executive Handshake (Center) */}
          <rect x="180" y="195" width="40" height="25" rx="12" fill="#fed7aa" stroke="#334155" strokeWidth="2" />
          {/* Cuffs */}
          <rect x="155" y="192" width="26" height="30" rx="3" fill="#1e293b" />
          <rect x="218" y="192" width="26" height="30" rx="3" fill="#4338ca" />
          <rect x="150" y="196" width="6" height="22" fill="#ffffff" />
          <rect x="242" y="196" width="6" height="22" fill="#ffffff" />

          {/* Success Check Badge */}
          <circle cx="200" cy="140" r="16" fill="#10b981" />
          <polyline points="193,140 198,145 208,135" fill="none" stroke="#ffffff" strokeWidth="2.5" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
        {cards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              className="wix-arch-card bg-white flex flex-col justify-between group cursor-pointer"
            >
              {/* Arched Top Visual (Matching Wix Reference Shape) */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                {card.svgScene}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Tag over Image */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md ${card.accentTag}`}>
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{card.tag}</span>
                  </span>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-5 sm:p-6 bg-white border-t border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {card.subtitle}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-slate-900 group-hover:text-slate-900 transition-colors shrink-0">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
