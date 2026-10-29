import { useState } from "react";
import {
  ArrowRight,
  Mail,
  User,
  Building2,
  Award
} from "lucide-react";
import { companyData } from "../data/companyData";
import { Reveal, TiltCard } from "./common/Motion";

export default function LeadershipSection() {
  const [pradeepImgError, setPradeepImgError] = useState(false);
  const [anandImgError, setAnandImgError] = useState(false);
  const [teamImgErrors, setTeamImgErrors] = useState({});

  const handleTeamImgError = (name) => {
    setTeamImgErrors((prev) => ({ ...prev, [name]: true }));
  };

  // Quadruple team list for seamless infinite carousel
  const infiniteTeam = [
    ...companyData.employees,
    ...companyData.employees,
    ...companyData.employees,
    ...companyData.employees
  ];

  return (
    <section id="leadership" className="py-20 md:py-28 relative bg-white text-[#1D1D1F] border-b border-black/[0.05] overflow-hidden">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 space-y-24 md:space-y-32">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#002244] mb-3 font-sans">
            Our Leadership
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed">
            Senior financial partners leading every mandate.
          </p>
        </Reveal>

        {/* ======================================================== */}
        {/* 1. EXECUTIVE FOUNDERS SPOTLIGHT (Alternating 2-Row Split) */}
        {/* ======================================================== */}
        <div className="space-y-16 md:space-y-24">
          
          {/* ------------------------------------------------------ */}
          {/* ROW 1: FOUNDER & MANAGING PARTNER (Pradeep Tanuku)     */}
          {/* Text Left + Large Portrait Photo Right                  */}
          {/* ------------------------------------------------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Name, Title, Bio, Action Buttons */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7 order-2 lg:order-1">
              <Reveal delay={50} className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#FF5500] uppercase tracking-wider block">
                  Founder &amp; Managing Partner
                </span>
                <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#002244] leading-[1.12]">
                  Pradeep Tanuku
                </h3>
              </Reveal>

              <Reveal delay={120}>
                <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
                  Pradeep Tanuku is a qualified Chartered Accountant with over 15 years of institutional experience across corporate debt syndication, project appraisal, and balance-sheet structuring. He established Prosync to provide mid-market enterprises and infrastructure sponsors with direct senior partner oversight from financial modeling through to bank sanction and disbursement.
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={200} className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  className="px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#002244] hover:bg-[#FF5500] transition-all shadow-md active:scale-95 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Discuss a Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`mailto:${companyData.email}?subject=Mandate%20Inquiry%20-%20Attention%20Pradeep%20Tanuku`}
                  className="px-7 py-3.5 rounded-full text-xs font-semibold text-[#002244] bg-[#F5F5F7] hover:bg-slate-200 border border-black/[0.08] transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Contact Partner</span>
                </a>
              </Reveal>
            </div>

            {/* Right Column: Large Portrait Photo Card */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <Reveal delay={150}>
                <TiltCard
                  maxTilt={4}
                  scale={1.015}
                  glowColor="rgba(0, 34, 68, 0.08)"
                  className="rounded-3xl overflow-hidden"
                >
                  <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-slate-100 border border-black/[0.08] shadow-[0_20px_50px_rgba(0,34,68,0.12)] group">
                    {!pradeepImgError ? (
                      <img
                        src="https://res.cloudinary.com/dfr0zghtc/image/upload/v1793095926/pradeepsir_ffnpct.jpg"
                        alt="Pradeep Tanuku - Founder & Managing Partner"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => setPradeepImgError(true)}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col justify-between p-8 bg-gradient-to-br from-[#0A2240] to-[#041224] text-white">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono uppercase tracking-widest text-[#FF8A3D] font-bold">
                            Leadership
                          </span>
                          <Award className="w-6 h-6 text-[#FF8A3D]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-white">Pradeep Tanuku</h3>
                          <p className="text-xs text-slate-300 font-mono">Chartered Accountant • Founder</p>
                        </div>
                        <div className="text-xs font-mono text-slate-400 border-t border-white/10 pt-3">
                          Prosync Advisory Private Limited
                        </div>
                      </div>
                    )}

                    {/* Bottom frosted caption badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/92 backdrop-blur-md border border-white/40 shadow-sm flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-[#002244]">Pradeep Tanuku</h3>
                        <span className="text-[11px] font-mono text-[#FF5500] font-semibold block">
                          Founder & Managing Partner
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#6E6E73] px-2.5 py-1 rounded-md bg-slate-100 font-medium">
                        FCA • 15+ Yrs
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>

          </div>

          {/* ------------------------------------------------------ */}
          {/* ROW 2: BANKING & TRANSACTIONS PARTNER (Anand Bandam)   */}
          {/* Inverted Layout: Large Photo Left + Content Right      */}
          {/* ------------------------------------------------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-4">
            
            {/* Left Column: Large Portrait Photo Card */}
            <div className="lg:col-span-5 order-1">
              <Reveal delay={150}>
                <TiltCard
                  maxTilt={4}
                  scale={1.015}
                  glowColor="rgba(255, 85, 0, 0.08)"
                  className="rounded-3xl overflow-hidden"
                >
                  <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-slate-100 border border-black/[0.08] shadow-[0_20px_50px_rgba(0,34,68,0.12)] group">
                    {!anandImgError ? (
                      <img
                        src="https://res.cloudinary.com/dfr0zghtc/image/upload/v1793095926/anandsir_jusx9i.jpg"
                        alt="Anand Bandam - Partner Banking & Transactions"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => setAnandImgError(true)}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col justify-between p-8 bg-gradient-to-br from-[#0F2744] via-[#0A1D36] to-[#061426] text-white">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                            Banking Desk
                          </span>
                          <Building2 className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-white">Anand Bandam</h3>
                          <p className="text-xs text-slate-300 font-mono">Banking & Credit Syndication</p>
                        </div>
                        <div className="text-xs font-mono text-slate-400 border-t border-white/10 pt-3">
                          Consortium Lead • Tier-1 Banks
                        </div>
                      </div>
                    )}

                    {/* Bottom frosted caption badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/92 backdrop-blur-md border border-white/40 shadow-sm flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-[#002244]">Anand Bandam</h3>
                        <span className="text-[11px] font-mono text-[#002244] font-semibold block">
                          Partner - Banking & Transactions
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-700 px-2.5 py-1 rounded-md bg-emerald-50 font-semibold border border-emerald-200/50">
                        Consortium Lead
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>

            {/* Right Column: Name, Title, Bio, Action Buttons */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7 order-2">
              <Reveal delay={50} className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#002244] uppercase tracking-wider block">
                  Partner – Banking &amp; Transactions
                </span>
                <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#002244] leading-[1.12]">
                  Anand Bandam
                </h3>
              </Reveal>

              <Reveal delay={120}>
                <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
                  Anand Bandam spearheads corporate banking institutional relations and syndicated loan placement. His extensive experience across public sector banking leadership and credit committees enables Prosync to structure bankable proposals that address lender covenants, mitigate risk premiums, and expedite financial closure.
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={200} className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  className="px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#002244] hover:bg-[#FF5500] transition-all shadow-md active:scale-95 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Discuss a Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`mailto:${companyData.email}?subject=Mandate%20Inquiry%20-%20Attention%20Anand%20Bandam`}
                  className="px-7 py-3.5 rounded-full text-xs font-semibold text-[#002244] bg-[#F5F5F7] hover:bg-slate-200 border border-black/[0.08] transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Contact Partner</span>
                </a>
              </Reveal>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* 2. "MEET OUR TEAM" INFINITE SCROLLING CAROUSEL           */}
        {/* ======================================================== */}
        <div id="team" className="pt-6">
          
          {/* Centered Section Header */}
          <Reveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#002244] mb-3 font-sans">
              Meet Our Team
            </h2>
            <p className="text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed">
              The specialists supporting your financial transactions.
            </p>
          </Reveal>

          {/* Seamless Infinite Horizontal Carousel Track */}
          <div className="relative w-full overflow-hidden py-6">
            {/* Edge fade gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-cards flex items-stretch gap-6 sm:gap-7 whitespace-nowrap">
              {infiniteTeam.map((member, index) => {
                const hasError = teamImgErrors[`${member.name}-${index}`];
                const isManager = Boolean(member.role?.toLowerCase().includes("manager"));

                return (
                  <div
                    key={`${member.name}-${index}`}
                    className="w-[240px] sm:w-[270px] h-[340px] sm:h-[380px] rounded-3xl overflow-hidden relative group shrink-0 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] select-none border border-black/[0.08] bg-[#0A1E38]"
                  >
                    {/* Portrait Photo with Monochrome-to-Color Hover Effect */}
                    {member.image && !hasError ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => handleTeamImgError(`${member.name}-${index}`)}
                        className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                      />
                    ) : (
                      // Clean fallback avatar container
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0F2744] via-[#0A1D36] to-[#061426] p-6 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white font-mono font-bold text-xl mb-3 border border-white/15">
                          {member.initials || <User className="w-7 h-7 text-slate-300" />}
                        </div>
                        <h4 className="text-base font-bold text-white tracking-tight">{member.name}</h4>
                        <p className="text-xs text-slate-300 mt-1">{member.role || "Corporate Finance"}</p>
                      </div>
                    )}

                    {/* Dark gradient vignette over photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Manager Chip on Top Right */}
                    {isManager && (
                      <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-1 rounded-md bg-[#FF5500] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-xs">
                        Manager
                      </div>
                    )}

                    {/* Bottom Frosted Glass Overlay (image_bfa67e0f.png reference style) */}
                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-white/92 backdrop-blur-md border border-white/40 shadow-sm text-left transition-all duration-300 group-hover:bg-white">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-[#002244] tracking-tight truncate group-hover:text-[#FF5500] transition-colors">
                          {member.name}
                        </h4>
                        {member.department && (
                          <span className="text-[10px] font-mono text-[#6E6E73] truncate pl-1">
                            {member.department.split("&")[0].trim()}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#475569] font-medium truncate mt-0.5">
                        {member.role || "Financial Advisory"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Career Contact Strip */}
          <div className="mt-8 text-center text-xs text-[#6E6E73] font-mono">
            <span>Direct partner-led analyst desks • Full compliance with SEBI and RBI statutory standards</span>
          </div>

        </div>

      </div>
    </section>
  );
}
