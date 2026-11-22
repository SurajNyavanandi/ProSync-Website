import { ArrowRight, MessageSquare } from "lucide-react";
import { Reveal } from "../common/Motion";
import { trackEvent } from "../../utils";

export default function DprHero() {
  const heroBgUrl =
    "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793334844/Executive_Presentation_with_City_View_xv9uyz.png";
  const heroFallbackUrl =
    "/assets/aistudio/Executive_Presentation_with_City_View_f9a1ae0a.png";

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    trackEvent("whatsapp_click", { location: "hero" });
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const nameInput = document.getElementById("name") || document.querySelector('input[name="name"]');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 400);
      }
    }
  };

  return (
    <section
      id="dpr"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-white text-brand-text-dark scroll-mt-24"
    >
      <div id="top" className="absolute top-0 left-0 w-0 h-0 pointer-events-none" />

      {/* Ambient Spotlight Glow Effect */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-navy/5 to-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

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

      <div className="w-full max-w-310 mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[420px] md:min-h-[460px]">
          {/* Left Column: DPR Headline, Subheading & Exactly Two Buttons */}
          <div className="lg:col-span-9 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <Reveal delay={50}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-brand-navy leading-[1.12] break-words">
                  Detailed Project Report (DPR) Preparation for New Projects &amp; Business Expansion
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-base sm:text-xl font-normal text-slate-700 leading-relaxed max-w-2xl">
                  Professional DPR preparation covering project cost, means of finance, financial projections, cash flows, DSCR and project feasibility analysis.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-xs sm:text-sm font-medium text-brand-navy">
                  <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0" />
                  <span>Financial advisory and project finance experience since 2015.</span>
                </div>
              </Reveal>
            </div>

            {/* Exactly Two Action Buttons - Mobile Responsive (min 48px height) */}
            <Reveal delay={240} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold font-heading text-white bg-brand-navy hover:bg-brand-orange shadow-md shadow-brand-navy/15 hover:shadow-brand-orange/25 transition-all duration-200 inline-flex items-center justify-center gap-2 min-h-12 active:scale-95 cursor-pointer w-full sm:w-auto text-center"
              >
                <span>Submit Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={handleWhatsAppClick}
                className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold font-heading text-brand-navy bg-white border border-brand-navy/25 hover:border-emerald-600 hover:text-emerald-700 hover:bg-emerald-50/40 shadow-xs transition-all duration-200 inline-flex items-center justify-center gap-2 min-h-12 active:scale-95 cursor-pointer w-full sm:w-auto text-center"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
