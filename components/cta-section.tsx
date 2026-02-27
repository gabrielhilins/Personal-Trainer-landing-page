"use client"

import { Button } from "@/components/ui/button"
import { HiArrowRight } from "react-icons/hi"
import { FaBolt } from "react-icons/fa"
import { motion } from "framer-motion"

export function CtaSection() {
  return (
    <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-300 aspect-square bg-primary/
20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute -top-[20%] -left-[10%] w-[60%] aspect-square bg-primary/10 rounded-full blur-[120px] animate-[bounce_15s_infinite]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] aspect-square bg-primary/10 rounded-full blur-[120px] animate-[bounce_12s_infinite]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full mb-10 backdrop-blur-sm"
          >
            <FaBolt className="w-4 h-4 text-primary animate-bounce" />
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
              Transformação garantida
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9]">
            Pronto para sua <br />
            <span className="text-primary italic">evolução?</span>
          </h2>

          <p className="text-lg lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium text-balance">
            Agende sua avaliação gratuita e descubra o potencial máximo do seu corpo com acompanhamento de elite.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              asChild
              size="lg"
              className="group relative bg-primary text-primary-foreground font-bold text-xl px-12 py-9 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_-12px_rgba(var(--primary),0.5)] overflow-hidden"
            >
              <a href="#contato" className="flex items-center gap-4">
                <span className="relative z-10 flex items-center gap-3">
                  Agendar Minha Transformação
                  <HiArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>

                                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-45 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}