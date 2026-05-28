"use client"

export function MarqueeSection() {
  const items = [
    "Tráfego Pago",
    "Social Media",
    "Branding",
    "Estratégia Digital",
    "Copywriting",
    "Performance",
    "Growth",
    "Automação",
  ]

  return (
    <div className="section-divider py-4 overflow-hidden bg-card/50">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center gap-16">
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              {item}
            </span>
            <span className="text-primary text-xl">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
