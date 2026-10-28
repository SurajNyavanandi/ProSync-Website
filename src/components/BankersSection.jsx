export default function BankersSection() {
  const banks = [
    {
      name: "State Bank of India",
      abbr: "SBI",
      renderLogo: () => (
        <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#0081C9" />
          <circle cx="50" cy="38" r="14" fill="#FFFFFF" />
          <rect x="44" y="38" width="12" height="42" fill="#FFFFFF" rx="2" />
        </svg>
      )
    },
    {
      name: "Canara Bank",
      abbr: "Canara",
      renderLogo: () => (
        <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#0A2540" />
          {/* Authentic Interlocking Triangles: Cyan-Blue & Golden Yellow */}
          <polygon points="50,14 88,78 12,78" fill="#0091DA" />
          <polygon points="50,86 88,22 12,22" fill="#FFD200" fillOpacity="0.95" />
          <circle cx="50" cy="50" r="11" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: "Kotak Mahindra Bank",
      abbr: "Kotak",
      renderLogo: () => (
        <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Official Kotak Red Tile #ED1B24 */}
          <rect width="100" height="100" rx="20" fill="#ED1B24" />
          {/* Authentic Kotak Infinity Emblem */}
          <path
            d="M30 50c0-10 8-18 18-18 7 0 13 4 16 10l5 8c3 5 8 8 14 8 9 0 17-8 17-18s-8-18-17-18c-7 0-13 4-16 10l-5 8c-3 5-8 8-14 8-10 0-18-8-18-18"
            stroke="#FFFFFF"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      name: "Bank of Baroda",
      abbr: "BOB",
      renderLogo: () => (
        <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Official Baroda Vermilion Orange #F26522 */}
          <rect width="100" height="100" rx="20" fill="#F26522" />
          {/* Authentic Baroda Sun 'B' with Sunburst Rays */}
          <g fill="#FFFFFF">
            {/* Left spine */}
            <rect x="22" y="20" width="10" height="60" rx="4" />
            {/* Top lobe with sunburst arc */}
            <path d="M28 20h20a18 18 0 0 1 18 18c0 7-4 13-10 16-4-2-9-3-14-3H28V20z" />
            {/* Bottom lobe with sunburst arc */}
            <path d="M28 47h18c7 0 13 3 17 8 2 3 3 7 3 10a18 18 0 0 1-18 18H28V47z" />
          </g>
          {/* Inner negative sun cutouts */}
          <circle cx="46" cy="36" r="6" fill="#F26522" />
          <circle cx="48" cy="65" r="7" fill="#F26522" />
        </svg>
      )
    },
    {
      name: "Vivriti Capital",
      abbr: "Vivriti",
      renderLogo: () => (
        <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Official Dark Petrol Tile */}
          <rect width="100" height="100" rx="20" fill="#0A1C2A" />
          {/* Official Vivriti Geometric Dual-Facet V */}
          <path d="M20 24L50 82L80 24H63L50 56L37 24H20Z" fill="#00A887" />
          <path d="M37 24L50 56L63 24H54L50 36L46 24H37Z" fill="#00D09C" />
        </svg>
      )
    },
    {
      name: "EAAA Capital",
      abbr: "EAAA",
      renderLogo: () => (
        <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#18181B" />
          <polygon points="50,16 84,80 16,80" stroke="#F59E0B" strokeWidth="6" fill="none" />
          <text x="50" y="66" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="800" fill="#FBBF24" textAnchor="middle">
            EAAA
          </text>
        </svg>
      )
    },
    {
      name: "AIMS Institutional",
      abbr: "AIMS",
      renderLogo: () => (
        <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#1E1B4B" />
          <circle cx="50" cy="50" r="34" stroke="#818CF8" strokeWidth="5" strokeDasharray="8 5" />
          <text x="50" y="58" fontFamily="monospace, sans-serif" fontSize="22" fontWeight="800" fill="#FFFFFF" textAnchor="middle">
            AIMS
          </text>
        </svg>
      )
    }
  ];

  return (
    <section id="bankers" className="py-10 md:py-14 relative bg-[#040C1A] border-b border-white/[0.08] overflow-hidden">
      {/* Ultra-Minimalist Apple-grade Section Header */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 mb-6 text-center">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#94A3B8]/90 font-medium">
          Lending & Institutional Partners
        </span>
      </div>

      {/* Infinite Seamless Logo Marquee Track (Only Pure Logos & Labels) */}
      <div className="py-3 overflow-hidden relative">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#040C1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#040C1A] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-10 sm:gap-14 whitespace-nowrap">
          {[...banks, ...banks, ...banks, ...banks].map((bank, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-10 sm:gap-14 group cursor-pointer"
            >
              <div className="flex items-center gap-3.5 transition-all duration-200 group-hover:scale-105">
                <div className="p-1 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#FF6B00]/50 shadow-sm transition-all duration-200">
                  {bank.renderLogo()}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                    {bank.abbr}
                  </span>
                  <span className="text-[11px] text-[#64748B] group-hover:text-[#94A3B8] transition-colors">
                    {bank.name}
                  </span>
                </div>
              </div>

              {/* Minimalist slash separator */}
              <span className="text-white/15 font-mono text-base font-light">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
