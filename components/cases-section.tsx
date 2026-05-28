"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const cases = [
  {
    title: "E-commerce de Moda",
    category: "Tráfego Pago + Social",
    result: "+312% em vendas",
    image: "/cases/case1.jpg",
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Clínica Odontológica",
    category: "Google Ads + Landing Pages",
    result: "+180 leads/mês",
    image: "/cases/case2.jpg",
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Escola de Idiomas",
    category: "Meta Ads + Funis",
    result: "+450% em matrículas",
    image: "/cases/case3.jpg",
    color: "from-orange-600 to-amber-600"
  },
  {
    title: "SaaS B2B",
    category: "LinkedIn + Inbound",
    result: "R$ 2M em contratos",
    image: "/cases/case4.jpg",
    color: "from-green-600 to-emerald-600"
  }
]

const clients = [
  "TechCorp", "MedPlus", "EduBrasil", "StyleStore", "FoodChain", "AutoMax"
]

export function CasesSection() {
  return (
    <section id="cases" className="px-6 lg:px-16 py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs uppercase tracking-wider text-primary font-medium mb-6"
          >
            Cases de Sucesso
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6"
          >
            Resultados que{" "}
            <span className="text-primary">falam por nós</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-lg mx-auto leading-relaxed"
          >
            Conheça alguns dos projetos que transformaram a presença digital dos nossos clientes.
          </motion.p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer hover:border-primary/50 transition-all"
            >
              {/* Image Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.color} opacity-20`} />
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
              
              {/* Content */}
              <div className="relative z-10 p-8 lg:p-10 min-h-[280px] flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-background/50 backdrop-blur-sm rounded-full text-xs text-muted-foreground mb-4">
                    {caseItem.category}
                  </span>
                  <h3 className="font-sans text-2xl lg:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {caseItem.title}
                  </h3>
                </div>
                
                <div className="flex items-end justify-between">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                    <span className="font-bold text-lg">{caseItem.result}</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Empresas que confiam em nós
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl lg:text-3xl font-bold text-muted-foreground/40 hover:text-primary transition-colors cursor-pointer"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
