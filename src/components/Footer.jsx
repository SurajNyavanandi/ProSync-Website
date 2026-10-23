import { companyData } from '../data/companyData';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(120,150,200,0.18)] bg-[#071224] text-[#A9B8CF] py-16 text-xs">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-12">
        
        {/* Top Tier: Wordmark & Single-Line Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[rgba(120,150,200,0.12)]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-[#F5F7FA]">
                {companyData.brandName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span>
            </div>
            <p className="text-xs text-[#A9B8CF]/80">
              {companyData.name}
            </p>
          </div>

          {/* Clean Navigation Mirror */}
          <nav className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#practice" className="hover:text-[#F5F7FA] transition-colors whitespace-nowrap">
              Practice
            </a>
            <a href="#mandates" className="hover:text-[#F5F7FA] transition-colors whitespace-nowrap">
              Mandates
            </a>
            <a href="#transactions" className="hover:text-[#F5F7FA] transition-colors whitespace-nowrap">
              Track Record
            </a>
            <a href="#approach" className="hover:text-[#F5F7FA] transition-colors whitespace-nowrap">
              Approach
            </a>
            <a href="#sectors" className="hover:text-[#F5F7FA] transition-colors whitespace-nowrap">
              Sectors
            </a>
            <a href="#faq" className="hover:text-[#F5F7FA] transition-colors whitespace-nowrap">
              FAQ
            </a>
            <a href="#contact" className="hover:text-[#F5F7FA] transition-colors whitespace-nowrap">
              Contact
            </a>
          </nav>
        </div>

        {/* Middle Tier: Office and Direct Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-[#A9B8CF]/90">
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono text-[#6E93C7] uppercase tracking-wider block">
              Corporate Headquarters
            </span>
            <p className="max-w-md leading-relaxed text-[#F5F7FA]/90">
              {companyData.officeAddress}
            </p>
          </div>

          <div className="space-y-1.5 md:text-right">
            <span className="text-[11px] font-mono text-[#6E93C7] uppercase tracking-wider block">
              Direct Contact Lines
            </span>
            <p className="space-x-3 text-[#F5F7FA]/90">
              <a href={`tel:${companyData.phoneRaw}`} className="hover:text-[#FF8A3D] transition-colors font-mono">
                {companyData.phone}
              </a>
              <span aria-hidden="true" className="text-[rgba(120,150,200,0.4)]">·</span>
              <a href={`mailto:${companyData.email}`} className="hover:text-[#FF8A3D] transition-colors">
                {companyData.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Tier: Corporate Identifier & Regulatory Notice */}
        <div className="pt-8 border-t border-[rgba(120,150,200,0.1)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-[#A9B8CF]/70 font-mono">
            <div>
              © 2026 {companyData.name}. All rights reserved.
            </div>
            <div>
              CIN: <span className="text-[#F5F7FA]">{companyData.cin}</span>
            </div>
          </div>

          <p className="text-[11px] leading-relaxed text-[#A9B8CF]/50">
            [Regulatory disclaimer — placeholder]. Information on this site is for general purposes only and does not constitute an offer, invitation or solicitation of an offer to subscribe for, purchase, or otherwise acquire any securities or structured instruments in any jurisdiction.
          </p>
        </div>

      </div>
    </footer>
  );
}
