import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientsSection from "./components/ClientsSection";
import PracticeSection from "./components/PracticeSection";
import TransactionsSection from "./components/TransactionsSection";
import MandateMatrixSection from "./components/MandateMatrixSection";
import SectorSection from "./components/SectorSection";
import ApproachSection from "./components/ApproachSection";
import LeadershipSection from "./components/LeadershipSection";
import BankersSection from "./components/BankersSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-[#071224] text-[#F8FAFC] selection:bg-[#FF6B00] selection:text-white flex flex-col font-sans">
      {/* 1. Header / Navbar with official logo and dynamic hover states */}
      <Navbar />

      {/* Main Narrative Flow */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section: Strategic Capital & Deal Architecture */}
        <Hero />

        {/* 3. Clients Showcase: Immediate social proof (MEIL, AR Petro, etc.) */}
        <ClientsSection />

        {/* 4. The Practice: Core Disciplines without serial numbers */}
        <PracticeSection />

        {/* 5. Representative Track Record: Flagship ₹250 Cr Project */}
        <TransactionsSection />

        {/* 6. Mandate Matrix: Execution Steps (DPR / TEV empty for now) */}
        <MandateMatrixSection />

        {/* 7. Fluent in the Industries: Including dedicated Solar & Clean Energy boxes */}
        <SectorSection />

        {/* 8. Our Approach & Proof Metrics: Understand, Structure, Execute, Close */}
        <ApproachSection />

        {/* 9. Executive Leadership & DPA Advisory Team */}
        <LeadershipSection />

        {/* 10. Bankers & Institutional Lenders (Interactive Carousel & Continuous Marquee) */}
        <BankersSection />

        {/* 11. Advisory Intelligence: Frequently Asked Questions */}
        <FaqSection />

        {/* 12. Confidential Enquiry Form & Careers Prompt */}
        <ContactSection />
      </main>

      {/* 13. Institutional Footer with official logo */}
      <Footer />

      {/* 14. Floating WhatsApp Direct Line */}
      <FloatingWhatsApp />
    </div>
  );
}
