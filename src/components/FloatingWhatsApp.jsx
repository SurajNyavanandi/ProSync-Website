import { MessageCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function FloatingWhatsApp() {
  const whatsappUrl = companyData.getWhatsAppUrl();

  return (
    <aside aria-label="Direct Deal Team WhatsApp" className="fixed bottom-6 right-6 z-50 select-none">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp message to Prosync Deal Team"
        className="group relative flex items-center justify-center bg-[#13284A] hover:bg-[#1A335C] text-[#F5F7FA] border border-[rgba(120,150,200,0.3)] hover:border-[#FF6B00]/70 shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] h-12 px-4 rounded-full"
      >
        {/* Subtle orange accent dot */}
        <span className="w-2 h-2 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00] mr-2.5 shrink-0" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />

        {/* Text */}
        <span className="font-medium text-xs tracking-wide ml-2 whitespace-nowrap text-[#F5F7FA] group-hover:text-white">
          WhatsApp Deal Team
        </span>
      </a>
    </aside>
  );
}
