"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { faqs } from "@wex/shared"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-block">
      <div className="container-page max-w-3xl">
        <div className="text-center mb-12">
          <span className="section-label block">FAQ</span>
          <h2 className="section-title">
            Perguntas <span className="text-highlight">frequentes</span>
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="faq-bar"
                data-open={isOpen}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group"
                >
                  <span className="font-sans font-semibold text-sm lg:text-base pr-6 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-48 pb-4 px-5" : "max-h-0"
                  }`}
                >
                  <p className="text-muted-foreground text-sm leading-relaxed font-[var(--font-dm-sans)] border-t border-border pt-3">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
