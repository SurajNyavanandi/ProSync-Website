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
  const [whatsAppUrl, setWhatsAppUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);

    const messageLines = [
      `*New Mandate Enquiry - Prosync Advisory*`,
      ``,
      `• *Name:* ${formData.name}`,
      `• *Work Email:* ${formData.email}`,
      `• *Company:* ${formData.company || 'Not specified'}`,
      `• *Mandate Focus:* ${formData.mandate}`,
      formData.notes ? `• *Details:* ${formData.notes}` : null,
      ``,
      `_Submitted via Prosync Advisory Deal Desk_`
    ].filter(Boolean).join('\n');

    const generatedUrl = `https://wa.me/919951445544?text=${encodeURIComponent(messageLines)}`;
    setWhatsAppUrl(generatedUrl);

    // Give subtle visual feedback and redirect to WhatsApp
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.location.href = generatedUrl;
    }, 350);
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
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Direct Partner Contact Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF8A3D] font-medium block">
                Confidential Mandate Review
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#F5F7FA]">
                Let's structure your{' '}
                <span className="italic font-normal text-[#FF8A3D]">next round.</span>
              </h2>

              <p className="text-base text-[#A9B8CF] leading-relaxed font-light">
                Share a few details and a Prosync partner will respond in confidence. Every initial review is conducted under strict confidentiality.
              </p>
            </div>

            {/* Corporate Headquarters & Principal Deal Room Visual Card */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0F223D] border border-[rgba(120,150,200,0.22)] shadow-xl aspect-[16/9] group">
              <img
                src="https://i.pinimg.com/736x/fc/0c/64/fc0c64c697e8b4661135328ad7c1902b.jpg"
                alt="Prosync Principal Deal Room & Corporate Headquarters"
                className="w-full h-full object-cover object-center filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33] via-[#0A1A33]/30 to-transparent" />
              {/* Overlaid Label */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF8A3D] block font-semibold">
                    Principal Deal Room
                  </span>
                  <span className="font-medium text-[#F8FAFC]">
                    Jubilee Hills & Hitec City, Hyderabad
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A1A33]/90 text-[#38BDF8] border border-[rgba(120,150,200,0.3)]">
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
            <div className="floating-card-apple rounded-2xl bg-[#13284A] border border-[rgba(120,150,200,0.22)] p-5 sm:p-7 md:p-9 relative overflow-hidden">
              
              {/* Corner Orange Accent */}
              <div className="absolute top-0 right-0 w-20 h-1 bg-gradient-to-l from-[#FF6B00] to-transparent" />

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-[#0A1A33] border border-[#10B981] text-[#10B981] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#F5F7FA]">
                    Redirecting to WhatsApp...
                  </h3>
                  <p className="text-sm text-[#A9B8CF] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Your mandate brief is formatted and ready for our senior deal team.
                  </p>
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsAppUrl || companyData.whatsappBaseUrl}
                      className="btn-vivid-orange w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-semibold inline-flex items-center justify-center gap-2 min-h-[44px]"
                    >
                      <span>Open WhatsApp Chat Directly</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', company: '', mandate: 'Equity Raise', notes: '' });
                      }}
                      className="btn-secondary-fintech w-full sm:w-auto px-5 py-3 text-xs uppercase tracking-wider min-h-[44px]"
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
                        className="w-full bg-[#0A1A33] border border-[rgba(120,150,200,0.25)] rounded-lg px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-[#F5F7FA] placeholder-[#A9B8CF]/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
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
                        className="w-full bg-[#0A1A33] border border-[rgba(120,150,200,0.25)] rounded-lg px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-[#F5F7FA] placeholder-[#A9B8CF]/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Grid for Company & Mandate Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
                        className="w-full bg-[#0A1A33] border border-[rgba(120,150,200,0.25)] rounded-lg px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-[#F5F7FA] placeholder-[#A9B8CF]/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#A9B8CF] block">
                        Mandate Focus
                      </label>
                      <select
                        value={formData.mandate}
                        onChange={(e) => setFormData({ ...formData, mandate: e.target.value })}
                        className="w-full bg-[#0A1A33] border border-[rgba(120,150,200,0.25)] rounded-lg px-3.5 py-3 sm:py-2.5 text-base sm:text-sm text-[#F5F7FA] focus:outline-none focus:border-[#FF6B00] transition-colors cursor-pointer"
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
                      className="w-full bg-[#0A1A33] border border-[rgba(120,150,200,0.25)] rounded-lg p-3 text-base sm:text-sm text-[#F5F7FA] placeholder-[#A9B8CF]/40 focus:outline-none focus:border-[#FF6B00] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-vivid-orange w-full sm:w-auto px-7 py-3.5 text-xs uppercase tracking-wider font-semibold inline-flex items-center justify-center gap-2 min-h-[44px]"
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
