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
        {/* Specification 2, 3, 4, 5: Hero Banner with exact headline, dual buttons & floating bottom filter bar */}
        <Hero />

        {/* Specification 11: Lending Partners Infinite Marquee Track (SBI, Canara, Kotak, BOB, Vivriti) */}
        <BankersSection />

        {/* Core Services Section with Image Card Grid (image_a75a330b.png style) */}
        <PracticeSection />

        {/* About Prosync Split Section with Large Photo Card (image_ed04aee0.png style) */}
        <AboutSplitSection />

        {/* Specification 9: Case Studies Carousel (image_b1be602b.png style with corner notch & money highlight) */}
        <TransactionsSection />

        {/* Approach Section with Photographic Core Sectors Showcase */}
        <ApproachSection />

        {/* Specification 11: Verified Client Credentials (DRM Infrastructure, MEIL, AR Petro, AARA Group) */}
        <ClientsSection />

        {/* Specification 10: Executive Leadership & Our Advisory Team (image_75b503d4.png & image_bfa67e0f.png styles) */}
        <LeadershipSection />

        {/* Specification 18: Dedicated Prosync Global Research Desk */}
        <ProsyncGlobalSection />

        {/* Specification 15 & 16: Contact Section Split Card (image_4c537ec8.png style) */}
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
