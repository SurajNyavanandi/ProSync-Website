import { useState } from "react";
import { ArrowRight, Landmark, TrendingUp, Compass, Layers } from "lucide-react";
import { Reveal, TiltCard } from "./common/Motion";
import { IMAGES } from "../data/images";

export default function PracticeSection() {
  const [imageErrors, setImageErrors] = useState({});

  const services = [
    {
      id: "debt-syndication",
      title: "Corporate Debt Syndication",
      category: "Senior Debt & Bank Lines",
      description: "Structure and syndicate term loans and consortium credit lines from premier Indian public and private banks.",
      image: IMAGES.SERVICE_DEBT,
      fallbackIcon: Landmark,
      deliverable: "Bank sanction letters & consortium agreements",
      cta: "Learn More"
    },
    {
      id: "capital-transactions",
      title: "Capital & Transactions",
      category: "Growth Equity & Private Credit",
      description: "Guide mid-market promoters through growth capital, structured mezzanine debt, and institutional cap-table design.",
      image: IMAGES.SERVICE_CAPITAL,
      fallbackIcon: TrendingUp,
      deliverable: "Term sheets & cap-table modeling",
      cta: "Learn More"
    },
    {
      id: "project-advisory",
      title: "Project Advisory & TEV",
      category: "Infrastructure & Appraisal",
      description: "Advise concessionaires on project feasibility, techno-economic valuation (TEV), and tender bid compliance.",
      image: IMAGES.SERVICE_PROJECT,
      fallbackIcon: Compass,
      deliverable: "Lender-grade TEV & DPR appraisal",
      cta: "Learn More"
    },
    {
      id: "working-capital",
      title: "Working Capital Facilities",
      category: "Consortium Limits & Non-Fund",
      description: "Optimize cash credit limits, letters of credit (LC), and bank guarantees (BG) to fuel scalable industrial operations.",
      image: IMAGES.SERVICE_WORKING_CAPITAL,
      fallbackIcon: Layers,
      deliverable: "CMA data modeling & limit enhancement",
      cta: "Learn More"
    }
  ];

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-[#FBFBFC] text-[#1D1D1F] border-b border-black/[0.05]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#002244] mb-3 font-sans">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed">
            Comprehensive financial advisory and debt syndication tailored for your business.
          </p>
        </Reveal>

        {/* 4-Column Image Card Grid (image_a75a330b.png reference style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          {services.map((service, idx) => {
            const hasError = imageErrors[service.id];
            const Icon = service.fallbackIcon;

            return (
              <Reveal key={service.id} delay={idx * 100} className="h-full">
                <TiltCard
                  maxTilt={4}
                  scale={1.015}
                  glowColor="rgba(0, 34, 68, 0.05)"
                  className="h-full rounded-2xl"
                >
                  <div className="h-full rounded-2xl bg-white border border-black/[0.06] hover:border-black/[0.14] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden p-4 sm:p-5">
                    
                    <div className="space-y-4">
                      {/* Top Rounded Photo Banner */}
                      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100 border border-black/[0.04]">
                        {!hasError ? (
                          <img
                            src={service.image}
                            alt={service.title}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={() => handleImageError(service.id)}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          // Styled CSS/SVG Fallback Container
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#EEF4FA] to-[#E2EBF5] text-[#002244] p-4 text-center">
                            <div className="p-3 rounded-xl bg-white/80 shadow-2xs mb-2">
                              <Icon className="w-6 h-6 text-[#FF5500]" />
                            </div>
                            <span className="text-[11px] font-mono font-semibold text-[#002244] tracking-tight">
                              {service.category}
                            </span>
                          </div>
                        )}
                        
                        {/* Subtle category tag overlay */}
                        <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs border border-black/[0.06] text-[10px] font-mono font-semibold text-[#002244] shadow-2xs">
                          {service.category.split("&")[0].trim()}
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="space-y-2 pt-1">
                        <h3 className="text-lg sm:text-xl font-bold text-[#002244] tracking-tight group-hover:text-[#FF5500] transition-colors leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed line-clamp-3 font-normal">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Link ("Learn More >") */}
                    <div className="pt-4 mt-4 border-t border-black/[0.06] flex items-center justify-between">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#002244] group-hover:text-[#FF5500] transition-colors cursor-pointer"
                      >
                        <span>{service.cta}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <span className="text-[10px] font-mono text-slate-400">
                        Senior Partner Lead
                      </span>
                    </div>

                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Scope Banner */}
        <Reveal delay={300} className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-black/[0.06] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 max-w-2xl text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#002244]">
              Need customized bank consortium underwriting?
            </h4>
            <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
              We structure debt and mezzanine facilities directly aligned with Tier-1 PSU and private bank credit committees.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#002244] hover:bg-[#FF5500] transition-all min-h-[44px] flex items-center shadow-md active:scale-95 cursor-pointer"
          >
            Discuss a Mandate
          </a>
        </Reveal>

      </div>
    </section>
  );
}
