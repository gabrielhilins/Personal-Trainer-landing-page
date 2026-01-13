"use client"

import { CgGym } from "react-icons/cg"
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa"
import { motion } from "framer-motion"
import { PoweredBy } from "@/components/powered-by"

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >

          <div className="flex items-center gap-2 group cursor-pointer">
            <CgGym className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-bold text-lg text-foreground tracking-tight uppercase">
              Rafael Mendes
            </span>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: FaInstagram, href: "#" },
              { icon: FaTiktok, href: "#" },
              { icon: FaFacebookF, href: "#" },
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
              Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
              Termos
            </a>
          </div>
        </motion.div>

          <div className="mt-8 pt-8 border-t border-border flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rafael Mendes. Todos os direitos reservados.
          </p>

          <PoweredBy />
        </div>
      </div>
    </footer>
  )
}