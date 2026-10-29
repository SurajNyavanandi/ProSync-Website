import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, ChevronDown, ShieldCheck } from "lucide-react";
import { companyData } from "../data/companyData";
import { Reveal, TiltCard } from "./common/Motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mandate: "Corporate Debt Syndication",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  const mandateOptions = [
    "Corporate Debt Syndication",
    "Capital & Transactions (Growth Equity / Pre-IPO)",
    "Project Advisory & TEV Study",
    "Working Capital Consortium Lines",
    "Solar & Clean Energy Debt",
    "Infrastructure & Concession Finance"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);

    const messageLines = [
      `*New Mandate Inquiry - Prosync Advisory*`,
      ``,
      `• *Name:* ${formData.name}`,
      `• *Work Email:* ${formData.email}`,
      `• *Mandate Focus:* ${formData.mandate}`,
      formData.message ? `• *Details:* ${formData.message}` : null,
      ``,
      `_Submitted via prosyncindia.com mandate desk_`
    ].filter(Boolean).join("\n");

    const generatedUrl = `https://wa.me/919951445544?text=${encodeURIComponent(messageLines)}`;
    setWhatsAppUrl(generatedUrl);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.location.href = generatedUrl;
    }, 400);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#F5F5F7] text-[#1D1D1F] border-b border-black/[0.05]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
        
        {/* ======================================================== */}
        {/* FLOATING SPLIT CARD (image_4c537ec8.png reference style) */}
        {/* ======================================================== */}
        <Reveal>
          <div className="max-w-5xl mx-auto rounded-3xl md:rounded-[36px] bg-white border border-black/[0.06] p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_-15px_rgba(0,34,68,0.08)]">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* -------------------------------------------------- */}
              {/* LEFT COLUMN: Minimalist Heading & Direct Contact   */}
              {/* -------------------------------------------------- */}
              <div className="lg:col-span-6 space-y-7">
                
                {/* Minimalist Heading Block */}
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#002244] leading-[1.14] font-sans">
                    Get in Touch
                  </h2>

                  <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed font-normal pt-1 max-w-md">
                    Tell us about your capital requirements and connect directly with a partner.
                  </p>
                </div>

                {/* Direct Contact Coordinates matching image_4c537ec8.png */}
                <div className="space-y-5 pt-3">
                  
                  {/* Email */}
                  <a
                    href={`mailto:${companyData.email}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#002244] text-white flex items-center justify-center shrink-0 group-hover:bg-[#FF5500] group-hover:scale-105 transition-all shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#6E6E73] block uppercase tracking-wider font-medium">
                        E-mail
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#002244] group-hover:text-[#FF5500] transition-colors">
                        {companyData.email}
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${companyData.phoneRaw}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#002244] text-white flex items-center justify-center shrink-0 group-hover:bg-[#FF5500] group-hover:scale-105 transition-all shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#6E6E73] block uppercase tracking-wider font-medium">
                        Phone number
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#002244] group-hover:text-[#FF5500] transition-colors font-mono">
                        {companyData.phone}
                      </span>
                    </div>
                  </a>

                  {/* Office Headquarters */}
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#002244] flex items-center justify-center shrink-0 border border-black/[0.04]">
                      <MapPin className="w-5 h-5 text-[#6E6E73]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#6E6E73] block uppercase tracking-wider font-medium">
                        Headquarters
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#4B5563]">
                        {companyData.shortAddress}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Institutional NDA Guarantee */}
                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#6E6E73]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Statutory NDA executed prior to data room examination</span>
                </div>

              </div>

              {/* -------------------------------------------------- */}
              {/* RIGHT COLUMN: Floating Nested Form Card            */}
              {/* -------------------------------------------------- */}
              <div className="lg:col-span-6">
                <TiltCard
                  maxTilt={3}
                  scale={1.01}
                  glowColor="rgba(0, 34, 68, 0.04)"
                  className="rounded-3xl"
                >
                  <div className="rounded-2xl sm:rounded-3xl bg-white border border-black/[0.06] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                    
                    {submitted ? (
                      <div className="py-10 text-center space-y-4">
                        <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                          <CheckCircle2 className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#002244]">
                          Mandate Brief Submitted
                        </h3>
                        <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-sm mx-auto">
                          Thank you, <strong className="text-[#002244]">{formData.name}</strong>. Your mandate brief is routed to our senior partners via secure deal desk.
                        </p>
                        <div className="pt-2">
                          <a
                            href={whatsAppUrl || companyData.whatsappBaseUrl}
                            className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#002244] hover:bg-[#FF5500] inline-flex items-center gap-2 shadow-sm transition-all"
                          >
                            <span>Open WhatsApp Desk</span>
                          </a>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        
                        {/* Name Input */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-[#1D1D1F] block">
                            Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Jane Smith"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#F5F5F7] border border-transparent rounded-xl px-4 py-3 text-sm text-[#1D1D1F] placeholder-slate-400 focus:outline-none focus:border-black/20 focus:bg-white transition-all"
                          />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-[#1D1D1F] block">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="jane@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#F5F5F7] border border-transparent rounded-xl px-4 py-3 text-sm text-[#1D1D1F] placeholder-slate-400 focus:outline-none focus:border-black/20 focus:bg-white transition-all"
                          />
                        </div>

                        {/* Industry / Mandate Dropdown */}
                        <div className="space-y-1.5 relative">
                          <label className="text-xs font-semibold text-[#1D1D1F] block">
                            Mandate / Industry
                          </label>
                          <div className="relative">
                            <select
                              value={formData.mandate}
                              onChange={(e) => setFormData({ ...formData, mandate: e.target.value })}
                              className="w-full appearance-none bg-[#F5F5F7] border border-transparent rounded-xl px-4 py-3 pr-10 text-sm text-[#1D1D1F] focus:outline-none focus:border-black/20 focus:bg-white transition-all cursor-pointer"
                            >
                              {mandateOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                        </div>

                        {/* Message Textarea */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-[#1D1D1F] block">
                            Message
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Type your message or project facility size..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-[#F5F5F7] border border-transparent rounded-xl p-3.5 text-sm text-[#1D1D1F] placeholder-slate-400 focus:outline-none focus:border-black/20 focus:bg-white transition-all resize-none"
                          />
                        </div>

                        {/* Signature Action Button (image_4c537ec8.png style) */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={submitting}
                            className="rounded-full bg-[#002244] hover:bg-[#FF5500] text-white pl-2 pr-6 py-2 inline-flex items-center gap-3 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer disabled:opacity-70 group"
                          >
                            {/* Inner white circular arrow button */}
                            <div className="w-8 h-8 rounded-full bg-white text-[#002244] group-hover:text-[#FF5500] flex items-center justify-center font-bold shadow-xs transition-colors">
                              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                            </div>
                            <span className="text-xs font-bold tracking-tight">
                              {submitting ? "Submitting..." : "Get a Solution"}
                            </span>
                          </button>
                        </div>

                      </form>
                    )}

                  </div>
                </TiltCard>
              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
