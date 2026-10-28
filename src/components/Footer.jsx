import { ShieldCheck, ArrowUpRight, ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { companyData } from "../data/companyData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#01040A] text-[#94A3B8] border-t border-white/[0.12] transition-colors">
      {/* Radiant Top Luminous Boundary Accent Beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-90 shadow-[0_0_16px_rgba(255,107,0,0.6)]" />

      {/* Subtle Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-[radial-gradient(ellipse_at_top,_rgba(255,107,0,0.08)_0%,_transparent_70%)] blur-2xl z-0"
      />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20 relative z-10 space-y-14">

        {/* Top Tier: Brand Identity & Instant Action */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-white/95 p-1.5 border border-white/20 shadow-md shrink-0">
              <img
                src={companyData.logoUrl}
                alt="Prosync Consulting"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  {companyData.name}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[10px] font-mono text-[#34D399]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  Active Advisory
                </span>
              </div>
              <p className="text-xs text-[#64748B] font-mono">
                {companyData.legalName}
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#FF6B00] hover:bg-[#FF8A3D] shadow-[0_4px_16px_rgba(255,107,0,0.25)] transition-all inline-flex items-center gap-2 min-h-[44px]"
            >
              <span>Submit Mandate Brief</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl text-xs text-[#94A3B8] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors inline-flex items-center justify-center min-h-[44px] min-w-[44px]"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content Grid: 4 Distinct Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-xs">

          {/* Column 1: Institutional Overview */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono text-[#FF8A3D] uppercase tracking-wider font-semibold block">
              About Prosync
            </span>
            <p className="text-[#94A3B8] leading-relaxed text-xs">
              Premier corporate finance and deal architecture firm structuring multi-hundred crore debt syndication, private credit, and growth equity across India's infrastructure, energy, and industrial sectors.
            </p>
            <div className="space-y-1.5 pt-1 text-[11px] font-mono text-[#64748B]">
              <div>CIN: <span className="text-[#CBD5E1]">{companyData.cin}</span></div>
              <div className="flex items-center gap-1.5 text-[#10B981] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Strict Non-Disclosure Guarantee</span>
              </div>
            </div>
          </div>

          {/* Column 2: Advisory Practices */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono text-[#38BDF8] uppercase tracking-wider font-semibold block">
              Practice Disciplines
            </span>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <a href="#practice" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Debt Syndication & Consortium Loans
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Pre-IPO Advisory & Capital Structuring
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Solar & Clean Energy Project Finance
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Infrastructure Concessions & HAM Models
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  DPR, TEV & Financial Feasibility
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  M&A Advisory & Structured Working Capital
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Site Navigation & Mandates */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono text-[#38BDF8] uppercase tracking-wider font-semibold block">
              Direct Access
            </span>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <a href="#transactions" className="hover:text-white transition-colors">
                  Track Record (₹250 Cr Flagship)
                </a>
              </li>
              <li>
                <a href="#bankers" className="hover:text-white transition-colors">
                  Banking Consortia & Lending Partners
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Industry & Sector Coverage
                </a>
              </li>
              <li>
                <a href="#mandates" className="hover:text-white transition-colors">
                  Mandate Matrix & Execution Roadmap
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white transition-colors">
                  Client Credentials (MEIL, AR Petro, AARA)
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-white transition-colors">
                  Executive Leadership & Senior Deal Team
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Advisory FAQ & Evaluation Timelines
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Deal Desk & Direct Coordinates */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono text-[#FF8A3D] uppercase tracking-wider font-semibold block">
              Direct Deal Desk
            </span>

            <div className="space-y-3 text-xs">
              {/* Phone */}
              <a
                href={`tel:${companyData.phoneRaw}`}
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#FF6B00]/40 transition-all flex items-center gap-3 text-[#CBD5E1] group"
              >
                <div className="p-2 rounded-lg bg-[#071224] text-[#FF6B00]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#64748B] block uppercase">Direct Line</span>
                  <span className="font-mono text-white font-semibold text-xs group-hover:text-[#FF8A3D] transition-colors">
                    {companyData.phone}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${companyData.email}`}
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#FF6B00]/40 transition-all flex items-center gap-3 text-[#CBD5E1] group"
              >
                <div className="p-2 rounded-lg bg-[#071224] text-[#38BDF8]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-[#64748B] block uppercase">Executive Inbox</span>
                  <span className="font-mono text-white font-medium text-xs truncate block group-hover:text-[#38BDF8] transition-colors">
                    {companyData.email}
                  </span>
                </div>
              </a>

              {/* Address */}
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-start gap-3 text-[#94A3B8]">
                <div className="p-2 rounded-lg bg-[#071224] text-[#94A3B8] shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] leading-relaxed">
                  <span className="text-[10px] font-mono text-[#64748B] block uppercase mb-0.5">Corporate HQ</span>
                  {companyData.officeAddress}
                </div>
              </div>

              {/* Careers */}
              <div className="pt-1">
                <a
                  href={`mailto:${companyData.email}?subject=Job%20Application%20Resume%20-%20Prosync`}
                  className="text-[#FF8A3D] hover:text-[#FFA767] font-mono text-[11px] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Careers & Analyst Submissions</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Corporate Identifier & Notice */}
        <div className="pt-8 border-t border-white/[0.08] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-[#64748B] font-mono">
            <div>
              © 2026 {companyData.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Hyderabad</span>
              <span>•</span>
              <span>Mumbai</span>
              <span>•</span>
              <span>Bengaluru</span>
            </div>
          </div>
          <p className="text-[11px] leading-relaxed text-[#475569]">
            Information on this site is for institutional presentation purposes only and does not constitute an offer, invitation or solicitation of an offer to subscribe for, purchase, or otherwise acquire any securities or structured instruments in any jurisdiction.
          </p>
        </div>

      </div>
    </footer>
  );
}
