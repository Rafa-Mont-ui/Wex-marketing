"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    text: "A Wex transformou completamente nossa presença digital. Em 3 meses, triplicamos nossas vendas online.",
    author: "Marina Santos",
    role: "CEO, TechStart",
    initials: "MS"
  },
  {
    text: "Profissionalismo e resultados. Finalmente encontramos uma agência que entrega o que promete.",
    author: "Rafael Costa",
    role: "Diretor, Outlet Premium",
    initials: "RC"
  },
  {
    text: "O ROI das campanhas superou todas as expectativas. Recomendo fortemente para qualquer empresa séria.",
    author: "Ana Oliveira",
    role: "CMO, Beauty Concept",
    initials: "AO"
  }
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="px-6 lg:px-16 py-24 lg:py-32 overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-6 h-px bg-primary" />
        <span className="text-xs uppercase tracking-[0.2em] text-primary">Depoimentos</span>
      </div>

      <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-12">
        O que nossos{" "}
        <span className="text-primary">clientes</span>{" "}
        dizem
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-border p-8 hover:border-primary transition-colors group"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            {/* Text */}
            <p className="text-foreground/80 leading-relaxed mb-8 italic font-[var(--font-dm-sans)]">
              &ldquo;{testimonial.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center font-sans font-extrabold text-sm text-primary-foreground">
                {testimonial.initials}
              </div>
              <div>
                <strong className="block text-sm font-semibold">{testimonial.author}</strong>
                <span className="text-xs text-muted-foreground">{testimonial.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
