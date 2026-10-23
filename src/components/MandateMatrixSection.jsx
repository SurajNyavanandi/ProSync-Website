import { useState } from 'react';
import { ArrowRight, CheckCircle, FileText, TrendingUp, Landmark, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function MandateMatrixSection() {
  const mandateKeys = ['Equity', 'Debt', 'Pre-IPO', 'DPR / TEV', 'Bid'];
  const [activeMandate, setActiveMandate] = useState('Equity');

  const currentMandateData = companyData.mandatesMatrix[activeMandate];

  const getMandateIcon = (key) => {
    switch (key) {
      case 'Equity':
        return <TrendingUp className="w-4 h-4 text-[#FF6B00]" />;
      case 'Debt':
        return <Landmark className="w-4 h-4 text-[#FF8A3D]" />;
      case 'Pre-IPO':
        return <ShieldCheck className="w-4 h-4 text-[#6E93C7]" />;
      case 'DPR / TEV':
        return <FileText className="w-4 h-4 text-[#A9B8CF]" />;
      default:
        return <TrendingUp className="w-4 h-4 text-[#FF6B00]" />;
    }
  };

  return (
    <section id="mandates" className="py-24 md:py-32 relative bg-[#07152B]/60 fintech-grid-bg border-y border-[rgba(120,150,200,0.15)]">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6E93C7]">
            <span>Mandate Matrix</span>
            <span aria-hidden="true" className="text-[#FF6B00]">/</span>
            <span className="text-[#A9B8CF]">Execution Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F7FA]">
            What a Prosync mandate looks like.
          </h2>

          <p className="text-base sm:text-lg text-[#A9B8CF] font-normal leading-relaxed">
            Choose a mandate type to see the workstreams we typically run.
          </p>
        </div>

        {/* Apple-style Interactive Segmented Control Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0D1F3C] border border-[rgba(120,150,200,0.2)] rounded-xl max-w-2xl mb-10">
          {mandateKeys.map((key) => {
            const isActive = activeMandate === key;
            return (
              <button
                key={key}
                onClick={() => setActiveMandate(key)}
                className={`flex-1 min-w-[90px] py-2.5 px-4 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap text-center ${
                  isActive
                    ? 'bg-[#13284A] text-[#F5F7FA] shadow-[0_4px_16px_rgba(0,0,0,0.4)] border border-[rgba(255,107,0,0.4)]'
                    : 'text-[#A9B8CF] hover:text-[#F5F7FA] hover:bg-[#13284A]/40'
                }`}
              >
                {key}
              </button>
            );
          })}
        </div>

        {/* Active Mandate Showcase Panel */}
        <div className="floating-card-apple rounded-2xl bg-[#13284A] border border-[rgba(120,150,200,0.22)] p-7 md:p-10 relative overflow-hidden">
          
          {/* Subtle Orange Corner Accent */}
          <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-[#FF6B00] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Context: Target profile & summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#6E93C7]">
                  {getMandateIcon(activeMandate)}
                  <span>For · {currentMandateData.target}</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#F5F7FA]">
                  {currentMandateData.headline}
                </h3>
                <p className="text-sm text-[#A9B8CF] leading-relaxed">
                  {currentMandateData.summary}
                </p>
              </div>

              {/* Progress & Milestone indicators in muted steel blue */}
              <div className="p-4 rounded-xl bg-[#0A1A33]/80 border border-[rgba(120,150,200,0.18)] space-y-3">
                <div className="flex items-center justify-between text-xs text-[#A9B8CF]">
                  <span>Mandate Workstream Progress</span>
                  <span className="font-mono text-[#FF8A3D]">5 / 5 Phases</span>
                </div>
                {/* Progress bar in muted steel blue */}
                <div className="w-full h-1.5 bg-[#183159] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#6E93C7] to-[#FF6B00] w-full rounded-full" />
                </div>
                <div className="text-[11px] text-[#A9B8CF]/70">
                  Senior deal lead present in all advisory sessions and credit meetings.
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="btn-vivid-orange px-5 py-3 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2"
                >
                  <span>Discuss a {activeMandate} Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Ordered 5 Workstream Steps */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs uppercase font-mono tracking-wider text-[#A9B8CF]/70 mb-2">
                Standard Execution Roadmap
              </div>

              {currentMandateData.steps.map((step, index) => {
                const stepNum = `0${index + 1}`;
                return (
                  <div
                    key={index}
                    className="group rounded-xl p-4 bg-[#0D1F3C]/90 border border-[rgba(120,150,200,0.15)] hover:border-[#FF6B00]/50 hover:bg-[#0E2242] transition-all duration-200 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-semibold px-2 py-1 rounded bg-[#0A1A33] border border-[rgba(120,150,200,0.2)] text-[#FF8A3D] group-hover:text-[#FF6B00] group-hover:border-[#FF6B00]/40 transition-colors">
                        {stepNum}
                      </span>
                      <span className="text-sm md:text-base font-medium text-[#F5F7FA] group-hover:text-white transition-colors">
                        {step}
                      </span>
                    </div>

                    <CheckCircle className="w-4 h-4 text-[#6E93C7] group-hover:text-[#FF6B00] transition-colors shrink-0" />
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
