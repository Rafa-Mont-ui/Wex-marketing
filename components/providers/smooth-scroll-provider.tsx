"use client"

import { ReactLenis, useLenis } from "lenis/react"
import { useEffect, useState } from "react"
import { gsap, registerGsapPlugins, ScrollTrigger } from "@/lib/gsap/register"
import "lenis/dist/lenis.css"

registerGsapPlugins()

function LenisScrollTriggerSync() {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    lenis.on("scroll", ScrollTrigger.update)

    const update = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener("resize", refresh)

    return () => {
      window.removeEventListener("resize", refresh)
      lenis.off("scroll", ScrollTrigger.update)
      gsap.ticker.remove(update)
    }
  }, [lenis])

  return null
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(media.matches)

    const onChange = () => setReducedMotion(media.matches)
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  if (reducedMotion) {
    return <>{children}</>
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
        autoRaf: false,
        anchors: {
          offset: -96,
        },
      }}
    >
      <LenisScrollTriggerSync />
      {children}
    </ReactLenis>
  )
}
