import { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative bg-[#07152B]/60 fintech-grid-bg border-y border-[rgba(120,150,200,0.15)]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-xl space-y-2 mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#FF8A3D] font-medium block">
            Advisory Brief
          </span>
          <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#F5F7FA]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] font-light">
            Key details on mandate execution, timelines, and confidentiality.
          </p>
        </div>

        {/* Clean Dark Fintech Accordion */}
        <div className="space-y-4">
          {companyData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`fintech-panel transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#FF6B00]/60 shadow-[0_12px_30px_rgba(0,0,0,0.5)]'
                    : 'border-[rgba(120,150,200,0.16)] hover:border-[rgba(120,150,200,0.35)]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-semibold transition-colors ${
                    isOpen ? 'text-[#FF8A3D]' : 'text-[#F5F7FA]'
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                    isOpen
                      ? 'bg-[#FF6B00] border-[#FF6B00] text-white shadow-[0_0_12px_rgba(255,107,0,0.4)]'
                      : 'bg-[#0A1A33] border-[rgba(120,150,200,0.25)] text-[#A9B8CF]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-[#A9B8CF] leading-relaxed border-t border-[rgba(120,150,200,0.12)] pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Advisory Assistance Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0D1F3C] border border-[rgba(120,150,200,0.2)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-[#A9B8CF]">
            Have a specific mandate question regarding valuation or eligibility?
          </div>
          <a
            href="#contact"
            className="text-xs uppercase tracking-wider font-semibold text-[#FF8A3D] hover:text-[#FF6B00] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Ask Partner in Confidence</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
