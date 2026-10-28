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
    { label: "Banks", href: "#bankers" },
    { label: "Services", href: "#practice" },
    { label: "Track Record", href: "#transactions" },
    { label: "Industries", href: "#sectors" },
    { label: "How We Work", href: "#mandates" },
    { label: "Process", href: "#approach" },
    { label: "Clients", href: "#clients" },
    { label: "Leadership", href: "#leadership" },
  ];

  return (
    <>
      {/* Apple-Style Ultra-Minimal Transparent Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#071224]/75 backdrop-blur-xl border-b border-white/[0.06] shadow-sm"
            : "py-5 sm:py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* Minimalist Logo Mark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 rounded-xl overflow-hidden bg-white/95 p-1 border border-white/20 shadow-sm transition-transform duration-200 group-hover:scale-105">
              <img
                src={companyData.logoUrl}
                alt="Prosync Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight text-white/95 font-sans group-hover:text-white transition-colors">
                PROSYNC
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#94A3B8] -mt-1 uppercase">
                Advisory
              </span>
            </div>
          </a>

          {/* Understated Text Links (Apple Developer Style) */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-normal text-[#94A3B8]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-200 hover:opacity-100 opacity-80"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setOpportunitiesOpen(true)}
              className="hover:text-white transition-colors duration-200 hover:opacity-100 opacity-80 cursor-pointer"
            >
              Careers
            </button>
          </nav>

          {/* Minimalist Non-Intrusive Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded-full text-xs font-medium text-white/95 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200 inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              className="px-3.5 py-2 rounded-full text-xs font-semibold text-white bg-[#FF6B00] hover:bg-[#FF8A3D] shadow-sm sm:hidden min-h-[36px] flex items-center"
            >
              Enquire
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#020612]/98 backdrop-blur-3xl border-b border-white/[0.12] px-5 py-6 space-y-5 animate-in fade-in slide-in-from-top-3 duration-200 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-[#CBD5E1]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:text-white transition-all min-h-[44px] flex items-center"
                >
                  <span>{link.label}</span>
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setOpportunitiesOpen(true);
                }}
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-left text-[#FF8A3D] hover:text-[#FFA767] transition-all min-h-[44px] flex items-center"
              >
                Careers Desk
              </button>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#FF6B00] hover:bg-[#FF8A3D] shadow-[0_4px_16px_rgba(255,107,0,0.25)] min-h-[44px] flex items-center justify-center"
              >
                Discuss a Mandate
              </a>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${companyData.phoneRaw}`}
                  className="py-2.5 px-3 rounded-xl text-center text-xs font-mono text-[#CBD5E1] bg-white/[0.04] border border-white/[0.06] min-h-[44px] flex items-center justify-center truncate"
                >
                  Call Deal Desk
                </a>
                <a
                  href={companyData.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl text-center text-xs font-mono text-[#34D399] bg-[#10B981]/10 border border-[#10B981]/20 min-h-[44px] flex items-center justify-center truncate"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Opportunities Modal */}
      {opportunitiesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0B172A] border border-white/15 rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider block">
                  Careers at Prosync
                </span>
                <h3 className="text-lg font-semibold text-white">
                  Join Our Team
                </h3>
              </div>
              <button
                onClick={() => setOpportunitiesOpen(false)}
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-4 text-sm text-[#CBD5E1]">
              <p className="leading-relaxed">
                Please send your resume to our team at:
              </p>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#38BDF8]" />
                  <a
                    href={`mailto:${companyData.email}?subject=Job%20Application%20Resume%20-%20Prosync`}
                    className="font-mono text-sm text-white hover:underline"
                  >
                    {companyData.email}
                  </a>
                </div>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed">
                We review applications for investment banking associates, DPA analysts, and financial consultants on a rolling basis.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setOpportunitiesOpen(false)}
                className="px-4 py-2 rounded-full text-xs text-[#94A3B8] hover:text-white"
              >
                Close
              </button>
              <a
                href={`mailto:${companyData.email}?subject=Resume%20Submission%20-%20Prosync`}
                className="px-4 py-2 rounded-full text-xs font-medium text-white bg-white/15 hover:bg-white/20 border border-white/20 inline-flex items-center gap-1.5"
              >
                <span>Email Resume</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
