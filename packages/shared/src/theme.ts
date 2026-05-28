export const theme = {
  colors: {
    background: "#050508",
    backgroundDeep: "#000000",
    navy: "#050A18",
    foreground: "#F5F2EC",
    card: "#111118",
    cardGlass: "rgba(17, 17, 24, 0.65)",
    muted: "#888888",
    border: "rgba(255, 255, 255, 0.08)",
    borderGlow: "rgba(200, 255, 0, 0.25)",
    primary: "#C8FF00",
    primaryDim: "#9ECC00",
    primaryForeground: "#080808",
    accentCyan: "#00D4FF",
    accentBlue: "#007BFF",
    accentOrange: "#FF6B2C",
    accentCrimson: "#B3002D",
    glowLime: "rgba(200, 255, 0, 0.35)",
    glowCyan: "rgba(0, 212, 255, 0.2)",
    glowOrange: "rgba(255, 107, 44, 0.25)",
  },
  fonts: {
    display: "Syne",
    body: "DM Sans",
  },
  radius: {
    sm: 6,
    md: 12,
    lg: 16,
    xl: 24,
  },
  spacing: {
    section: 96,
    sectionMobile: 64,
  },
} as const

export type Theme = typeof theme
