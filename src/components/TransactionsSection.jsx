import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  FileText,
  ChevronDown,
  X
} from "lucide-react";
import { Reveal } from "./common/Motion";

export default function TransactionsSection() {
  const [selectedSector, setSelectedSector] = useState("all");
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [selectedModalCase, setSelectedModalCase] = useState(null);

  const transactions = [
    {
      id: "ham-highway",
      amount: "₹240 Cr",
      facility: "Project Debt & HAM Syndication",
      status: "100% DISBURSED",
      sector: "infrastructure",
      sectorLabel: "Infrastructure & Concessions",
      title: "National Highway HAM Concession",
      client: "DRM Infrastructure Projects",
      leadBank: "State Bank of India & Consortium",
      tenor: "15 Years Door-to-Door",
      spread: "MCLR + 35 bps",
      summary: "Sole financial advisor for debt syndication and financial closure of a Four-Laning National Highway HAM project under NHAI.",
      assignment: "Sole financial advisor for debt syndication and financial closure of a Four-Laning National Highway HAM project under NHAI.",
      scope: "Formulated dynamic financial model, structured lender appraisal memorandums, evaluated concession cash flows, and coordinated consortium bank approvals.",
      outcome: "Achieved 100% financial closure with a leading public and private bank consortium within 6 weeks at benchmark interest rates.",
      image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "solar-energy",
      amount: "₹85 Cr",
      facility: "Green Term Debt Syndication",
      status: "GREEN TERM LOAN",
      sector: "renewables",
      sectorLabel: "Solar & Clean Energy",
      title: "Utility Solar Clean Energy Portfolio",
      client: "Renewable EPC & Independent Power Producer",
      leadBank: "Canara Bank & Green Debt Desk",
      tenor: "14 Years Door-to-Door",
      spread: "140 bps Spread Reduction",
      summary: "Debt syndication and capital structuring for utility-scale ground-mounted and commercial solar portfolios.",
      assignment: "Debt syndication and capital structuring for utility-scale ground-mounted and rooftop commercial solar portfolios.",
      scope: "Conducted tariff sensitivity modeling, bankable PPA analysis, techno-economic feasibility (TEV) validation, and green term loan negotiation.",
      outcome: "Secured long-tenor debt sanctions from specialized renewable energy lenders, lowering weighted borrowing costs by 140 bps.",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "mezzanine-mfg",
      amount: "₹150 Cr",
      facility: "Mezzanine & Expansion Debt",
      status: "STRUCTURED CREDIT",
      sector: "manufacturing",
      sectorLabel: "Specialty Chemicals & Manufacturing",
      title: "Advanced Materials & Chemical Plant",
      client: "Chrome Silicon & Industrial Chemicals",
      leadBank: "Bank of Baroda & Private Credit Fund",
      tenor: "10 Years with 18-mo Moratorium",
      spread: "Fixed + Floating Tiered",
      summary: "Structured hybrid debt and corporate expansion lines with Tier-1 public sector bank consortium.",
      assignment: "Structuring debt financing for a greenfield automated materials manufacturing facility.",
      scope: "Detailed financial model, lender DPR presentation, sensitivity testing on feedstock volatility, and multi-lender appraisal.",
      outcome: "Sanctioned 10-year senior debt package with 18-month construction moratorium.",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "hospital-infra",
      amount: "₹120 Cr",
      facility: "Healthcare Project Debt",
      status: "CONSORTIUM LOAN",
      sector: "healthcare",
      sectorLabel: "Healthcare & Diagnostics",
      title: "Super-Specialty Hospital Concession",
      client: "Regional Healthcare Network",
      leadBank: "Kotak Mahindra Bank & Axis Bank",
      tenor: "12 Years Door-to-Door",
      spread: "Competitive MCLR Link",
      summary: "Consortium project term debt for 350-bed tertiary care healthcare facility in Hyderabad.",
      assignment: "Debt syndication for super-specialty hospital infrastructure and medical equipment funding.",
      scope: "Patient footfall and ARPOB modeling, equipment supplier LC facilities, and lead banker alignment.",
      outcome: "Achieved full financial closure with lead institutional lenders and supplier credit line.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "working-capital-epc",
      amount: "₹65 Cr",
      facility: "Working Capital Consortium Lines",
      status: "FUND & NON-FUND",
      sector: "infrastructure",
      sectorLabel: "Core EPC Infrastructure",
      title: "Multi-State EPC Corridor Limits",
      client: "Infrastructure Engineering Contractor",
      leadBank: "State Bank of India & Consortium",
      tenor: "Annual Revolving Consortium",
      spread: "Optimal BG / LC Commissions",
      summary: "Comprehensive working capital, bank guarantee (BG), and letter of credit (LC) syndication for major EPC contract execution.",
      assignment: "Comprehensive working capital, bank guarantee (BG), and letter of credit (LC) syndication for major EPC contract execution.",
      scope: "Assessed order-book cash flows, restructured existing banking limits, ring-fenced project milestones, and negotiated multi-bank consortium lines.",
      outcome: "Expanded non-fund and fund-based credit limits, enabling timely procurement mobilization and enhanced balance-sheet liquidity.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const filtered = selectedSector === "all"
    ? transactions
    : transactions.filter((t) => t.sector === selectedSector);

  const toggleExpand = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section
      id="transactions"
      className="py-20 md:py-28 relative bg-[#06182E] text-white overflow-hidden border-b border-white/10"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10 mb-12 sm:mb-14">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                            */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <Reveal delay={50}>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF5500] font-bold block mb-1">
                CLOSED TRANSACTIONS
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] font-sans">
                Our Track Record
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed pt-1">
                Landmark syndicated debt and infrastructure transactions we have closed.
              </p>
            </Reveal>
          </div>

          {/* Quick Stats Pill */}
          <Reveal delay={200} className="shrink-0">
            <div className="p-4 rounded-2xl bg-white/05 border border-white/10 backdrop-blur-md flex items-center gap-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Total Volume
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#FF5500] tabular-nums">
                  ₹2,500+ Cr
                </span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Mandate Sanctions
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 tabular-nums">
                  100%
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 21st.dev Segmented Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-8">
          {[
            { id: "all", label: "All Transactions" },
            { id: "infrastructure", label: "Infrastructure & Roads" },
            { id: "renewables", label: "Solar & Clean Energy" },
            { id: "manufacturing", label: "Manufacturing & Chemicals" },
            { id: "healthcare", label: "Healthcare" }
          ].map((tab) => {
            const isSelected = selectedSector === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedSector(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/25"
                    : "bg-white/05 hover:bg-white/10 text-slate-300 border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

      </div>

      {/* ======================================================== */}
      {/* 21ST.DEV INTERACTIVE EXPANDABLE DEAL CARDS               */}
      {/* ======================================================== */}
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">
          {filtered.map((tx, idx) => {
            const isExpanded = expandedCardId === tx.id;
            return (
              <div
                key={tx.id}
                className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden bg-[#0A2240] ${
                  isExpanded
                    ? "border-[#FF5500] shadow-2xl ring-1 ring-[#FF5500]/30"
                    : "border-white/12 hover:border-white/25 shadow-xl hover:-translate-y-1"
                }`}
              >
                {/* Photo Top Strip */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 group">
                  <img
                    src={tx.image}
                    alt={tx.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240] via-[#0A2240]/40 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#06182E]/90 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/10">
                    {tx.status}
                  </div>

                  {/* Index badge */}
                  <div className="absolute top-3.5 right-3.5 font-mono text-xs font-bold text-slate-400">
                    0{idx + 1}.
                  </div>

                  {/* Amount Pill */}
                  <div className="absolute bottom-3 left-4">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#FF5500] tabular-nums tracking-tight">
                      {tx.amount}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-slate-300 block font-semibold">
                      {tx.facility}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold block">
                      {tx.sectorLabel}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      {tx.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-mono">
                      Client: {tx.client}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                      {tx.summary}
                    </p>
                  </div>

                  {/* Key Deal Metadata Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-white/05 border border-white/05">
                      <span className="text-[10px] text-slate-400 block uppercase">Lead Lender</span>
                      <span className="text-slate-200 font-bold truncate block">{tx.leadBank}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/05 border border-white/05">
                      <span className="text-[10px] text-slate-400 block uppercase">Tenor &amp; Moratorium</span>
                      <span className="text-emerald-400 font-bold truncate block">{tx.tenor}</span>
                    </div>
                  </div>

                  {/* In-place Expanded Section */}
                  {isExpanded && (
                    <div className="pt-4 mt-2 space-y-3 border-t border-white/10 animate-fade-in text-xs text-slate-200">
                      <div className="p-3.5 rounded-xl bg-white/05 border border-white/05 space-y-1">
                        <span className="text-[10px] font-mono uppercase text-[#FF8A3D] font-bold block">
                          Execution Scope
                        </span>
                        <p className="leading-relaxed text-slate-300 font-light">{tx.scope}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                        <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                          Sanction Outcome
                        </span>
                        <p className="leading-relaxed text-emerald-100">{tx.outcome}</p>
                      </div>
                    </div>
                  )}

                  {/* Action Strip: Toggle Expand & Inquire */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => toggleExpand(tx.id)}
                      className="text-xs font-bold text-slate-300 hover:text-white inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? "Collapse Details" : "Expand Dossier"}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180 text-[#FF5500]" : ""}`} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedModalCase(tx)}
                      className="w-10 h-10 rounded-full bg-white text-[#002244] hover:bg-[#FF5500] hover:text-white flex items-center justify-center font-bold shadow-md transition-all duration-200 cursor-pointer"
                      title="View Full Mandate Dossier"
                    >
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Modal Dossier for deep dive */}
      {selectedModalCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedModalCase(null)}
        >
          <div
            className="w-full max-w-3xl rounded-3xl bg-[#0A2240] text-white border border-white/15 p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedModalCase(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#FF5500] text-white">
                  {selectedModalCase.status}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {selectedModalCase.sectorLabel}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-1">
                {selectedModalCase.title}
              </h3>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#FF5500] tabular-nums pt-1">
                {selectedModalCase.amount}
              </div>
            </div>

            <div className="space-y-4 pt-6 mt-6 border-t border-white/10">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/05 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#FF8A3D] font-bold mb-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>1. Mandate Assignment</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  {selectedModalCase.assignment}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/05 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan-300 font-bold mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>2. Consortium Structuring &amp; Terms</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  {selectedModalCase.scope}
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
                  <span>Lead: {selectedModalCase.leadBank}</span>
                  <span>•</span>
                  <span>Tenor: {selectedModalCase.tenor}</span>
                  <span>•</span>
                  <span>Spread: {selectedModalCase.spread}</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/05 border border-emerald-500/30">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-bold mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>3. Transaction Outcome</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-normal">
                  {selectedModalCase.outcome}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Client: {selectedModalCase.client} • Senior Partner Lead
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedModalCase(null)}
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
