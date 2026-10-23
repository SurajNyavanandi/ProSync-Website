import { MapPin, Phone, Navigation, Clock, Globe, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function OfficeSection() {
  return (
    <section id="office" className="py-20 sm:py-32 bg-white relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-mono font-medium tracking-wider uppercase mb-2.5 border border-blue-200/60">
              <MapPin className="w-3.5 h-3.5" />
              <span>Hyderabad Corporate Office</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Corporate Headquarters.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
            Located in Jubilee Hills, Hyderabad. Available for confidential board discussions, debt syndication reviews, and transaction scoping.
          </p>
        </div>

        {/* 2-Column Corporate Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left: Office Address Card */}
          <div className="lg:col-span-6 bg-[#f8fafc] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 shadow-xs">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              
              <div className="text-[11px] sm:text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-1.5">
                Principal Registered Office
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {companyData.office.title}
              </h3>
              
              <div className="mt-2.5 text-xs sm:text-sm text-slate-600 space-y-1 leading-relaxed">
                <div>{companyData.office.line1}</div>
                <div>{companyData.office.line2}</div>
                <div className="font-semibold text-slate-900">{companyData.office.landmark}</div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Jubilee Hills Hub</span>
                </span>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-slate-200">
              <a
                href={companyData.office.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all shadow-xs min-h-[48px] touch-manipulation"
              >
                <Navigation className="w-4 h-4 text-blue-600" />
                <span>Open Directions in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right: Direct Partner Desk Card (Executive) */}
          <div className="lg:col-span-6 bg-[#0b1120] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[11px] sm:text-xs font-mono font-medium tracking-wider uppercase border border-blue-500/30">
                <span>Direct Contact Desk</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  Talk to Our Senior Finance Team
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Discuss your business loans, investor funding needs, or company expansion plans directly with our Hyderabad leadership.
                </p>
              </div>

              {/* Action Buttons: Clean Executive Actions */}
              <div className="pt-1 space-y-3">
                <a
                  href={`tel:${companyData.phoneRaw}`}
                  className="btn-executive-primary w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold active:scale-95 min-h-[52px] touch-manipulation shadow-md"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Call Hyderabad Office (+91 {companyData.phoneRaw})</span>
                </a>

                <a
                  href={`mailto:${companyData.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all min-h-[48px] touch-manipulation"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Send Us an Email: {companyData.email}</span>
                </a>
              </div>
            </div>

            <div className="relative z-10 pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>prosyncindia.com</span>
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Strict Non-Disclosure Standard</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
