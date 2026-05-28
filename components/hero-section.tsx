"use client"

import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { brand, heroStats } from "@wex/shared"
import { gsap, registerGsapPlugins } from "@/lib/gsap/register"

registerGsapPlugins()

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (reducedMotion) return

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(".hero-tagline", { y: 24, opacity: 0, duration: 0.7 })
        .from(".hero-title", { y: 56, opacity: 0, duration: 1 }, "-=0.4")
        .from(".hero-desc", { y: 32, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-cta", { y: 24, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(
          ".hero-stat-card",
          { x: 40, opacity: 0, duration: 0.8, stagger: 0.12 },
          "-=0.6"
        )
        .from(".hero-scroll", { opacity: 0, duration: 0.6 }, "-=0.3")
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-end px-6 lg:px-16 pt-28 lg:pt-32 pb-20 lg:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 gradient-radial hero-parallax-mesh" />
      <div className="absolute inset-0 gradient-hero-mesh opacity-40 hero-parallax-mesh" />

      <div className="hero-parallax-glow-1 absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="hero-parallax-glow-2 absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-[var(--accent-cyan)]/10 rounded-full blur-[80px] animate-pulse-glow pointer-events-none" />

      <div className="hero-parallax-bg absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden opacity-[0.03] pointer-events-none">
        <div className="animate-marquee whitespace-nowrap font-sans text-[15rem] lg:text-[20rem] font-extrabold tracking-tight">
          WEX MARKETING WEX MARKETING WEX MARKETING WEX MARKETING
        </div>
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-end">
        <div>
          <div className="hero-tagline mb-6">
            <span className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
              — {brand.tagline}
            </span>
          </div>

          <h1 className="hero-title font-sans text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.06] tracking-tight max-w-3xl mb-7">
            Transformamos sua{" "}
            <span className="text-glow text-primary">marca</span>{" "}
            em referência do{" "}
            <span className="text-glow text-primary">mercado</span>
          </h1>

          <p className="hero-desc max-w-md text-muted-foreground text-base lg:text-lg leading-relaxed font-[var(--font-dm-sans)] mb-10">
            {brand.description}
          </p>

          <div className="hero-cta">
            <Link
              href="#contato"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-sans font-bold text-sm uppercase tracking-[0.08em] px-8 py-4 rounded-xl btn-glow hover:bg-[#9ECC00] transition-all"
            >
              {brand.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="hero-stat-card glass-card rounded-2xl px-8 py-5 w-full lg:w-auto lg:min-w-[220px] text-right"
            >
              <strong className="block font-sans text-4xl lg:text-5xl font-extrabold text-glow text-primary leading-none tracking-tight">
                {stat.value}
              </strong>
              <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground mt-2 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[0.65rem] uppercase tracking-[0.15em]">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  )
}
