import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Send,
  MessageSquare
} from "lucide-react";
import { companyData } from "../../data/companyData";
import { Reveal } from "../common/Motion";

const SERVICE_OPTIONS = [
  "Debt & Structured Finance",
  "Investment & Transaction Advisory",
  "Project & Infrastructure Advisory",
  "Corporate Finance & Research",
  "Prosync Global Research",
  "Other Advisory Mandate",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    serviceRequired: "Debt & Structured Finance",
    requirementDescription: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  // Listen to external triggers (e.g. from service cards or hero CTAs)
  useEffect(() => {
    const handleMandateSelect = (e) => {
      if (e.detail?.mandate) {
        const matching = SERVICE_OPTIONS.find((opt) =>
          e.detail.mandate.toLowerCase().includes(opt.toLowerCase()) ||
          opt.toLowerCase().includes(e.detail.mandate.toLowerCase())
        );
        if (matching) {
          setFormData((prev) => ({ ...prev, serviceRequired: matching }));
        }
      }
    };
    window.addEventListener("prosync:selectMandate", handleMandateSelect);
    return () => window.removeEventListener("prosync:selectMandate", handleMandateSelect);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const name = formData.name.trim() || "Promoter / Client";
    const organisation = formData.organisation.trim() || "Enterprise";
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const service = formData.serviceRequired;
    const description = formData.requirementDescription.trim() || "Consultation requested";

    const messageLines = [
      `*New Mandate Enquiry — Prosync India*`,
      ``,
      `• *Name:* ${name}`,
      `• *Organisation:* ${organisation}`,
      `• *Email:* ${email}`,
      `• *Phone:* ${phone}`,
      `• *Service Required:* ${service}`,
      `• *Requirement Description:* ${description}`,
      ``,
      `_Submitted via prosyncindia.com enquiry desk_`
    ].join("\n");

    const waUrl = `https://wa.me/919951445544?text=${encodeURIComponent(messageLines)}`;
    const mailtoUrl = `mailto:${companyData.email}?subject=${encodeURIComponent(`Enquiry: ${service} - ${organisation}`)}&body=${encodeURIComponent(messageLines)}`;

    setWhatsAppUrl(waUrl);
    setSubmitting(false);
    setSubmitted(true);

    // Direct routing
    try {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch {
      window.location.href = mailtoUrl;
    }
  };

  const handleScrollToForm = () => {
    const el = document.getElementById("enquiry-form-card");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#F5F5F7] text-[#1D1D1F] border-b border-black/[0.05]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 space-y-16">
        
        {/* 15. FINAL HOMEPAGE CALL TO ACTION (BEFORE FOOTER) */}
        <Reveal>
          <div className="rounded-3xl md:rounded-[36px] bg-[#002244] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#FF5500_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="text-xs font-mono font-medium uppercase tracking-[0.15em] text-[#FF8A3D] block">
                STRATEGIC FINANCIAL PARTNERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                LET'S DISCUSS YOUR NEXT FINANCIAL MILESTONE.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-1">
                Whether you are evaluating a project, exploring funding options or considering a strategic transaction, speak with our team.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleScrollToForm}
                  className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold font-heading text-white bg-[#FF5500] hover:bg-[#FF661A] shadow-md shadow-[#FF5500]/25 transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>DISCUSS A MANDATE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${companyData.phoneRaw}`}
                  className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-mono font-semibold text-white bg-white/10 hover:bg-white/15 transition-all inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#FF8A3D]" />
                  <span>{companyData.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 16. CONTACT SECTION & SHORT FORM */}
        <div id="enquiry-form-card" className="max-w-5xl mx-auto rounded-3xl md:rounded-[36px] bg-white border border-black/[0.06] p-7 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(0,34,68,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Section Details & Contact Coordinates */}
            <div className="lg:col-span-5 space-y-7">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#002244] font-medium block">
                  CONTACT US
                </span>
                <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#1D1D1F] leading-tight">
                  LET'S START A CONVERSATION
                </h3>
                <p className="text-sm text-[#515154] leading-relaxed">
                  Tell us about your business and requirement. Our team will get in touch to understand how we may assist.
                </p>
              </div>

              {/* Coordinates */}
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] font-bold block">
                    Official Enquiry Email
                  </span>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="text-sm font-bold font-heading text-[#002244] hover:text-[#FF5500] transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#FF5500]" />
                    <span>{companyData.email}</span>
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] font-bold block">
                    Partner Contact Desk
                  </span>
                  <a
                    href={`tel:${companyData.phoneRaw}`}
                    className="text-sm font-bold font-mono text-[#002244] hover:text-[#FF5500] transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#FF5500]" />
                    <span>{companyData.phone}</span>
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6E73] font-bold block">
                    Office Presence
                  </span>
                  <div className="text-xs font-semibold font-body text-[#002244] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#002244]" />
                    <span>Hyderabad, Vijayawada, Mumbai</span>
                  </div>
                  <p className="text-[11px] font-body text-[#6E6E73] pl-6">
                    Plot 82, Road No 7, Jubilee Hills &amp; Hitec City Corridor, Hyderabad 500033
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Short Form matching exact requested fields */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl sm:rounded-3xl bg-[#FBFBFC] border border-black/[0.06] p-6 sm:p-8 shadow-xs">
                {submitted ? (
                  <div className="py-10 text-center space-y-4 animate-fade-in">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#002244]">
                      Enquiry Received
                    </h4>
                    <p className="text-xs sm:text-sm font-body text-[#4B5563] leading-relaxed max-w-sm mx-auto">
                      Thank you, <strong className="text-[#002244]">{formData.name}</strong>. Our team will review your requirement and get in touch directly.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={whatsAppUrl || companyData.whatsappBaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-full text-xs font-bold font-heading text-white bg-[#002244] hover:bg-[#FF5500] inline-flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Open Direct WhatsApp Desk</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-mono text-[#6E6E73] hover:text-[#002244] underline cursor-pointer"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name & Organisation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label htmlFor="enquiry-name" className="text-xs font-semibold font-heading text-[#1D1D1F] block">
                          Name <span className="text-[#FF5500]">*</span>
                        </label>
                        <input
                          id="enquiry-name"
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white border border-black/[0.1] rounded-xl px-3.5 py-2.5 min-h-[44px] text-sm font-body text-[#1D1D1F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002244]/15 focus:border-[#002244] transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="enquiry-org" className="text-xs font-semibold font-heading text-[#1D1D1F] block">
                          Organisation <span className="text-[#FF5500]">*</span>
                        </label>
                        <input
                          id="enquiry-org"
                          type="text"
                          required
                          placeholder="Company / Project name"
                          value={formData.organisation}
                          onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                          className="w-full bg-white border border-black/[0.1] rounded-xl px-3.5 py-2.5 min-h-[44px] text-sm font-body text-[#1D1D1F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002244]/15 focus:border-[#002244] transition-all"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label htmlFor="enquiry-email" className="text-xs font-semibold font-heading text-[#1D1D1F] block">
                          Email <span className="text-[#FF5500]">*</span>
                        </label>
                        <input
                          id="enquiry-email"
                          type="email"
                          required
                          placeholder="work@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border border-black/[0.1] rounded-xl px-3.5 py-2.5 min-h-[44px] text-sm font-body text-[#1D1D1F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002244]/15 focus:border-[#002244] transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="enquiry-phone" className="text-xs font-semibold font-heading text-[#1D1D1F] block">
                          Phone <span className="text-[#FF5500]">*</span>
                        </label>
                        <input
                          id="enquiry-phone"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white border border-black/[0.1] rounded-xl px-3.5 py-2.5 min-h-[44px] text-sm font-mono text-[#1D1D1F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002244]/15 focus:border-[#002244] transition-all"
                        />
                      </div>
                    </div>

                    {/* Service Required (Dropdown) */}
                    <div className="space-y-1">
                      <label htmlFor="enquiry-service" className="text-xs font-semibold font-heading text-[#1D1D1F] block">
                        Service Required <span className="text-[#FF5500]">*</span>
                      </label>
                      <select
                        id="enquiry-service"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full bg-white border border-black/[0.1] rounded-xl px-3.5 py-2.5 min-h-[44px] text-sm font-body text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#002244]/15 focus:border-[#002244] transition-all cursor-pointer"
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Brief Description of Requirement */}
                    <div className="space-y-1">
                      <label htmlFor="enquiry-description" className="text-xs font-semibold font-heading text-[#1D1D1F] block">
                        Brief Description of Requirement
                      </label>
                      <textarea
                        id="enquiry-description"
                        rows={3}
                        placeholder="Please provide indicative ticket size, project stage, or specific advisory requirement..."
                        value={formData.requirementDescription}
                        onChange={(e) => setFormData({ ...formData, requirementDescription: e.target.value })}
                        className="w-full bg-white border border-black/[0.1] rounded-xl p-3 min-h-[84px] text-sm font-body text-[#1D1D1F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002244]/15 focus:border-[#002244] transition-all resize-none"
                      />
                    </div>

                    {/* Action Button: SUBMIT ENQUIRY */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold font-heading text-white bg-[#002244] hover:bg-[#FF5500] shadow-md shadow-[#002244]/15 hover:shadow-[#FF5500]/25 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer active:scale-95 disabled:opacity-70"
                      >
                        <span>{submitting ? "SUBMITTING..." : "SUBMIT ENQUIRY"}</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>

                      <span className="text-[11px] font-mono text-[#6E6E73]">
                        Direct route to {companyData.email}
                      </span>
                    </div>

                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
