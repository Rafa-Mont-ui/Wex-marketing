"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PromoBanner() {
  return (
    <section className="promo-banner-section section-divider relative overflow-hidden">
      <div className="banner-split">
        <div className="container-page grid lg:grid-cols-2 items-center gap-10 py-16 lg:py-20">
          <div className="promo-banner-visual relative flex items-center justify-center lg:justify-start">
            <div className="font-sans text-[8rem] lg:text-[10rem] font-extrabold text-primary/8 leading-none select-none">
              W
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-4 surface-card px-5 py-3 flex items-center gap-3">
              <span className="text-2xl font-extrabold text-primary">+500%</span>
              <span className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.15em]">
                ROI médio
              </span>
            </div>
          </div>

          <div className="promo-banner-content text-center lg:text-left">
            <span className="section-label text-muted-foreground">Sua hora é agora</span>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl mb-4">
              Sai na frente!
            </h2>
            <p className="section-desc text-sm mb-8 max-w-md mx-auto lg:mx-0">
              Enquanto seus concorrentes hesitam, você domina o mercado. Estratégias que convertem
              visitantes em clientes fiéis.
            </p>
            <Link href="#contato" className="btn-outline border-foreground/20 hover:border-primary">
              Começar agora
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
