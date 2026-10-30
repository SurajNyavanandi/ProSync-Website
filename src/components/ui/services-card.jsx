/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Landmark,
  TrendingUp,
  Compass,
  Layers,
  ShieldCheck,
  ChevronDown
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Carousel Context ---
const CarouselContext = React.createContext(null);

export function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

export const Carousel = React.forwardRef(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState([]);

    const onSelect = React.useCallback((emblaApi) => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const scrollTo = React.useCallback(
      (index) => {
        api?.scrollTo(index);
      },
      [api]
    );

    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;

      queueMicrotask(() => {
        onSelect(api);
        setScrollSnaps(api.scrollSnapList());
      });

      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
        api?.off("reInit", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          selectedIndex,
          scrollSnaps,
          scrollTo,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

export const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

export const CarouselPrevious = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-10 w-10 rounded-full border border-black/10 bg-white/90 shadow-sm backdrop-blur-xs transition-all hover:bg-white hover:border-[#FF5500] hover:text-[#FF5500] disabled:opacity-40",
          orientation === "horizontal"
            ? "-left-4 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        aria-label="Previous slide"
        {...props}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-10 w-10 rounded-full border border-black/10 bg-white/90 shadow-sm backdrop-blur-xs transition-all hover:bg-white hover:border-[#FF5500] hover:text-[#FF5500] disabled:opacity-40",
          orientation === "horizontal"
            ? "-right-4 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        aria-label="Next slide"
        {...props}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  }
);
CarouselNext.displayName = "CarouselNext";

// --- Single Animated Service Card with Interactive Feature Drawer ---
export function AnimatedServiceCard({
  service,
  index = 0,
  isActive = false,
  onSelect,
}) {
  const cardRef = React.useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [showDrawer, setShowDrawer] = React.useState(false);

  const Icon = service.icon || Landmark;

  const handleMandateClick = (e) => {
    e.stopPropagation();
    window.dispatchEvent(
      new CustomEvent("prosync:selectMandate", {
        detail: { mandate: service.title }
      })
    );
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={cn(
        "group relative flex h-full flex-col justify-between rounded-3xl border bg-white p-7 sm:p-8 transition-all duration-300 hover:shadow-xl",
        isActive
          ? "border-[#002244] shadow-md ring-1 ring-[#002244]/15"
          : "border-black/[0.08] hover:border-[#FF5500]/40"
      )}
      onClick={onSelect}
    >
      {/* Subtle background glow effect on hover */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#002244]/[0.03] to-[#FF5500]/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Card Header: Number & Icon */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="font-mono text-xs font-bold tracking-widest text-[#6E6E73] group-hover:text-[#FF5500] transition-colors">
            {service.number || `00${index + 1}`}
          </span>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002244]/[0.05] text-[#002244] transition-all duration-300 group-hover:bg-[#FF5500] group-hover:text-white group-hover:shadow-md">
            <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>

        {/* Ticket Size & Category Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {service.category && (
            <div className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-slate-50 px-3 py-1 text-[11px] font-semibold text-[#002244]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5500]" />
              {service.category}
            </div>
          )}
          {service.ticketSize && (
            <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#002244]/05 text-[#002244] border border-[#002244]/10">
              {service.ticketSize}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl sm:text-2xl font-bold tracking-tight text-[#002244] group-hover:text-[#FF5500] transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[#6E6E73]">
          {service.description}
        </p>

        {/* Interactive Feature Checklist Drawer Toggle */}
        {service.features && service.features.length > 0 && (
          <div className="mt-5 border-t border-black/[0.06] pt-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowDrawer(!showDrawer);
              }}
              className="w-full flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#002244] hover:text-[#FF5500] font-bold py-1 cursor-pointer transition-colors"
            >
              <span>Mandate Deliverables ({service.features.length})</span>
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", showDrawer ? "rotate-180 text-[#FF5500]" : "text-slate-400")} />
            </button>

            <AnimatePresence>
              {showDrawer && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 pt-2.5 pb-1">
                    {service.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs font-medium text-slate-700 bg-slate-50/80 p-2 rounded-xl border border-black/[0.03]"
                      >
                        <ShieldCheck className="h-3.5 w-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Card Footer: Action Button */}
      <div className="mt-8 pt-5 border-t border-black/[0.06] flex items-center justify-between">
        <a
          href="#contact"
          onClick={handleMandateClick}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#002244] group-hover:text-[#FF5500] transition-colors"
        >
          <span>{service.cta || "Discuss Mandate"}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        {service.stat && (
          <span className="font-mono text-xs font-semibold text-slate-400">
            {service.stat}
          </span>
        )}
      </div>
    </motion.div>
  );
}

// --- Default Prosync Services Data with Ticket Sizes ---
export const DEFAULT_SERVICES = [
  {
    id: "debt-syndication",
    number: "001",
    title: "Corporate Debt Syndication",
    category: "Senior Debt & Consortiums",
    ticketSize: "₹50 Cr - ₹500 Cr+",
    description:
      "End-to-end debt mobilization for project capital expenditure, consortium loan structuring, and multi-bank financial closure with top Indian lenders.",
    icon: Landmark,
    features: [
      "Lender-grade financial modeling & TEV validation",
      "Consortium sanction letters & pricing negotiations",
      "Security charge creation & benchmark rate alignment",
      "Escrow & DSRA account mechanism structuring"
    ],
    cta: "Syndicate Debt",
    stat: "₹5,000Cr+ Mobilized",
  },
  {
    id: "capital-transactions",
    number: "002",
    title: "Structured Capital & Private Credit",
    category: "Mezzanine & Growth Funding",
    ticketSize: "₹25 Cr - ₹200 Cr",
    description:
      "Bespoke alternative capital advisory, promoter debt refinancing, mezzanine facilities, and private credit placement tailored to promoter cap-tables.",
    icon: TrendingUp,
    features: [
      "Structured credit & promoter share pledge finance",
      "Alternative investment fund (AIF) placement",
      "Flexible covenants & milestone-based amortization",
      "Subordinated debt with equity upside options"
    ],
    cta: "Explore Credit",
    stat: "Partner Led",
  },
  {
    id: "project-advisory",
    number: "003",
    title: "Project Appraisal & TEV Studies",
    category: "Infrastructure & Valuation",
    ticketSize: "₹25 Cr - ₹500 Cr+",
    description:
      "Rigorous techno-economic appraisal, detailed project reports (DPR), sensitivity stress-testing, and compliance modeling for institutional sanction.",
    icon: Compass,
    features: [
      "Techno-Economic Viability (TEV) appraisal reports",
      "DPR preparation for Public & Private lead banks",
      "Capex validation & dynamic cash-flow stress testing",
      "Credit committee presentation & defense"
    ],
    cta: "Request TEV",
    stat: "99% Sanction Rate",
  },
  {
    id: "working-capital",
    number: "004",
    title: "Working Capital Facilities",
    category: "Consortium Lines & Limits",
    ticketSize: "₹25 Cr - ₹300 Cr",
    description:
      "Optimization of fund-based cash credit limits, export financing, and non-fund instruments (Letter of Credit & Bank Guarantees) across multi-bank consortiums.",
    icon: Layers,
    features: [
      "CMA data modeling & assessment of working capital",
      "Bank Guarantee (BG) & Letter of Credit (LC) consortiums",
      "Working capital cycle optimization & debtor limits",
      "Consortium interchangeability agreements"
    ],
    cta: "Enhance Limits",
    stat: "Multi-Bank Lines",
  },
];

// --- Complete Services Card Carousel Component ---
export default function ServicesCard({
  services = DEFAULT_SERVICES,
  title = "Our Services",
  subtitle = "Comprehensive financial advisory and debt syndication tailored for your business.",
  badge = "WHAT WE DO",
  className,
}) {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    queueMicrotask(() => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    });

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className={cn("w-full", className)}>
      {/* Top Header with Navigation Arrows */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
        <div className="max-w-2xl">
          {badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#002244]/[0.05] text-[#002244] text-[11px] font-mono font-bold tracking-wider uppercase mb-3 border border-[#002244]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              <span>{badge}</span>
            </div>
          )}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#002244] mb-3">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Carousel Navigation Buttons & Counter */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center text-xs font-mono font-bold text-[#6E6E73] mr-2">
            <span className="text-[#002244]">{current + 1}</span>
            <span className="mx-1 text-slate-300">/</span>
            <span>{count || services.length}</span>
          </div>

          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            disabled={!api?.canScrollPrev()}
            aria-label="Previous service"
            className="h-11 w-11 rounded-full border border-black/10 bg-white shadow-xs hover:border-[#FF5500] hover:text-[#FF5500] hover:shadow-md disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            disabled={!api?.canScrollNext()}
            aria-label="Next service"
            className="h-11 w-11 rounded-full border border-black/10 bg-white shadow-xs hover:border-[#FF5500] hover:text-[#FF5500] hover:shadow-md disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Embla Carousel with Responsive Basis */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-5 sm:-ml-6 py-2">
          {services.map((service, index) => (
            <CarouselItem
              key={service.id || index}
              className="pl-5 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <AnimatedServiceCard
                service={service}
                index={index}
                isActive={current === index}
                onSelect={() => api?.scrollTo(index)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Mobile Indicator Dots */}
      <div className="flex justify-center items-center gap-2 mt-8 md:hidden">
        {services.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => api?.scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={cn(
              "h-2 rounded-full transition-all cursor-pointer",
              current === idx
                ? "w-7 bg-[#FF5500]"
                : "w-2 bg-slate-300 hover:bg-slate-400"
            )}
          />
        ))}
      </div>
    </div>
  );
}
