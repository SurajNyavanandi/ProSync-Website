import { SEO, ScrollToTop, FloatingWhatsApp } from "../components/common";
import { Navbar, Footer } from "../components/layout";
import { DprHero, DprSection, DprContactSection } from "../components/sections";

export default function DprServices() {
  return (
    <div className="min-h-screen bg-white text-brand-text-dark selection:bg-brand-orange selection:text-white flex flex-col font-sans overflow-x-hidden">
      {/* Campaign SEO Meta */}
      <SEO
        title="DPR Preparation Services | Prosync Consulting"
        description="Professional DPR preparation, project feasibility, financial projections, DSCR and CMA data support for new and expansion projects in Hyderabad and Vijayawada."
        canonical="https://prosyncindia.com/dpr-services"
      />

      {/* Navigation Header */}
      <Navbar />

      {/* Dedicated DPR Campaign Flow */}
      <main className="flex-1 w-full">
        {/* 1. Dedicated DPR Hero (#dpr): Planning a New Project or Business Expansion? */}
        <DprHero />

        {/* 2. DPR Content Sections: #dpr-services, #feasibility, #financial-projections, #cma, #project-finance, #industries */}
        <DprSection />

        {/* 3. DPR Enquiry Engine (#contact): 11-step form + dual submit + WhatsApp integration */}
        <DprContactSection pageSource="/dpr-services" />
      </main>

      {/* Executive Footer */}
      <Footer />

      {/* Quick Action Floating Tools */}
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}
