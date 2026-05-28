"use client"

import { BarChart3, Sparkles, Target } from "lucide-react"
import { showcaseFeatures } from "@wex/shared"

const icons = [Target, Sparkles, BarChart3]

export function ShowcaseSection() {
  return (
    <section id="cases" className="section-block relative overflow-hidden">
      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative" data-parallax="0.1">
            <div className="mockup-screen p-4 lg:p-5">
              <div className="flex items-center gap-1.5 mb-4 px-1">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <div className="rounded-lg overflow-hidden bg-background/80 border border-border">
                <div className="p-5 lg:p-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-lg font-extrabold">
                      Wex<span className="text-primary">.</span>
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground">
                      Dashboard
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Leads", value: "+847" },
                      { label: "ROI", value: "+312%" },
                      { label: "Conv.", value: "4.8%" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-md p-2.5 bg-primary/8 border border-primary/10"
                      >
                        <span className="block text-base font-bold text-primary">{item.value}</span>
                        <span className="text-[0.55rem] uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2.5">
                    {[92, 78, 65, 54].map((width, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[0.6rem] text-primary font-bold">
                          {i + 1}
                        </div>
                        <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary/80"
                            style={{ width: `${width}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="section-label">Por que a Wex</span>
            <h2 className="section-title mb-10">
              Marketing que <span className="text-highlight">gera impacto</span>
            </h2>

            <div className="space-y-3 gsap-stagger">
              {showcaseFeatures.map((feature, index) => {
                const Icon = icons[index] ?? Target
                return (
                  <div key={feature.title} className="gsap-stagger-item surface-card p-5 flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-sans text-base font-bold mb-1.5">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed font-[var(--font-dm-sans)]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
