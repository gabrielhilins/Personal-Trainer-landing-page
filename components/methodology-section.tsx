"use client"

import { FaClipboardCheck, FaBullseye, FaChartLine, FaMedal } from "react-icons/fa"
import { motion } from "framer-motion"

const steps = [
  {
    icon: FaClipboardCheck,
    step: "01",
    title: "Avaliação Física Completa",
    description: "Análise detalhada do seu biotipo, composição corporal, histórico de treino e objetivos pessoais.",
  },
  {
    icon: FaBullseye,
    step: "02",
    title: "Plano Personalizado",
    description: "Desenvolvimento de um programa de treino 100% adaptado às suas necessidades e disponibilidade.",
  },
  {
    icon: FaChartLine,
    step: "03",
    title: "Acompanhamento Contínuo",
    description: "Monitoramento constante da sua evolução com ajustes semanais para maximizar resultados.",
  },
  {
    icon: FaMedal,
    step: "04",
    title: "Resultados Mensuráveis",
    description: "Métricas claras e objetivas que comprovam sua transformação a cada etapa do processo.",
  },
]

export function MethodologySection() {
  return (
    <section id="metodologia" className="py-20 lg:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Metodologia</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Como funciona o processo
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Uma abordagem estruturada e científica para garantir sua transformação de forma sustentável.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-secondary border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="text-primary/20 font-bold text-6xl absolute top-4 right-4 transition-transform group-hover:scale-110 group-hover:text-primary/30">
                  {step.step}
                </div>
                
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all group-hover:rotate-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index * 0.2) + 0.3 }}
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border origin-left" 
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}