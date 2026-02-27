"use client"

import { Button } from "@/components/ui/button";
import { HiArrowRight } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { motion, Variants } from "framer-motion";

export function HeroSection() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: custom,
      }
    })
  };

  const mes = new Date().getMonth() + 1
  const monthNamesInPortuguese = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  const currentMonthName = monthNamesInPortuguese[mes - 1];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/professional-personal-trainer-muscular-man-in-dark.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-background/60" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Vagas limitadas para {currentMonthName}
            </span>
          </motion.div>

          <motion.h1 
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance"
          >
            Transforme seu corpo com um treino{" "}
            <span className="text-primary">feito para você</span>
          </motion.h1>

          <motion.p 
            custom={0.6}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
          >
            Metodologia exclusiva com mais de 10 anos de experiência. Resultados
            reais com acompanhamento personalizado do início ao fim.
          </motion.p>

          <motion.div 
            custom={0.8}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 font-bold text-base px-8 py-6 group"
            >
              <a href="#contato">
                Agendar Avaliação Gratuita
                <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground bg-transparent hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 font-semibold text-base px-8 py-6"
            >
              <a href="#planos">
                <FaPlay className="mr-2 w-4 h-4" />
                Ver Planos de Treino
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <IoIosArrowDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  );
}