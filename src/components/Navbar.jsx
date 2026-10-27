import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Mail, Send } from "lucide-react";
import { companyData } from "../data/companyData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [opportunitiesOpen, setOpportunitiesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Clients", href: "#clients" },
    { label: "Practice", href: "#practice" },
    { label: "Track Record", href: "#transactions" },
    { label: "Mandates", href: "#mandates" },
    { label: "Sectors", href: "#sectors" },
    { label: "Approach", href: "#approach" },
    { label: "Leadership", href: "#leadership" },
    { label: "Bankers", href: "#bankers" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#07152B]/95 backdrop-blur-xl py-2.5 border-b border-[rgba(120,150,200,0.18)] shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
            : "bg-[#0A1A33]/90 backdrop-blur-md py-3.5 border-b border-[rgba(120,150,200,0.1)]"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between">

          {/* Left: Official Brand Logo Image */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative h-11 w-11 rounded-xl overflow-hidden bg-white/95 p-1 border border-white/20 shadow-[0_4px_16px_rgba(255,107,0,0.25)] group-hover:scale-105 transition-transform duration-300">
              <img
                src={companyData.logoUrl}
                alt="Prosync Consulting Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#F8FAFC] font-sans group-hover:text-white transition-colors flex items-center gap-1.5">
                PROSYNC
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" title="Deal Desk Active" />
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#38BDF8] -mt-1 font-semibold">
                Investment Banking
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation with Micro-interaction Hover Effects */}
          <nav className="hidden xl:flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#CBD5E1]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                
                className="relative px-3 py-2 rounded-lg text-[#CBD5E1] hover:text-white transition-colors duration-200 group"
              >
                <span className="relative z-10">{link.label}</span>
                {/* Sleek bottom indicator with emerald/orange glow */}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#0EA5E9] via-[#10B981] to-[#FF6B00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            ))}
            <button
              onClick={() => setOpportunitiesOpen(true)}
              className="relative px-3 py-2 rounded-lg text-[#38BDF8] hover:text-white transition-colors duration-200 cursor-pointer font-mono text-[11px] font-semibold"
            >
              CAREERS
            </button>
          </nav>

          {/* Right: Mandate CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setOpportunitiesOpen(true)}
              className="btn-secondary-fintech px-3.5 py-2 text-xs uppercase tracking-wider text-[#38BDF8] hover:text-white hidden lg:inline-flex border-[#38BDF8]/30 hover:border-[#38BDF8]/60"
            >
              Careers
            </button>
            <a
              href="#contact"
              className="btn-vivid-orange px-5 py-2.5 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(255,107,0,0.4)]"
            >
              <span>Discuss Mandate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="#contact"
              className="btn-vivid-orange px-3.5 py-2 text-xs uppercase tracking-wider font-semibold sm:hidden"
            >
              Mandate
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#13284A] border border-[rgba(120,150,200,0.25)] text-[#CBD5E1] hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0A1A33] border-b border-[rgba(120,150,200,0.2)] px-4 py-6 space-y-4 shadow-2xl">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium text-[#CBD5E1]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg hover:bg-[#13284A] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setOpportunitiesOpen(true);
                }}
                className="p-2.5 rounded-lg hover:bg-[#13284A] hover:text-[#38BDF8] text-left text-[#38BDF8] transition-colors"
              >
                Careers
              </button>
            </div>
            <div className="pt-2 border-t border-[rgba(120,150,200,0.15)] flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-vivid-orange py-3 text-center text-xs uppercase tracking-wider font-semibold"
              >
                Discuss a Mandate with Leadership
              </a>
              <a
                href={`tel:${companyData.phoneRaw}`}
                className="btn-secondary-fintech py-2.5 text-center text-xs text-[#CBD5E1]"
              >
                Call: {companyData.phone}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Simplified Opportunities Modal */}
      {opportunitiesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050D1A]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#13284A] border border-[rgba(120,150,200,0.25)] rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
            <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-[#0EA5E9] via-[#10B981] to-[#FF6B00] rounded-tl-2xl" />

            <div className="flex items-center justify-between pb-4 border-b border-[rgba(120,150,200,0.18)]">
              <div>
                <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block">
                  Careers & Advisory
                </span>
                <h3 className="text-xl font-semibold text-[#F8FAFC]">
                  Join Prosync
                </h3>
              </div>
              <button
                onClick={() => setOpportunitiesOpen(false)}
                className="p-1.5 rounded-lg text-[#A9B8CF] hover:text-[#F8FAFC] hover:bg-[#0D1F3C] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-4 text-sm text-[#CBD5E1]">
              <p className="leading-relaxed">
                Please send your resume to our careers desk at:
              </p>

              <div className="p-4 rounded-xl bg-[#0A1A33] border border-[rgba(120,150,200,0.25)] flex items-center justify-between shadow-inner">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-5 h-5 text-[#FF6B00]" />
                  <a
                    href={`mailto:${companyData.email}?subject=Job%20Application%20Resume%20-%20Prosync`}
                    className="font-mono text-sm text-[#38BDF8] hover:underline font-semibold"
                  >
                    {companyData.email}
                  </a>
                </div>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Our deal desk reviews resumes for investment banking associates, DPA analysts, and techno-economic consultants on a rolling basis.
              </p>
            </div>

            <div className="pt-4 border-t border-[rgba(120,150,200,0.18)] flex items-center justify-end gap-3">
              <button
                onClick={() => setOpportunitiesOpen(false)}
                className="btn-secondary-fintech px-4 py-2 text-xs uppercase tracking-wider"
              >
                Close
              </button>
              <a
                href={`mailto:${companyData.email}?subject=Resume%20Submission%20-%20Prosync`}
                className="btn-vivid-orange px-5 py-2 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-1.5"
              >
                <span>Send Email Resume</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
