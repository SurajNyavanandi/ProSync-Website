import { useState } from "react";
import {
  MapPin,
  Building2,
  TrendingUp,
  Search,
  ChevronDown,
  Play,
  ArrowRight,
  ShieldCheck,
  Check
} from "lucide-react";
import { Reveal } from "./common/Motion";

export default function Hero() {
  // State for interactive floating bottom filter bar
  const [location, setLocation] = useState("Hyderabad / Pan-India");
  const [facilityType, setFacilityType] = useState("Debt Syndication & TEV");
  const [capitalRange, setCapitalRange] = useState("₹50 Cr - ₹500 Cr+");

  // Dropdown open states
  const [openDropdown, setOpenDropdown] = useState(null); // 'location' | 'type' | 'range' | null
  const [filterMessage, setFilterMessage] = useState(null);
  const [heroImgError, setHeroImgError] = useState(false);

  const heroImageUrl = "https://res.cloudinary.com/dfr0zghtc/image/upload/v1793277767/Executive_Portrait_in_a_City_Boardroom_ftx5ws.png";

  const locationOptions = [
    "Hyderabad / Pan-India",
    "Mumbai Financial Hub",
    "Bengaluru & South Hub",
    "Delhi NCR & North",
    "Multi-State Corridor"
  ];

  const facilityOptions = [
    "Debt Syndication & TEV",
    "Consortium Term Loans",
    "Project Finance Appraisal",
    "Structured Mezzanine Debt",
    "Working Capital Facilities"
  ];

  const capitalOptions = [
    "₹50 Cr - ₹500 Cr+",
    "₹25 Cr - ₹75 Cr",
    "₹75 Cr - ₹150 Cr",
    "₹150 Cr - ₹300 Cr",
    "₹300 Cr - ₹750 Cr+"
  ];

  const handleSearch = () => {
    setFilterMessage(`Filtering mandates: ${facilityType} in ${location} (${capitalRange})`);
    setTimeout(() => {
      const el = document.getElementById("transactions") || document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white text-[#1D1D1F]"
    >
      {/* Ambient Faded Hero Background on the right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none select-none overflow-hidden z-0 hidden lg:block opacity-20">
        <img
          src={heroImageUrl}
          alt=""
          className="w-full h-full object-cover object-right"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.8) 80%, black 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.8) 80%, black 100%)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* SPLIT 2-COLUMN HERO (image_0956d9f0.png reference style) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[460px] md:min-h-[520px]">
          
          {/* ------------------------------------------------------ */}
          {/* LEFT COLUMN: Content & Typography */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Two-tiered Headline matching reference */}
            <div className="space-y-1 sm:space-y-2">
              <Reveal delay={50}>
                <span className="block text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-[#1D1D1F] leading-[1.12]">
                  Financial Advisory.
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="block text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-[#002244] leading-[1.06]">
                  Built Around Your Business.
                </h1>
              </Reveal>
            </div>

            {/* Concise 2-Sentence Description */}
            <Reveal delay={200}>
              <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed max-w-xl font-normal">
                We provide corporate debt syndication, private credit, and growth capital advisory across infrastructure, manufacturing, and mid-market enterprises. Partner-led execution from financial modeling to sanction.
              </p>
            </Reveal>

            {/* Dual Action Buttons matching reference */}
            <Reveal delay={280} className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* 1. Primary Solid Pill Button */}
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#002244] hover:bg-[#FF5500] shadow-md shadow-[#002244]/15 hover:shadow-[#FF5500]/25 transition-all duration-200 inline-flex items-center gap-2 min-h-[48px] active:scale-95 cursor-pointer"
              >
                <span>Discuss a Mandate</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* 2. Secondary Circular Outline Icon Button ("Watch Demo" / "Explore Transactions") */}
              <a
                href="#transactions"
                className="inline-flex items-center gap-3 text-sm font-semibold text-[#002244] hover:text-[#FF5500] group transition-colors cursor-pointer py-2"
              >
                <div className="w-10 h-10 rounded-full border-2 border-[#002244] group-hover:border-[#FF5500] flex items-center justify-center transition-all duration-200 group-hover:scale-105 shadow-2xs">
                  <Play className="w-4 h-4 fill-[#002244] group-hover:fill-[#FF5500] text-[#002244] group-hover:text-[#FF5500] ml-0.5 transition-colors" />
                </div>
                <span>Explore Transactions</span>
              </a>
            </Reveal>

            {/* Micro Credential Trust Line */}
            <Reveal delay={340} className="pt-1 flex items-center gap-6 text-xs text-[#6E6E73] font-mono">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Statutory NDA</span>
              </span>
              <span>•</span>
              <span>₹2,500+ Cr Syndicated</span>
              <span>•</span>
              <span>25+ Lead Banks</span>
            </Reveal>
          </div>

          {/* ------------------------------------------------------ */}
          {/* RIGHT COLUMN: Executive Portrait in City Boardroom     */}
          {/* (Faded seamlessly into the background on one side)    */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[380px] lg:min-h-[520px]">
            <Reveal delay={150} className="w-full">
              <div className="relative w-full max-w-lg lg:max-w-xl mx-auto lg:mr-0 aspect-[4/3] sm:aspect-[5/4] lg:aspect-[6/5] flex items-center justify-center select-none group">
                
                {/* Subtle ambient light gradient glow behind the photo */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#002244]/10 via-[#FF5500]/08 to-transparent rounded-3xl blur-2xl pointer-events-none" />

                {/* Main Executive Image with Smooth Fade on the Left & Bottom Edges */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,34,68,0.14)] border border-black/[0.06] bg-[#0A1A33]">
                  {!heroImgError ? (
                    <img
                      src={heroImageUrl}
                      alt="Prosync Executive Financial Advisory"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="eager"
                      onError={() => setHeroImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#002244] to-[#0A1A33] flex items-center justify-center text-white">
                      <span className="font-mono text-sm">Prosync Advisory</span>
                    </div>
                  )}

                  {/* Soft gradient fade mask overlay on the inner/left side (facing the text) */}
                  <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white/95 via-white/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/80 via-white/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
                </div>

                {/* Floating Metric Badge 1: ₹2,500+ Cr Syndicated */}
                <div className="absolute -bottom-4 left-4 sm:left-6 z-20 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-[0_12px_30px_rgba(0,34,68,0.12)] flex items-center gap-3 animate-card-float-1">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] font-bold block">
                      Capital Syndicated
                    </span>
                    <span className="text-base sm:text-lg font-extrabold font-mono text-[#002244]">
                      ₹2,500+ Cr
                    </span>
                  </div>
                </div>

                {/* Floating Metric Badge 2: Partner-Led Execution */}
                <div className="hidden sm:flex absolute -top-3 right-4 z-20 px-4 py-2.5 rounded-2xl bg-[#002244]/95 text-white backdrop-blur-md border border-white/20 shadow-[0_12px_30px_rgba(0,34,68,0.18)] items-center gap-2.5 animate-card-float-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-pulse" />
                  <span className="text-xs font-semibold tracking-tight">
                    Partner-Led Advisory Desk
                  </span>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

        {/* ======================================================== */}
        {/* SIGNATURE FLOATING BOTTOM INTERACTIVE BAR */}
        {/* (image_0956d9f0.png reference signature component) */}
        {/* ======================================================== */}
        <div className="mt-12 sm:mt-16 lg:mt-20 relative z-30">
          <div className="max-w-4xl mx-auto rounded-2xl md:rounded-3xl bg-white border border-black/[0.08] p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,34,68,0.09)] transition-all">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-0 items-center">
              
              {/* Field 1: Location */}
              <div className="md:col-span-4 relative px-4 py-2 hover:bg-slate-50/80 rounded-xl transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === "location" ? null : "location")}
                  className="w-full text-left flex items-center justify-between group cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#6E6E73] font-semibold uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>Location</span>
                    </div>
                    <div className="text-sm font-bold text-[#002244] truncate">
                      {location}
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-[#002244] transition-transform ${openDropdown === "location" ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {openDropdown === "location" && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-black/[0.08] p-2 z-50">
                    {locationOptions.map((opt) => (
                      <div
                        key={opt}
                        onClick={() => {
                          setLocation(opt);
                          setOpenDropdown(null);
                        }}
                        className="px-3.5 py-2 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-xl cursor-pointer flex items-center justify-between"
                      >
                        <span>{opt}</span>
                        {location === opt && <Check className="w-3.5 h-3.5 text-[#FF5500]" />}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Hairline Divider */}
              <div className="hidden md:block w-px h-10 bg-black/[0.08]" />

              {/* Field 2: Advisory / Facility Type */}
              <div className="md:col-span-4 relative px-4 py-2 hover:bg-slate-50/80 rounded-xl transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === "type" ? null : "type")}
                  className="w-full text-left flex items-center justify-between group cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#6E6E73] font-semibold uppercase tracking-wider">
                      <Building2 className="w-3.5 h-3.5 text-[#002244]" />
                      <span>Facility Type</span>
                    </div>
                    <div className="text-sm font-bold text-[#002244] truncate">
                      {facilityType}
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-[#002244] transition-transform ${openDropdown === "type" ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {openDropdown === "type" && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-black/[0.08] p-2 z-50">
                    {facilityOptions.map((opt) => (
                      <div
                        key={opt}
                        onClick={() => {
                          setFacilityType(opt);
                          setOpenDropdown(null);
                        }}
                        className="px-3.5 py-2 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-xl cursor-pointer flex items-center justify-between"
                      >
                        <span>{opt}</span>
                        {facilityType === opt && <Check className="w-3.5 h-3.5 text-[#FF5500]" />}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Hairline Divider */}
              <div className="hidden md:block w-px h-10 bg-black/[0.08]" />

              {/* Field 3: Ticket Size / Price Range */}
              <div className="md:col-span-3 relative px-4 py-2 hover:bg-slate-50/80 rounded-xl transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === "range" ? null : "range")}
                  className="w-full text-left flex items-center justify-between group cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#6E6E73] font-semibold uppercase tracking-wider">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Capital Range</span>
                    </div>
                    <div className="text-sm font-bold text-[#002244] truncate">
                      {capitalRange}
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-[#002244] transition-transform ${openDropdown === "range" ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {openDropdown === "range" && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-black/[0.08] p-2 z-50">
                    {capitalOptions.map((opt) => (
                      <div
                        key={opt}
                        onClick={() => {
                          setCapitalRange(opt);
                          setOpenDropdown(null);
                        }}
                        className="px-3.5 py-2 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-xl cursor-pointer flex items-center justify-between"
                      >
                        <span>{opt}</span>
                        {capitalRange === opt && <Check className="w-3.5 h-3.5 text-[#FF5500]" />}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action: Circular Search Button */}
              <div className="md:col-span-1 flex items-center justify-end px-2">
                <button
                  type="button"
                  onClick={handleSearch}
                  className="w-12 h-12 rounded-full bg-[#002244] hover:bg-[#FF5500] text-white flex items-center justify-center shadow-md shadow-[#002244]/20 hover:shadow-[#FF5500]/30 transition-all duration-200 active:scale-95 cursor-pointer"
                  title="Search & Filter Mandates"
                  aria-label="Search & Filter Mandates"
                >
                  <Search className="w-5 h-5 stroke-[2.2]" />
                </button>
              </div>

            </div>

          </div>

          {/* Optional Action Toast */}
          {filterMessage && (
            <div className="mt-3 text-center text-xs font-mono text-emerald-700 animate-fade-in font-medium">
              ✓ {filterMessage}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
