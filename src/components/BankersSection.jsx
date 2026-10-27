import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";

export default function BankersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const institutions = [
    {
      name: "State Bank of India",
      abbr: "SBI",
      category: "Public Sector Bank",
      role: "Consortium Leader & Term Credit",
      type: "Commercial Banking",
      color: "#1A4D80",
      accent: "#38BDF8",
      gradient: "from-[#1A4D80]/30 to-[#0A1A33]",
      tagColor: "bg-[#1A4D80] text-sky-200 border-sky-400/30"
    },
    {
      name: "Bank of Baroda",
      abbr: "BPB",
      category: "Public Sector Bank",
      role: "Large Capex & Working Capital",
      type: "Project Finance",
      color: "#C2410C",
      accent: "#FB923C",
      gradient: "from-[#C2410C]/25 to-[#0A1A33]",
      tagColor: "bg-[#9A3412] text-orange-200 border-orange-400/30"
    },
    {
      name: "Canara Bank",
      abbr: "CANARA",
      category: "Public Sector Bank",
      role: "Project Loans & Bank Guarantees",
      type: "Consortium Lending",
      color: "#0284C7",
      accent: "#38BDF8",
      gradient: "from-[#0284C7]/25 to-[#0A1A33]",
      tagColor: "bg-[#0369A1] text-cyan-200 border-cyan-400/30"
    },
    {
      name: "Kotak Mahindra Bank",
      abbr: "KOTAK",
      category: "Private Sector Bank",
      role: "Corporate Banking & Structured Credit",
      type: "Private Credit",
      color: "#DC2626",
      accent: "#F87171",
      gradient: "from-[#DC2626]/25 to-[#0A1A33]",
      tagColor: "bg-[#B91C1C] text-red-200 border-red-400/30"
    },
    {
      name: "Vivriti Capital",
      abbr: "VIVRITI",
      category: "NBFC & Debt Platform",
      role: "Structured Debt & Mezzanine Facilities",
      type: "Alternative Credit",
      color: "#059669",
      accent: "#34D399",
      gradient: "from-[#059669]/25 to-[#0A1A33]",
      tagColor: "bg-[#047857] text-emerald-200 border-emerald-400/30"
    },
    {
      name: "EAAA Capital",
      abbr: "EAAA",
      category: "Alternative Investment Fund (AIF)",
      role: "Growth Capital & Private Credit",
      type: "Growth Debt Fund",
      color: "#D97706",
      accent: "#FBBF24",
      gradient: "from-[#D97706]/25 to-[#0A1A33]",
      tagColor: "bg-[#B45309] text-amber-200 border-amber-400/30"
    },
    {
      name: "AIMS Institutional Fund",
      abbr: "AIMS",
      category: "Specialized Credit Fund",
      role: "High-Yield Debt & Bridge Financing",
      type: "Special Situations",
      color: "#4F46E5",
      accent: "#818CF8",
      gradient: "from-[#4F46E5]/25 to-[#0A1A33]",
      tagColor: "bg-[#4338CA] text-indigo-200 border-indigo-400/30"
    }
  ];

  // Auto-advance carousel every 3.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % institutions.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, institutions.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + institutions.length) % institutions.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % institutions.length);
  };

  return (
    <section id="bankers" className="py-24 md:py-32 relative bg-[#07152B]/90 fintech-grid-bg border-b border-[rgba(120,150,200,0.15)] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Section Header with Colorful Accents */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#38BDF8]">
              <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Syndication Network</span>
              <span aria-hidden="true" className="text-[#F59E0B]">/</span>
              <span className="text-[#94A3B8]">Lending Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F8FAFC]">
              Bankers & Institutional Lenders We Deal With
            </h2>
            <p className="text-base text-[#CBD5E1] font-normal leading-relaxed">
              We maintain direct syndication pipelines with premier public sector banks, leading private credit institutions, and sovereign AIF debt funds across India.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#10B981] bg-[#0A1A33] px-3.5 py-2 rounded-xl border border-[#10B981]/30">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Active Consortia Desk</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous bank"
                className="w-10 h-10 rounded-xl bg-[#0D1F3C] border border-[rgba(120,150,200,0.25)] text-[#CBD5E1] hover:text-white hover:border-[#38BDF8] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next bank"
                className="w-10 h-10 rounded-xl bg-[#0D1F3C] border border-[rgba(120,150,200,0.25)] text-[#CBD5E1] hover:text-white hover:border-[#38BDF8] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Multi-Card Carousel Showcase */}
        <div
          className="relative py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Responsive 3-to-4 Card View Window */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[0, 1, 2, 3].map((offset) => {
              const idx = (currentIndex + offset) % institutions.length;
              const bank = institutions[idx];

              return (
                <div
                  key={`${bank.abbr}-${offset}`}
                  className={`fintech-panel rounded-2xl p-6 border transition-all duration-300 group hover:-translate-y-2 bg-gradient-to-b ${bank.gradient} shadow-lg`}
                  style={{ borderColor: `${bank.accent}33` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-bold font-mono tracking-wider shadow-sm border ${bank.tagColor}`}
                    >
                      {bank.abbr}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: bank.accent }}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                    {bank.name}
                  </h3>

                  <p className="text-xs text-[#94A3B8] font-mono mt-1">
                    {bank.category}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[rgba(120,150,200,0.15)] flex flex-col gap-1.5 text-xs">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#64748B]">
                      Syndication Scope
                    </span>
                    <span className="text-[#CBD5E1] font-medium leading-snug">
                      {bank.role}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-[11px] font-mono pt-2 border-t border-white/5">
                    <span style={{ color: bank.accent }}>{bank.type}</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Partner Tier
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Pagination Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {institutions.map((item, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to ${item.name}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === dotIdx ? "w-8 bg-[#38BDF8]" : "w-2 bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Smooth Continuous Marquee Ticker with Colorful Brand Badges */}
      <div className="mt-12 border-y border-[rgba(120,150,200,0.18)] bg-[#050D1A]/95 py-4 overflow-hidden relative shadow-inner">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050D1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050D1A] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
          {[...institutions, ...institutions, ...institutions].map((bank, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#0B1A30] border border-[rgba(120,150,200,0.2)] shadow-sm hover:border-[#38BDF8] transition-colors"
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: bank.accent }}
              />
              <span className="font-mono text-sm font-bold text-white tracking-wide">
                {bank.abbr}
              </span>
              <span className="text-xs text-[#CBD5E1] font-medium">
                {bank.name}
              </span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded border ${bank.tagColor}`}
              >
                {bank.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
