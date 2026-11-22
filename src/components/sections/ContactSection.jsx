import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Send,
  MessageSquare,
  AlertCircle
} from "lucide-react";
import { companyData } from "../../data/companyData";
import { Reveal } from "../common/Motion";
import { leadService } from "../../services/api";
import { buildWhatsAppUrl, trackEvent } from "../../utils";

const SECTORS = [
  "Manufacturing",
  "Infrastructure",
  "Healthcare",
  "Renewable Energy",
  "Hospitality",
  "MSME / Other",
];

const STAGES = [
  "Idea stage",
  "Land identified",
  "Existing business expansion",
  "Project under implementation",
  "Other",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    projectName: "",
    sector: "",
    location: "",
    estimatedCost: "",
    fundingRequirement: "",
    projectStage: "",
    expectedStartDate: "",
    briefDetails: "",
    consent: false,
    _gotcha: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [serverError, setServerError] = useState("");

  const contactPhone = import.meta.env.VITE_CONTACT_PHONE || companyData.phone || "";
  const contactPhoneRaw = (import.meta.env.VITE_CONTACT_PHONE || companyData.phoneRaw || "").replace(/\s+/g, "");
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || companyData.email || "";

  // Sanitize and validate Indian mobile number: 10 digits starting with 6-9
  const cleanMobileDigits = (val) => {
    let clean = String(val || "").replace(/\D/g, "");
    if (clean.length === 12 && clean.startsWith("91")) {
      clean = clean.slice(2);
    } else if (clean.length === 11 && clean.startsWith("0")) {
      clean = clean.slice(1);
    }
    return clean;
  };

  const validateForm = () => {
    const errs = {};

    // 1. Name
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    } else if (formData.name.trim().length > 100) {
      errs.name = "Name must be 100 characters or less.";
    }

    // 2. Mobile
    const cleanedMobile = cleanMobileDigits(formData.mobile);
    if (!cleanedMobile) {
      errs.mobile = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(cleanedMobile)) {
      errs.mobile = "Please enter a valid 10-digit Indian mobile number starting with 6-9.";
    }

    // 3. Project Name
    if (!formData.projectName.trim()) {
      errs.projectName = "Please enter your business or project name.";
    } else if (formData.projectName.trim().length > 150) {
      errs.projectName = "Project name must be 150 characters or less.";
    }

    // 4. Sector
    if (!formData.sector) {
      errs.sector = "Please select a project sector.";
    } else if (!SECTORS.includes(formData.sector)) {
      errs.sector = "Please select a valid sector from the options.";
    }

    // 5. Location
    if (!formData.location.trim()) {
      errs.location = "Please enter the project location (city and state).";
    } else if (formData.location.trim().length > 150) {
      errs.location = "Location must be 150 characters or less.";
    }

    // 6. Estimated Cost
    const costVal = Number(formData.estimatedCost);
    if (!formData.estimatedCost || isNaN(costVal) || costVal <= 0) {
      errs.estimatedCost = "Please enter an estimated project cost greater than zero.";
    }

    // 7. Funding Requirement (Optional, but if entered must be >= 0)
    if (formData.fundingRequirement && String(formData.fundingRequirement).trim() !== "") {
      const fundVal = Number(formData.fundingRequirement);
      if (isNaN(fundVal) || fundVal < 0) {
        errs.fundingRequirement = "Funding requirement must be zero or more.";
      }
    }

    // 8. Project Stage
    if (!formData.projectStage) {
      errs.projectStage = "Please select the current project stage.";
    } else if (!STAGES.includes(formData.projectStage)) {
      errs.projectStage = "Please select a valid project stage from the options.";
    }

    // 9. Details (Optional, length limit 2000)
    if (formData.briefDetails && formData.briefDetails.length > 2000) {
      errs.briefDetails = "Brief project details must be 2000 characters or less.";
    }

    // 10. Consent
    if (!formData.consent) {
      errs.consent = "You must agree to be contacted by Prosync Consulting about this enquiry.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear inline error on change
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submits while in progress
    if (submitting) return;

    setServerError("");
    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      const cleanedMobile = cleanMobileDigits(formData.mobile);
      const payload = {
        name: formData.name.trim(),
        mobile: cleanedMobile,
        projectName: formData.projectName.trim(),
        sector: formData.sector,
        location: formData.location.trim(),
        estimatedCost: Number(formData.estimatedCost),
        fundingRequirement: formData.fundingRequirement ? Number(formData.fundingRequirement) : null,
        projectStage: formData.projectStage,
        expectedStartDate: formData.expectedStartDate || null,
        briefDetails: formData.briefDetails ? formData.briefDetails.trim() : "",
        consent: true,
        _gotcha: formData._gotcha,
        pageSource: "/",
      };

      const result = await leadService.submitEnquiry(payload);

      if (!result.ok) {
        throw new Error(result.error || "Could not reach our enquiry server. Please try WhatsApp or call us.");
      }

      // Fire generate_lead event ONLY after API confirms save
      trackEvent("generate_lead", {
        form_name: "dpr_enquiry",
        project_sector: payload.sector,
        project_stage: payload.projectStage,
      });

      setSubmittedName(payload.name);
      setSubmitted(true);
    } catch (err) {
      setServerError(err.message || "Could not reach our enquiry server. Please try WhatsApp or call us.");
    } finally {
      setSubmitting(false);
    }
  };

  const handlePhoneClick = () => {
    trackEvent("phone_click", { location: "contact" });
  };

  const handleWhatsAppDiscussClick = () => {
    trackEvent("whatsapp_click", { location: "contact" });
  };

  const handleScrollToForm = () => {
    const el = document.getElementById("enquiry-form-card");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-brand-gray-surface text-brand-text-dark border-b border-black/5 scroll-mt-24">
      <div className="w-full max-w-310 mx-auto px-5 sm:px-8 space-y-16">
        
        {/* CTA BANNER BEFORE FORM */}
        <Reveal>
          <div className="rounded-3xl md:rounded-[36px] bg-brand-navy text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(var(--color-brand-orange)_1px,transparent_1px)] bg-size-[24px_24px] opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
                PLANNING A NEW PROJECT OR EXPANSION?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-1">
                Speak with our project finance analysts or submit your DPR requirement below for a structured consultation.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleScrollToForm}
                  className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold font-heading text-white bg-brand-orange hover:bg-brand-orange-hover shadow-md shadow-brand-orange/25 transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95 min-h-12"
                >
                  <span>SUBMIT PROJECT ENQUIRY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${contactPhoneRaw}`}
                  onClick={handlePhoneClick}
                  className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-mono font-semibold text-white bg-white/10 hover:bg-white/15 transition-all inline-flex items-center gap-2 min-h-12"
                >
                  <Phone className="w-4 h-4 text-brand-orange-light" />
                  <span>{contactPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ENQUIRY FORM & CONTACT COORDINATES */}
        <div id="enquiry-form-card" className="max-w-5xl mx-auto rounded-3xl md:rounded-[36px] bg-white border border-black/6 p-7 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(0,34,68,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Contact Coordinates Block */}
            <div className="lg:col-span-5 space-y-7">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-brand-navy leading-tight">
                  Discuss Your Project
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Provide your project parameters to receive a customized Detailed Project Report (DPR) consultation and quantitative scope analysis.
                </p>
              </div>

              {/* Coordinates */}
              <div className="space-y-3.5 pt-1">
                <div className="p-4 rounded-2xl bg-brand-gray-surface border border-black/4 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-text-light font-bold block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-sm font-bold font-heading text-brand-navy hover:text-brand-orange transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-brand-orange" />
                    <span>{contactEmail}</span>
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-brand-gray-surface border border-black/4 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-text-light font-bold block">
                    Phone Consultation
                  </span>
                  <a
                    href={`tel:${contactPhoneRaw}`}
                    onClick={handlePhoneClick}
                    className="text-sm font-bold font-mono text-brand-navy hover:text-brand-orange transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>{contactPhone}</span>
                  </a>
                </div>

                {/* Instant WhatsApp Discuss Button */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                    WhatsApp Desk
                  </span>
                  <p className="text-xs text-emerald-900 leading-snug">
                    Prefills your entered project details directly into WhatsApp:
                  </p>
                  <a
                    href={buildWhatsAppUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppDiscussClick}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs inline-flex items-center justify-center gap-2 transition-colors cursor-pointer min-h-11"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Us / Discuss Your Project</span>
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-brand-gray-surface border border-black/4">
                  <div className="text-xs font-semibold text-brand-navy flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-navy shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      {companyData.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Single DPR Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl sm:rounded-3xl bg-brand-gray-card border border-black/6 p-6 sm:p-8 shadow-xs">
                {submitted ? (
                  /* Success Replacement State */
                  <div className="py-12 text-center space-y-5 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-extrabold font-heading text-brand-navy">
                      Enquiry Received
                    </h4>
                    <p className="text-sm font-body text-slate-700 leading-relaxed max-w-md mx-auto">
                      Thank you, <strong className="text-brand-navy">{submittedName}</strong>. We have received your enquiry and will contact you after reviewing your project details.
                    </p>
                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            mobile: "",
                            projectName: "",
                            sector: "",
                            location: "",
                            estimatedCost: "",
                            fundingRequirement: "",
                            projectStage: "",
                            expectedStartDate: "",
                            briefDetails: "",
                            consent: false,
                            _gotcha: "",
                          });
                        }}
                        className="text-xs font-mono text-brand-text-light hover:text-brand-navy underline cursor-pointer"
                      >
                        Submit another project enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Single Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    {/* Honeypot field for bot spam prevention */}
                    <input
                      type="text"
                      name="_gotcha"
                      value={formData._gotcha}
                      onChange={(e) => handleInputChange("_gotcha", e.target.value)}
                      tabIndex="-1"
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    {/* Server Error Alert */}
                    {serverError && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    {/* 1. Name */}
                    <div className="space-y-1">
                      <label htmlFor="dpr-name" className="text-xs font-semibold font-heading text-brand-navy block">
                        Your Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        id="dpr-name"
                        type="text"
                        required
                        placeholder="e.g. Ramesh Varma"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`w-full bg-white border rounded-xl px-3.5 py-2.5 min-h-11 text-sm font-body text-brand-text-dark placeholder-slate-400 focus:outline-hidden transition-all ${
                          errors.name
                            ? "border-red-500 ring-1 ring-red-500"
                            : "border-black/10 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-600 font-medium">{errors.name}</p>
                      )}
                    </div>

                    {/* 2. Mobile Number */}
                    <div className="space-y-1">
                      <label htmlFor="dpr-mobile" className="text-xs font-semibold font-heading text-brand-navy block">
                        Mobile Number (10 digits) <span className="text-brand-orange">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-2.5 text-xs font-mono font-semibold text-gray-500">
                          +91
                        </span>
                        <input
                          id="dpr-mobile"
                          type="tel"
                          required
                          placeholder="98765 43210"
                          value={formData.mobile}
                          onChange={(e) => handleInputChange("mobile", e.target.value)}
                          className={`w-full bg-white border rounded-xl pl-12 pr-3.5 py-2.5 min-h-11 text-sm font-mono text-brand-text-dark placeholder-slate-400 focus:outline-hidden transition-all ${
                            errors.mobile
                              ? "border-red-500 ring-1 ring-red-500"
                              : "border-black/10 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                          }`}
                        />
                      </div>
                      {errors.mobile && (
                        <p className="text-[11px] text-red-600 font-medium">{errors.mobile}</p>
                      )}
                    </div>

                    {/* 3. Business / Project Name */}
                    <div className="space-y-1">
                      <label htmlFor="dpr-project-name" className="text-xs font-semibold font-heading text-brand-navy block">
                        Business / Project Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        id="dpr-project-name"
                        type="text"
                        required
                        placeholder="e.g. Apex Solar Energy Expansion"
                        value={formData.projectName}
                        onChange={(e) => handleInputChange("projectName", e.target.value)}
                        className={`w-full bg-white border rounded-xl px-3.5 py-2.5 min-h-11 text-sm font-body text-brand-text-dark placeholder-slate-400 focus:outline-hidden transition-all ${
                          errors.projectName
                            ? "border-red-500 ring-1 ring-red-500"
                            : "border-black/10 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                        }`}
                      />
                      {errors.projectName && (
                        <p className="text-[11px] text-red-600 font-medium">{errors.projectName}</p>
                      )}
                    </div>

                    {/* 4. Project Sector (Dropdown) */}
                    <div className="space-y-1">
                      <label htmlFor="dpr-sector" className="text-xs font-semibold font-heading text-brand-navy block">
                        Project Sector <span className="text-brand-orange">*</span>
                      </label>
                      <select
                        id="dpr-sector"
                        required
                        value={formData.sector}
                        onChange={(e) => handleInputChange("sector", e.target.value)}
                        className={`w-full bg-white border rounded-xl px-3.5 py-2.5 min-h-11 text-sm font-body text-brand-text-dark focus:outline-hidden transition-all cursor-pointer ${
                          errors.sector
                            ? "border-red-500 ring-1 ring-red-500"
                            : "border-black/10 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                        }`}
                      >
                        <option value="">Select industry sector</option>
                        {SECTORS.map((sec) => (
                          <option key={sec} value={sec}>
                            {sec}
                          </option>
                        ))}
                      </select>
                      {errors.sector && (
                        <p className="text-[11px] text-red-600 font-medium">{errors.sector}</p>
                      )}
                    </div>

                    {/* 5. Project Location */}
                    <div className="space-y-1">
                      <label htmlFor="dpr-location" className="text-xs font-semibold font-heading text-brand-navy block">
                        Project Location (City and State) <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        id="dpr-location"
                        type="text"
                        required
                        placeholder="e.g. Hyderabad, Telangana"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        className={`w-full bg-white border rounded-xl px-3.5 py-2.5 min-h-11 text-sm font-body text-brand-text-dark placeholder-slate-400 focus:outline-hidden transition-all ${
                          errors.location
                            ? "border-red-500 ring-1 ring-red-500"
                            : "border-black/10 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                        }`}
                      />
                      {errors.location && (
                        <p className="text-[11px] text-red-600 font-medium">{errors.location}</p>
                      )}
                    </div>

                    {/* 6. Estimated Project Cost & 7. Funding Requirement */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label htmlFor="dpr-cost" className="text-xs font-semibold font-heading text-brand-navy block">
                          Estimated Project Cost (₹) <span className="text-brand-orange">*</span>
                        </label>
                        <input
                          id="dpr-cost"
                          type="number"
                          min="1"
                          step="any"
                          required
                          placeholder="e.g. 50000000"
                          value={formData.estimatedCost}
                          onChange={(e) => handleInputChange("estimatedCost", e.target.value)}
                          className={`w-full bg-white border rounded-xl px-3.5 py-2.5 min-h-11 text-sm font-mono text-brand-text-dark placeholder-slate-400 focus:outline-hidden transition-all ${
                            errors.estimatedCost
                              ? "border-red-500 ring-1 ring-red-500"
                              : "border-black/10 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                          }`}
                        />
                        {errors.estimatedCost && (
                          <p className="text-[11px] text-red-600 font-medium">{errors.estimatedCost}</p>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="dpr-funding" className="text-xs font-semibold font-heading text-brand-navy block">
                          Funding Requirement (₹) <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="dpr-funding"
                          type="number"
                          min="0"
                          step="any"
                          placeholder="e.g. 35000000"
                          value={formData.fundingRequirement}
                          onChange={(e) => handleInputChange("fundingRequirement", e.target.value)}
                          className={`w-full bg-white border rounded-xl px-3.5 py-2.5 min-h-11 text-sm font-mono text-brand-text-dark placeholder-slate-400 focus:outline-hidden transition-all ${
                            errors.fundingRequirement
                              ? "border-red-500 ring-1 ring-red-500"
                              : "border-black/10 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                          }`}
                        />
                        {errors.fundingRequirement && (
                          <p className="text-[11px] text-red-600 font-medium">{errors.fundingRequirement}</p>
                        )}
                      </div>
                    </div>

                    {/* 8. Project Stage (Dropdown) & 9. Expected Start Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label htmlFor="dpr-stage" className="text-xs font-semibold font-heading text-brand-navy block">
                          Project Stage <span className="text-brand-orange">*</span>
                        </label>
                        <select
                          id="dpr-stage"
                          required
                          value={formData.projectStage}
                          onChange={(e) => handleInputChange("projectStage", e.target.value)}
                          className={`w-full bg-white border rounded-xl px-3.5 py-2.5 min-h-11 text-sm font-body text-brand-text-dark focus:outline-hidden transition-all cursor-pointer ${
                            errors.projectStage
                              ? "border-red-500 ring-1 ring-red-500"
                              : "border-black/10 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                          }`}
                        >
                          <option value="">Select project stage</option>
                          {STAGES.map((stg) => (
                            <option key={stg} value={stg}>
                              {stg}
                            </option>
                          ))}
                        </select>
                        {errors.projectStage && (
                          <p className="text-[11px] text-red-600 font-medium">{errors.projectStage}</p>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="dpr-start-date" className="text-xs font-semibold font-heading text-brand-navy block">
                          Expected Start Date <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="dpr-start-date"
                          type="date"
                          value={formData.expectedStartDate}
                          onChange={(e) => handleInputChange("expectedStartDate", e.target.value)}
                          className="w-full bg-white border border-black/10 rounded-xl px-3.5 py-2.5 min-h-11 text-sm font-body text-brand-text-dark focus:outline-hidden focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                        />
                      </div>
                    </div>

                    {/* 10. Brief Project Details */}
                    <div className="space-y-1">
                      <label htmlFor="dpr-details" className="text-xs font-semibold font-heading text-brand-navy block">
                        Brief Project Details <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        id="dpr-details"
                        rows={3}
                        maxLength={2000}
                        placeholder="Provide project outline, land status, planned capacity, or banking requirements..."
                        value={formData.briefDetails}
                        onChange={(e) => handleInputChange("briefDetails", e.target.value)}
                        className={`w-full bg-white border rounded-xl p-3 min-h-21 text-sm font-body text-brand-text-dark placeholder-slate-400 focus:outline-hidden transition-all resize-none ${
                          errors.briefDetails
                            ? "border-red-500 ring-1 ring-red-500"
                            : "border-black/10 focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                        }`}
                      />
                      {errors.briefDetails && (
                        <p className="text-[11px] text-red-600 font-medium">{errors.briefDetails}</p>
                      )}
                    </div>

                    {/* 11. Consent Checkbox */}
                    <div className="pt-1 space-y-1">
                      <label className="flex items-start gap-2.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => handleInputChange("consent", e.target.checked)}
                          className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-navy focus:ring-brand-navy cursor-pointer"
                        />
                        <span className="text-xs text-slate-700 leading-relaxed">
                          I agree to be contacted by Prosync Consulting about this enquiry. Read our{" "}
                          <a
                            href="/privacy-policy"
                            className="text-brand-navy font-semibold underline hover:text-brand-orange"
                          >
                            Privacy Policy
                          </a>
                          .
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-[11px] text-red-600 font-medium pl-6">{errors.consent}</p>
                      )}
                    </div>

                    {/* Submit Action */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full sm:w-auto px-9 py-3.5 rounded-full text-xs sm:text-sm font-bold font-heading text-white bg-brand-navy hover:bg-brand-orange shadow-md shadow-brand-navy/15 hover:shadow-brand-orange/25 transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-60 min-h-12"
                      >
                        <span>{submitting ? "Submitting..." : "Submit Enquiry"}</span>
                        <Send className="w-4 h-4" />
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
