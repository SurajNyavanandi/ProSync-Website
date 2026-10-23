import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [opportunitiesOpen, setOpportunitiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1A33]/90 backdrop-blur-xl border-b border-[rgba(120,150,200,0.18)] shadow-[0_10px_30px_rgba(5,13,26,0.6)] py-3'
          : 'bg-transparent border-b border-[rgba(120,150,200,0.1)] py-5'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#top"
          className="flex items-center gap-2 group whitespace-nowrap shrink-0"
        >
          <span className="text-2xl font-semibold tracking-tight text-[#F5F7FA] group-hover:text-white transition-colors">
            {companyData.brandName}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]"></span>
        </a>

        {/* Zone 2: Navigation Links (Single-line, unboxed, subtle hover) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-normal text-[#A9B8CF]">
          <a
            href="#practice"
            className="hover:text-[#F5F7FA] transition-colors whitespace-nowrap shrink-0 hover:translate-y-[-1px] duration-150"
          >
            Practice
          </a>
          <a
            href="#mandates"
            className="hover:text-[#F5F7FA] transition-colors whitespace-nowrap shrink-0 hover:translate-y-[-1px] duration-150"
          >
            Mandates
          </a>
          <a
            href="#transactions"
            className="hover:text-[#F5F7FA] transition-colors whitespace-nowrap shrink-0 hover:translate-y-[-1px] duration-150"
          >
            Track Record
          </a>
          <a
            href="#approach"
            className="hover:text-[#F5F7FA] transition-colors whitespace-nowrap shrink-0 hover:translate-y-[-1px] duration-150"
          >
            Approach
          </a>
          <a
            href="#sectors"
            className="hover:text-[#F5F7FA] transition-colors whitespace-nowrap shrink-0 hover:translate-y-[-1px] duration-150"
          >
            Sectors
          </a>
          <a
            href="#faq"
            className="hover:text-[#F5F7FA] transition-colors whitespace-nowrap shrink-0 hover:translate-y-[-1px] duration-150"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="hover:text-[#F5F7FA] transition-colors whitespace-nowrap shrink-0 hover:translate-y-[-1px] duration-150"
          >
            Contact
          </a>
          <button
            onClick={() => setOpportunitiesOpen(true)}
            className="text-[#6E93C7] hover:text-[#FF8A3D] transition-colors whitespace-nowrap shrink-0 text-sm font-normal text-left cursor-pointer"
          >
            Opportunities
          </button>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href="#contact"
            className="btn-vivid-orange px-5 py-2.5 text-xs tracking-wide uppercase font-semibold inline-flex items-center gap-2"
          >
            <span>Engage Prosync</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#A9B8CF] hover:text-[#F5F7FA] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1F3C] border-b border-[rgba(120,150,200,0.25)] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 text-base text-[#A9B8CF]">
            <a
              href="#practice"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#F5F7FA]"
            >
              Practice
            </a>
            <a
              href="#mandates"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#F5F7FA]"
            >
              Mandates
            </a>
            <a
              href="#approach"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#F5F7FA]"
            >
              Approach
            </a>
            <a
              href="#sectors"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#F5F7FA]"
            >
              Sectors
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#F5F7FA]"
            >
              Contact
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setOpportunitiesOpen(true);
              }}
              className="py-1.5 text-[#6E93C7] text-left"
            >
              Opportunities
            </button>
          </nav>
          <div className="pt-3 border-t border-[rgba(120,150,200,0.15)]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-vivid-orange block w-full py-3 text-center text-xs tracking-wider uppercase font-semibold"
            >
              Engage Prosync
            </a>
          </div>
        </div>
      )}

      {/* Opportunities Modal (Institutional Careers & Senior Mandates) */}
      {opportunitiesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050D1A]/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#13284A] border border-[rgba(120,150,200,0.25)] rounded-2xl max-w-lg w-full p-6 md:p-8 relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
            {/* Top-left orange accent */}
            <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-[#FF6B00] to-transparent rounded-tl-2xl" />

            <div className="flex items-center justify-between pb-4 border-b border-[rgba(120,150,200,0.18)]">
              <div>
                <span className="text-xs font-mono text-[#6E93C7] uppercase tracking-wider block">
                  Talent & Partnerships
                </span>
                <h3 className="text-xl font-semibold text-[#F5F7FA]">
                  Join the Deal Team
                </h3>
              </div>
              <button
                onClick={() => setOpportunitiesOpen(false)}
                className="p-1.5 rounded-lg text-[#A9B8CF] hover:text-[#F5F7FA] hover:bg-[#0D1F3C] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-xs md:text-sm text-[#A9B8CF]">
              <p>
                We look for experienced investment bankers, credit syndicators, and infrastructure modeling specialists who value intellectual rigor and direct deal accountability.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="p-3 rounded-xl bg-[#0D1F3C] border border-[rgba(120,150,200,0.18)] flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-[#F5F7FA] block text-xs md:text-sm">VP · Debt Syndication</span>
                    <span className="text-[11px] text-[#6E93C7]">Hyderabad / Hybrid · 7+ yrs corporate credit</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF6B00]/15 text-[#FF8A3D] border border-[#FF6B00]/30">Active</span>
                </div>

                <div className="p-3 rounded-xl bg-[#0D1F3C] border border-[rgba(120,150,200,0.18)] flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-[#F5F7FA] block text-xs md:text-sm">Associate · M&A & Growth Equity</span>
                    <span className="text-[11px] text-[#6E93C7]">Hyderabad · 3–5 yrs transaction advisory</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF6B00]/15 text-[#FF8A3D] border border-[#FF6B00]/30">Active</span>
                </div>
              </div>

              <p className="text-xs text-[#A9B8CF]/80 pt-1">
                To submit credentials or propose a senior advisory affiliation, email your resume and deal sheet to{' '}
                <a href={`mailto:${companyData.email}`} className="text-[#FF8A3D] font-mono underline hover:text-[#FF6B00]">
                  {companyData.email}
                </a>.
              </p>
            </div>

            <div className="pt-3 border-t border-[rgba(120,150,200,0.18)] flex justify-end gap-3">
              <button
                onClick={() => setOpportunitiesOpen(false)}
                className="btn-secondary-fintech px-4 py-2 text-xs uppercase tracking-wider"
              >
                Dismiss
              </button>
              <a
                href={`mailto:${companyData.email}?subject=Senior%20Deal%20Team%20Inquiry%20-%20Prosync`}
                className="btn-vivid-orange px-4 py-2 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-1.5"
              >
                <span>Email Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
