import { Navbar, Footer } from "../components/layout";
import { SEO, ScrollToTop, FloatingWhatsApp } from "../components/common";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import { companyData } from "../data/companyData";

export default function PrivacyPolicy() {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || companyData.email || "docs.1@prosyncindia.com";
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE || companyData.phone || "+91 9951445544";

  return (
    <div className="min-h-screen bg-white text-brand-text-dark flex flex-col font-sans selection:bg-brand-orange selection:text-white">
      <SEO
        title="Privacy Policy | Prosync Consulting"
        description="Privacy policy and data safeguards for Prosync Consulting Advisory Private Limited. Learn how your project and enquiry information is handled and secured."
        canonical="https://prosyncindia.com/privacy-policy"
      />

      <Navbar />

      <main className="flex-1 w-full max-w-240 mx-auto px-6 sm:px-10 pt-32 pb-20">
        {/* Navigation Breadcrumb / Back */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-brand-text-light hover:text-brand-orange transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </a>
        </div>

        {/* Header Block */}
        <div className="border-b border-gray-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>DRAFT: pending legal review by Prosync Legal Advisory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm font-mono text-brand-text-light mt-2">
            Last Updated: November 2026 • Prosync Consulting Advisory Private Limited (CIN: {companyData.cin})
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm sm:text-base text-slate-700 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-brand-navy flex items-center gap-2.5">
              <span className="text-brand-orange font-mono text-sm">01.</span> Information We Collect
            </h2>
            <p>
              When you submit a Detailed Project Report (DPR) enquiry or communicate with Prosync Consulting, we collect the details you voluntarily provide through our website forms and direct correspondence:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li>Contact Details: Your full name, mobile number, and email address.</li>
              <li>Project &amp; Business Information: Business/project name, industry sector, project geographical location, estimated project cost, funding requirements, project execution stage, and expected timeline.</li>
              <li>Project Details: Brief narrative notes or background descriptions you share regarding your proposed expansion or venture.</li>
              <li>Technical Metadata: Browser type, device characteristics, approximate location (IP), and interaction data to ensure website security and optimal user experience.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-brand-navy flex items-center gap-2.5">
              <span className="text-brand-orange font-mono text-sm">02.</span> How We Use Your Information
            </h2>
            <p>
              All information collected is used strictly for legitimate advisory and evaluation purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li>Evaluating your DPR requirement and project financial scope.</li>
              <li>Contacting you via phone, WhatsApp, or email to discuss project feasibility and engagement terms.</li>
              <li>Preparing advisory proposals, financial models, and feasibility documentation agreed upon under client mandates.</li>
              <li>Complying with statutory, regulatory, and corporate documentation guidelines under applicable Indian laws.</li>
            </ul>
            <p className="text-xs text-slate-500 italic">
              Note: We do not sell, rent, or trade your personal or project data to third-party telemarketers or advertisers.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-brand-navy flex items-center gap-2.5">
              <span className="text-brand-orange font-mono text-sm">03.</span> Storage and Third Parties
            </h2>
            <p>
              Your enquiry information is stored within secure, access-controlled databases maintained by Prosync Consulting. Access to enquirer submissions is restricted strictly to authorized advisory partners and project finance analysts who require the information to assess your requirement.
            </p>
            <p>
              We may employ standard enterprise cloud hosting infrastructure, secure database services, and aggregate web analytics tools (such as Google Tag Manager / Analytics) to monitor website functionality, track advertising performance, and prevent spam or malicious traffic.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-brand-navy flex items-center gap-2.5">
              <span className="text-brand-orange font-mono text-sm">04.</span> Data Security &amp; Confidentiality
            </h2>
            <p>
              We enforce appropriate technical, administrative, and physical safeguards designed to protect personal and business information against unauthorized access, loss, alteration, or misuse. All bilateral project discussions and financial appraisals are governed by institutional non-disclosure standards.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-brand-navy flex items-center gap-2.5">
              <span className="text-brand-orange font-mono text-sm">05.</span> Your Choices &amp; Data Rights
            </h2>
            <p>
              You have the right to request access to the information you provided, request corrections to inaccurate records, withdraw your consent to be contacted, or request deletion of your enquiry data from our active database.
            </p>
            <p>
              To exercise any of these options, simply contact our team in writing at{" "}
              <a href={`mailto:${contactEmail}`} className="text-brand-navy font-semibold underline hover:text-brand-orange">
                {contactEmail}
              </a>
              {" "}with the subject line <em>"Privacy Data Request"</em>.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold font-heading text-brand-navy flex items-center gap-2.5">
              <span className="text-brand-orange font-mono text-sm">06.</span> Contact Details
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or our data safeguards, please reach out directly:
            </p>

            <div className="bg-brand-navy/5 rounded-2xl p-6 border border-brand-navy/15 space-y-3">
              <div className="font-heading font-bold text-brand-navy">
                Prosync Consulting Advisory Private Limited
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href={`mailto:${contactEmail}`} className="hover:underline text-brand-navy">
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="font-mono text-brand-navy">{contactPhone}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <MapPin className="w-4 h-4 text-brand-navy shrink-0 mt-0.5" />
                <span>{companyData.address}</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}
