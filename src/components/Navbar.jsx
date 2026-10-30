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
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/70 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          : "py-4 sm:py-5 bg-white/45 backdrop-blur-md border-b border-black/[0.03]"
      }`}
    >
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Left: Prosync Circular Logo and Wordmark */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative h-8 w-8 sm:h-9 sm:w-9 rounded-full overflow-hidden bg-white p-0.5 border border-black/[0.08] shadow-xs transition-transform duration-200 group-hover:scale-105 shrink-0 flex items-center justify-center">
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
            <span className="text-lg sm:text-xl font-bold tracking-tight text-[#002244] group-hover:text-[#FF5500] transition-colors leading-none font-sans">
              Prosync
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-[#6E6E73] uppercase mt-0.5 font-medium">
              Advisory
            </span>
          </div>
        </a>

        {/* Center/Right Zone: Only 3 requested links (About, Services, Contact) */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[#4B5563]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#4B5563] hover:text-[#002244] hover:-translate-y-0.5 transition-all duration-150 py-1 font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Far Right: Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#002244] hover:bg-[#FF5500] transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
          >
            <span>Discuss a Mandate</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile Header Controls: Single "Discuss" pill + Clean Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#002244] hover:bg-[#FF5500] shadow-sm min-h-[36px] flex items-center transition-colors"
          >
            Discuss
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#4B5563] hover:text-[#002244] hover:bg-black/[0.04] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#002244]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Clean Mobile Drawer: Only 3 Links (About Us, Services, Contact) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/85 backdrop-blur-2xl border-b border-black/[0.08] px-5 py-4 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 rounded-xl text-base font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7] hover:text-[#FF5500] transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
