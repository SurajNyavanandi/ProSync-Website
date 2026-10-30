import SEO from "../components/common/SEO";
import ScrollToTop from "../components/common/ScrollToTop";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import BankersSection from "../components/BankersSection";
import PracticeSection from "../components/PracticeSection";
import AboutSplitSection from "../components/AboutSplitSection";
import TransactionsSection from "../components/TransactionsSection";
import ApproachSection from "../components/ApproachSection";
import ClientsSection from "../components/ClientsSection";
import LeadershipSection from "../components/LeadershipSection";
import ProsyncGlobalSection from "../components/ProsyncGlobalSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/layout/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1D1D1F] selection:bg-[#FF5500] selection:text-white flex flex-col font-sans overflow-x-hidden">
      {/* Specification 20: SEO Meta & Structured Data */}
      <SEO />

      {/* Specification 1: Navigation (Logo, Services, About, Contact, Discuss a Mandate) */}
      <Navbar />

      {/* Main Corporate Finance & Investment Banking Narrative Flow */}
      <main className="flex-1 w-full">
        {/* 1. Hero Banner with executive background, typography, dual CTAs & segmented pill */}
        <Hero />

        {/* 2. Lending Partners Infinite Marquee Track (Tier-1 PSU & Private banks) */}
        <BankersSection />

        {/* 3. About Prosync & Track Record Bento (₹5,000+ Cr syndicated metric counter & loan lifecycle) */}
        <AboutSplitSection />

        {/* 4. Core Services / Practice Areas (Modern Interactive Feature Grid, No 1,2 Pagination) */}
        <PracticeSection />

        {/* 5. Execution Approach & Methodology (4-Stage Connected Milestone Progression) */}
        <ApproachSection />

        {/* 6. Closed Landmark Transactions (Filterable tombstone showcase by sector) */}
        <TransactionsSection />

        {/* 7. Dedicated Prosync Global Research & Analytics Desk (Modern Bento Showcase) */}
        <ProsyncGlobalSection />

        {/* 8. Enterprise Clients & Mandates Marquee (Verified Corporate Sponsors) */}
        <ClientsSection />

        {/* 9. Executive Leadership & Senior Advisory Team Directory */}
        <LeadershipSection />

        {/* 10. Mandate Inquiry & Get In Touch (Interactive Calculator + Direct WhatsApp Redirection) */}
        <ContactSection />
      </main>

      {/* Specification 16 & 17: Minimal Executive Footer */}
      <Footer />

      {/* Quick Action Floating Tools */}
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}
