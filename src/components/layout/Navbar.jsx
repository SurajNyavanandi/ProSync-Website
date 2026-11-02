import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Building2, 
  Briefcase, 
  Layers, 
  FileText, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { companyData } from "../../data/companyData";
import { useScrollState } from "../../hooks/useScrollState";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { isScrolled } = useScrollState(20);

  // Active section spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "services", "sectors", "bankers", "transactions", "global-research", "leadership", "contact"];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [mobileMenuOpen]);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Primary desktop navigation links (Ultra-Minimalist 4 Items)
  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Transactions", href: "#transactions", id: "transactions" },
    { label: "Contact Us", href: "#contact", id: "contact" }
  ];

  // Extended drawer links with icons
  const drawerLinks = [
    { label: "About Prosync", href: "#about", id: "about", icon: Building2, desc: "Boutique capital advisory & track record" },
    { label: "Practice Areas", href: "#services", id: "services", icon: Briefcase, desc: "Debt syndication & project finance" },
    { label: "Sector Intelligence", href: "#sectors", id: "sectors", icon: Layers, desc: "HAM highways, renewables, industry" },
    { label: "Closed Transactions", href: "#transactions", id: "transactions", icon: FileText, desc: "₹2,500+ Cr verified tombstone mandates" },
    { label: "Global Analytics Desk", href: "#global-research", id: "global-research", icon: Layers, desc: "Financial modeling & VDR unit" },
    { label: "Partner Leadership", href: "#leadership", id: "leadership", icon: Users, desc: "Chartered accountants & corporate bankers" },
    { label: "Mandate Deal Desk", href: "#contact", id: "contact", icon: Mail, desc: "Direct partner appraisal & pricing" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* 1. MODERN ULTRA-MINIMAL TRANSPARENT GLASS HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 ease-out ${
          isScrolled
            ? "py-2.5 sm:py-3 bg-white/55 backdrop-blur-2xl border-b border-black/[0.05] shadow-[0_8px_32px_0_rgba(0,34,68,0.04)]"
            : "py-3.5 sm:py-5 bg-white/20 backdrop-blur-md border-b border-black/[0.02]"
        }`}
        style={{
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "blur(12px)"
        }}
      >
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark & Circular Emblem */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 select-none py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] rounded-xl"
            aria-label="Prosync India Home"
          >
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 rounded-full overflow-hidden bg-white/90 p-0.5 border border-black/[0.08] shadow-2xs transition-transform duration-300 group-hover:scale-105 shrink-0 flex items-center justify-center">
              <img
                src="/assets/aistudio/Prosync_Circular_P_Logo_166619fe.png"
                alt="Prosync Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = companyData.logoUrl;
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] sm:text-xl font-bold font-heading tracking-tight text-[#002244] group-hover:text-[#FF5500] transition-colors leading-none">
                Prosync
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.22em] text-[#6E6E73] uppercase mt-0.5 font-medium">
                Advisory
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav 
            className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] lg:text-sm font-medium font-body text-[#4B5563]"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 font-semibold transition-all duration-200 hover:text-[#002244] ${
                    isActive ? "text-[#002244]" : "text-[#4B5563]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navActiveUnderline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#FF5500] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full text-xs font-bold font-heading text-white bg-[#002244] hover:bg-[#FF5500] transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm shadow-[#002244]/10 hover:shadow-[#FF5500]/25 active:scale-95 cursor-pointer"
            >
              <span>Discuss a Mandate</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-90" />
            </a>
          </div>

          {/* Mobile Right Controls: Compact "Discuss" Pill + Drawer Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-full text-[11px] font-bold font-heading text-white bg-[#002244] hover:bg-[#FF5500] shadow-2xs active:scale-95 transition-colors min-h-[34px] flex items-center justify-center cursor-pointer"
            >
              Discuss
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl text-[#002244] hover:bg-black/[0.05] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500]"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5 text-[#002244]" />
            </button>
          </div>

        </div>
      </header>

      {/* 2. MODERN MOBILE SIDE DRAWER NAVIGATION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            
            {/* Dimmed Blurred Backdrop with Click-to-Dismiss */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/45 backdrop-blur-xs cursor-pointer"
              aria-hidden="true"
            />

            {/* Sliding Drawer Container */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
              className="relative w-[320px] max-w-[85vw] h-full bg-white/95 backdrop-blur-2xl shadow-2xl border-l border-black/[0.08] flex flex-col justify-between overflow-hidden z-10"
              style={{
                WebkitBackdropFilter: "blur(28px)"
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              {/* Drawer Header */}
              <div className="px-5 pt-5 pb-4 border-b border-black/[0.06] flex items-center justify-between bg-white/60">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-white p-0.5 border border-black/[0.08] flex items-center justify-center">
                    <img
                      src="/assets/aistudio/Prosync_Circular_P_Logo_166619fe.png"
                      alt="Prosync Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-base font-bold font-heading text-[#002244] block leading-tight">
                      Prosync
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#6E6E73] block">
                      Advisory Desk
                    </span>
                  </div>
                </div>

                {/* Close Button with Clear >=44px Touch Target */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl bg-black/[0.04] hover:bg-black/[0.08] text-[#002244] flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500]"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links Navigation Track (Scrollable) */}
              <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5 overscroll-contain">
                <span className="px-3 pb-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#6E6E73] font-bold block">
                  Navigation
                </span>

                {drawerLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`group flex items-center justify-between p-3.5 rounded-2xl transition-all duration-150 min-h-[50px] ${
                        isActive
                          ? "bg-[#002244] text-white shadow-xs"
                          : "text-[#1D1D1F] hover:bg-[#F5F5F7] active:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive 
                            ? "bg-[#FF5500] text-white" 
                            : "bg-[#F5F5F7] text-[#002244] group-hover:bg-[#002244] group-hover:text-white"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <span className={`text-sm font-bold font-heading block leading-snug ${
                            isActive ? "text-white" : "text-[#002244]"
                          }`}>
                            {item.label}
                          </span>
                          <span className={`text-[11px] font-body truncate block ${
                            isActive ? "text-slate-300" : "text-[#6E6E73]"
                          }`}>
                            {item.desc}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                        isActive ? "text-[#FF8A3D]" : "text-slate-400"
                      }`} />
                    </a>
                  );
                })}

                {/* Direct Partner Contacts Inside Drawer */}
                <div className="pt-4 mt-4 border-t border-black/[0.06] space-y-2">
                  <span className="px-3 pb-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[#6E6E73] font-bold block">
                    Direct Contact
                  </span>
                  
                  <a
                    href={`mailto:${companyData.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-black/[0.04] text-xs font-semibold font-body text-[#002244] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span className="truncate">{companyData.email}</span>
                  </a>

                  <a
                    href={`tel:${companyData.phoneRaw}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-black/[0.04] text-xs font-semibold font-mono text-[#002244] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>{companyData.phone}</span>
                  </a>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-black/[0.04] text-[11px] font-body text-[#6E6E73]">
                    <MapPin className="w-4 h-4 text-[#002244] shrink-0 mt-0.5" />
                    <span>{companyData.shortAddress}</span>
                  </div>
                </div>
              </div>

              {/* Drawer Sticky Footer with Primary Action */}
              <div className="p-4 border-t border-black/[0.06] bg-white/90 space-y-2">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold font-heading text-white bg-[#002244] hover:bg-[#FF5500] transition-colors shadow-md flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <span>Discuss a Mandate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-[10px] text-center text-[#6E6E73] font-mono">
                  Partner-led corporate credit advisory
                </p>
              </div>

            </motion.aside>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}
