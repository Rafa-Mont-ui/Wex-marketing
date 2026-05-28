"use client"

import { ArrowUpRight, BarChart3, Megaphone, Palette, Target, Users, Zap } from "lucide-react"
import { services } from "@wex/shared"

const icons = [Target, Megaphone, Palette, BarChart3, Zap, Users]

export function ServicesSection() {
  return (
    <section id="servicos" className="section-block section-divider bg-card/30 relative overflow-hidden">
      <div className="container-page relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-14">
          <div>
            <span className="section-label">Nossos Serviços</span>
            <h2 className="section-title max-w-xl">
              Soluções completas para{" "}
              <span className="text-highlight">seu crescimento</span>
            </h2>
          </div>
          <p className="section-desc max-w-md text-sm lg:text-base gsap-reveal">
            Oferecemos um ecossistema completo de marketing digital para levar sua empresa ao próximo nível.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 gsap-stagger">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Target
            return (
              <div
                key={service.num}
                className="gsap-stagger-item group surface-card p-6 lg:p-7 hover:border-primary/15"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
                </div>

                <span className="font-sans text-[0.6rem] tracking-[0.2em] text-primary/70 mb-3 block">
                  {service.num}
                </span>

                <h3 className="font-sans text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
