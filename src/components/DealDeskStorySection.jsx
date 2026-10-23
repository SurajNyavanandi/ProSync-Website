import { ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function DealDeskStorySection() {
  return (
    <section id="discipline" className="py-24 md:py-32 relative overflow-hidden fintech-grid-bg">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Editorial 2-Column Responsive 50/50 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column A: Narrative & Editorial Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6E93C7]">
              <span>Advisory Discipline</span>
              <span aria-hidden="true" className="text-[#FF6B00]">/</span>
              <span className="text-[#A9B8CF]">Founded 2015</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F7FA] leading-[1.12]">
              Senior scrutiny.{' '}
              <span className="italic text-[#FF8A3D]">
                Built on ten years of transaction precision.
              </span>
            </h2>

            <div className="space-y-4 text-base text-[#A9B8CF] leading-relaxed">
              <p>
                Too many financial mandates get pitched by veteran dealmakers and handed down to junior associates to crunch in isolation. Prosync was founded on a contrary principle: direct partner accountability across the entire capitalization lifecycle.
              </p>
              <p className="text-sm sm:text-base">
                From debt capacity modeling to investor syndicate term-sheets, every valuation and concession document is authored, pressure-tested, and closed by partners who have navigated over 100 transactions across infrastructure, industrial technology, and enterprise growth.
              </p>
            </div>

            {/* Credibility Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#F5F7FA]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Zero junior analyst handoffs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Direct lender credit desk access</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#6E93C7] shrink-0" />
                <span>Strict reciprocal NDA governance</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#6E93C7] shrink-0" />
                <span>Dual debt & equity capability</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#contact"
                className="btn-vivid-orange px-6 py-3.5 text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2"
              >
                <span>Discuss Mandate with Leadership</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${companyData.phoneRaw}`}
                className="btn-secondary-fintech px-5 py-3.5 text-xs uppercase tracking-wider font-medium text-[#A9B8CF] hover:text-[#F5F7FA] hidden sm:inline-flex"
              >
                <span>+91 99514 45544</span>
              </a>
            </div>
          </div>

          {/* Column B: Large Rounded Photo Card with Specular Border & Ambient Shadow */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Subtle ambient light behind photo card */}
              <div 
                aria-hidden="true"
                className="absolute -inset-4 bg-gradient-to-tr from-[#FF6B00]/15 via-[#6E93C7]/10 to-[#FF8A3D]/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none"
              />

              {/* Rounded 3XL Photo Container */}
              <div className="relative rounded-3xl overflow-hidden bg-[#13284A] border border-[rgba(120,150,200,0.22)] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] aspect-[4/3] sm:aspect-[16/11]">
                
                {/* Specular Inner Rim Highlight */}
                <div 
                  aria-hidden="true"
                  className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none z-20"
                />

                {/* Corner Vivid Orange Accent */}
                <div className="absolute top-0 left-0 w-24 h-1.5 bg-gradient-to-r from-[#FF6B00] to-transparent z-20" />

                {/* Primary High-Resolution Advisory Image */}
                <img
                  src="/assets/aistudio/Screenshot_2026-10-21_131742_8846fa8c.png"
                  alt="Prosync executive investment advisory consultation session"
                  className="w-full h-full object-cover object-center filter contrast-110 brightness-95 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Color-grading Vignette Gradient */}
                <div 
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0A1A33]/90 via-[#0A1A33]/20 to-transparent z-10 pointer-events-none"
                />
                <div 
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#0A1A33]/40 via-transparent to-[#0A1A33]/30 z-10 pointer-events-none"
                />

                {/* Floating Institutional Badge Overlaid at Bottom */}
                <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between p-3.5 rounded-2xl bg-[#0A1A33]/85 backdrop-blur-md border border-[rgba(120,150,200,0.25)] shadow-xl">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF8A3D] block">
                      Executive Deal Desk
                    </span>
                    <span className="text-xs font-semibold text-[#F5F7FA]">
                      Jubilee Hills & Hitec City · Hyderabad
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#6E93C7] bg-[#13284A] px-2.5 py-1 rounded-lg border border-[rgba(120,150,200,0.18)]">
                    <Award className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>10+ Yrs</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
