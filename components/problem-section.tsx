"use client"

import { XCircle, TrendingDown, AlertCircle } from "lucide-react"

const problems = [
  {
    num: "01",
    icon: TrendingDown,
    title: "Investimento sem retorno",
    desc: "Gastos com anúncios que não convertem em vendas reais para seu negócio. Dinheiro desperdiçado todos os meses.",
  },
  {
    num: "02",
    icon: XCircle,
    title: "Presença digital fraca",
    desc: "Redes sociais sem engajamento e site que não gera leads qualificados. Sua marca é invisível online.",
  },
  {
    num: "03",
    icon: AlertCircle,
    title: "Falta de estratégia",
    desc: "Ações isoladas sem um plano integrado de marketing. Concorrentes passam na frente enquanto você patina.",
  },
]

export function ProblemSection() {
  return (
    <section id="problema" className="section-block relative">
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px] pointer-events-none"
        data-parallax="0.25"
      />

      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="section-label">O Problema</span>
            <h2 className="section-title mb-6">
              Sua empresa está{" "}
              <span className="text-primary/90">perdendo dinheiro</span> no digital?
            </h2>
            <p className="section-desc mb-4">
              A maioria das empresas investe em marketing digital sem uma estratégia clara. O
              resultado? Dinheiro desperdiçado e oportunidades perdidas.
            </p>
            <p className="section-desc text-sm">
              Na Wex, desenvolvemos estratégias personalizadas que transformam cada real investido
              em resultados mensuráveis para o seu negócio.
            </p>
          </div>

          <div className="flex flex-col gap-4 gsap-stagger">
            {problems.map((problem) => (
              <div
                key={problem.num}
                className="gsap-stagger-item group surface-card rounded-xl p-6 lg:p-7 hover:border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                    <problem.icon className="w-5 h-5 text-primary/80" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="font-sans text-[0.6rem] tracking-[0.2em] text-primary/70 mb-2 block">
                      {problem.num}
                    </span>
                    <h3 className="font-sans text-base lg:text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{problem.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
