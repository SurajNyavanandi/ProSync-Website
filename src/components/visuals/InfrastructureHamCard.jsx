import { ArrowUpRight, Compass } from 'lucide-react';

export default function InfrastructureHamCard() {
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
      
      {/* Infrastructure Highway Flyover Scene */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#0f172a] to-[#020617]" />

        {/* Vector Civil Engineering Highway Illustration */}
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
          viewBox="0 0 800 480"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sky-twilight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#312e81" />
              <stop offset="60%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="bridge-concrete" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>

          {/* Sky */}
          <rect x="0" y="0" width="800" height="260" fill="url(#sky-twilight)" />

          {/* Golden Dawn Horizon Line */}
          <ellipse cx="400" cy="270" rx="420" ry="20" fill="rgba(251, 146, 60, 0.35)" filter="blur(10px)" />

          {/* Majestic Curved Multi-Level Flyover Bridge */}
          <path
            d="M -50 320 Q 280 200 850 160 L 850 200 Q 280 240 -50 360 Z"
            fill="url(#bridge-concrete)"
            stroke="#64748b"
            strokeWidth="2"
          />

          {/* Bridge Piers / Pillars */}
          <rect x="180" y="270" width="30" height="180" fill="#1e293b" />
          <rect x="360" y="240" width="32" height="210" fill="#1e293b" />
          <rect x="560" y="200" width="34" height="250" fill="#334155" />
          <rect x="720" y="180" width="30" height="270" fill="#334155" />

          {/* Ground Expressway Below */}
          <polygon points="0,480 340,320 460,320 800,480" fill="#0f172a" />
          <line x1="400" y1="320" x2="400" y2="480" stroke="#facc15" strokeWidth="2.5" strokeDasharray="14 10" />

          {/* Bridge Roadway Light Trails */}
          <path
            d="M -50 338 Q 280 218 850 178"
            fill="none"
            stroke="rgba(239, 68, 68, 0.7)"
            strokeWidth="3"
          />
          <path
            d="M -50 342 Q 280 222 850 182"
            fill="none"
            stroke="rgba(254, 240, 138, 0.85)"
            strokeWidth="3"
          />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-8 text-white">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-purple-300 bg-purple-950/60 border border-purple-500/30 px-3 py-1 rounded-full backdrop-blur-md">
            HAM Infrastructure Specialty
          </span>
          <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950 transition-colors shadow-sm">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <div>
          <div className="text-[11px] font-mono text-slate-400 mb-1 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>NHAI & State Highway Concessions</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
            Highway & HAM Project Bidding
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2">
            Advising Tier-1 EPC developers on bid price optimization, annuity modeling, and ₹2,400+ Cr in concession debt syndications.
          </p>
        </div>
      </div>

    </div>
  );
}
