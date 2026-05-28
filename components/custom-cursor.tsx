"use client"

import { useEffect, useRef, useState } from "react"

const HOVER_SELECTOR =
  "a, button, .surface-card, .glass-card, .btn-primary, .btn-outline, .hero-stat-card, input, textarea, select, label, [data-cursor-hover]"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const rafId = useRef<number>(0)

  useEffect(() => {
    const touchDevice = window.matchMedia("(pointer: coarse)").matches
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const narrowScreen = window.matchMedia("(max-width: 900px)").matches

    if (touchDevice || reducedMotion || narrowScreen) return

    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    setEnabled(true)
    document.documentElement.classList.add("custom-cursor-active")

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY

      cursor.style.left = `${e.clientX - 6}px`
      cursor.style.top = `${e.clientY - 6}px`

      const hovering = (e.target as Element).closest(HOVER_SELECTOR)
      cursor.style.transform = hovering ? "scale(2.5)" : "scale(1)"
      ring.style.transform = hovering ? "scale(1.4)" : "scale(1)"
    }

    const animateRing = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.12
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.12
      ring.style.left = `${pos.current.rx - 20}px`
      ring.style.top = `${pos.current.ry - 20}px`
      rafId.current = requestAnimationFrame(animateRing)
    }

    document.addEventListener("mousemove", onMove)
    rafId.current = requestAnimationFrame(animateRing)

    return () => {
      document.documentElement.classList.remove("custom-cursor-active")
      document.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor${enabled ? "" : " opacity-0"}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring${enabled ? "" : " opacity-0"}`}
        aria-hidden="true"
      />
    </>
  )
}
