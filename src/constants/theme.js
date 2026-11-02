/**
 * ProSync Design & Typography Tokens
 * Inspired by modern minimalism (Adidas / Wix / Top Tier Investment Banking)
 * Centralized design tokens for colors, typography, spacing, and elevation.
 */

export const THEME_TOKENS = {
  // Typography Font Families
  fonts: {
    heading: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    body: "'Inter', system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace",
  },

  // Brand Color Palette
  colors: {
    primary: {
      DEFAULT: "#002244", // ProSync Deep Corporate Navy
      dark: "#06182E",    // Dark Section Canvas
      surface: "#0A2240", // Card Surface Navy
      hover: "#001830",
    },
    accent: {
      DEFAULT: "#FF5500", // ProSync Vibrant Action Orange
      hover: "#FF661A",
      light: "#FF8A3D",
      subtle: "rgba(255, 85, 0, 0.08)",
    },
    neutral: {
      ink: "#1D1D1F",     // Primary text dark
      muted: "#52525B",   // Secondary / body text
      caption: "#6E6E73", // Supporting metadata / captions
      border: "rgba(0, 0, 0, 0.06)",
      borderDark: "rgba(255, 255, 255, 0.12)",
    },
    surface: {
      canvas: "#FFFFFF",
      subtle: "#F5F5F7",
      card: "#FBFBFC",
      tint: "#EDF3F9",
    },
    semantic: {
      success: "#10B981",
      successSubtle: "rgba(16, 185, 129, 0.1)",
      warning: "#F59E0B",
    },
  },

  // Standardized Typographic Hierarchy Scales
  typography: {
    hero: {
      size: "text-4xl sm:text-6xl lg:text-7xl",
      weight: "font-extrabold",
      tracking: "tracking-tight",
      leading: "leading-[1.08]",
      font: "font-heading",
    },
    pageTitle: {
      size: "text-3xl sm:text-5xl lg:text-6xl",
      weight: "font-bold",
      tracking: "tracking-tight",
      leading: "leading-[1.12]",
      font: "font-heading",
    },
    sectionTitle: {
      size: "text-3xl sm:text-4xl lg:text-5xl",
      weight: "font-bold",
      tracking: "tracking-tight",
      leading: "leading-[1.15]",
      font: "font-heading",
    },
    subheading: {
      size: "text-xl sm:text-2xl",
      weight: "font-semibold",
      tracking: "tracking-tight",
      leading: "leading-snug",
      font: "font-heading",
    },
    cardTitle: {
      size: "text-lg sm:text-xl",
      weight: "font-bold",
      tracking: "tracking-tight",
      leading: "leading-snug",
      font: "font-heading",
    },
    eyebrow: {
      size: "text-xs",
      weight: "font-bold",
      tracking: "tracking-[0.2em]",
      transform: "uppercase",
      color: "text-[#FF5500]",
      font: "font-mono",
    },
    bodyLarge: {
      size: "text-base sm:text-lg",
      weight: "font-normal",
      leading: "leading-relaxed",
      color: "text-[#52525B]",
      font: "font-body",
    },
    body: {
      size: "text-sm sm:text-base",
      weight: "font-normal",
      leading: "leading-relaxed",
      color: "text-[#52525B]",
      font: "font-body",
    },
    bodySmall: {
      size: "text-xs sm:text-sm",
      weight: "font-normal",
      leading: "leading-relaxed",
      color: "text-[#6E6E73]",
      font: "font-body",
    },
    metadata: {
      size: "text-xs",
      weight: "font-medium",
      tracking: "tracking-wide",
      font: "font-mono",
      color: "text-[#6E6E73]",
    },
    button: {
      size: "text-xs",
      weight: "font-bold",
      tracking: "tracking-wide",
      font: "font-heading",
    },
    navLink: {
      size: "text-xs sm:text-sm",
      weight: "font-medium",
      tracking: "tracking-normal",
      font: "font-body",
    },
  },
};

export default THEME_TOKENS;
