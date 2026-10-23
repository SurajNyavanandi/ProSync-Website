import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    mandate: 'Equity Raise',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);
    // Simulate real partner CRM dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const mandatesList = [
    'Equity Raise',
    'Debt Solutions',
    'Pre-IPO Advisory',
    'DPR / TEV Studies',
    'Bid Consulting',
    'Transaction Advisory'
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Direct Partner Contact Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6E93C7]">
                <span>Confidential Enquiry</span>
                <span aria-hidden="true" className="text-[#FF6B00]">/</span>
                <span className="text-[#A9B8CF]">Partner Access</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F7FA]">
                Let's structure your{' '}
                <span className="italic text-[#FF8A3D]">next round.</span>
              </h2>

              <p className="text-base text-[#A9B8CF] leading-relaxed">
                Share a few details and a Prosync partner will respond in confidence. Every initial review is conducted under strict confidentiality.
              </p>
            </div>

            {/* Corporate Headquarters Architectural Visual Card */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0F223D] border border-[rgba(120,150,200,0.22)] shadow-lg aspect-[16/9] group">
              {/* Modern Cantilever Architectural Illustration */}
              <svg
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                viewBox="0 0 800 450"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="cantilever-glass" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E3860" />
                    <stop offset="60%" stopColor="#0D1F3C" />
                    <stop offset="100%" stopColor="#081426" />
                  </linearGradient>
                  <linearGradient id="warm-boardroom-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255, 107, 0, 0.35)" />
                    <stop offset="50%" stopColor="rgba(255, 138, 61, 0.25)" />
                    <stop offset="100%" stopColor="rgba(110, 147, 199, 0.15)" />
                  </linearGradient>
                </defs>

                <rect width="800" height="450" fill="#0A1A33" />
                
                {/* Modern Cantilever Structure */}
                <polygon points="80,160 720,110 760,360 140,410" fill="url(#cantilever-glass)" stroke="rgba(120,150,200,0.3)" strokeWidth="1.5" />
                <polygon points="140,190 680,145 710,340 170,380" fill="url(#warm-boardroom-glow)" />

                {/* Architectural Mullions */}
                <line x1="260" y1="180" x2="285" y2="370" stroke="rgba(10, 26, 51, 0.85)" strokeWidth="3" />
                <line x1="390" y1="168" x2="415" y2="355" stroke="rgba(10, 26, 51, 0.85)" strokeWidth="3" />
                <line x1="530" y1="155" x2="555" y2="345" stroke="rgba(10, 26, 51, 0.85)" strokeWidth="3" />

                {/* Ground Plane */}
                <rect x="0" y="390" width="800" height="60" fill="#061122" />
              </svg>

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33] via-[#0A1A33]/40 to-transparent" />

              {/* Overlaid Label */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF8A3D] block">
                    Principal Deal Room
                  </span>
                  <span className="font-medium text-[#F5F7FA]">
                    Kakatiya Hills · Jubilee Hills, Hyderabad
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A1A33]/85 text-[#6E93C7] border border-[rgba(120,150,200,0.3)]">
                  HQ Facility
                </span>
              </div>
            </div>

            {/* Direct Coordinates Block */}
            <div className="space-y-4 pt-2">
              {/* Phone */}
              <a
                href={`tel:${companyData.phoneRaw}`}
                className="fintech-panel p-4 flex items-center gap-4 group hover:border-[#FF6B00]/40 transition-all block"
              >
                <div className="p-3 rounded-lg bg-[#0A1A33] border border-[rgba(120,150,200,0.2)] text-[#FF6B00] group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#6E93C7] block uppercase tracking-wider">
                    Direct Phone Line
                  </span>
                  <span className="text-base font-semibold text-[#F5F7FA] font-mono group-hover:text-white transition-colors">
                    {companyData.phone}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${companyData.email}`}
                className="fintech-panel p-4 flex items-center gap-4 group hover:border-[#FF6B00]/40 transition-all block"
              >
                <div className="p-3 rounded-lg bg-[#0A1A33] border border-[rgba(120,150,200,0.2)] text-[#FF8A3D] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#6E93C7] block uppercase tracking-wider">
                    Executive Inbox
                  </span>
                  <span className="text-base font-semibold text-[#F5F7FA] group-hover:text-white transition-colors">
                    {companyData.email}
                  </span>
                </div>
              </a>

              {/* Physical Office Address */}
              <div className="fintech-panel p-4 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0A1A33] border border-[rgba(120,150,200,0.2)] text-[#6E93C7] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#6E93C7] block uppercase tracking-wider mb-1">
                    Registered Office
                  </span>
                  <p className="text-xs sm:text-sm text-[#A9B8CF] leading-relaxed">
                    {companyData.officeAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* NDA Guarantee */}
            <div className="p-4 rounded-xl bg-[#0D1F3C]/60 border border-[rgba(120,150,200,0.15)] flex items-center gap-3 text-xs text-[#A9B8CF]">
              <Shield className="w-4 h-4 text-[#FF6B00] shrink-0" />
              <span>We sign reciprocal NDAs prior to accessing proprietary financial models or pitch materials.</span>
            </div>
          </div>

          {/* Right Column: Confidential Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="floating-card-apple rounded-2xl bg-[#13284A] border border-[rgba(120,150,200,0.22)] p-7 md:p-9 relative overflow-hidden">
              
              {/* Corner Orange Accent */}
              <div className="absolute top-0 right-0 w-20 h-1 bg-gradient-to-l from-[#FF6B00] to-transparent" />

              {submitted ? (
                <div className="py-14 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-[#0A1A33] border border-[#FF6B00] text-[#FF6B00] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(255,107,0,0.25)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#F5F7FA]">
                    Enquiry Received in Confidence
                  </h3>
                  <p className="text-sm text-[#A9B8CF] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. A Prosync partner will review your mandate requirements and connect directly within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', company: '', mandate: 'Equity Raise', notes: '' });
                      }}
                      className="btn-secondary-fintech px-5 py-2.5 text-xs uppercase tracking-wider"
                    >
                      Submit Another Mandate
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="pb-2 border-b border-[rgba(120,150,200,0.15)] flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#F5F7FA]">
                      Mandate Brief
                    </span>
                    <span className="text-[11px] font-mono text-[#6E93C7]">
                      Strict Non-Disclosure
                    </span>
                  </div>

                  {/* Grid for Name and Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#A9B8CF] block">
                        Full name <span className="text-[#FF6B00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikramaditya Rao"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0A1A33] border border-[rgba(120,150,200,0.25)] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F7FA] placeholder-[#A9B8CF]/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#A9B8CF] block">
                        Work email <span className="text-[#FF6B00]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vikram@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0A1A33] border border-[rgba(120,150,200,0.25)] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F7FA] placeholder-[#A9B8CF]/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Grid for Company & Mandate Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#A9B8CF] block">
                        Company <span className="text-[#FF6B00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Company or Entity Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#0A1A33] border border-[rgba(120,150,200,0.25)] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F7FA] placeholder-[#A9B8CF]/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#A9B8CF] block">
                        Mandate Focus
                      </label>
                      <select
                        value={formData.mandate}
                        onChange={(e) => setFormData({ ...formData, mandate: e.target.value })}
                        className="w-full bg-[#0A1A33] border border-[rgba(120,150,200,0.25)] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F7FA] focus:outline-none focus:border-[#FF6B00] transition-colors cursor-pointer"
                      >
                        {mandatesList.map((m) => (
                          <option key={m} value={m} className="bg-[#0D1F3C] text-[#F5F7FA]">
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Mandate Notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#A9B8CF] block">
                      Tell us about the mandate (size, stage, timeline)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g. Seeking ₹150 Cr project debt syndication for infrastructure concession or Series B growth equity round targeted for Q3..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#0A1A33] border border-[rgba(120,150,200,0.25)] rounded-lg p-3 text-sm text-[#F5F7FA] placeholder-[#A9B8CF]/40 focus:outline-none focus:border-[#FF6B00] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-vivid-orange w-full sm:w-auto px-7 py-3 text-xs uppercase tracking-wider font-semibold inline-flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <span>Encrypting & Sending...</span>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <a
                      href={companyData.whatsappBaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#6E93C7] hover:text-[#FF8A3D] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Prefer instant WhatsApp?</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
