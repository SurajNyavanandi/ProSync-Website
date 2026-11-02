/**
 * Standardized Corporate Button Component
 * Matches corporate finance / modern fintech aesthetic
 */

export default function Button({
  children,
  variant = "primary", // 'primary' | 'navy' | 'secondary' | 'outline' | 'white'
  size = "md", // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = "right",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold font-heading rounded-full transition-all duration-200 cursor-pointer active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed select-none";

  const variants = {
    primary:
      "bg-[#FF5500] hover:bg-[#FF661A] text-white shadow-md shadow-[#FF5500]/20 hover:shadow-[#FF5500]/30",
    navy:
      "bg-[#002244] hover:bg-[#FF5500] text-white shadow-md shadow-[#002244]/15 hover:shadow-[#FF5500]/25",
    secondary:
      "bg-white hover:bg-slate-50 text-[#002244] border border-black/[0.08] shadow-xs",
    outline:
      "bg-transparent hover:bg-black/5 text-[#002244] border border-[#002244]/30",
    white:
      "bg-white hover:bg-[#FF5500] text-[#002244] hover:text-white shadow-md",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-xs gap-2 tracking-wide",
    lg: "px-7 py-3.5 text-sm gap-2.5",
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      {...props}
    >
      {content}
    </button>
  );
}
