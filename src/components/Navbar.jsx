import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { companyData } from "../data/companyData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-md border-b border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          : "py-5 bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Left: Prosync Circular Logo and Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 rounded-full overflow-hidden bg-white p-0.5 border border-black/[0.08] shadow-xs transition-transform duration-200 group-hover:scale-105 shrink-0 flex items-center justify-center">
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
            <span className="text-xl font-bold tracking-tight text-[#002244] group-hover:text-[#FF5500] transition-colors leading-none font-sans">
              Prosync
            </span>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#6E6E73] uppercase mt-0.5 font-medium">
              Advisory
            </span>
          </div>
        </a>

        {/* Right Zone: Clean, unboxed text navigation links with generous spacing */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-[#4B5563]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#4B5563] hover:text-[#002244] hover:-translate-y-0.5 transition-all duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Far Right: High-contrast pill button styled as rounded-full */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#002244] hover:bg-[#FF5500] transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
          >
            <span>Discuss a Mandate</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#002244] hover:bg-[#FF5500] shadow-sm min-h-[36px] flex items-center"
          >
            Discuss
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#4B5563] hover:text-[#002244] hover:bg-black/[0.04] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#002244]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Clean Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-black/[0.08] px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 rounded-xl text-sm font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-black/[0.06] flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full text-center text-xs font-semibold text-white bg-[#002244] hover:bg-[#FF5500] shadow-sm flex items-center justify-center min-h-[44px]"
            >
              Discuss a Mandate
            </a>
            <div className="grid grid-cols-2 gap-2 pt-1 text-xs font-mono">
              <a
                href={`tel:${companyData.phoneRaw}`}
                className="py-2.5 px-3 rounded-xl text-center text-[#1D1D1F] bg-[#F5F5F7] border border-black/[0.06] flex items-center justify-center min-h-[44px] font-medium"
              >
                {companyData.phone}
              </a>
              <a
                href={companyData.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl text-center text-emerald-700 bg-emerald-50 border border-emerald-200 flex items-center justify-center min-h-[44px] font-medium"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
