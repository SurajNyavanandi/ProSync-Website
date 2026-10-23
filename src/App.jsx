import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DealDeskStorySection from './components/DealDeskStorySection';
import PracticeSection from './components/PracticeSection';
import MandateMatrixSection from './components/MandateMatrixSection';
import TransactionsSection from './components/TransactionsSection';
import ApproachSection from './components/ApproachSection';
import SectorSection from './components/SectorSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A1A33] text-[#F5F7FA] selection:bg-[#FF6B00] selection:text-white flex flex-col font-sans">
      {/* 1. Executive Top Bar (Sticky with 24px blur, 3-zone contract) */}
      <Navbar />

      {/* Main Flow */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section: Boutique Investment Banking + Background Photo + Interactive Capital Stack */}
        <Hero />

        {/* 3. Executive Story: Editorial 2-Column Split (Modeled After Reference Layout) */}
        <DealDeskStorySection />

        {/* 4. The Practice: Six disciplines. One mandate: your outcome. */}
        <PracticeSection />

        {/* 5. Mandate Matrix: Interactive segmented tabs (Equity, Debt, Pre-IPO, DPR / TEV, Bid) */}
        <MandateMatrixSection />

        {/* 6. Track Record: Representative Transactions & Landmark Closings */}
        <TransactionsSection />

        {/* 7. Approach: Senior-led, start to close (I-IV) + Proof Metrics */}
        <ApproachSection />

        {/* 8. Sector Coverage: Gas & Energy, Infrastructure, Agriculture, Agri-Tech, Robotics */}
        <SectorSection />

        {/* 9. Advisory Intelligence: Frequently Asked Questions */}
        <FaqSection />

        {/* 10. Confidential Enquiry: Let's structure your next round */}
        <ContactSection />
      </main>

      {/* 11. Corporate Institutional Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Direct Line */}
      <FloatingWhatsApp />
    </div>
  );
}
