import { useState, useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * Reveal container that glides up with spring physics when scrolled into viewport
 */
export function Reveal({
  children,
  delay = 0,
  duration = 700,
  className = "",
  distance = 32, // translate distance in px
  threshold = 0.12,
  as: Component = "div"
}) {
  const [ref, isVisible] = useScrollReveal({ threshold });

  return (
    <Component
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
      }}
      className={`transition-all ${
        isVisible
          ? "opacity-100 translate-y-0"
          : `opacity-0 translate-y-[${distance}px]`
      } ${className}`}
    >
      {children}
    </Component>
  );
}

/**
 * Word-by-word reveal effect for high-impact headlines
 */
export function WordReveal({
  text,
  className = "",
  highlightIndices = [],
  highlightClass = "text-[#FF5500]",
  baseDelay = 0,
  stepDelay = 40,
  as: Component = "h2"
}) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });
  const words = text.split(" ");

  return (
    <Component ref={ref} className={`inline-block [text-wrap:balance] ${className}`}>
      {words.map((word, idx) => {
        const isHighlight = highlightIndices.includes(idx);
        return (
          <span
            key={idx}
            className="inline-block overflow-hidden align-top mr-[0.26em] last:mr-0"
          >
            <span
              style={{
                transitionDuration: "650ms",
                transitionDelay: `${baseDelay + idx * stepDelay}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
              }}
              className={`inline-block transition-all transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
              } ${isHighlight ? highlightClass : ""}`}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Component>
  );
}

/**
 * 3D Tilt Card with cursor-following glow highlight
 */
export function TiltCard({
  children,
  className = "",
  maxTilt = 7,
  scale = 1.02,
  glowColor = "rgba(255, 85, 0, 0.08)",
  onClick
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glowX: 50, glowY: 50, isHovered: false });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({
      x: rotateX,
      y: rotateY,
      glowX: x,
      glowY: y,
      isHovered: true
    });
  };

  const handleMouseLeave = () => {
    setTilt((prev) => ({
      ...prev,
      x: 0,
      y: 0,
      isHovered: false
    }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
      className={`relative transition-transform duration-300 ease-out ${className}`}
    >
      <div
        style={{
          transform: tilt.isHovered
            ? `rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: tilt.isHovered
            ? "transform 100ms ease-out"
            : "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)"
        }}
        className="w-full h-full relative"
      >
        {/* Dynamic Glow Spotlight */}
        {tilt.isHovered && (
          <div
            className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${tilt.glowX}px ${tilt.glowY}px, ${glowColor}, transparent 65%)`
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
}
