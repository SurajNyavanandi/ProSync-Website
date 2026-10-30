import { useState } from "react";

function BankLogoItem({ bank }) {
  const [imageError, setImageError] = useState(false);
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

  const urls = Array.isArray(bank.logoUrls)
    ? bank.logoUrls
    : bank.logoUrl
    ? [bank.logoUrl]
    : [];

  const handleImgError = () => {
    if (currentUrlIndex < urls.length - 1) {
      setCurrentUrlIndex((prev) => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const activeUrl = urls[currentUrlIndex];

  return (
    <div className="inline-flex items-center gap-8 sm:gap-12 group cursor-pointer select-none">
      <div className="flex items-center gap-3.5 transition-all duration-300 group-hover:scale-105">
        <div className="h-11 min-w-[46px] px-3.5 py-1.5 rounded-xl bg-white border border-black/[0.06] group-hover:border-[#FF5500]/50 shadow-xs transition-all duration-300 shrink-0 flex items-center justify-center">
          <div className="filter grayscale group-hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
            {activeUrl && !imageError ? (
              <img
                src={activeUrl}
                alt={bank.name}
                className="h-6 w-auto max-w-[110px] object-contain"
                loading="lazy"
                onError={handleImgError}
              />
            ) : (
              bank.renderFallback()
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-tight text-[#002244] group-hover:text-[#FF5500] transition-colors">
            {bank.abbr}
          </span>
          <span className="text-[11px] text-[#6E6E73] font-medium group-hover:text-[#002244] transition-colors">
            {bank.name}
          </span>
        </div>
      </div>

      {/* Subtle minimalist hairline divider */}
      <span className="text-black/15 font-mono text-base font-light">/</span>
    </div>
  );
}

export default function BankersSection() {
  const banks = [
    {
      name: "State Bank of India",
      abbr: "SBI",
      logoUrls: [
        "https://cdn.brandfetch.io/id-3TXkPxs/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        "https://cdn.brandfetch.io/id-3TXkPxs/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        "https://cdn.brandfetch.io/id-3TXkPxs?c=1dxbfHSJFAPEGdCLU4o5B"
      ],
      renderFallback: () => (
        <svg className="w-7 h-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#0081C9" />
          <circle cx="50" cy="38" r="14" fill="#FFFFFF" />
          <rect x="44" y="38" width="12" height="42" fill="#FFFFFF" rx="2" />
        </svg>
      )
    },
    {
      name: "Bank of Baroda",
      abbr: "BOB",
      logoUrls: [
        "https://cdn.brandfetch.io/idTahEUgCz/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        "https://cdn.brandfetch.io/idTahEUgCz/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        "https://cdn.brandfetch.io/idTahEUgCz?c=1dxbfHSJFAPEGdCLU4o5B"
      ],
      renderFallback: () => (
        <svg className="w-7 h-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#F26522" />
          <g fill="#FFFFFF">
            <rect x="22" y="20" width="10" height="60" rx="4" />
            <path d="M28 20h20a18 18 0 0 1 18 18c0 7-4 13-10 16-4-2-9-3-14-3H28V20z" />
            <path d="M28 47h18c7 0 13 3 17 8 2 3 3 7 3 10a18 18 0 0 1-18 18H28V47z" />
          </g>
          <circle cx="46" cy="36" r="6" fill="#F26522" />
          <circle cx="48" cy="65" r="7" fill="#F26522" />
        </svg>
      )
    },
    {
      name: "Canara Bank",
      abbr: "Canara",
      logoUrls: [
        "https://cdn.brandfetch.io/idqom7F9TV/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        "https://cdn.brandfetch.io/idqom7F9TV/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        "https://cdn.brandfetch.io/idqom7F9TV?c=1dxbfHSJFAPEGdCLU4o5B"
      ],
      renderFallback: () => (
        <svg className="w-7 h-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#0A2540" />
          <polygon points="50,14 88,78 12,78" fill="#0091DA" />
          <polygon points="50,86 88,22 12,22" fill="#FFD200" fillOpacity="0.95" />
          <circle cx="50" cy="50" r="11" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: "Kotak Mahindra Bank",
      abbr: "Kotak",
      logoUrls: [
        "https://cdn.brandfetch.io/id2IEyMOgB/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        "https://cdn.brandfetch.io/id2IEyMOgB/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        "https://cdn.brandfetch.io/id2IEyMOgB?c=1dxbfHSJFAPEGdCLU4o5B"
      ],
      renderFallback: () => (
        <svg className="w-7 h-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#ED1B24" />
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
      name: "Axis Bank",
      abbr: "Axis",
      logoUrls: [
        "https://cdn.brandfetch.io/idA0mZk62h/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        "https://cdn.brandfetch.io/idA0mZk62h/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
      ],
      renderFallback: () => (
        <svg className="w-7 h-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#97144D" />
          <polygon points="50,22 82,78 18,78" fill="#FFFFFF" />
          <polygon points="50,42 70,78 30,78" fill="#97144D" />
        </svg>
      )
    },
    {
      name: "Vivriti Capital",
      abbr: "Vivriti",
      logoUrls: [
        "https://cdn.brandfetch.io/id_ksa6-Ww/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        "https://cdn.brandfetch.io/id_ksa6-Ww/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        "https://cdn.brandfetch.io/id_ksa6-Ww?c=1dxbfHSJFAPEGdCLU4o5B"
      ],
      renderFallback: () => (
        <svg className="w-7 h-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#0A1C2A" />
          <path d="M20 24L50 82L80 24H63L50 56L37 24H20Z" fill="#00A887" />
          <path d="M37 24L50 56L63 24H54L50 36L46 24H37Z" fill="#00D09C" />
        </svg>
      )
    },
    {
      name: "Edelweiss Alternatives",
      abbr: "Edelweiss",
      logoUrls: [
        "https://cdn.brandfetch.io/idbRL32llu/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        "https://cdn.brandfetch.io/idbRL32llu/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
      ],
      renderFallback: () => (
        <svg className="w-7 h-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#0E2340" />
          <path d="M50 16L58 38L80 26L68 48L90 56L68 64L80 86L58 74L50 96L42 74L20 86L32 64L10 56L32 48L20 26L42 38Z" fill="#E63946" />
          <circle cx="50" cy="56" r="14" fill="#FFFFFF" />
          <circle cx="50" cy="56" r="7" fill="#0E2340" />
        </svg>
      )
    }
  ];

  return (
    <section id="bankers" className="py-14 md:py-16 relative bg-[#F5F5F7] border-y border-black/[0.05] overflow-hidden">
      {/* Clear Minimalist Heading */}
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 mb-6 text-center">
        <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E6E73] font-semibold">
          Lending Partners
        </h2>
      </div>

      {/* Infinite Seamless Logo Marquee Track (21st.dev Velocity style) */}
      <div className="py-2 overflow-hidden relative group">
        {/* Soft edge fade masks on Apple light gray */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#F5F5F7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#F5F5F7] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 sm:gap-12 whitespace-nowrap hover:[animation-play-state:paused]">
          {[...banks, ...banks, ...banks, ...banks].map((bank, index) => (
            <BankLogoItem key={`${bank.abbr}-${index}`} bank={bank} />
          ))}
        </div>
      </div>
    </section>
  );
}
