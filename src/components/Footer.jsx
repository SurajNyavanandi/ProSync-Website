import { companyData } from "../data/companyData";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(120,150,200,0.18)] bg-[#050D1A] text-[#94A3B8] py-16 text-xs">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-12">

        {/* Top Tier: Wordmark & Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[rgba(120,150,200,0.12)]">
          <div className="flex items-center gap-3.5">
            <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-white/95 p-1 border border-white/20 shadow-md">
              <img
                src={companyData.logoUrl}
                alt="Prosync Consulting"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-[#F8FAFC]">
                  {companyData.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
              </div>
              <p className="text-xs text-[#64748B] font-mono">
                {companyData.legalName}
              </p>
            </div>
          </div>

          {/* Clean Navigation Mirror */}
          <nav className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider font-semibold text-[#CBD5E1]">
            <a href="#clients" className="hover:text-[#38BDF8] transition-colors whitespace-nowrap">
              Clients
            </a>
            <a href="#practice" className="hover:text-[#38BDF8] transition-colors whitespace-nowrap">
              Practice
            </a>
            <a href="#transactions" className="hover:text-[#38BDF8] transition-colors whitespace-nowrap">
              Track Record
            </a>
            <a href="#mandates" className="hover:text-[#38BDF8] transition-colors whitespace-nowrap">
              Mandates
            </a>
            <a href="#sectors" className="hover:text-[#38BDF8] transition-colors whitespace-nowrap">
              Sectors
            </a>
            <a href="#leadership" className="hover:text-[#38BDF8] transition-colors whitespace-nowrap">
              Leadership
            </a>
            <a href="#bankers" className="hover:text-[#38BDF8] transition-colors whitespace-nowrap">
              Bankers
            </a>
            <a href="#contact" className="hover:text-[#FF6B00] transition-colors whitespace-nowrap">
              Contact
            </a>
          </nav>
        </div>

        {/* Middle Tier: Office and Direct Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-[#CBD5E1]">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-[#38BDF8] uppercase tracking-wider block font-semibold">
              Corporate Headquarters
            </span>
            <p className="leading-relaxed text-[#94A3B8]">
              {companyData.officeAddress}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#10B981] font-mono pt-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Strict Institutional Confidentiality</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-mono text-[#38BDF8] uppercase tracking-wider block font-semibold">
              Direct Deal Desk
            </span>
            <p className="space-y-1 text-[#94A3B8]">
              <span className="block">
                Phone:{" "}
                <a href={`tel:${companyData.phoneRaw}`} className="hover:text-white transition-colors font-mono text-white">
                  {companyData.phone}
                </a>
              </span>
              <span className="block">
                Email:{" "}
                <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors text-white font-mono">
                  {companyData.email}
                </a>
              </span>
            </p>
          </div>

          <div className="space-y-2 md:text-right">
            <span className="text-[11px] font-mono text-[#38BDF8] uppercase tracking-wider block font-semibold">
              Careers & Submissions
            </span>
            <p className="text-[#94A3B8] leading-relaxed">
              Seeking senior investment bankers, DPA analysts, and techno-economic specialists.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${companyData.email}?subject=Job%20Application%20Resume%20-%20Prosync`}
                className="text-[#FF8A3D] hover:text-[#FF6B00] font-mono font-medium inline-flex items-center gap-1"
              >
                <span>Email Resume to Prosync</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Corporate Identifier & Notice */}
        <div className="pt-8 border-t border-[rgba(120,150,200,0.1)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-[#64748B] font-mono">
            <div>
              © 2026 {companyData.name}. All rights reserved.
            </div>
            <div>
              CIN: <span className="text-[#CBD5E1]">{companyData.cin}</span>
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
