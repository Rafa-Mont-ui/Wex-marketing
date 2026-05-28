import { StatusBar } from "expo-status-bar"
import { LinearGradient } from "expo-linear-gradient"
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import {
  brand,
  faqs,
  heroStats,
  services,
  showcaseFeatures,
  stats,
  theme,
} from "@wex/shared"
import { colors, styles } from "./src/theme"
import { useState } from "react"

function HeroSection() {
  return (
    <View style={local.hero}>
      <LinearGradient
        colors={["rgba(0,212,255,0.12)", "rgba(200,255,0,0.08)", "transparent"]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <Text style={local.heroTagline}>— {brand.tagline}</Text>
      <Text style={local.heroTitle}>
        Transformamos sua <Text style={local.accent}>marca</Text> em referência do{" "}
        <Text style={local.accent}>mercado</Text>
      </Text>
      <Text style={[styles.body, { marginTop: 16, marginBottom: 24 }]}>{brand.description}</Text>
      <Pressable
        style={styles.primaryButton}
        onPress={() => Linking.openURL(`https://wa.me/${brand.whatsapp}`)}
      >
        <Text style={styles.primaryButtonText}>{brand.ctaPrimary}</Text>
      </Pressable>
      <View style={local.statsRow}>
        {heroStats.map((stat) => (
          <View key={stat.label} style={local.statCard}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

function ServicesSection() {
  return (
    <View style={styles.section}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Nossos Serviços</Text>
      </View>
      <Text style={styles.heading}>
        Soluções para <Text style={styles.headingAccent}>seu crescimento</Text>
      </Text>
      {services.map((service) => (
        <View key={service.num} style={[styles.glassCard, { marginTop: 16 }]}>
          <Text style={local.serviceNum}>{service.num}</Text>
          <Text style={local.serviceTitle}>{service.title}</Text>
          <Text style={[styles.body, { fontSize: 14, marginTop: 8 }]}>{service.desc}</Text>
        </View>
      ))}
    </View>
  )
}

function ShowcaseSection() {
  return (
    <View style={[styles.section, { backgroundColor: colors.card }]}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Por que a Wex</Text>
      </View>
      <Text style={styles.heading}>
        Marketing que <Text style={styles.headingAccent}>gera impacto</Text>
      </Text>
      {showcaseFeatures.map((feature) => (
        <View key={feature.title} style={[styles.glassCard, { marginTop: 16 }]}>
          <Text style={local.serviceTitle}>{feature.title}</Text>
          <Text style={[styles.body, { fontSize: 14, marginTop: 8 }]}>{feature.description}</Text>
        </View>
      ))}
    </View>
  )
}

function ResultsSection() {
  return (
    <View style={styles.section}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Resultados</Text>
      </View>
      <Text style={styles.heading}>
        Números que <Text style={styles.headingAccent}>comprovam</Text>
      </Text>
      <View style={local.statsGrid}>
        {stats.map((stat) => (
          <View key={stat.label} style={local.resultCard}>
            <Text style={[styles.statValue, { fontSize: 28 }]}>
              {stat.prefix}{stat.value}{stat.suffix}
            </Text>
            <Text style={[local.serviceTitle, { fontSize: 14 }]}>{stat.label}</Text>
            <Text style={[styles.body, { fontSize: 12 }]}>{stat.desc}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

function PromoBanner() {
  return (
    <LinearGradient
      colors={["#B3002D", "#500014", colors.background]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={local.promoBanner}
    >
      <Text style={local.promoTag}>Sua hora é agora</Text>
      <Text style={local.promoTitle}>SAI NA FRENTE!</Text>
      <Text style={local.promoDesc}>
        Enquanto seus concorrentes hesitam, você domina o mercado.
      </Text>
      <Pressable
        style={local.outlineButton}
        onPress={() => Linking.openURL(`https://wa.me/${brand.whatsapp}`)}
      >
        <Text style={local.outlineButtonText}>Começar agora</Text>
      </Pressable>
    </LinearGradient>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <View style={styles.section}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>FAQ</Text>
      </View>
      <Text style={[styles.heading, { marginBottom: 20 }]}>
        Perguntas <Text style={styles.headingAccent}>frequentes</Text>
      </Text>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <Pressable
            key={faq.question}
            style={[local.faqBar, isOpen && local.faqBarOpen]}
            onPress={() => setOpenIndex(isOpen ? null : index)}
          >
            <Text style={local.faqQuestion}>{faq.question}</Text>
            {isOpen && <Text style={[styles.body, { fontSize: 14, marginTop: 12 }]}>{faq.answer}</Text>}
          </Pressable>
        )
      })}
    </View>
  )
}

function CTASection() {
  return (
    <LinearGradient
      colors={[colors.primary, "#9ECC00", "rgba(0,212,255,0.5)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={local.ctaSection}
    >
      <Text style={local.ctaTitle}>Pronto para escalar?</Text>
      <Text style={local.ctaDesc}>
        Agende uma consultoria gratuita e transforme sua presença digital.
      </Text>
      <Pressable
        style={[styles.primaryButton, { backgroundColor: colors.background }]}
        onPress={() => Linking.openURL(`https://wa.me/${brand.whatsapp}`)}
      >
        <Text style={[styles.primaryButtonText, { color: colors.primary }]}>Falar no WhatsApp</Text>
      </Pressable>
    </LinearGradient>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen} edges={["top"]}>
        <StatusBar style="light" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={local.header}>
            <Text style={local.logo}>
              Wex<Text style={local.accent}>.</Text>
            </Text>
            <Pressable
              style={local.headerCta}
              onPress={() => Linking.openURL(`https://wa.me/${brand.whatsapp}`)}
            >
              <Text style={local.headerCtaText}>{brand.ctaSecondary}</Text>
            </Pressable>
          </View>
          <HeroSection />
          <ShowcaseSection />
          <ServicesSection />
          <ResultsSection />
          <PromoBanner />
          <FAQSection />
          <CTASection />
          <View style={local.footer}>
            <Text style={local.logo}>
              Wex<Text style={local.accent}>.</Text>
            </Text>
            <Text style={[styles.body, { fontSize: 12, marginTop: 8 }]}>
              © 2026 Wex Marketing. Todos os direitos reservados.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const local = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  logo: {
    color: colors.foreground,
    fontSize: 24,
    fontWeight: "800",
  },
  accent: {
    color: colors.primary,
  },
  headerCta: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: theme.radius.md,
  },
  headerCtaText: {
    color: colors.primaryForeground,
    fontSize: 12,
    fontWeight: "700",
  },
  hero: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 32,
    minHeight: 480,
  },
  heroTagline: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 16,
  },
  heroTitle: {
    color: colors.foreground,
    fontSize: 26,
    fontWeight: "800",
    lineHeight: 32,
    letterSpacing: -0.5,
  },
  statsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 32,
  },
  statCard: {
    flex: 1,
    minWidth: "30%",
    backgroundColor: colors.cardGlass,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 20,
  },
  resultCard: {
    width: "47%",
    backgroundColor: colors.cardGlass,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    alignItems: "center",
  },
  serviceNum: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 2,
    marginBottom: 8,
  },
  serviceTitle: {
    color: colors.foreground,
    fontSize: 18,
    fontWeight: "700",
  },
  promoBanner: {
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  promoTag: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 11,
    letterSpacing: 2.5,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  promoTitle: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "800",
    letterSpacing: -0.5,
    marginBottom: 12,
  },
  promoDesc: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  outlineButton: {
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.3)",
    borderRadius: theme.radius.md,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignSelf: "flex-start",
  },
  outlineButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  faqBar: {
    backgroundColor: colors.cardGlass,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
    marginBottom: 10,
  },
  faqBarOpen: {
    borderColor: colors.borderGlow,
  },
  faqQuestion: {
    color: colors.foreground,
    fontSize: 16,
    fontWeight: "600",
  },
  ctaSection: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    alignItems: "center",
  },
  ctaTitle: {
    color: colors.primaryForeground,
    fontSize: 36,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
  },
  ctaDesc: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 24,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
})
