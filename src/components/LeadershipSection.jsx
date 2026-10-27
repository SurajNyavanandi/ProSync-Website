import { useState, useEffect } from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function LeadershipSection() {
  const [visibleCards, setVisibleCards] = useState({});

  // Scroll-triggered reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-observe-id');
            if (id) {
              setVisibleCards((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('[data-observe-id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="leadership" className="py-24 md:py-32 relative bg-[#07152B]/70 fintech-grid-bg border-y border-[rgba(120,150,200,0.15)] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6E93C7]">
            <span>Executive Leadership</span>
            <span aria-hidden="true" className="text-[#FF6B00]">/</span>
            <span className="text-[#A9B8CF]">Senior Deal Leads</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F7FA]">
            Decades of transaction experience.{' '}
            <span className="italic text-[#FF8A3D]">Direct partner accountability.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A9B8CF] font-normal leading-relaxed">
            At Prosync, senior leaders personally design your financing structure, sit across from bank credit committees, and steer every round through to closing.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 1. EXECUTIVE LEADERS (Modeled after reference image layout) */}
        {/* ======================================================== */}
        <div className="space-y-20 lg:space-y-28 mb-32">
          {companyData.leadership.map((leader, index) => {
            const observeId = `leader-${index}`;
            const isVisible = visibleCards[observeId];
            
            return (
              <div
                key={leader.name}
                data-observe-id={observeId}
                className={`transition-all duration-700 ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-[0.98]'
                }`}
              >
                <div className="fintech-panel rounded-3xl p-6 sm:p-10 lg:p-14 border border-[rgba(120,150,200,0.22)] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group relative overflow-hidden bg-[#0D1F3C]/95">
                  {/* Subtle top corner gradient */}
                  <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-[#FF6B00] via-[#FF8A3D] to-transparent" />

                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    leader.reverse ? 'lg:flex-row-reverse' : ''
                  }`}>

                    {/* Image Column */}
                    <div className={`lg:col-span-5 ${leader.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative mx-auto max-w-md lg:max-w-none">
                        {/* Ambient glow behind portrait */}
                        <div
                          aria-hidden="true"
                          className="absolute -inset-3 bg-gradient-to-tr from-[#FF6B00]/20 via-[#6E93C7]/15 to-[#FF8A3D]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
                        />
                        {/* Portrait Frame */}
                        <div className="relative rounded-2xl overflow-hidden bg-[#0A1A33] border-2 border-[rgba(120,150,200,0.25)] shadow-2xl aspect-[4/5] sm:aspect-[4/5]">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            onError={(e) => {
                              // Fallback portrait if remote image fails
                              e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
                            }}
                            className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          {/* Inner Rim Highlight */}
                          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-10" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33]/80 via-transparent to-transparent pointer-events-none" />

                          {/* Badge tag on portrait */}
                          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 rounded-xl bg-[#0A1A33]/90 backdrop-blur-md border border-[rgba(120,150,200,0.25)]">
                            <span className="text-xs font-mono font-semibold text-[#FF8A3D] uppercase tracking-wider">
                              {leader.role}
                            </span>
                            <div className="flex items-center gap-1.5 text-[11px] text-[#6E93C7] font-mono">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
                              <span>Prosync Advisory</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Editorial Content Column (Directly matching reference image typography) */}
                    <div className={`lg:col-span-7 space-y-6 ${leader.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div>
                        {/* Leader Name (Bold sans-serif uppercase) */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F7FA] font-sans">
                          {leader.name}
                        </h3>

                        {/* Designation (Uppercase tracking) */}
                        <div className="mt-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#6E93C7] font-mono">
                          {leader.role}
                        </div>

                        {/* Thin horizontal accent divider (Reference design feature) */}
                        <div className="w-16 h-0.5 bg-[#FF6B00] mt-4 mb-6 rounded-full" />
                      </div>

                      {/* Editorial Bio Text */}
                      <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal">
                        {leader.bio}
                      </p>

                      {/* Advisory Focus Badges */}
                      <div className="pt-2">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#A9B8CF]/70 mb-3">
                          Core Practice Competencies
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {leader.focus.map((item) => (
                            <span
                              key={item}
                              className="px-3.5 py-1.5 rounded-lg bg-[#0A1A33] border border-[rgba(120,150,200,0.2)] text-xs font-medium text-[#F5F7FA] flex items-center gap-2 group-hover:border-[#FF6B00]/40 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>


                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* 2. TEAM & EMPLOYEES GRID (Matching Reference Image 2: INVESTMENT BANKING) */}
        {/* ======================================================== */}
        <div id="team" className="pt-8">
          {/* Centered Clean Section Header with Accent Bar */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <h3 className="text-xl sm:text-2xl font-bold tracking-widest uppercase text-[#F5F7FA] font-sans">
              INVESTMENT BANKING & DPA ADVISORY TEAM
            </h3>
            {/* Centered accent bar */}
            <div className="w-20 h-0.5 bg-[#FF6B00] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-[#A9B8CF] pt-2">
              Our multidisciplinary team of techno-economic analysts, chartered financial modelers, and credit execution managers.
            </p>
          </div>

          {/* 4-Column Responsive Photo Grid with Name Overlay (Matching Reference Screenshot) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {companyData.employees.map((member) => {
              const isManager = member.name.toLowerCase().includes('naveen');

              return (
                <div
                  key={member.name}
                  className={`group relative rounded-2xl overflow-hidden bg-[#0A1A33] border transition-all duration-300 hover:-translate-y-1.5 shadow-lg ${
                    isManager
                      ? 'border-[#FF6B00]/70 shadow-[0_12px_30px_rgba(255,107,0,0.18)]'
                      : 'border-[rgba(120,150,200,0.2)] hover:border-[#FF6B00]/40'
                  }`}
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0E203B]">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Gradient Scrim at bottom (Essential Reference Feature for name readability) */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#0A1A33] via-[#0A1A33]/40 to-transparent opacity-95 group-hover:opacity-90 transition-opacity"
                    />

                    {/* Manager Tag Badge */}
                    {isManager && (
                      <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-md bg-[#FF6B00] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                        Manager
                      </div>
                    )}

                    {/* Department Tag */}
                    <div className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded bg-[#0A1A33]/80 backdrop-blur-md border border-[rgba(120,150,200,0.25)] text-[10px] font-mono text-[#6E93C7]">
                      {member.department}
                    </div>

                    {/* Text Overlaid at the Bottom of Card (Matching Screenshot exactly) */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20 space-y-1">
                      <h4 className="text-base sm:text-lg font-bold text-white tracking-wide drop-shadow-md">
                        {member.name}
                      </h4>
                      <p className="text-xs text-[#CBD5E1] font-medium leading-tight">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Join Our Team Prompt (Simple English, Direct Resume Email) */}
          <div className="mt-12 p-6 rounded-2xl bg-[#0D1F3C] border border-[rgba(120,150,200,0.2)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h5 className="text-sm font-semibold text-[#F5F7FA]">
                Interested in joining our Investment Banking & DPA advisory desk?
              </h5>
              <p className="text-xs text-[#A9B8CF] mt-0.5">
                Please send your resume to our careers desk at{' '}
                <a href={`mailto:${companyData.email}`} className="text-[#FF8A3D] font-mono hover:underline">
                  {companyData.email}
                </a>.
              </p>
            </div>
            <a
              href={`mailto:${companyData.email}?subject=Job%20Application%20-%20Prosync%20Advisory`}
              className="btn-vivid-orange px-5 py-2.5 text-xs uppercase tracking-wider font-semibold whitespace-nowrap inline-flex items-center gap-2"
            >
              <span>Send Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
