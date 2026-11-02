import { Reveal } from "./Motion";

/**
 * Standardized SectionHeader component
 * Enforces unified typography hierarchy across all sections
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  dark = false,
  action,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}) {
  return (
    <div
      className={`flex flex-col ${
        centered
          ? "items-center text-center max-w-2xl mx-auto"
          : action
          ? "lg:flex-row lg:items-end justify-between gap-6"
          : "max-w-2xl"
      } ${className}`}
    >
      <div className={`space-y-2 ${centered ? "text-center" : "text-left"}`}>
        {eyebrow && (
          <Reveal delay={40}>
            <span className="text-xs font-mono font-bold text-[#FF5500] uppercase tracking-[0.2em] block mb-2">
              {eyebrow}
            </span>
          </Reveal>
        )}

        {title && (
          <Reveal delay={80}>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-heading leading-[1.15] ${
                dark ? "text-white" : "text-[#002244]"
              } ${titleClassName}`}
            >
              {title}
            </h2>
          </Reveal>
        )}

        {subtitle && (
          <Reveal delay={120}>
            <p
              className={`text-base sm:text-lg font-normal font-body leading-relaxed pt-1 ${
                dark ? "text-slate-300" : "text-[#52525B]"
              } ${subtitleClassName}`}
            >
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>

      {action && !centered && (
        <Reveal delay={160} className="shrink-0 pt-2 lg:pt-0">
          {action}
        </Reveal>
      )}
    </div>
  );
}
