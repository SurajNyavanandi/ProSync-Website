import { SEO, ScrollToTop, FloatingWhatsApp } from "../components/common";
import { Navbar, Footer } from "../components/layout";
import {
  Hero,
  AboutSplitSection,
  PracticeSection,
  ApproachSection,
  BankersSection,
  TransactionsSection,
  ClientsSection,
  ProsyncGlobalSection,
  LeadershipSection,
  ContactSection,
} from "../components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1D1D1F] selection:bg-[#FF5500] selection:text-white flex flex-col font-sans overflow-x-hidden">
      {/* SEO Meta & Structured Data */}
      <SEO />

      {/* Navigation Header & Mobile Drawer */}
      <Navbar />

      {/* Main Corporate Finance Narrative Flow */}
      <main className="flex-1 w-full">
        {/* 1. Hero Banner: Primary value proposition & dual CTAs */}
        <Hero />

        {/* 2. About Prosync: Company overview, mission, track record & loan lifecycle */}
        <AboutSplitSection />

        {/* 3. Core Services / Practice Areas: Debt syndication, growth equity, project advisory */}
        <PracticeSection />

        {/* 4. Execution Approach & Sector Coverage: 4-Stage methodology & core sectors */}
        <ApproachSection />

        {/* 5. Lending Partners: Tier-1 PSU & Private bank network marquee */}
        <BankersSection />

        {/* 6. Closed Landmark Transactions: Filterable deal tombstones & case studies */}
        <TransactionsSection />

        {/* 7. Enterprise Clients: Corporate sponsors & client marquee */}
        <ClientsSection />

        {/* 8. Global Analytics Desk: Financial modeling, VDR & TEV research unit */}
        <ProsyncGlobalSection />

        {/* 9. Executive Leadership: Managing Partners & Advisory Team */}
        <LeadershipSection />

        {/* 10. Mandate Inquiry & Get In Touch: Interactive calculator & direct contact desk */}
        <ContactSection />
      </main>

      {/* Minimal Executive Footer */}
      <Footer />

      {/* Quick Action Floating Tools */}
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}
