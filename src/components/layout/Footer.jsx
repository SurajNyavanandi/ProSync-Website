import { useState } from "react";
import { companyData } from "../../data/companyData";
import { 
  Mail, 
  Phone, 
  MapPin,
  X as CloseIcon,
  FileText,
  ShieldCheck,
  AlertTriangle
} from "lucide-react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null); // 'terms' | 'privacy' | 'disclaimer' | null

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { label: "Debt & Structured Finance", href: "#services" },
    { label: "Investment & Transaction Advisory", href: "#services" },
    { label: "Project & Infrastructure Advisory", href: "#services" },
    { label: "Corporate Finance & Research", href: "#services" },
    { label: "Prosync Global Research", href: "#global-research" },
  ];

  return (
    <footer className="w-full bg-[#EDF3F9] text-[#0f172a] border-t border-[#002244]/15 font-body antialiased">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 pt-14 pb-10">
        
        {/* Main Grid: 4 Clean Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#002244]/15">
          
          {/* Column 1 (Span 4): Brand & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#top" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white p-0.5 border border-black/[0.08] flex items-center justify-center">
                <img
                  src={companyData.monogramUrl || companyData.logoUrl}
                  alt="Prosync"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-black font-heading tracking-tight text-[#002244] uppercase">
                PROSYNC
              </span>
            </a>

            <p className="text-xs sm:text-sm font-semibold font-heading text-[#002244]">
              Financial Advisory | Debt &amp; Structured Finance | Transaction Advisory
            </p>

            <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed max-w-sm">
              Since 2015, Prosync has been helping businesses make informed financial decisions and access the capital required to grow across financing, project advisory and strategic transactions.
            </p>
          </div>

          {/* Column 2 (Span 2): Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-[#002244] font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-[13px] text-[#334155] hover:text-[#FF5500] hover:underline underline-offset-4 transition-colors leading-snug inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (Span 3): Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-[#002244] font-bold">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-[13px] text-[#334155] hover:text-[#FF5500] hover:underline underline-offset-4 transition-colors leading-snug inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 (Span 3): Contact & Presence */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-[#002244] font-bold">
              Contact &amp; Offices
            </h4>

            <div className="space-y-2.5 text-xs text-[#334155]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                <span className="font-mono font-semibold text-[#002244]">+91 99514 45544</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:underline text-[#002244]">
                  {companyData.email}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#002244] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#002244] block">
                    Hyderabad, Vijayawada, Mumbai
                  </span>
                  <span className="text-[11px] text-[#64748B] block mt-0.5">
                    ARC Property Solutions Pvt. Ltd., 2nd Floor, Plot no. 24 &amp; 25, Kakatiya Hills, Jubilee Hills, Hyderabad, Telangana 500081
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Clean Single-Line Bottom Bar */}
        <div className="pt-8 border-t border-[#002244]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="font-mono text-[11px]">
            © Since 2015 Prosync. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={() => setActiveModal("privacy")}
              className="hover:text-[#002244] hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={() => setActiveModal("terms")}
              className="hover:text-[#002244] hover:underline cursor-pointer"
            >
              Terms of Use
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={() => setActiveModal("disclaimer")}
              className="hover:text-[#002244] hover:underline cursor-pointer"
            >
              Disclaimer
            </button>
          </div>
        </div>

      </div>

      {/* Institutional Legal Modals */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 text-[#1D1D1F] relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <CloseIcon className="w-5 h-5" />
            </button>

            {activeModal === "terms" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-[#002244]">
                  <FileText className="w-6 h-6 text-[#FF5500]" />
                  <h3 className="text-xl font-bold font-heading">Terms of Advisory Engagement</h3>
                </div>
                <div className="text-xs text-[#6B7280] font-mono">
                  CIN: {companyData.cin} • Registered in Telangana, India
                </div>
                <div className="text-xs sm:text-sm font-body text-[#4B5563] space-y-3 leading-relaxed pt-2 border-t border-gray-100">
                  <p>
                    <strong>1. Institutional Mandate:</strong> Prosync Consulting Advisory Private Limited provides financial advisory, corporate debt syndication, project finance advisory, and transaction support. Content on this site is for informational purposes and does not constitute a retail credit or investment offering.
                  </p>
                  <p>
                    <strong>2. Confidentiality:</strong> All financial statements, project DPRs, cap tables, and client information are reviewed strictly under bilateral non-disclosure agreements.
                  </p>
                  <p>
                    <strong>3. Lender &amp; Sanction Authority:</strong> Final sanction, loan pricing, margins, covenants, and disbursement remain under the sole authority of respective banking institutions and investors.
                  </p>
                </div>
              </div>
            )}

            {activeModal === "privacy" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-[#002244]">
                  <ShieldCheck className="w-6 h-6 text-[#002244]" />
                  <h3 className="text-xl font-bold font-heading">Privacy Policy &amp; Data Safeguards</h3>
                </div>
                <div className="text-xs text-[#6B7280] font-mono">
                  Strict Confidentiality &amp; Data Protection
                </div>
                <div className="text-xs sm:text-sm font-body text-[#4B5563] space-y-3 leading-relaxed pt-2 border-t border-gray-100">
                  <p>
                    <strong>1. Information Collection:</strong> We collect contact information, company balance sheets, and project documentation solely for the purpose of mandate evaluation and client engagement.
                  </p>
                  <p>
                    <strong>2. Institutional Privacy:</strong> Client records and transaction models are never shared with unauthorized third parties or sold.
                  </p>
                  <p>
                    <strong>3. Data Security:</strong> Information is secured on institutional servers accessible only to designated engagement partners.
                  </p>
                </div>
              </div>
            )}

            {activeModal === "disclaimer" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-[#002244]">
                  <AlertTriangle className="w-6 h-6 text-[#FF5500]" />
                  <h3 className="text-xl font-bold font-heading">Regulatory &amp; Advisory Disclaimer</h3>
                </div>
                <div className="text-xs text-[#6B7280] font-mono">
                  Prosync Consulting Advisory Private Limited
                </div>
                <div className="text-xs sm:text-sm font-body text-[#4B5563] space-y-3 leading-relaxed pt-2 border-t border-gray-100">
                  <p>
                    The information provided on this website is for general guidance on matters of interest only. The application and impact of laws can vary widely based on the specific facts involved.
                  </p>
                  <p>
                    Prosync is not an NBFC, depository, or licensed broker-dealer. We provide corporate financial advisory, debt syndication, and transaction advisory services to corporate clients, promoters, and institutions.
                  </p>
                  <p>
                    Prior transaction volumes or past mandate achievements do not guarantee future credit sanctions or identical terms for subsequent engagements.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 text-xs font-semibold font-heading text-white bg-[#002244] hover:bg-[#001830] rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
