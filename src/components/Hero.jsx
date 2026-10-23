import { useState } from 'react';
import { ArrowRight, Layers, ShieldCheck, ChevronRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Hero() {
  const [activeStackIndex, setActiveStackIndex] = useState(0);

  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden fintech-grid-bg">
      {/* Executive Advisory Background Image */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src="/assets/aistudio/Screenshot_2026-10-21_131742_8846fa8c.png"
          alt="Where Ambition Meets Opportunity advisory meeting"
          className="w-full h-full object-cover object-[75%_center] md:object-right opacity-65 md:opacity-80 transition-opacity duration-300"
        />
        {/* Soft directional scrims: dark on left for text legibility, clear on right for image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A33] via-[#0A1A33]/85 md:via-[#0A1A33]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33] via-transparent to-[#0A1A33]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A33]/60 via-transparent to-[#0A1A33]" />
      </div>

      {/* Subtle radial glow accents */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(255,107,0,0.08)_0%,_transparent_70%)] blur-3xl z-[1]"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-48 right-10 w-[450px] h-[450px] bg-[radial-gradient(circle,_rgba(110,147,199,0.07)_0%,_transparent_70%)] blur-3xl z-[1]"
      />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Proposition & Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean Kicker / Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6E93C7]">
              <span>{companyData.tagline}</span>
              <span aria-hidden="true" className="text-[#FF6B00]">/</span>
              <span className="text-[#A9B8CF]">Senior Deal Team</span>
            </div>

            {/* Apple-style Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F7FA] leading-[1.08] [text-wrap:balance]">
              {companyData.headlineLead}
              <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8A3D] to-[#FFA767]">
                {companyData.headlineAccent}
              </span>
            </h1>

            {/* Subtitle with high legibility */}
            <p className="text-base sm:text-lg text-[#A9B8CF] leading-relaxed max-w-2xl font-normal">
              {companyData.subtitle}
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="btn-vivid-orange px-6 py-3.5 text-sm font-semibold tracking-wide inline-flex items-center gap-2.5"
              >
                <span>Discuss a Mandate</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#practice"
                className="btn-secondary-fintech px-6 py-3.5 text-sm font-medium inline-flex items-center gap-2"
              >
                <span>Explore the Practice</span>
                <ChevronRight className="w-4 h-4 text-[#6E93C7]" />
              </a>
            </div>

            {/* Micro Trust Markers */}
            <div className="pt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#A9B8CF]/80 border-t border-[rgba(120,150,200,0.15)]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
                <span>Strict Partner-Level Discretion & NDA</span>
              </div>
              <span aria-hidden="true" className="text-[rgba(120,150,200,0.3)]">|</span>
              <div>
                <span>Registered CIN: <span className="text-[#F5F7FA] font-mono">{companyData.cin}</span></span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Apple-style Floating Capital Stack Panel */}
          <div className="lg:col-span-5 relative">
            {/* Subtle moving ambient light behind the card */}
            <div 
              aria-hidden="true"
              className="absolute -inset-4 bg-gradient-to-r from-[#FF6B00]/15 via-[#6E93C7]/10 to-[#FF8A3D]/15 rounded-3xl blur-2xl opacity-60 animate-pulse-glow pointer-events-none"
            />

            <div className="floating-card-apple animate-float-slow rounded-2xl bg-[#13284A]/85 backdrop-blur-xl border border-[rgba(120,150,200,0.28)] p-6 md:p-7 relative overflow-hidden">
              {/* Corner accent glow */}
              <div 
                aria-hidden="true"
                className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_top_right,_rgba(255,107,0,0.2)_0%,_transparent_70%)] pointer-events-none"
              />

              {/* Panel Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[rgba(120,150,200,0.18)]">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#0A1A33] border border-[rgba(120,150,200,0.25)] text-[#FF6B00]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold tracking-wide text-[#F5F7FA] block">Capital Stack</span>
                    <span className="text-[11px] font-mono text-[#6E93C7]">PRS / ADV</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#A9B8CF] px-2 py-0.5 rounded bg-[#0A1A33]/80 border border-[rgba(120,150,200,0.2)]">
                  Seniority Order
                </span>
              </div>

              {/* Stack Tranches */}
              <div className="space-y-3 py-5">
                {companyData.capitalStack.map((tier, idx) => {
                  const isActive = activeStackIndex === idx;
                  return (
                    <div
                      key={tier.level}
                      onClick={() => setActiveStackIndex(idx)}
                      onMouseEnter={() => setActiveStackIndex(idx)}
                      className={`cursor-pointer rounded-xl p-3.5 transition-all duration-200 border ${
                        isActive
                          ? 'bg-[#0D1F3C] border-[#FF6B00]/70 shadow-[0_4px_16px_rgba(255,107,0,0.12)] -translate-x-1'
                          : 'bg-[#0E203B]/60 border-[rgba(120,150,200,0.14)] hover:border-[rgba(120,150,200,0.35)] hover:bg-[#0E203B]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-mono text-xs font-semibold px-2 py-0.5 rounded ${
                              isActive ? 'bg-[#FF6B00] text-white' : 'bg-[#183159] text-[#6E93C7]'
                            }`}
                          >
                            {tier.level}
                          </span>
                          <span className="text-sm font-medium text-[#F5F7FA]">
                            {tier.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-[#A9B8CF] hidden sm:inline">
                          {tier.riskProfile}
                        </span>
                      </div>

                      {/* Tranche Detail Drawer (Animated on active) */}
                      {isActive && (
                        <div className="mt-2.5 pt-2.5 border-t border-[rgba(120,150,200,0.15)] text-xs text-[#A9B8CF] leading-relaxed animate-in fade-in duration-150">
                          <p>{tier.detail}</p>
                          <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-[#6E93C7]">
                            <span>Instrument: {tier.role}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Solutions Quick Bar */}
              <div className="pt-4 border-t border-[rgba(120,150,200,0.18)]">
                <div className="text-[11px] uppercase tracking-wider font-mono text-[#A9B8CF]/70 mb-2">
                  Integrated Execution
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-[#0A1A33] border border-[rgba(120,150,200,0.2)] rounded-lg p-2 text-center">
                    <span className="block text-xs font-semibold text-[#F5F7FA]">Debt</span>
                    <span className="block text-[10px] text-[#6E93C7]">Solutions</span>
                  </div>
                  <div className="bg-[#0A1A33] border border-[rgba(120,150,200,0.2)] rounded-lg p-2 text-center">
                    <span className="block text-xs font-semibold text-[#F5F7FA]">Equity</span>
                    <span className="block text-[10px] text-[#6E93C7]">Solutions</span>
                  </div>
                  <div className="bg-[#0A1A33] border border-[rgba(120,150,200,0.2)] rounded-lg p-2 text-center">
                    <span className="block text-xs font-semibold text-[#F5F7FA]">Advisory</span>
                    <span className="block text-[10px] text-[#6E93C7]">Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Continuous Infinite Marquee Strip */}
      <div className="mt-16 md:mt-20 border-y border-[rgba(120,150,200,0.15)] bg-[#07152B]/80 py-3.5 overflow-hidden">
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
          {[...companyData.solutionMarquee, ...companyData.solutionMarquee, ...companyData.solutionMarquee].map(
            (item, index) => (
              <div key={index} className="inline-flex items-center gap-10 text-xs font-mono uppercase tracking-widest text-[#A9B8CF]/90">
                <span className="hover:text-[#FF8A3D] transition-colors">{item}</span>
                <span className="text-[#FF6B00]/70">/</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
