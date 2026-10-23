import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function TeamAdvisoryCard() {
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
      
      {/* Boardroom Session Visual (Nova Page 4 Style) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617]" />

        {/* Boardroom Architectural Vector Scene */}
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
          viewBox="0 0 800 480"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glass window panoramic backdrop */}
          <rect x="0" y="0" width="800" height="260" fill="#0f172a" />
          <line x1="200" y1="0" x2="200" y2="260" stroke="#334155" strokeWidth="2" />
          <line x1="400" y1="0" x2="400" y2="260" stroke="#334155" strokeWidth="2" />
          <line x1="600" y1="0" x2="600" y2="260" stroke="#334155" strokeWidth="2" />

          {/* Distant city silhouette through glass */}
          <rect x="60" y="140" width="50" height="120" fill="#1e293b" />
          <rect x="130" y="100" width="60" height="160" fill="#1e293b" />
          <rect x="230" y="80" width="70" height="180" fill="#334155" />
          <rect x="420" y="90" width="80" height="170" fill="#1e293b" />
          <rect x="520" y="120" width="70" height="140" fill="#1e293b" />

          {/* Sleek Conference Table */}
          <ellipse cx="400" cy="380" rx="360" ry="90" fill="#090d16" stroke="#334155" strokeWidth="3" />
          <ellipse cx="400" cy="375" rx="350" ry="80" fill="#1e293b" opacity="0.5" />

          {/* Executive Chairs Silhouette around the table */}
          <circle cx="200" cy="320" r="28" fill="#334155" />
          <path d="M 175 350 Q 200 340 225 350 L 225 410 L 175 410 Z" fill="#0f172a" />

          <circle cx="340" cy="300" r="28" fill="#475569" />
          <path d="M 315 330 Q 340 320 365 330 L 365 390 L 315 390 Z" fill="#1e293b" />

          <circle cx="460" cy="300" r="28" fill="#475569" />
          <path d="M 435 330 Q 460 320 485 330 L 485 390 L 435 390 Z" fill="#1e293b" />

          <circle cx="600" cy="320" r="28" fill="#334155" />
          <path d="M 575 350 Q 600 340 625 350 L 625 410 L 575 410 Z" fill="#0f172a" />

          {/* Illuminated Financial Chart Display Screen */}
          <rect x="660" y="70" width="120" height="80" rx="4" fill="#1e3a8a" opacity="0.6" stroke="#3b82f6" strokeWidth="1.5" />
          <polyline points="675,130 695,115 715,120 735,95 755,90" fill="none" stroke="#60a5fa" strokeWidth="2" />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-8 text-white">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-blue-300 bg-blue-950/60 border border-blue-500/30 px-3 py-1 rounded-full backdrop-blur-md">
            People Who Create Value
          </span>
          <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950 transition-colors shadow-sm">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <div>
          <div className="text-[11px] font-mono text-slate-400 mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Senior Investment Bankers & Chartered Accountants</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
            Seasoned Partners & Financial Analysts
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2">
            Over 10+ years of collective investment banking and debt syndication experience across Hyderabad and India.
          </p>
        </div>
      </div>

    </div>
  );
}
