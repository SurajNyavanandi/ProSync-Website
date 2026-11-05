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
        {/* 1. Hero: CAPITAL. STRATEGY. GROWTH. & Dual CTAs */}
        <Hero />

        {/* 2. About Prosync: Concise since 2015 narrative */}
        <AboutSplitSection />

        {/* 3. Our Expertise: 4 Core Service Cards */}
        <PracticeSection />

        {/* 4. Our Experience & Selected Experience: 3-number strip & capability cards */}
        <TransactionsSection />

        {/* 5. Who We Work With & Why Prosync: Audience profiles & value blocks */}
        <ApproachSection />

        {/* 6. Corporate Clients & Sponsors */}
        <ClientsSection />

        {/* 7. Institutional Lending Partners */}
        <BankersSection />

        {/* 8. Prosync Global: Financial Research. Better Decisions. */}
        <ProsyncGlobalSection />

        {/* 9. Partner Leadership & Execution Team */}
        <LeadershipSection />

        {/* 10. Final Call to Action & Contact Form: Let's Start a Conversation */}
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
