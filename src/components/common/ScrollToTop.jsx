import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * ScrollToTop: Floating back-to-top button and window scroll helper.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#13284A] border border-[rgba(120,150,200,0.3)] text-[#F8FAFC] hover:text-[#FF6B00] hover:border-[#FF6B00]/60 shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
