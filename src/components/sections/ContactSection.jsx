import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Send,
  MessageSquare,
  Landmark,
  TrendingUp,
  Building2,
  BarChart3,
  Globe,
  Sparkles,
  ChevronDown,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { companyData } from "../../data/companyData";
import { Reveal } from "../common/Motion";

const SERVICE_OPTIONS = [
  {
    id: "Debt & Structured Finance",
    label: "Debt & Structured Finance",
    sublabel: "Term loans, working capital & syndication",
    badge: "Debt",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
    bgHover: "hover:bg-emerald-50/80",
    activeBg: "bg-emerald-50 border-emerald-300",
    accentColor: "text-emerald-600",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    icon: Landmark,
  },
  {
    id: "Investment & Transaction Advisory",
    label: "Investment & Transaction Advisory",
    sublabel: "Private equity, M&A & capital syndication",
    badge: "Equity & M&A",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-300",
    bgHover: "hover:bg-blue-50/80",
    activeBg: "bg-blue-50 border-blue-300",
    accentColor: "text-blue-600",
    iconBg: "bg-blue-500/10 text-blue-600",
    icon: TrendingUp,
  },
  {
    id: "Project & Infrastructure Advisory",
    label: "Project & Infrastructure Advisory",
    sublabel: "EPC advisory, project finance & DPR",
    badge: "Infrastructure",
    badgeClass: "bg-orange-100 text-orange-800 border-orange-300",
    bgHover: "hover:bg-orange-50/80",
    activeBg: "bg-orange-50 border-orange-300",
    accentColor: "text-[#FF5500]",
    iconBg: "bg-[#FF5500]/10 text-[#FF5500]",
    icon: Building2,
  },
  {
    id: "Corporate Finance & Research",
    label: "Corporate Finance & Research",
    sublabel: "Financial modelling, valuations & CMA",
    badge: "Advisory",
    badgeClass: "bg-indigo-100 text-indigo-800 border-indigo-300",
    bgHover: "hover:bg-indigo-50/80",
    activeBg: "bg-indigo-50 border-indigo-300",
    accentColor: "text-indigo-600",
    iconBg: "bg-indigo-500/10 text-indigo-600",
    icon: BarChart3,
  },
  {
    id: "Prosync Global Research",
    label: "Prosync Global Research",
    sublabel: "Offshore research & institutional intelligence",
    badge: "Global",
    badgeClass: "bg-teal-100 text-teal-800 border-teal-300",
    bgHover: "hover:bg-teal-50/80",
    activeBg: "bg-teal-50 border-teal-300",
    accentColor: "text-teal-600",
    iconBg: "bg-teal-500/10 text-teal-600",
    icon: Globe,
  },
  {
    id: "Other Advisory Mandate",
    label: "Other Advisory Mandate",
    sublabel: "Custom corporate advisory requirement",
    badge: "Specialized",
    badgeClass: "bg-purple-100 text-purple-800 border-purple-300",
    bgHover: "hover:bg-purple-50/80",
    activeBg: "bg-purple-50 border-purple-300",
    accentColor: "text-purple-600",
    iconBg: "bg-purple-500/10 text-purple-600",
    icon: Sparkles,
  },
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && dropdownOpen) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownOpen]);

  // Listen to external triggers (e.g. from service cards or hero CTAs)
  useEffect(() => {
    const handleMandateSelect = (e) => {
      if (e.detail?.mandate) {
        const matching = SERVICE_OPTIONS.find((opt) =>
          e.detail.mandate.toLowerCase().includes(opt.id.toLowerCase()) ||
          opt.id.toLowerCase().includes(e.detail.mandate.toLowerCase())
        );
        if (matching) {
          setFormData((prev) => ({ ...prev, serviceRequired: matching.id }));
        }
      }
    };
    window.addEventListener("prosync:selectMandate", handleMandateSelect);
    return () => window.removeEventListener("prosync:selectMandate", handleMandateSelect);
  }, []);

  const selectedOption =
    SERVICE_OPTIONS.find((opt) => opt.id === formData.serviceRequired) ||
    SERVICE_OPTIONS[0];
  const SelectedIcon = selectedOption.icon;

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
                    Email
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
                    Phone
                  </span>
                  <a
                    href={`tel:${companyData.phoneRaw}`}
                    className="text-sm font-bold font-mono text-[#002244] hover:text-[#FF5500] transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#FF5500]" />
                    <span>{companyData.phone}</span>
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                  <div className="text-xs font-semibold font-body text-[#002244] flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#002244] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      ARC Property Solutions Pvt. Ltd., 2nd Floor, Plot no. 24 &amp; 25, Kakatiya Hills, Jubilee Hills, Hyderabad, Telangana 500081
                    </span>
                  </div>
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

                    {/* Service Required (Colorful Interactive Dropdown) */}
                    <div className="space-y-1 relative" ref={dropdownRef}>
                      <label htmlFor="enquiry-service" className="text-xs font-semibold font-heading text-[#1D1D1F] block">
                        Service Required <span className="text-[#FF5500]">*</span>
                      </label>

                      {/* Accessible native select fallback for form automation */}
                      <select
                        id="enquiry-service"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="sr-only"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt.id} value={opt.id}>
                            {opt.label}
                          </option>
                        ))}
                      </select>

                      {/* Custom Colorful Dropdown Trigger */}
                      <button
                        type="button"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        aria-haspopup="listbox"
                        aria-expanded={dropdownOpen}
                        className={`w-full bg-white border rounded-xl px-3.5 py-2.5 min-h-[48px] text-left transition-all cursor-pointer flex items-center justify-between gap-3 shadow-xs ${
                          dropdownOpen
                            ? "border-[#002244] ring-2 ring-[#002244]/15 shadow-sm"
                            : "border-black/[0.1] hover:border-black/[0.2]"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${selectedOption.iconBg}`}>
                            <SelectedIcon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs sm:text-sm font-bold font-heading text-[#002244] truncate">
                                {selectedOption.label}
                              </span>
                              <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase border shrink-0 ${selectedOption.badgeClass}`}>
                                {selectedOption.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#6E6E73] font-body truncate">
                              {selectedOption.sublabel}
                            </p>
                          </div>
                        </div>

                        <ChevronDown
                          className={`w-4 h-4 text-[#002244] shrink-0 transition-transform duration-200 ${
                            dropdownOpen ? "rotate-180 text-[#FF5500]" : ""
                          }`}
                        />
                      </button>

                      {/* Colorful Dropdown Menu Options */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -4, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -4, scale: 0.98 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            role="listbox"
                            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-black/[0.08] p-2 space-y-1.5 z-40 max-h-[340px] overflow-y-auto"
                          >
                            {SERVICE_OPTIONS.map((opt) => {
                              const Icon = opt.icon;
                              const isSelected = formData.serviceRequired === opt.id;
                              return (
                                <button
                                  key={opt.id}
                                  type="button"
                                  role="option"
                                  aria-selected={isSelected}
                                  onClick={() => {
                                    setFormData({ ...formData, serviceRequired: opt.id });
                                    setDropdownOpen(false);
                                  }}
                                  className={`w-full p-2.5 rounded-xl text-left transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer border ${
                                    isSelected
                                      ? `${opt.activeBg} shadow-xs`
                                      : `border-transparent ${opt.bgHover}`
                                  }`}
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${opt.iconBg}`}>
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0">
                                      <div className="flex items-center gap-2">
                                        <span className={`text-xs sm:text-sm font-semibold font-heading block truncate ${
                                          isSelected ? "text-[#002244] font-bold" : "text-[#1D1D1F]"
                                        }`}>
                                          {opt.label}
                                        </span>
                                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase border shrink-0 ${opt.badgeClass}`}>
                                          {opt.badge}
                                        </span>
                                      </div>
                                      <span className="text-[11px] text-[#6E6E73] font-body block truncate">
                                        {opt.sublabel}
                                      </span>
                                    </div>
                                  </div>

                                  {isSelected && (
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${opt.iconBg}`}>
                                      <Check className="w-3.5 h-3.5" />
                                    </div>
                                  )}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
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
                    <div className="pt-2 flex items-center">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold font-heading text-white bg-[#002244] hover:bg-[#FF5500] shadow-md shadow-[#002244]/15 hover:shadow-[#FF5500]/25 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer active:scale-95 disabled:opacity-70"
                      >
                        <span>{submitting ? "SUBMITTING..." : "SUBMIT ENQUIRY"}</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
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
