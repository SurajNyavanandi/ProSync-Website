import { useState } from "react";
import {
  ArrowRight,
  Mail,
  User,
  Building2,
  Award
} from "lucide-react";
import { companyData } from "../../data/companyData";
import { Reveal, TiltCard } from "../common/Motion";

export default function LeadershipSection() {
  const [pradeepImgError, setPradeepImgError] = useState(false);
  const [anandImgError, setAnandImgError] = useState(false);
  const [prasadImgError, setPrasadImgError] = useState(false);
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
    <section id="leadership" className="py-20 md:py-28 relative bg-white text-brand-text-dark border-b border-black/5 overflow-hidden">
      <div className="w-full max-w-310 mx-auto px-5 sm:px-8 space-y-24 md:space-y-28">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-brand-text-dark">
            Our Leadership
          </h2>
        </Reveal>

        {/* 1. MINIMAL PROFILE SPOTLIGHT CARDS */}
        <div className="space-y-16 md:space-y-20">
          
          {/* ROW 1: FOUNDER & MANAGING PARTNER (Pradeep Tanuku) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Concise Narrative */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <Reveal delay={50} className="space-y-2">
                <span className="text-xs font-mono font-medium text-brand-navy uppercase tracking-wider block">
                  Founder
                </span>
                <h3 className="text-3xl sm:text-5xl font-medium tracking-tight text-brand-text-dark leading-[1.12]">
                  Pradeep Tanuku
                </h3>
                <span className="text-xs font-mono text-brand-text-light block">
                  Chartered Accountant • 15+ Years Corporate Finance
                </span>
              </Reveal>

              <Reveal delay={120}>
                <p className="text-base sm:text-lg text-[#515154] leading-relaxed font-normal">
                  Pradeep Tanuku leads Prosync with over 15 years of institutional experience across syndicated debt structuring, balance-sheet engineering, and project appraisals. He personally steers financial modeling and bank negotiations to ensure maximum capital certainty and rapid sanction for enterprise promoters.
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={200} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#contact"
                  className="px-7 py-3.5 rounded-full text-xs font-bold font-heading text-white bg-brand-navy hover:bg-brand-orange transition-all shadow-md active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                >
                  <span>Discuss a Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="mailto:pradeep.tanuku@gmail.com?subject=Mandate%20Inquiry%20-%20Attention%20Pradeep%20Tanuku"
                  className="px-7 py-3.5 rounded-full text-xs font-semibold font-heading text-brand-navy bg-white hover:bg-slate-100 border border-black/8 transition-all inline-flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Contact Partner</span>
                </a>
              </Reveal>
            </div>

            {/* Right Column: High-Res Portrait Photo Card */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <Reveal delay={150}>
                <TiltCard
                  maxTilt={4}
                  scale={1.015}
                  glowColor="rgba(0, 34, 68, 0.08)"
                  className="rounded-3xl overflow-hidden shadow-xl"
                >
                  <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden bg-slate-100 border border-black/8 group">
                    {!pradeepImgError ? (
                      <img
                        src="https://res.cloudinary.com/dfr0zghtc/image/upload/v1793095926/pradeepsir_ffnpct.jpg"
                        alt="Pradeep Tanuku - Founder"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => setPradeepImgError(true)}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col justify-between p-8 bg-brand-navy text-white">
                        <Award className="w-8 h-8 text-brand-orange-light" />
                        <h3 className="text-2xl font-bold font-heading">Pradeep Tanuku</h3>
                        <span className="text-xs font-mono text-slate-300">Founder</span>
                      </div>
                    )}

                    {/* Minimalist Glass Caption */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold font-heading text-brand-navy">Pradeep Tanuku</h4>
                        <span className="text-[11px] font-mono text-brand-orange font-semibold block">
                          Founder
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-brand-text-light px-2.5 py-1 rounded-md bg-slate-100 font-medium">
                        CA • 15+ Yrs
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>

          </div>

          {/* ROW 2: BANKING & TRANSACTIONS PARTNER (Anand Bandham) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-4">
            
            {/* Left Column: High-Res Portrait Photo Card */}
            <div className="lg:col-span-5 order-1">
              <Reveal delay={150}>
                <TiltCard
                  maxTilt={4}
                  scale={1.015}
                  glowColor="rgba(255, 85, 0, 0.08)"
                  className="rounded-3xl overflow-hidden shadow-xl"
                >
                  <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden bg-slate-100 border border-black/8 group">
                    {!anandImgError ? (
                      <img
                        src="https://res.cloudinary.com/dfr0zghtc/image/upload/v1793095926/anandsir_jusx9i.jpg"
                        alt="Anand Bandham - Partner Banking & Transactions"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => setAnandImgError(true)}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col justify-between p-8 bg-brand-navy text-white">
                        <Building2 className="w-8 h-8 text-emerald-400" />
                        <h3 className="text-2xl font-bold font-heading">Anand Bandham</h3>
                        <span className="text-xs font-mono text-slate-300">Banking Partner</span>
                      </div>
                    )}

                    {/* Minimalist Glass Caption */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold font-heading text-brand-navy">Anand Bandham</h4>
                        <span className="text-[11px] font-mono text-brand-navy font-semibold block">
                          Partner – Banking &amp; Transactions
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>

            {/* Right Column: Concise Narrative */}
            <div className="lg:col-span-7 space-y-6 order-2">
              <Reveal delay={50} className="space-y-2">
                <span className="text-xs font-mono font-medium text-brand-navy uppercase tracking-wider block">
                  Partner – Banking &amp; Transactions
                </span>
                <h3 className="text-3xl sm:text-5xl font-medium tracking-tight text-brand-text-dark leading-[1.12]">
                  Anand Bandham
                </h3>
                <span className="text-xs font-mono text-brand-text-light block">
                  Banking Relationships • Consortium Syndication Specialist
                </span>
              </Reveal>

              <Reveal delay={120}>
                <p className="text-base sm:text-lg text-[#515154] leading-relaxed font-normal">
                  Anand Bandham leads Prosync's institutional banking relationships and syndicated debt distribution. Leveraging extensive senior banking connections, he aligns proposals with lender appraisal policies, optimizes debt terms, and drives consortium closures without delays.
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={200} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#contact"
                  className="px-7 py-3.5 rounded-full text-xs font-bold font-heading text-white bg-brand-navy hover:bg-brand-orange transition-all shadow-md active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                >
                  <span>Discuss a Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`mailto:${companyData.email}?subject=Mandate%20Inquiry%20-%20Attention%20Anand%20Bandham`}
                  className="px-7 py-3.5 rounded-full text-xs font-semibold font-heading text-brand-navy bg-white hover:bg-slate-100 border border-black/8 transition-all inline-flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Contact Partner</span>
                </a>
              </Reveal>
            </div>

          </div>

          {/* ROW 3: FINANCIAL DUE DILIGENCE PARTNER (Prasad) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-4">
            
            {/* Left Column: Concise Narrative */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <Reveal delay={50} className="space-y-2">
                <span className="text-xs font-mono font-medium text-brand-navy uppercase tracking-wider block">
                  Partner – Financial Due Diligence
                </span>
                <h3 className="text-3xl sm:text-5xl font-medium tracking-tight text-brand-text-dark leading-[1.12]">
                  Prasad
                </h3>
                <span className="text-xs font-mono text-brand-text-light block">
                  Chartered Accountant • Quality of Earnings &amp; Risk Auditing
                </span>
              </Reveal>

              <Reveal delay={120}>
                <p className="text-base sm:text-lg text-[#515154] leading-relaxed font-normal">
                  Prasad is a Chartered Accountant who leads Prosync's Financial Due Diligence practice. He brings specialized expertise in forensic balance sheet analysis, Quality of Earnings (QoE) auditing, working capital evaluation, and financial risk assessment for corporate acquisitions and institutional credit syndication.
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={200} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#contact"
                  className="px-7 py-3.5 rounded-full text-xs font-bold font-heading text-white bg-brand-navy hover:bg-brand-orange transition-all shadow-md active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                >
                  <span>Discuss a Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="mailto:prasadnaidu2806@gmail.com?subject=Mandate%20Inquiry%20-%20Attention%20Prasad"
                  className="px-7 py-3.5 rounded-full text-xs font-semibold font-heading text-brand-navy bg-white hover:bg-slate-100 border border-black/8 transition-all inline-flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Contact Partner</span>
                </a>
              </Reveal>
            </div>

            {/* Right Column: High-Res Portrait Photo Card */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <Reveal delay={150}>
                <TiltCard
                  maxTilt={4}
                  scale={1.015}
                  glowColor="rgba(0, 34, 68, 0.08)"
                  className="rounded-3xl overflow-hidden shadow-xl"
                >
                  <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden bg-slate-100 border border-black/8 group">
                    {!prasadImgError ? (
                      <img
                        src="https://res.cloudinary.com/dfr0zghtc/image/upload/v1795512215/Warm_Smiling_Portrait_in_Burgundy_pmxvss.jpg"
                        alt="Prasad - Partner Financial Due Diligence"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => setPrasadImgError(true)}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col justify-between p-8 bg-brand-navy text-white">
                        <Building2 className="w-8 h-8 text-brand-orange-light" />
                        <h3 className="text-2xl font-bold font-heading">Prasad</h3>
                        <span className="text-xs font-mono text-slate-300">CA • Financial Due Diligence Partner</span>
                      </div>
                    )}

                    {/* Minimalist Glass Caption */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold font-heading text-brand-navy">Prasad</h4>
                        <span className="text-[11px] font-mono text-brand-orange font-semibold block">
                          Partner – Financial Due Diligence
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-brand-text-light px-2.5 py-1 rounded-md bg-slate-100 font-medium">
                        CA
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>

          </div>

        </div>

        {/* 2. "MEET OUR TEAM" HORIZONTAL MARQUEE */}
        <div id="team" className="pt-6">
          
          <Reveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-brand-text-dark">
              Meet Our Team
            </h2>
          </Reveal>

          {/* Marquee Track with Grayscale-to-Color Hover Effect */}
          <div className="relative w-full overflow-hidden py-4 group">
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-linear-to-r from-brand-gray-card via-brand-gray-card/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-linear-to-l from-brand-gray-card via-brand-gray-card/80 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-cards flex items-stretch gap-6 whitespace-nowrap hover:[animation-play-state:paused]">
              {infiniteTeam.map((member, index) => {
                const hasError = teamImgErrors[`${member.name}-${index}`];
                const isManager = Boolean(member.role?.toLowerCase().includes("manager"));

                return (
                  <div
                    key={`${member.name}-${index}`}
                    className="w-60 sm:w-65 h-82.5 sm:h-90 rounded-3xl overflow-hidden relative group/card shrink-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 select-none border border-black/8 bg-[#0A1E38]"
                  >
                    {member.image && !hasError ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => handleTeamImgError(`${member.name}-${index}`)}
                        className="w-full h-full object-cover object-top filter grayscale group-hover/card:grayscale-0 transition-all duration-500 transform group-hover/card:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-[#0F2744] to-[#061426] p-6 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white font-mono font-bold text-lg mb-2">
                          {member.initials || <User className="w-6 h-6 text-slate-300" />}
                        </div>
                        <h4 className="text-sm font-bold font-heading text-white">{member.name}</h4>
                        <p className="text-[11px] font-body text-slate-300 mt-0.5">{member.role}</p>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    {isManager && (
                      <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-md bg-brand-orange text-white text-[9px] font-mono font-bold tracking-wider uppercase">
                        Lead
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xs text-left">
                      <h4 className="text-xs font-bold font-heading text-brand-navy tracking-tight truncate group-hover/card:text-brand-orange transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-[11px] font-body text-brand-text-light truncate mt-0.5">
                        {member.role || "Financial Advisory"}
                      </p>
                    </div>
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
