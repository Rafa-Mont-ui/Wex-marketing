"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Send, User } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section-block section-divider bg-card/20">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Contato</span>
            <h2 className="section-title mb-4">
              Vamos construir sua <span className="text-highlight">próxima fase</span>
            </h2>
            <p className="section-desc text-sm max-w-md">
              Preencha o formulário e nossa equipe retorna em até 24 horas com uma proposta personalizada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="surface-card p-6 lg:p-8 space-y-5">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-sans text-xl font-bold mb-2">Mensagem enviada!</h3>
                  <p className="text-muted-foreground text-sm">Entraremos em contato em breve.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground">
                      Nome
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        id="name"
                        required
                        placeholder="Seu nome completo"
                        className="w-full bg-background border border-border rounded-lg py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground">
                      E-mail
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        className="w-full bg-background border border-border rounded-lg py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Conte sobre seu negócio e objetivos..."
                      className="w-full bg-background border border-border rounded-lg py-2.5 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Enviar mensagem
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
