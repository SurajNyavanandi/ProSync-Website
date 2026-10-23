import { ArrowUpRight } from 'lucide-react';

export default function ShowcaseProjectCard() {
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-950 group">
      
      {/* High-Definition Architectural Pavilion Illustration (Nova Page 3 Style) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#090d16]" />

        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
          viewBox="0 0 800 480"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="pavilion-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <linearGradient id="interior-glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(254, 240, 138, 0.45)" />
              <stop offset="50%" stopColor="rgba(251, 191, 36, 0.35)" />
              <stop offset="100%" stopColor="rgba(254, 243, 199, 0.2)" />
            </linearGradient>
          </defs>

          {/* Pavilion Modern Cantilever Structure */}
          <polygon points="120,180 680,120 740,380 180,440" fill="url(#pavilion-grad)" stroke="#334155" strokeWidth="2" />
          
          {/* Floor-to-ceiling glass interior illumination */}
          <polygon points="180,210 640,160 670,360 210,400" fill="url(#interior-glow)" />

          {/* Clean architectural mullions */}
          <line x1="280" y1="195" x2="310" y2="390" stroke="rgba(15, 23, 42, 0.8)" strokeWidth="3" />
          <line x1="400" y1="180" x2="430" y2="380" stroke="rgba(15, 23, 42, 0.8)" strokeWidth="3" />
          <line x1="520" y1="165" x2="550" y2="370" stroke="rgba(15, 23, 42, 0.8)" strokeWidth="3" />

          {/* Minimalist landscape ground plane */}
          <rect x="0" y="420" width="800" height="60" fill="#090d16" />
        </svg>

        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-8 text-white">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-amber-300 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full backdrop-blur-md">
            Featured Mandate Advisory
          </span>
          <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950 transition-colors shadow-sm">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <div>
          <div className="text-[11px] font-mono text-slate-400 mb-1">
            Private Equity & Syndication
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
            Structuring Capital for Ambitious Enterprises
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2">
            Tailored debt-equity models, institutional investor memorandums, and end-to-end deal closure.
          </p>
        </div>
      </div>

    </div>
  );
}
