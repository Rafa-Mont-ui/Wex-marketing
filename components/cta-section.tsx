"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { brand } from "@wex/shared"

export function CTASection() {
  return (
    <section id="contato" className="section-block bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans text-[14rem] lg:text-[20rem] font-extrabold whitespace-nowrap">
          WEX
        </span>
      </div>

      <div className="container-page relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/50 mb-4 block"
        >
          Vamos conversar
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4"
        >
          Pronto para escalar?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="text-primary-foreground/65 max-w-lg mx-auto mb-10 text-sm lg:text-base font-[var(--font-dm-sans)]"
        >
          Agende uma consultoria gratuita e descubra como podemos transformar sua presença digital em resultados reais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            className="inline-flex items-center justify-center gap-2.5 bg-background text-primary font-sans font-bold text-xs uppercase tracking-[0.1em] px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2.5 border border-primary-foreground/30 text-primary-foreground font-sans font-bold text-xs uppercase tracking-[0.1em] px-7 py-3.5 rounded-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Agendar reunião
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
