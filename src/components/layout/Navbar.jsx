import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Building2, 
  Briefcase, 
  FileText, 
  FileSpreadsheet,
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { companyData } from "../../data/companyData";
import { useScrollState } from "../../hooks/useScrollState";
import { trackEvent } from "../../utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { isScrolled } = useScrollState(20);

  // Active section spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["top", "about", "services", "experience", "contact"];
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

  // Contact details from .env
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || companyData.email || "docs.1@prosyncindia.com";
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE || companyData.phone || "+91 9951445544";
  const contactPhoneRaw = (import.meta.env.VITE_CONTACT_PHONE || companyData.phoneRaw || "+919951445544").replace(/\s+/g, "");

  // Helpers for link targets across pages
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const isHome = pathname === "/";
  const isDprPage = pathname.startsWith("/dpr-services");
  const getNavHref = (hash) => (isHome ? hash : `/${hash}`);

  // Primary desktop navigation links
  const navLinks = [
    { label: "Home", href: getNavHref("#top"), id: "top" },
    { label: "About Us", href: getNavHref("#about"), id: "about" },
    { label: "Services", href: getNavHref("#services"), id: "services" },
    { label: "Our Experience", href: getNavHref("#experience"), id: "experience" },
    { label: "DPR Services", href: "/dpr-services", id: "dpr-services" },
    { label: "Contact", href: isDprPage ? "#contact" : getNavHref("#contact"), id: "contact" }
  ];

  // Mobile drawer links
  const drawerLinks = [
    { label: "Home", href: getNavHref("#top"), id: "top", icon: Building2, desc: "Capital. Strategy. Growth." },
    { label: "About Us", href: getNavHref("#about"), id: "about", icon: Users, desc: "Financial advisory experience since 2015" },
    { label: "Services", href: getNavHref("#services"), id: "services", icon: Briefcase, desc: "Debt, equity, infrastructure & research" },
    { label: "Our Experience", href: getNavHref("#experience"), id: "experience", icon: FileText, desc: "₹800+ Cr multi-sector transaction experience" },
    { label: "DPR Services", href: "/dpr-services", id: "dpr-services", icon: FileSpreadsheet, desc: "Detailed Project Report & Feasibility Advisory" },
    { label: "Contact", href: isDprPage ? "#contact" : getNavHref("#contact"), id: "contact", icon: Mail, desc: "Discuss a mandate with our team" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* 1. MINIMALIST ULTRA-TRANSPARENT HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-colors duration-300 ${
          isScrolled
            ? "py-3 bg-white/85 backdrop-blur-md"
            : "py-4 sm:py-5 bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark & Logo (Pure & Unbordered) */}
          <a
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 select-none py-1"
            aria-label="Prosync India Home"
          >
            <div className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 flex items-center justify-center">
              <img
                src={companyData.logoUrl}
                alt="Prosync Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] sm:text-xl font-bold font-heading tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors duration-200 leading-none">
                Prosync
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.22em] text-brand-text-light uppercase mt-0.5 font-medium">
                Consulting
              </span>
            </div>
          </a>

          {/* Center Navigation Links: Pure Minimalist Borderless Text Links */}
          <nav 
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = (isDprPage && link.id === "dpr-services") || (!isDprPage && activeSection === link.id);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 select-none ${
                    isActive
                      ? "text-brand-orange font-semibold"
                      : "text-brand-text-dark hover:text-brand-orange"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action CTA: Simple & Clean */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={getNavHref("#contact")}
              className="px-5 py-2 rounded-full text-xs font-bold font-heading text-white bg-brand-navy hover:bg-brand-orange transition-colors duration-200 inline-flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
            >
              <span>Discuss a Mandate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls: Minimal Borderless Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={getNavHref("#contact")}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-bold font-heading text-white bg-brand-navy hover:bg-brand-orange transition-colors active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <span>Discuss</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-brand-navy hover:text-brand-orange transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
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
              className="relative w-[320px] max-w-[85vw] h-full bg-white/95 backdrop-blur-2xl shadow-2xl border-l border-black/8 flex flex-col justify-between overflow-hidden z-10"
              style={{
                WebkitBackdropFilter: "blur(28px)"
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              {/* Drawer Header */}
              <div className="px-5 pt-5 pb-4 border-b border-black/6 flex items-center justify-between bg-white/60">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-white p-0.5 border border-black/8 flex items-center justify-center">
                    <img
                      src={companyData.logoUrl}
                      alt="Prosync Logo"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div>
                    <span className="text-base font-bold font-heading text-brand-navy block leading-tight">
                      Prosync
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-brand-text-light block">
                      Consulting
                    </span>
                  </div>
                </div>

                {/* Close Button with Clear >=44px Touch Target */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl bg-black/4 hover:bg-black/8 text-brand-navy flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links Navigation Track (Scrollable) */}
              <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5 overscroll-contain">
                {drawerLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = (isDprPage && item.id === "dpr-services") || (!isDprPage && activeSection === item.id);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`group flex items-center justify-between p-3.5 rounded-2xl transition-all duration-150 min-h-12.5 ${
                        isActive
                          ? "bg-brand-navy text-white shadow-xs"
                          : "text-brand-text-dark hover:bg-brand-gray-surface active:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive 
                            ? "bg-brand-orange text-white" 
                            : "bg-brand-gray-surface text-brand-navy group-hover:bg-brand-navy group-hover:text-white"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <span className={`text-sm font-bold font-heading block leading-snug ${
                            isActive ? "text-white" : "text-brand-navy"
                          }`}>
                            {item.label}
                          </span>
                          <span className={`text-[11px] font-body truncate block ${
                            isActive ? "text-slate-300" : "text-brand-text-light"
                          }`}>
                            {item.desc}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                        isActive ? "text-brand-orange-light" : "text-slate-400"
                      }`} />
                    </a>
                  );
                })}

                {/* Direct Partner Contacts Inside Drawer */}
                <div className="pt-4 mt-4 border-t border-black/6 space-y-2">
                  <span className="px-3 pb-1 text-[10px] font-mono uppercase tracking-[0.2em] text-brand-text-light font-bold block">
                    Direct Contact
                  </span>
                  
                  <a
                    href={`mailto:${contactEmail}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-black/4 text-xs font-semibold font-body text-brand-navy transition-colors"
                  >
                    <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                    <span className="truncate">{contactEmail}</span>
                  </a>

                  <a
                    href={`tel:${contactPhoneRaw}`}
                    onClick={() => trackEvent("phone_click", { location: "header" })}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-black/4 text-xs font-semibold font-mono text-brand-navy transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{contactPhone}</span>
                  </a>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-black/4 text-[11px] font-body text-brand-text-light">
                    <MapPin className="w-4 h-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>{companyData.shortAddress}</span>
                  </div>
                </div>
              </div>

              {/* Drawer Sticky Footer with Primary Action */}
              <div className="p-4 border-t border-black/6 bg-white/90">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold font-heading text-white bg-brand-navy hover:bg-brand-orange transition-colors shadow-md flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <span>Discuss a Mandate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </motion.aside>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}
