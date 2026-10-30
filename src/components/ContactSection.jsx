import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Calculator,
  MessageSquare
} from "lucide-react";
import { companyData } from "../data/companyData";
import { Reveal } from "./common/Motion";

export default function ContactSection() {
  const [capitalType, setCapitalType] = useState("Corporate Debt Syndication");
  const [selectedTicketOption, setSelectedTicketOption] = useState("₹25 - 50 Cr");
  const [customTicket, setCustomTicket] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  const capitalTypes = [
    { id: "Corporate Debt Syndication", label: "Term Debt", timeline: "4-6 Weeks", consortium: "2-4 Banks" },
    { id: "Working Capital Consortium Lines", label: "Working Capital", timeline: "3-4 Weeks", consortium: "Multi-Bank" },
    { id: "Capital & Transactions (Growth Equity / Pre-IPO)", label: "Mezzanine & Credit", timeline: "3-5 Weeks", consortium: "AIF / NBFC" },
    { id: "Project Advisory & TEV Study", label: "TEV & Appraisal", timeline: "10-14 Days", consortium: "Lead Bank" }
  ];

  const ticketOptions = [
    "< ₹5 Cr",
    "₹5 - 25 Cr",
    "₹25 - 50 Cr",
    "₹50 - 100 Cr",
    "₹100 - 250 Cr",
    "Custom Amount"
  ];

  const effectiveTicketSize =
    selectedTicketOption === "Custom Amount"
      ? customTicket.trim()
        ? (customTicket.trim().startsWith("₹") ? customTicket.trim() : `₹${customTicket.trim()}`)
        : "Custom (Unspecified)"
      : selectedTicketOption;

  // Listen to external triggers (e.g. from Hero or Services cards)
  useEffect(() => {
    const handleMandateSelect = (e) => {
      if (e.detail?.mandate) {
        setCapitalType(e.detail.mandate);
      }
    };
    window.addEventListener("prosync:selectMandate", handleMandateSelect);
    return () => window.removeEventListener("prosync:selectMandate", handleMandateSelect);
  }, []);

  const activeTypeInfo =
    capitalTypes.find((c) => c.id === capitalType || c.label === capitalType) || capitalTypes[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setSubmitting(true);

    const messageLines = [
      `*New Mandate Inquiry - Prosync Advisory*`,
      ``,
      `• *Name:* ${formData.name.trim()}`,
      `• *Work Email:* ${formData.email.trim()}`,
      `• *Phone / WhatsApp:* ${formData.phone.trim() ? formData.phone.trim() : "Not provided"}`,
      `• *Company / Project:* ${formData.company.trim() ? formData.company.trim() : "Not provided"}`,
      `• *Selected Facility Type:* ${activeTypeInfo.label} (${activeTypeInfo.id})`,
      `• *Indicative Ticket Size:* ${effectiveTicketSize}`,
      `• *Mandate Notes:* ${formData.message.trim() ? formData.message.trim() : "Standard partner consultation requested"}`,
      ``,
      `_Submitted via prosyncindia.com mandate desk under NDA_`
    ].join("\n");

    const generatedUrl = `https://wa.me/919989912001?text=${encodeURIComponent(messageLines)}`;
    setWhatsAppUrl(generatedUrl);
    setSubmitting(false);
    setSubmitted(true);

    // Direct synchronous redirection without setTimeout prevents mobile browser popup blocks
    window.location.href = generatedUrl;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#F5F5F7] text-[#1D1D1F] border-b border-black/[0.05]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* ======================================================== */}
        {/* 21ST.DEV INTERACTIVE CAPITAL CALCULATOR & MANDATE FORM   */}
        {/* ======================================================== */}
        <Reveal>
          <div className="max-w-5xl mx-auto rounded-3xl md:rounded-[36px] bg-white border border-black/[0.06] p-7 sm:p-12 lg:p-14 shadow-[0_25px_60px_-15px_rgba(0,34,68,0.08)]">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* -------------------------------------------------- */}
              {/* LEFT COLUMN: Capital Calculator & Partner Coordinates */}
              {/* -------------------------------------------------- */}
              <div className="lg:col-span-5 space-y-7">
                
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF5500] font-bold block">
                    MANDATE INQUIRY
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#002244] leading-[1.12] font-sans">
                    Get in Touch
                  </h2>
                  <p className="text-sm text-[#6E6E73] leading-relaxed font-normal">
                    Tell us about your capital requirements and connect directly with a senior partner.
                  </p>
                </div>

                {/* Capital Estimation Summary Card */}
                <div className="p-5 rounded-2xl bg-[#002244] text-white space-y-3.5 shadow-md">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#FF8A3D] uppercase tracking-wider flex items-center gap-1.5">
                      <Calculator className="w-3.5 h-3.5" />
                      <span>Facility Sizing</span>
                    </span>
                    <span className="font-mono text-xs text-slate-300">
                      Tier-1 Banks
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-300">Selected Facility:</span>
                    <span className="text-xs font-bold text-white font-mono">{activeTypeInfo.label}</span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-300">Target Ticket Size:</span>
                    <span className="text-lg sm:text-xl font-mono font-extrabold text-[#FF5500]">{effectiveTicketSize}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[11px] font-mono text-slate-300">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Indicative Sanction</span>
                      <span className="text-emerald-400 font-bold">{activeTypeInfo.timeline}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Typical Syndicate</span>
                      <span className="text-white font-bold">{activeTypeInfo.consortium}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Partner Coordinates */}
                <div className="space-y-4 pt-2">
                  <a
                    href={`mailto:${companyData.email}`}
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#002244] flex items-center justify-center shrink-0 group-hover:bg-[#FF5500] group-hover:text-white transition-all shadow-2xs">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#6E6E73] block uppercase tracking-wider font-semibold">
                        Direct Deal Desk
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#002244] group-hover:text-[#FF5500] transition-colors">
                        {companyData.email}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`tel:${companyData.phoneRaw}`}
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#002244] flex items-center justify-center shrink-0 group-hover:bg-[#FF5500] group-hover:text-white transition-all shadow-2xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#6E6E73] block uppercase tracking-wider font-semibold">
                        Managing Partner Desk
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#002244] group-hover:text-[#FF5500] transition-colors font-mono">
                        {companyData.phone}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#002244] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#6E6E73]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#6E6E73] block uppercase tracking-wider font-semibold">
                        Jubilee Hills HQ
                      </span>
                      <span className="text-xs font-semibold text-[#4B5563]">
                        {companyData.shortAddress}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-1 flex items-center gap-2 text-xs font-mono text-[#6E6E73]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Statutory Bilateral NDA executed prior to data sharing</span>
                </div>

              </div>

              {/* -------------------------------------------------- */}
              {/* RIGHT COLUMN: Interactive Form with Selectors      */}
              {/* -------------------------------------------------- */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl sm:rounded-3xl bg-[#FBFBFC] border border-black/[0.06] p-5 sm:p-8 shadow-xs">
                  
                  {submitted ? (
                    <div className="py-10 sm:py-12 text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#002244]">
                        Mandate Brief Compiled
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-sm mx-auto">
                        Thank you, <strong className="text-[#002244]">{formData.name}</strong>. Your mandate parameters have been compiled. If your WhatsApp did not open automatically, click below to open your chat with our deal desk:
                      </p>
                      <div className="pt-2">
                        <a
                          href={whatsAppUrl || "https://wa.me/919989912001"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#002244] hover:bg-[#FF5500] inline-flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Open Direct WhatsApp Desk</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      {/* Selector 1: Capital Facility Type */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#1D1D1F] block">
                          Facility Type
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {capitalTypes.map((type) => (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => setCapitalType(type.id)}
                              className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-center min-h-[42px] flex items-center justify-center leading-tight ${
                                capitalType === type.id || capitalType === type.label
                                  ? "bg-[#002244] text-white border-[#002244] shadow-xs"
                                  : "bg-white text-[#475569] border-black/[0.08] hover:bg-slate-50"
                              }`}
                            >
                              <span>{type.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Selector 2: Indicative Ticket Size (< 5 Cr, 5-25 Cr up to 250 Cr & Individual Custom) */}
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-semibold text-[#1D1D1F] block">
                            Indicative Ticket Size
                          </label>
                          <span className="font-mono text-[#FF5500] font-bold text-xs sm:text-sm">
                            {effectiveTicketSize}
                          </span>
                        </div>

                        {/* Presets Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {ticketOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setSelectedTicketOption(opt)}
                              className={`py-2 px-2.5 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer text-center min-h-[40px] flex items-center justify-center ${
                                selectedTicketOption === opt
                                  ? "bg-[#FF5500] text-white border-[#FF5500] shadow-xs"
                                  : "bg-white text-[#002244] border-black/[0.08] hover:bg-slate-50"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>

                        {/* Custom Individual Ticket Size Input */}
                        {selectedTicketOption === "Custom Amount" && (
                          <div className="pt-1.5 space-y-1">
                            <label htmlFor="custom-ticket-input" className="text-[11px] font-semibold text-[#4B5563] block">
                              Enter Specific Ticket Amount
                            </label>
                            <div className="relative flex items-center rounded-xl bg-white border border-[#002244]/30 shadow-xs focus-within:ring-2 focus-within:ring-[#002244]/15 focus-within:border-[#002244] transition-all">
                              <span className="pl-3.5 pr-1.5 font-mono text-sm font-bold text-[#002244] select-none">
                                ₹
                              </span>
                              <input
                                id="custom-ticket-input"
                                type="text"
                                placeholder="e.g. 3.5 Cr, 12.5 Cr, 75 Lakhs, 180 Cr"
                                value={customTicket}
                                onChange={(e) => setCustomTicket(e.target.value)}
                                className="w-full py-2.5 pr-3 text-xs sm:text-sm text-[#1D1D1F] placeholder-slate-400 bg-transparent focus:outline-none font-mono"
                                autoFocus
                              />
                              {customTicket && (
                                <button
                                  type="button"
                                  onClick={() => setCustomTicket("")}
                                  className="px-3 text-slate-400 hover:text-slate-600 text-xs font-sans cursor-pointer"
                                >
                                  Clear
                                </button>
                              )}
                            </div>
                            <p className="text-[10px] font-mono text-[#6E6E73] pl-1">
                              Enter any custom ticket size from small facility lines up to ₹250+ Cr.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* 2-Column Name and Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="space-y-1">
                          <label htmlFor="mandate-name" className="text-xs font-semibold text-[#1D1D1F] block">
                            Name <span className="text-[#FF5500]">*</span>
                          </label>
                          <input
                            id="mandate-name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Jane Smith"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white border border-black/[0.1] rounded-xl px-3.5 py-2.5 min-h-[44px] text-xs sm:text-sm text-[#1D1D1F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002244]/15 focus:border-[#002244] transition-all"
                          />
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="mandate-email" className="text-xs font-semibold text-[#1D1D1F] block">
                            Work Email <span className="text-[#FF5500]">*</span>
                          </label>
                          <input
                            id="mandate-email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="jane@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white border border-black/[0.1] rounded-xl px-3.5 py-2.5 min-h-[44px] text-xs sm:text-sm text-[#1D1D1F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002244]/15 focus:border-[#002244] transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone & Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label htmlFor="mandate-phone" className="text-xs font-semibold text-[#1D1D1F] block">
                            Phone / WhatsApp
                          </label>
                          <input
                            id="mandate-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-white border border-black/[0.1] rounded-xl px-3.5 py-2.5 min-h-[44px] text-xs sm:text-sm text-[#1D1D1F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002244]/15 focus:border-[#002244] transition-all"
                          />
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="mandate-company" className="text-xs font-semibold text-[#1D1D1F] block">
                            Company / Project Name
                          </label>
                          <input
                            id="mandate-company"
                            name="company"
                            type="text"
                            autoComplete="organization"
                            placeholder="Acme Infrastructure Ltd"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full bg-white border border-black/[0.1] rounded-xl px-3.5 py-2.5 min-h-[44px] text-xs sm:text-sm text-[#1D1D1F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002244]/15 focus:border-[#002244] transition-all"
                          />
                        </div>
                      </div>

                      {/* Message Textarea */}
                      <div className="space-y-1">
                        <label htmlFor="mandate-notes" className="text-xs font-semibold text-[#1D1D1F] block">
                          Mandate Notes (Optional)
                        </label>
                        <textarea
                          id="mandate-notes"
                          name="message"
                          rows={3}
                          placeholder="Brief project outline, capex scope, or current banking status..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-white border border-black/[0.1] rounded-xl p-3 min-h-[84px] text-xs sm:text-sm text-[#1D1D1F] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002244]/15 focus:border-[#002244] transition-all resize-none"
                        />
                      </div>

                      {/* Submit Action */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="rounded-full bg-[#002244] hover:bg-[#FF5500] text-white pl-2 pr-6 py-2 min-h-[44px] inline-flex items-center gap-3 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer disabled:opacity-70 group"
                        >
                          <div className="w-8 h-8 rounded-full bg-white text-[#002244] group-hover:text-[#FF5500] flex items-center justify-center font-bold shadow-xs transition-colors shrink-0">
                            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                          </div>
                          <span className="text-xs sm:text-sm font-bold tracking-tight">
                            {submitting ? "Redirecting to WhatsApp..." : "Submit Mandate to Partners"}
                          </span>
                        </button>

                        <span className="text-[11px] font-mono text-[#6E6E73]">
                          Direct WhatsApp Hand-off (919989912001)
                        </span>
                      </div>

                    </form>
                  )}

                </div>
              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
