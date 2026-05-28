"use client"

import Link from "next/link"
import { Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="section-divider py-10 bg-background">
      <div className="container-page">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <Link href="/" className="font-sans text-xl font-extrabold tracking-tight text-foreground">
            Wex<span className="text-primary">.</span>
          </Link>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { href: "#servicos", label: "Serviços" },
              { href: "#resultados", label: "Resultados" },
              { href: "#processo", label: "Processo" },
              { href: "#precos", label: "Planos" },
              { href: "#contato", label: "Contato" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {[Instagram, Linkedin, Youtube].map((Icon, i) => (
              <Link key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col lg:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Wex Assessoria de Marketing. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
