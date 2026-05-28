import { theme } from "@wex/shared"
import { StyleSheet, TextStyle, ViewStyle } from "react-native"

export const colors = theme.colors

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,
  section: {
    paddingHorizontal: 24,
    paddingVertical: 48,
  } as ViewStyle,
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(200, 255, 0, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(200, 255, 0, 0.25)",
    marginBottom: 16,
  } as ViewStyle,
  badgeText: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  } as TextStyle,
  heading: {
    color: colors.foreground,
    fontSize: 32,
    fontWeight: "800",
    lineHeight: 38,
    letterSpacing: -0.5,
  } as TextStyle,
  headingAccent: {
    color: colors.primary,
  } as TextStyle,
  body: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
  } as TextStyle,
  glassCard: {
    backgroundColor: colors.cardGlass,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    marginBottom: 12,
  } as ViewStyle,
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: theme.radius.md,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center",
    marginTop: 8,
  } as ViewStyle,
  primaryButtonText: {
    color: colors.primaryForeground,
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1,
    textTransform: "uppercase",
  } as TextStyle,
  statValue: {
    color: colors.primary,
    fontSize: 36,
    fontWeight: "800",
    letterSpacing: -1,
  } as TextStyle,
  statLabel: {
    color: colors.muted,
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginTop: 4,
  } as TextStyle,
})
