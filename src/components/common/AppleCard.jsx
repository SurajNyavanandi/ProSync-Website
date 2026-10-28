/**
 * AppleCard: Reusable high-density fintech card with Apple-grade corner geometry,
 * subtle inner ambient lighting, and signature Prosync glowing boundary beam.
 */
export default function AppleCard({
  children,
  className = "",
  glowAccent = true,
  hoverLift = true,
  onClick
}) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl bg-[#0D1F3C]/95 border border-[rgba(120,150,200,0.2)] p-6 transition-all duration-300 overflow-hidden group ${
        hoverLift ? "hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)] hover:border-[#FF6B00]/60" : ""
      } ${className}`}
    >
      {/* Top subtle radiant beam on hover */}
      {glowAccent && (
        <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-[#FF6B00] via-[#FF8A3D] to-transparent group-hover:w-full transition-all duration-500 ease-out pointer-events-none" />
      )}
      {children}
    </div>
  );
}
