/**
 * Standardized Corporate Badge / Tag Component
 */

export default function Badge({
  children,
  variant = "neutral", // 'orange' | 'navy' | 'emerald' | 'neutral' | 'dark'
  size = "sm",
  dot = false,
  className = "",
}) {
  const base =
    "inline-flex items-center gap-1.5 font-mono font-semibold rounded-full border transition-colors select-none";

  const variants = {
    orange:
      "bg-[#FF5500]/10 text-[#FF5500] border-[#FF5500]/20",
    navy:
      "bg-[#002244]/10 text-[#002244] border-[#002244]/15",
    emerald:
      "bg-emerald-50 text-emerald-700 border-emerald-200",
    neutral:
      "bg-[#F5F5F7] text-[#52525B] border-black/[0.04]",
    dark:
      "bg-white/10 text-slate-200 border-white/10 backdrop-blur-md",
  };

  const sizes = {
    xs: "px-2 py-0.5 text-[10px]",
    sm: "px-2.5 py-1 text-[11px]",
    md: "px-3.5 py-1.5 text-xs",
  };

  const dots = {
    orange: "bg-[#FF5500]",
    navy: "bg-[#002244]",
    emerald: "bg-emerald-500",
    neutral: "bg-slate-400",
    dark: "bg-emerald-400",
  };

  return (
    <span className={`${base} ${variants[variant] || variants.neutral} ${sizes[size] || sizes.sm} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dots[variant] || dots.neutral}`} />}
      <span>{children}</span>
    </span>
  );
}
