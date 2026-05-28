"use client"

import { useGSAP } from "@gsap/react"
import { gsap, registerGsapPlugins, ScrollTrigger } from "@/lib/gsap/register"

registerGsapPlugins()

export function ScrollAnimations() {
  useGSAP(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      initHeroParallax()
      initSectionReveals()
      initCardStaggers()
      initParallaxElements()
      initPromoBanner()
      initResultsCounters()
      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  })

  return null
}

function initHeroParallax() {
  const hero = document.querySelector("#hero")
  if (!hero) return

  gsap.to(".hero-parallax-bg", {
    yPercent: 25,
    ease: "none",
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: 0.6,
    },
  })

  gsap.to(".hero-parallax-glow-1", {
    y: 100,
    x: -30,
    ease: "none",
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
    },
  })

  gsap.to(".hero-parallax-glow-2", {
    y: -80,
    x: 40,
    ease: "none",
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
    },
  })

  gsap.to(".hero-parallax-mesh", {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "center top",
      scrub: true,
    },
  })
}

function initSectionReveals() {
  const headers = gsap.utils.toArray<HTMLElement>(
    "section .section-label, section .section-title, section .gsap-reveal"
  )

  headers.forEach((el) => {
    gsap.from(el, {
      y: 48,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    })
  })
}

function initCardStaggers() {
  const containers = gsap.utils.toArray<HTMLElement>(".gsap-stagger")

  containers.forEach((container) => {
    const items = container.querySelectorAll(".gsap-stagger-item")
    if (!items.length) return

    gsap.from(items, {
      y: 50,
      opacity: 0,
      duration: 0.85,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
    })
  })
}

function initParallaxElements() {
  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
    const speed = Number(el.dataset.parallax ?? 0.15)

    gsap.to(el, {
      y: speed * 120,
      ease: "none",
      scrollTrigger: {
        trigger: el.closest("section") ?? el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    })
  })
}

function initPromoBanner() {
  const banner = document.querySelector(".promo-banner-section")
  if (!banner) return

  gsap.to(".promo-banner-visual", {
    y: -40,
    ease: "none",
    scrollTrigger: {
      trigger: banner,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.6,
    },
  })
}

function initResultsCounters() {
  const statValues = gsap.utils.toArray<HTMLElement>(".gsap-stat-value")

  statValues.forEach((el) => {
    const target = Number(el.dataset.value ?? 0)
    const prefix = el.dataset.prefix ?? ""
    const suffix = el.dataset.suffix ?? ""
    const obj = { val: 0 }

    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`
      },
    })
  })
}
