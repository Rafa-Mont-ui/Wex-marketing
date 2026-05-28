"use client"

import { motion } from "framer-motion"

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Analisamos seu negócio, mercado, concorrência e identificamos oportunidades de crescimento. Entendemos seus objetivos e definimos metas claras."
  },
  {
    num: "02",
    title: "Estratégia",
    desc: "Desenvolvemos um plano de ação personalizado com as melhores táticas de marketing digital para o seu segmento e público-alvo."
  },
  {
    num: "03",
    title: "Execução",
    desc: "Implementamos as estratégias com nossa equipe especializada, criando campanhas, conteúdos e automações de alta performance."
  },
  {
    num: "04",
    title: "Otimização",
    desc: "Monitoramos os resultados em tempo real e otimizamos continuamente para maximizar o retorno sobre o investimento."
  }
]

export function ProcessSection() {
  return (
    <section id="processo" className="px-6 lg:px-16 py-24 lg:py-32 bg-card">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-6 h-px bg-primary" />
        <span className="text-xs uppercase tracking-[0.2em] text-primary">Processo</span>
      </div>

      <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-16">
        Como <span className="text-primary">trabalhamos</span>
      </h2>

      <div className="flex flex-col">
        {steps.map((step, index) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-12 py-10 border-t border-border last:border-b group"
          >
            <span className="font-sans text-4xl lg:text-5xl font-extrabold text-border group-hover:text-primary transition-colors leading-none">
              {step.num}
            </span>
            <h3 className="font-sans text-xl lg:text-2xl font-bold lg:pt-2">
              {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed lg:pt-2 font-[var(--font-dm-sans)]">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
