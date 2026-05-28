"use client"

import { motion } from "framer-motion"
import { Building2, Stethoscope, Dumbbell, ShoppingBag, Utensils, Briefcase, GraduationCap, Home, Car, Plane } from "lucide-react"

const niches = [
  { icon: Building2, name: "Imobiliário", isNew: false },
  { icon: Stethoscope, name: "Saúde", isNew: false },
  { icon: Dumbbell, name: "Fitness", isNew: false },
  { icon: ShoppingBag, name: "E-commerce", isNew: false },
  { icon: Utensils, name: "Gastronomia", isNew: false },
  { icon: Briefcase, name: "Serviços B2B", isNew: false },
  { icon: GraduationCap, name: "Educação", isNew: true },
  { icon: Home, name: "Decoração", isNew: false },
  { icon: Car, name: "Automotivo", isNew: false },
  { icon: Plane, name: "Turismo", isNew: true }
]

export function NichesSection() {
  return (
    <section id="nichos" className="px-6 lg:px-16 py-24 lg:py-32">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-6 h-px bg-primary" />
        <span className="text-xs uppercase tracking-[0.2em] text-primary">Nichos</span>
      </div>

      <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-16">
        Expertise em diversos{" "}
        <span className="text-primary">segmentos</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border">
        {niches.map((niche, index) => (
          <motion.div
            key={niche.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-background p-8 text-center hover:bg-primary/5 transition-colors group cursor-pointer"
          >
            <niche.icon className="w-8 h-8 mx-auto mb-4 text-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
            <p className="font-sans text-sm font-semibold">{niche.name}</p>
            {niche.isNew && (
              <span className="text-[0.6rem] tracking-[0.15em] uppercase text-primary mt-2 block">
                Novo
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
