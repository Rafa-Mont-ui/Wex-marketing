"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { stats } from "@wex/shared"

export function ResultsSection() {
  return (
    <section id="resultados" className="section-block bg-card relative overflow-hidden">
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
        data-parallax="0.2"
      />

      <div className="container-page relative z-10">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="section-label block">Nossos Resultados</span>
          <h2 className="section-title mb-4">
            Números que <span className="text-highlight">comprovam</span>
          </h2>
          <p className="section-desc text-sm gsap-reveal">
            Cada número representa o sucesso real dos nossos clientes. Resultados mensuráveis e comprovados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-12 gsap-stagger">
          {stats.map((stat) => (
            <div key={stat.label} className="gsap-stagger-item surface-card p-6 lg:p-7 text-center">
              <strong
                className="gsap-stat-value block font-sans text-4xl lg:text-5xl font-extrabold text-primary leading-none tracking-tight mb-2"
                data-value={stat.value}
                data-prefix={stat.prefix}
                data-suffix={stat.suffix}
              >
                {stat.prefix}0{stat.suffix}
              </strong>
              <span className="block text-foreground font-semibold text-sm mb-1">{stat.label}</span>
              <span className="text-xs text-muted-foreground">{stat.desc}</span>
            </div>
          ))}
        </div>

        <div className="text-center gsap-reveal">
          <Link href="#contato" className="btn-primary">
            Quero esses resultados
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
