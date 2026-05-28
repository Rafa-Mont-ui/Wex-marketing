import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ScrollAnimations } from "@/components/gsap/scroll-animations"
import { MarqueeSection } from "@/components/marquee-section"
import { ProblemSection } from "@/components/problem-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { ServicesSection } from "@/components/services-section"
import { ResultsSection } from "@/components/results-section"
import { ProcessSection } from "@/components/process-section"
import { PromoBanner } from "@/components/promo-banner"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { NichesSection } from "@/components/niches-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollAnimations />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ProblemSection />
      <ShowcaseSection />
      <ServicesSection />
      <ResultsSection />
      <ProcessSection />
      <PromoBanner />
      <TestimonialsSection />
      <PricingSection />
      <NichesSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  )
}
