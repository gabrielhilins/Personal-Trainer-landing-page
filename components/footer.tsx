"use client"

import { CgGym } from "react-icons/cg"
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa"
import { motion } from "framer-motion"

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

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 pt-8 border-t border-border flex flex-col items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rafael Mendes. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-2 text-[10px] tracking-[0.15em] text-muted-foreground/50 font-[family-name:var(--font-quicksand)]">
            <span className="uppercase italic opacity-85">desenvolvido por</span>
            <a 
              href="https://ggabstechdesign.com.br" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-all duration-500 hover:-translate-y-1 group"
            >
              <img 
                src="/Wordmark SVG.svg" 
                alt="GGABS" 
                className="h-6 w-auto grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" 
              />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}