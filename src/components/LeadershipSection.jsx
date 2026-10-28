import { useState, useEffect } from "react";
import { ArrowUpRight, ShieldCheck, User } from "lucide-react";
import { companyData } from "../data/companyData";

export default function LeadershipSection() {
  const [visibleCards, setVisibleCards] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-observe-id");
            if (id) {
              setVisibleCards((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll("[data-observe-id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="leadership" className="py-16 md:py-24 relative bg-[#07152B] border-y border-[rgba(120,150,200,0.15)] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Section Header */}
        <div className="max-w-xl space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[#FF8A3D] font-medium block">
            Advisory Leadership
          </span>
          <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white/95">
            Senior Partners & Deal Team
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] font-light">
            Direct partner oversight across every mandate and lender negotiation.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 1. EXECUTIVE LEADERS (Pradeep Tanuku & Anand Bandam) */}
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
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-[0.98]"
                }`}
              >
                <div className="fintech-panel rounded-3xl p-6 sm:p-10 lg:p-14 border border-[rgba(120,150,200,0.22)] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group relative overflow-hidden bg-[#0D1F3C]/95">
                  <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-[#FF6B00] via-[#FF8A3D] to-transparent" />

                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    leader.reverse ? "lg:flex-row-reverse" : ""
                  }`}>

                    {/* Image Column */}
                    <div className={`lg:col-span-5 ${leader.reverse ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="relative mx-auto max-w-md lg:max-w-none">
                        <div
                          aria-hidden="true"
                          className="absolute -inset-3 bg-gradient-to-tr from-[#FF6B00]/20 via-[#38BDF8]/15 to-[#FF8A3D]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
                        />
                        <div className="relative rounded-2xl overflow-hidden bg-[#0A1A33] border-2 border-[rgba(120,150,200,0.25)] shadow-2xl aspect-[4/5] sm:aspect-[4/5]">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            onError={(e) => {
                              e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
                            }}
                            className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-10" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33]/80 via-transparent to-transparent pointer-events-none" />

                          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 rounded-xl bg-[#0A1A33]/90 backdrop-blur-md border border-[rgba(120,150,200,0.25)]">
                            <span className="text-xs font-mono font-semibold text-[#FF8A3D] uppercase tracking-wider">
                              {leader.role}
                            </span>
                            <div className="flex items-center gap-1.5 text-[11px] text-[#38BDF8] font-mono">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                              <span>Prosync Advisory</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Editorial Content Column */}
                    <div className={`lg:col-span-7 space-y-6 ${leader.reverse ? "lg:order-1" : "lg:order-2"}`}>
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F8FAFC] font-sans">
                          {leader.name}
                        </h3>

                        <div className="mt-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#38BDF8] font-mono">
                          {leader.role}
                        </div>

                        <div className="w-16 h-0.5 bg-[#FF6B00] mt-4 mb-6 rounded-full" />
                      </div>

                      <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal">
                        {leader.bio}
                      </p>

                      <div className="pt-2">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-3">
                          Core Practice Competencies
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {leader.focus.map((item) => (
                            <span
                              key={item}
                              className="px-3.5 py-1.5 rounded-lg bg-[#0A1A33] border border-[rgba(120,150,200,0.2)] text-xs font-medium text-[#F8FAFC] flex items-center gap-2 group-hover:border-[#38BDF8]/40 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
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
        {/* 2. TEAM SECTION: Blank Avatar Placeholders & Exact 6 Names */}
        {/* ======================================================== */}
        <div id="team" className="pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <h3 className="text-xl sm:text-2xl font-bold tracking-widest uppercase text-[#F8FAFC] font-sans">
              INVESTMENT BANKING & DPR ADVISORY TEAM
            </h3>
            <div className="w-20 h-0.5 bg-[#FF6B00] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-[#94A3B8] pt-2">
              Our multidisciplinary team of techno-economic analysts, chartered financial modelers, and full-stack deal engineers.
            </p>
          </div>

          {/* 6 Clean High-Contrast Cards Grid (No Fade-Out, 100% Clarity, Animated Motion) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyData.employees.map((member, idx) => {
              const isManager = member.role.toLowerCase().includes("manager");
              const floatClass = idx % 3 === 0 ? "animate-card-float-1" : idx % 3 === 1 ? "animate-card-float-2" : "animate-card-float-3";

              return (
                <div
                  key={member.name}
                  className={`fintech-panel ${floatClass} rounded-2xl p-6 bg-[#0D1F3C] border border-[rgba(120,150,200,0.25)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] shadow-lg flex items-center gap-5 hover:border-[#FF6B00]/70 hover:shadow-[0_16px_36px_rgba(255,107,0,0.18)] relative overflow-hidden group opacity-100 ${
                    isManager ? "border-[#FF6B00]/40 shadow-[0_8px_24px_rgba(255,107,0,0.12)]" : ""
                  }`}
                >
                  {/* Animated Top Orange Beam that glides across on hover */}
                  <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-[#FF6B00] via-[#FF8A3D] to-transparent group-hover:w-full transition-all duration-500 ease-out" />

                  {/* Modern Profile Photo or Minimalist Silhouette */}
                  <div className="relative w-16 h-16 rounded-2xl bg-[#0A1A33] border border-[rgba(120,150,200,0.3)] overflow-hidden flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 group-hover:border-[#FF6B00]/50 transition-all duration-300">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top filter contrast-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          if (e.currentTarget.nextSibling) {
                            e.currentTarget.nextSibling.style.display = "flex";
                          }
                        }}
                      />
                    ) : null}

                    {/* Initials Fallback if no photo or error loading */}
                    <div className={`flex flex-col items-center justify-center ${member.image ? "hidden" : "flex"}`}>
                      {member.initials ? (
                        <span className="text-sm font-mono font-bold text-[#A9B8CF] tracking-wider">
                          {member.initials}
                        </span>
                      ) : (
                        <User className="w-7 h-7 text-[#64748B] group-hover:text-[#38BDF8] transition-colors" />
                      )}
                    </div>

                    {/* Role Color Dot */}
                    <span
                      className={`absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full border border-[#0A1A33] z-10 ${
                        isManager ? "bg-[#FF6B00]" : "bg-[#10B981]"
                      }`}
                    />
                  </div>

                  {/* Member Name and Role Details */}
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-semibold text-[#F8FAFC] tracking-wide truncate group-hover:text-white transition-colors">
                        {member.name}
                      </h4>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded-md text-[#64748B] hover:text-[#38BDF8] hover:bg-white/[0.08] transition-colors"
                            aria-label={`${member.name} LinkedIn Profile`}
                          >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                          </a>
                        )}
                        {isManager && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FF6B00]/15 text-[#FF8A3D] border border-[#FF6B00]/30">
                            Manager
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-[#38BDF8] font-medium truncate">
                      {member.role}
                    </p>
                    <p className="text-[11px] font-mono text-[#64748B] truncate">
                      {member.department}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clean Careers Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-[#0D1F3C]/80 border border-[rgba(120,150,200,0.18)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h5 className="text-sm font-semibold text-[#F8FAFC]">
                Interested in joining our Investment Banking & DPR advisory desk?
              </h5>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                Please send your resume to our careers desk at{" "}
                <a href={`mailto:${companyData.email}`} className="text-[#38BDF8] font-mono hover:underline">
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
