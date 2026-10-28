import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BankersSection from "./components/BankersSection";
import PracticeSection from "./components/PracticeSection";
import TransactionsSection from "./components/TransactionsSection";
import SectorSection from "./components/SectorSection";
import MandateMatrixSection from "./components/MandateMatrixSection";
import ApproachSection from "./components/ApproachSection";
import ClientsSection from "./components/ClientsSection";
import LeadershipSection from "./components/LeadershipSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-[#071224] text-[#F8FAFC] selection:bg-[#FF6B00] selection:text-white flex flex-col font-sans overflow-x-hidden">
      {/* 1. Transparent Apple-Style Navigation */}
      <Navbar />

      {/* Main Narrative Flow */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section: Strategic Capital & Deal Architecture */}
        <Hero />

        {/* 3. Banks We Work With: Immediate institutional credibility right below Hero */}
        <BankersSection />

        {/* 4. Our Services: Six Core Disciplines */}
        <PracticeSection />

        {/* 5. Our Track Record: Flagship ₹250 Cr NHAI Concession Mandate */}
        <TransactionsSection />

        {/* 6. Industries We Support: Sector Coverage */}
        <SectorSection />

        {/* 7. How We Work: Execution Roadmap by Mandate Type */}
        <MandateMatrixSection />

        {/* 8. Our Process & Key Metrics: Understand, Structure, Execute, Close */}
        <ApproachSection />

        {/* 9. Our Clients: Enterprise Corporate Credentials */}
        <ClientsSection />

        {/* 10. Leadership & Advisory Team: Founders + DPA Team */}
        <LeadershipSection />

        {/* 11. Advisory Intelligence: Frequently Asked Questions */}
        <FaqSection />

        {/* 12. Confidential Enquiry Form & Principal Deal Room */}
        <ContactSection />
      </main>

      {/* 13. Institutional Footer */}
      <Footer />

      {/* 14. Floating WhatsApp Icon */}
      <FloatingWhatsApp />
    </div>
  );
}
