import { Building2, TrendingUp, Landmark } from "lucide-react";
import { Reveal } from "./common/Motion";

export default function EditorialAboutSection() {
  const editorialItems = [
    {
      metric: "45+",
      title: "DEAL MANDATES COMPLETED",
      description:
        "Prove that promoters of large commercial facilities, infrastructure developers, and industrial conglomerates trust us with bespoke financial execution. We deliver end-to-end debt syndication from techno-economic appraisal to final disbursement.",
      visualType: "boardroom",
      tag: "Infrastructure & Industrial"
    },
    {
      metric: "₹2,500+ Cr",
      title: "CAPITAL SYNDICATED",
      description:
        "Senior partner-led appraisal and syndicated closures across nationalised banks, private lenders, and specialized debt funds. Every capital structure is modeled with precision to minimize promoter dilution and optimize debt servicing.",
      visualType: "analyst",
      tag: "Consortium Term Loans"
    },
    {
      metric: "20+",
      title: "LEAD BANKING PARTNERS",
      description:
        "Direct access to credit appraisal committees, public sector bank chairmen, and institutional NBFC leadership across India. Full compliance with RBI, NHAI, and SEBI statutory covenants.",
      visualType: "banking",
      tag: "Institutional Syndicate"
    }
  ];

  return (
    <section id="editorial-about" className="py-20 md:py-28 bg-white text-[#1D1D1F] overflow-hidden border-b border-black/[0.05]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* ======================================================== */}
        {/* STAGGERED OVERSIZED HEADLINE (image_4fdbca78.png style) */}
        {/* ======================================================== */}
        <div className="mb-14 sm:mb-20">
          <Reveal className="mb-3">
            <span className="text-xs font-mono uppercase tracking-[0.28em] text-[#6E6E73] font-semibold block">
              Learn More About The Company
            </span>
          </Reveal>

          {/* Staggered typographic composition */}
          <div className="relative font-bold tracking-tight select-none">
            {/* Line 1: ABOUT */}
            <Reveal delay={100}>
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] text-[#002244] leading-none uppercase tracking-tight">
                About
              </h2>
            </Reveal>

            {/* Line 2: COMPANY offset underneath in warm bronze accent tint */}
            <Reveal delay={200} className="sm:pl-28 md:pl-44 mt-1 sm:mt-2">
              <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] text-[#8C6D58] leading-none uppercase tracking-tight block">
                Company
              </span>
            </Reveal>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ARCHITECTURAL SPLIT LAYOUT WITH VERTICAL OUTLINE MARGIN */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* ------------------------------------------------------ */}
          {/* LEFT MARGIN: Vertical Outline Wireframe Watermark */}
          {/* ------------------------------------------------------ */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center border-r border-black/[0.08] pr-6 py-4 sticky top-28 select-none">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#002244]/20 to-black/10 mb-6" />
            
            {/* Vertical outline letters */}
            <div
              className="font-mono text-2xl font-black tracking-[0.45em] text-transparent uppercase py-6"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                WebkitTextStroke: "1px rgba(0, 34, 68, 0.28)"
              }}
            >
              PROSYNC
            </div>

            <div className="w-px h-24 bg-gradient-to-b from-black/10 via-[#002244]/20 to-transparent mt-6" />
            
            <div className="text-[10px] font-mono text-[#6E6E73] uppercase tracking-widest mt-4">
              Est. 2015
            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* RIGHT CONTENT: Staggered Visual Frames & Metric Counters */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-10 space-y-16 md:space-y-24">
            {editorialItems.map((item, idx) => (
              <Reveal
                key={idx}
                delay={idx * 150}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-center group"
              >
                {/* Visual Frame */}
                <div className="md:col-span-5 order-2 md:order-1">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F5F7] border border-black/[0.08] shadow-sm group-hover:shadow-md transition-all duration-500">
                    
                    {/* Render Rich Architectural Stylized Visuals */}
                    {item.visualType === "boardroom" && (
                      <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#F8F6F0] via-[#EFECE6] to-[#E3DDD4] relative overflow-hidden">
                        {/* Architectural linear grid backdrop */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                        
                        <div className="flex items-center justify-between relative z-10">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C6D58] font-bold">
                            {item.tag}
                          </span>
                          <Building2 className="w-5 h-5 text-[#8C6D58]" />
                        </div>

                        {/* Minimalist architectural silhouette elements */}
                        <div className="relative z-10 space-y-2 my-auto">
                          <div className="w-full h-24 rounded-xl bg-white/70 backdrop-blur-xs border border-black/[0.05] p-3 shadow-2xs flex flex-col justify-between">
                            <div className="flex items-center justify-between text-[11px] font-mono text-[#002244] font-semibold">
                              <span>NHAI Highway Expansion</span>
                              <span className="text-emerald-700 font-bold">₹250 Cr</span>
                            </div>
                            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-[#FF5500] h-full w-[88%]" />
                            </div>
                            <div className="text-[10px] text-[#6E6E73]">
                              Lead Consortium Arranged
                            </div>
                          </div>
                        </div>

                        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#6E6E73]">
                          <span>Bespoke Execution</span>
                          <span className="font-bold text-[#002244]">100% Closure</span>
                        </div>
                      </div>
                    )}

                    {item.visualType === "analyst" && (
                      <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#0F2744] via-[#0A1D36] to-[#061426] text-white relative overflow-hidden">
                        <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#FF5500]/20 rounded-full blur-xl pointer-events-none" />

                        <div className="flex items-center justify-between relative z-10">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF8A3D] font-bold">
                            {item.tag}
                          </span>
                          <TrendingUp className="w-5 h-5 text-[#FF8A3D]" />
                        </div>

                        {/* Analytical model card preview */}
                        <div className="relative z-10 my-auto p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-slate-300">Syndication Volume</span>
                            <span className="text-[#FF5500] font-bold">₹2,500+ Cr</span>
                          </div>
                          <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono text-slate-300 pt-1">
                            <div className="bg-white/5 p-1 rounded text-center">PSU: 62%</div>
                            <div className="bg-white/5 p-1 rounded text-center">Private: 28%</div>
                            <div className="bg-white/5 p-1 rounded text-center">NBFC: 10%</div>
                          </div>
                        </div>

                        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span>Techno-Economic Study</span>
                          <span className="text-emerald-400 font-semibold">Tier-1 Approved</span>
                        </div>
                      </div>
                    )}

                    {item.visualType === "banking" && (
                      <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#F5F8FA] via-[#EBF1F7] to-[#DFE9F2] relative overflow-hidden">
                        <div className="flex items-center justify-between relative z-10">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#002244] font-bold">
                            {item.tag}
                          </span>
                          <Landmark className="w-5 h-5 text-[#002244]" />
                        </div>

                        <div className="relative z-10 my-auto grid grid-cols-2 gap-2 text-center font-mono">
                          <div className="p-2.5 rounded-lg bg-white/80 border border-black/[0.05] shadow-2xs">
                            <span className="text-[10px] text-[#6E6E73] block">State Bank of India</span>
                            <span className="text-xs font-bold text-[#002244]">Lead Banker</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/80 border border-black/[0.05] shadow-2xs">
                            <span className="text-[10px] text-[#6E6E73] block">Canara Bank</span>
                            <span className="text-xs font-bold text-[#002244]">Consortium</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/80 border border-black/[0.05] shadow-2xs">
                            <span className="text-[10px] text-[#6E6E73] block">Kotak Bank</span>
                            <span className="text-xs font-bold text-[#002244]">Private Desk</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/80 border border-black/[0.05] shadow-2xs">
                            <span className="text-[10px] text-[#6E6E73] block">Vivriti Capital</span>
                            <span className="text-xs font-bold text-[#002244]">Structured Debt</span>
                          </div>
                        </div>

                        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#6E6E73]">
                          <span>Consortium Reach</span>
                          <span className="text-[#002244] font-bold">25+ Lead Desks</span>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Metric & Descriptive Text Pair */}
                <div className="md:col-span-7 order-1 md:order-2 space-y-4">
                  {/* Oversized High-Impact Metric Counter */}
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-bold font-mono tracking-tight text-[#002244] group-hover:text-[#FF5500] transition-colors tabular-nums">
                    {item.metric}
                  </div>

                  {/* Title in bold uppercase tracking */}
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#002244] uppercase">
                    {item.title}
                  </h3>

                  {/* Editorial explanation */}
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl font-normal">
                    {item.description}
                  </p>

                  {/* Delicate horizontal divider */}
                  <div className="pt-6">
                    <div className="w-12 h-px bg-black/20 group-hover:w-28 group-hover:bg-[#FF5500] transition-all duration-300" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
