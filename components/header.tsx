"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { HiMenu, HiX } from "react-icons/hi"
import { CgGym } from "react-icons/cg"
import { FaRegCalendarCheck } from "react-icons/fa"
import { motion, Variants } from "framer-motion" // Importado motion e Variants

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#planos", label: "Planos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Variantes para a animação de entrada do Header
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2 text-foreground">
            <CgGym className="w-8 h-8 text-primary" />
            <span className="font-bold text-lg lg:text-xl tracking-tight">RAFAEL MENDES</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button 
              asChild 
              className="bg-primary text-primary-foreground border-2 border-transparent hover:bg-black hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300 font-semibold shadow-md"
            >
              <a href="#contato" className="flex items-center gap-2">
                <FaRegCalendarCheck className="w-4 h-4" /> 
                Agendar Avaliação
              </a>
            </Button>
          </div>

          <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-border"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                asChild 
                className="bg-primary text-primary-foreground hover:bg-black hover:border-primary hover:text-primary font-semibold mt-2 transition-all"
              >
                <a href="#contato" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                  <FaRegCalendarCheck className="w-4 h-4" /> 
                  Agendar Avaliação
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}