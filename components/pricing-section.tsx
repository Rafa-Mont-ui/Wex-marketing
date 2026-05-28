"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Growth",
    price: "2.997",
    description: "Para empresas que querem começar a escalar no digital.",
    features: [
      "Gestão de até 2 redes sociais",
      "Campanhas de tráfego pago",
      "Relatórios mensais",
      "Reunião quinzenal",
      "Suporte por WhatsApp"
    ],
    featured: false
  },
  {
    name: "Scale",
    price: "5.997",
    description: "Para empresas que buscam crescimento acelerado e dominância de mercado.",
    features: [
      "Gestão de até 5 redes sociais",
      "Campanhas avançadas multi-plataforma",
      "Automação de marketing",
      "Relatórios semanais",
      "Reunião semanal",
      "Consultoria estratégica",
      "Suporte prioritário 24/7"
    ],
    featured: true
  }
]

export function PricingSection() {
  return (
    <section id="precos" className="px-6 lg:px-16 py-24 lg:py-32 bg-card">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-6 h-px bg-primary" />
        <span className="text-xs uppercase tracking-[0.2em] text-primary">Investimento</span>
      </div>

      <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 max-w-xl">
        Planos que <span className="text-primary">cabem</span> no seu crescimento
      </h2>

      <p className="text-muted-foreground mb-16 max-w-lg font-[var(--font-dm-sans)]">
        Escolha o plano ideal para o momento da sua empresa. Sem surpresas, sem taxas escondidas.
      </p>

      <div className="grid lg:grid-cols-2 gap-6 max-w-4xl">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`border p-8 lg:p-10 relative ${
              plan.featured 
                ? "border-primary bg-primary/5" 
                : "border-border"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-px right-8 bg-primary text-primary-foreground font-sans font-bold text-[0.65rem] tracking-[0.15em] uppercase px-4 py-1.5">
                Mais Popular
              </span>
            )}

            <h3 className="font-sans text-sm font-bold tracking-[0.05em] uppercase text-muted-foreground mb-6">
              {plan.name}
            </h3>

            <div className="font-sans text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-2">
              R$ {plan.price}
              <small className="text-base font-normal text-muted-foreground">/mês</small>
            </div>

            <p className="text-muted-foreground text-sm mb-8 pb-8 border-b border-border font-[var(--font-dm-sans)]">
              {plan.description}
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="#contato"
              className={`block text-center py-4 font-sans font-bold text-sm uppercase tracking-[0.08em] transition-all ${
                plan.featured
                  ? "bg-primary text-primary-foreground hover:bg-[#9ECC00]"
                  : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              Começar Agora
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
