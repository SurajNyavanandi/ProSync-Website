import { Sparkles } from "lucide-react";

export default function BankersSection() {
  const banks = [
    {
      name: "State Bank of India",
      abbr: "SBI",
      renderLogo: () => (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#0081C9" />
          <circle cx="50" cy="40" r="14" fill="#FFFFFF" />
          <rect x="44" y="40" width="12" height="38" fill="#FFFFFF" rx="2" />
        </svg>
      )
    },
    {
      name: "Bank of Baroda",
      abbr: "BPB",
      renderLogo: () => (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#F26522" />
          <path d="M28 24h24a18 18 0 0 1 18 18c0 7-4 13-10 16 8 3 13 10 13 18a18 18 0 0 1-18 18H28V24z" fill="#FFFFFF" fillOpacity="0.95" />
          <circle cx="48" cy="40" r="7" fill="#F26522" />
          <circle cx="50" cy="68" r="8" fill="#F26522" />
        </svg>
      )
    },
    {
      name: "Canara Bank",
      abbr: "CANARA",
      renderLogo: () => (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#0A2540" />
          <polygon points="50,16 86,78 14,78" fill="#0091DA" />
          <polygon points="50,84 86,22 14,22" fill="#FFD200" fillOpacity="0.9" />
          <circle cx="50" cy="50" r="10" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: "Kotak Mahindra Bank",
      abbr: "KOTAK",
      renderLogo: () => (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#ED1B24" />
          <path
            d="M32 50c0-9 7-16 16-16 6 0 11 3 14 8l6 8c3 5 8 8 14 8 9 0 16-7 16-16s-7-16-16-16c-6 0-11 3-14 8l-6 8c-3-5-8-8-14-8-9 0-16 7-16 16s7 16 16 16"
            stroke="#FFFFFF"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      name: "Vivriti Capital",
      abbr: "VIVRITI",
      renderLogo: () => (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#0F2D37" />
          <path d="M22 28L50 82L78 28H62L50 56L38 28H22Z" fill="#00A887" />
          <path d="M38 28L50 56L62 28H54L50 38L46 28H38Z" fill="#34D399" />
        </svg>
      )
    },
    {
      name: "EAAA Capital",
      abbr: "EAAA",
      renderLogo: () => (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#1C1917" />
          <polygon points="50,18 82,78 18,78" stroke="#D97706" strokeWidth="6" fill="none" />
          <text x="50" y="66" fontFamily="sans-serif" fontSize="22" fontWeight="bold" fill="#FBBF24" textAnchor="middle">
            EAAA
          </text>
        </svg>
      )
    },
    {
      name: "AIMS Institutional Fund",
      abbr: "AIMS",
      renderLogo: () => (
        <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#1E1B4B" />
          <circle cx="50" cy="50" r="32" stroke="#6366F1" strokeWidth="5" strokeDasharray="6 4" />
          <text x="50" y="58" fontFamily="monospace" fontSize="24" fontWeight="800" fill="#FFFFFF" textAnchor="middle">
            AIMS
          </text>
        </svg>
      )
    }
  ];

  return (
    <section id="bankers" className="py-16 md:py-24 relative bg-[#061122]/95 border-b border-[rgba(120,150,200,0.15)] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mb-10">

        {/* Minimal Centered Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#FF8A3D]">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Syndication & Credit Partners</span>
            <span aria-hidden="true" className="text-[#F59E0B]">/</span>
            <span className="text-[#94A3B8]">Institutional Consortia</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#F8FAFC]">
            Banks We Work With
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8]">
            Direct lending connections with leading financial institutions and investment funds.
          </p>
        </div>

      </div>

      {/* Infinite Seamless Logo Marquee Track (Only Logos, Separated by subtle slashes) */}
      <div className="border-y border-[rgba(120,150,200,0.18)] bg-[#040C1A]/95 py-6 overflow-hidden relative shadow-inner">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#040C1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#040C1A] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {[...banks, ...banks, ...banks, ...banks].map((bank, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-12 group cursor-pointer"
            >
              <div className="flex items-center gap-4 transition-transform duration-300 group-hover:scale-105">
                <div className="p-1 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#38BDF8]/50 shadow-sm transition-all duration-300">
                  {bank.renderLogo()}
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-sm font-bold text-[#E2E8F0] group-hover:text-white transition-colors">
                    {bank.abbr}
                  </span>
                  <span className="text-[11px] text-[#64748B] group-hover:text-[#94A3B8] transition-colors font-medium">
                    {bank.name}
                  </span>
                </div>
              </div>

              {/* Minimalist slash separator */}
              <span className="text-[rgba(120,150,200,0.25)] font-mono text-lg font-light">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
