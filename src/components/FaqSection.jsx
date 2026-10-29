import { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#071428] border-b border-white/[0.08]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Clear Section Header */}
        <div className="max-w-xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-2">
            FAQ
          </h2>
          <p className="text-sm sm:text-base text-[#A9B8CF] font-light">
            Mandate execution, timelines, and transaction governance.
          </p>
        </div>

        {/* Clean Dark Fintech Accordion */}
        <div className="space-y-4">
          {companyData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 overflow-hidden border bg-[#0D1F3C] ${
                  isOpen
                    ? 'border-[#FF6B00]/60 shadow-[0_12px_30px_rgba(0,0,0,0.5)]'
                    : 'border-white/[0.1] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-semibold transition-colors ${
                    isOpen ? 'text-[#FF8A3D]' : 'text-white group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                    isOpen
                      ? 'bg-[#FF6B00] border-[#FF6B00] text-white shadow-[0_0_12px_rgba(255,107,0,0.4)]'
                      : 'bg-[#060E1C] border-white/10 text-[#A9B8CF]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-[#CBD5E1] leading-relaxed border-t border-white/[0.08] pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Advisory Assistance Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0E203C] border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-4">
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
