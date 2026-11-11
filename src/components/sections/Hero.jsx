import { ArrowRight } from "lucide-react";
import { Reveal } from "../common/Motion";

export default function Hero() {
  const heroBgUrl =
    "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793334844/Executive_Presentation_with_City_View_xv9uyz.png";
  const heroFallbackUrl =
    "/assets/aistudio/Executive_Presentation_with_City_View_f9a1ae0a.png";

  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-white text-[#1D1D1F]"
    >
      {/* Ambient Spotlight Glow Effect */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#002244]/[0.04] to-[#FF5500]/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Full-Bleed Executive Boardroom Presentation Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <img
          src={heroBgUrl}
          alt="Executive Financial Advisory Presentation in City Boardroom"
          className="w-full h-full object-cover object-right opacity-95 transition-opacity duration-700"
          onError={(e) => {
            if (e.currentTarget.src !== heroFallbackUrl) {
              e.currentTarget.src = heroFallbackUrl;
            }
          }}
        />
        {/* Desktop left-fade mask ensuring headline contrast across all wide resolutions */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
        {/* Mobile/Tablet gradient overlay ensuring contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:hidden pointer-events-none" />
        {/* Bottom soft gradient fade into subsequent section */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
      </div>

      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[420px] md:min-h-[460px]">
          {/* Left Column: Essential Typography & Exactly Two Buttons */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <Reveal delay={50}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[1.08] break-words">
                  CAPITAL. STRATEGY. GROWTH.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-base sm:text-xl font-normal text-[#1D1D1F] leading-snug">
                  Financial expertise for businesses navigating their next phase of growth.
                </p>
              </Reveal>
            </div>

            <Reveal delay={220}>
              <p className="text-sm sm:text-lg text-[#515154] leading-relaxed max-w-xl font-normal">
                Prosync is an independent financial advisory firm providing debt syndication, structured finance, transaction advisory and strategic financial solutions.
              </p>
            </Reveal>

            {/* Exactly Two Action Buttons - Mobile Responsive */}
            <Reveal delay={280} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold font-heading text-white bg-[#002244] hover:bg-[#FF5500] shadow-md shadow-[#002244]/15 hover:shadow-[#FF5500]/25 transition-all duration-200 inline-flex items-center justify-center gap-2 min-h-[48px] active:scale-95 cursor-pointer w-full sm:w-auto text-center"
              >
                <span>DISCUSS A MANDATE</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold font-heading text-[#002244] bg-white border border-[#002244]/25 hover:border-[#FF5500] hover:text-[#FF5500] hover:bg-slate-50 transition-all duration-200 inline-flex items-center justify-center gap-2 min-h-[48px] active:scale-95 cursor-pointer w-full sm:w-auto text-center"
              >
                <span>OUR EXPERTISE</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
