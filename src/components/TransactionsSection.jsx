import { useState } from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, X, FileText } from "lucide-react";
import { Reveal } from "./common/Motion";

export default function TransactionsSection() {
  const [selectedCase, setSelectedCase] = useState(null);

  const transactions = [
    {
      id: "ham-highway",
      index: "01.",
      amount: "₹250 Cr",
      status: "100% DISBURSED",
      style: "navy", // Card Style A: Deep Navy
      title: "National Highway HAM Concession",
      client: "DRM Infrastructure Projects",
      sector: "Transportation & Highway Concession",
      summary: "Sole financial advisor for debt syndication and financial closure of a Four-Laning National Highway HAM project under NHAI.",
      assignment: "Sole financial advisor for debt syndication and financial closure of a Four-Laning National Highway HAM project under NHAI.",
      scope: "Formulated dynamic financial model, structured lender appraisal memorandums, evaluated concession cash flows, and coordinated consortium bank approvals.",
      outcome: "Achieved 100% financial closure with a leading public and private bank consortium within 6 weeks at benchmark interest rates.",
      image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "solar-energy",
      index: "02.",
      amount: "₹85 Cr",
      status: "GREEN TERM LOAN",
      style: "accent", // Card Style B: High-Energy Accent
      title: "Utility Solar Clean Energy Portfolio",
      client: "Renewable EPC & Power Producer",
      sector: "Solar & Clean Energy IPP",
      summary: "Debt syndication and capital structuring for utility-scale ground-mounted and commercial solar portfolios.",
      assignment: "Debt syndication and capital structuring for utility-scale ground-mounted and rooftop commercial solar portfolios.",
      scope: "Conducted tariff sensitivity modeling, bankable PPA analysis, techno-economic feasibility (TEV) validation, and green term loan negotiation.",
      outcome: "Secured long-tenor debt sanctions from specialized renewable energy lenders, lowering weighted borrowing costs by 140 bps.",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "epc-infra",
      index: "03.",
      amount: "₹65 Cr",
      status: "EPC CONSORTIUM",
      style: "photo", // Card Style C: Cinematic Project Photo
      title: "Industrial EPC Core Infrastructure",
      client: "Infrastructure Engineering Contractor",
      sector: "Industrial Infrastructure & Energy EPC",
      summary: "Comprehensive working capital, bank guarantee (BG), and letter of credit (LC) syndication for major EPC contract execution.",
      assignment: "Comprehensive working capital, bank guarantee (BG), and letter of credit (LC) syndication for major EPC contract execution.",
      scope: "Assessed order-book cash flows, restructured existing banking limits, ring-fenced project milestones, and negotiated multi-bank consortium lines.",
      outcome: "Expanded non-fund and fund-based credit limits, enabling timely procurement mobilization and enhanced balance-sheet liquidity.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "mezzanine-mfg",
      index: "04.",
      amount: "₹150 Cr",
      status: "MEZZANINE DEBT",
      style: "navy",
      title: "Advanced Materials & Chemical Plant",
      client: "Chrome Silicon & Industrial Chemicals",
      sector: "Automated Precision Manufacturing",
      summary: "Structured hybrid debt and corporate expansion lines with Tier-1 public sector bank consortium.",
      assignment: "Structuring debt financing for a greenfield automated materials manufacturing facility.",
      scope: "Detailed financial model, lender DPR presentation, sensitivity testing on feedstock volatility, and multi-lender appraisal.",
      outcome: "Sanctioned 10-year senior debt package with 18-month construction moratorium.",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "hospital-infra",
      index: "05.",
      amount: "₹120 Cr",
      status: "CONSORTIUM LOAN",
      style: "accent",
      title: "Super-Specialty Hospital Concession",
      client: "Regional Healthcare Network",
      sector: "Healthcare & Diagnostics",
      summary: "Consortium project term debt for 350-bed tertiary care healthcare facility in Hyderabad.",
      assignment: "Debt syndication for super-specialty hospital infrastructure and medical equipment funding.",
      scope: "Patient footfall and ARPOB modeling, equipment supplier LC facilities, and lead banker alignment.",
      outcome: "Achieved full financial closure with State Bank of India as lead lender.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  // Quadruple for seamless infinite carousel
  const carouselTransactions = [
    ...transactions,
    ...transactions,
    ...transactions,
    ...transactions
  ];

  return (
    <section
      id="transactions"
      className="py-20 md:py-28 relative bg-[#081B33] text-white overflow-hidden border-b border-white/10"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10 mb-12 sm:mb-16">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                            */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <Reveal delay={50}>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] font-sans">
                Our Track Record
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
                Landmark syndicated debt and infrastructure transactions we have closed.
              </p>
            </Reveal>
          </div>

          {/* Quick Stats Pill */}
          <Reveal delay={200} className="shrink-0">
            <div className="p-4 rounded-2xl bg-white/05 border border-white/10 backdrop-blur-md text-right">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                Total Volume Closed
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#FF5500] tabular-nums">
                ₹2,500+ Cr
              </span>
            </div>
          </Reveal>
        </div>

      </div>

      {/* ======================================================== */}
      {/* SEAMLESS INFINITE HORIZONTAL CAROUSEL TRACK               */}
      {/* (image_b1be602b.png signature card architecture)         */}
      {/* ======================================================== */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        
        {/* Soft edge gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#081B33] via-[#081B33]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#081B33] via-[#081B33]/80 to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee-cards flex items-stretch gap-6 sm:gap-8 whitespace-nowrap">
          {carouselTransactions.map((tx, idx) => (
            <div
              key={`${tx.id}-${idx}`}
              onClick={() => setSelectedCase(tx)}
              className="w-[320px] sm:w-[380px] h-[480px] sm:h-[510px] shrink-0 group cursor-pointer relative"
            >
              {/* -------------------------------------------------- */}
              {/* CARD STYLE A: Deep Obsidian-Navy Institutional     */}
              {/* -------------------------------------------------- */}
              {tx.style === "navy" && (
                <div className="w-full h-full rounded-3xl p-7 sm:p-8 bg-[#0F2744] border border-white/12 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Top: Index number and delicate hairline */}
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="font-mono text-sm font-bold text-slate-400">
                        {tx.index}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {tx.status}
                      </span>
                    </div>

                    {/* Money & Value Highlight (Prominently displayed) */}
                    <div className="pt-6">
                      <div className="text-4xl sm:text-5xl font-extrabold font-mono text-[#FF5500] tabular-nums tracking-tight">
                        {tx.amount}
                      </div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mt-1">
                        Sanctioned Facility
                      </span>
                    </div>

                    {/* Mandate Title & Client */}
                    <div className="pt-5 space-y-1.5 whitespace-normal">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-[#FF8A3D] transition-colors">
                        {tx.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-300">
                        {tx.client}
                      </p>
                    </div>

                    {/* Concise Summary */}
                    <p className="pt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal whitespace-normal line-clamp-3">
                      {tx.summary}
                    </p>
                  </div>

                  {/* Bottom: Signature Corner Notch with Circular Action Button */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors underline underline-offset-4">
                      View Mandate Dossier
                    </span>

                    {/* Nested Circular Arrow Button (image_b1be602b.png style) */}
                    <div className="w-11 h-11 rounded-full bg-[#D4F932] text-[#002244] flex items-center justify-center font-bold shadow-md transform group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              )}

              {/* -------------------------------------------------- */}
              {/* CARD STYLE B: High-Energy Accent Surface (Lime/Gold)*/}
              {/* -------------------------------------------------- */}
              {tx.style === "accent" && (
                <div className="w-full h-full rounded-3xl p-7 sm:p-8 bg-[#D4F932] text-[#002244] border border-[#D4F932] shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Top: Index number and delicate hairline */}
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-black/10">
                      <span className="font-mono text-sm font-bold text-[#002244]/60">
                        {tx.index}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-black/10 text-[#002244] border border-black/15">
                        {tx.status}
                      </span>
                    </div>

                    {/* Money & Value Highlight (Prominently displayed) */}
                    <div className="pt-6">
                      <div className="text-4xl sm:text-5xl font-extrabold font-mono text-[#002244] tabular-nums tracking-tight">
                        {tx.amount}
                      </div>
                      <span className="text-xs font-mono text-[#002244]/70 uppercase tracking-wider block mt-1 font-semibold">
                        Sanctioned Facility
                      </span>
                    </div>

                    {/* Mandate Title & Client */}
                    <div className="pt-5 space-y-1.5 whitespace-normal">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#002244] tracking-tight leading-snug">
                        {tx.title}
                      </h3>
                      <p className="text-xs font-mono text-[#002244]/80 font-bold">
                        {tx.client}
                      </p>
                    </div>

                    {/* Concise Summary */}
                    <p className="pt-3 text-xs sm:text-sm text-[#002244]/90 leading-relaxed font-medium whitespace-normal line-clamp-2">
                      {tx.summary}
                    </p>
                  </div>

                  {/* Cutout Project Image rising from bottom */}
                  <div className="my-2 h-24 w-full rounded-2xl overflow-hidden shadow-inner border border-black/10">
                    <img
                      src={tx.image}
                      alt={tx.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Bottom: Signature Corner Notch with Circular Action Button */}
                  <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#002244] underline underline-offset-4">
                      View Mandate Dossier
                    </span>

                    {/* Nested Circular Arrow Button (image_b1be602b.png style) */}
                    <div className="w-11 h-11 rounded-full bg-[#002244] text-[#D4F932] flex items-center justify-center font-bold shadow-md transform group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              )}

              {/* -------------------------------------------------- */}
              {/* CARD STYLE C: Cinematic Project Photo Card         */}
              {/* -------------------------------------------------- */}
              {tx.style === "photo" && (
                <div className="w-full h-full rounded-3xl p-7 sm:p-8 border border-white/15 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden bg-black">
                  
                  {/* Full background image with dark contrast gradient */}
                  <img
                    src={tx.image}
                    alt={tx.title}
                    className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-75 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 pointer-events-none" />

                  {/* Top: Index number and delicate hairline */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between pb-3 border-b border-white/20">
                      <span className="font-mono text-sm font-bold text-slate-300">
                        {tx.index}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#FF5500] text-white shadow-xs">
                        {tx.status}
                      </span>
                    </div>

                    {/* Money & Value Highlight (Prominently displayed) */}
                    <div className="pt-6">
                      <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tabular-nums tracking-tight">
                        {tx.amount}
                      </div>
                      <span className="text-xs font-mono text-amber-300 uppercase tracking-wider block mt-1 font-semibold">
                        Sanctioned Facility
                      </span>
                    </div>

                    {/* Mandate Title & Client */}
                    <div className="pt-5 space-y-1.5 whitespace-normal">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-amber-200 transition-colors">
                        {tx.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-200 font-medium">
                        {tx.client}
                      </p>
                    </div>

                    {/* Concise Summary */}
                    <p className="pt-3 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal whitespace-normal line-clamp-3">
                      {tx.summary}
                    </p>
                  </div>

                  {/* Bottom: Signature Corner Notch with Circular Action Button */}
                  <div className="pt-6 border-t border-white/20 flex items-center justify-between relative z-10">
                    <span className="text-xs font-bold text-white underline underline-offset-4">
                      View Mandate Dossier
                    </span>

                    {/* Nested Circular Arrow Button (image_b1be602b.png style) */}
                    <div className="w-11 h-11 rounded-full bg-white text-[#002244] flex items-center justify-center font-bold shadow-md transform group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>

      {/* ======================================================== */}
      {/* DETAILED TRANSACTION DOSSIER MODAL                       */}
      {/* ======================================================== */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="w-full max-w-3xl rounded-3xl bg-[#0A2240] text-white border border-white/15 p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#FF5500] text-white">
                  {selectedCase.status}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {selectedCase.sector}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-1">
                {selectedCase.title}
              </h3>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#FF5500] tabular-nums pt-1">
                {selectedCase.amount}
              </div>
            </div>

            {/* Structured Breakdown: Assignment, Scope, Outcome */}
            <div className="space-y-4 pt-6 mt-6 border-t border-white/10">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/05 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#FF8A3D] font-bold mb-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>1. Assignment</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  {selectedCase.assignment}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/05 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan-300 font-bold mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>2. Scope & Execution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  {selectedCase.scope}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/05 border border-emerald-500/30">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-bold mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>3. Transaction Outcome</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-normal">
                  {selectedCase.outcome}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Client: {selectedCase.client} • Senior Partner Lead
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedCase(null)}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#FF5500] hover:bg-[#FF661A] transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Discuss Similar Mandate
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
