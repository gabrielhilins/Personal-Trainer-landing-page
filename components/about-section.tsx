"use client"

import { FaCheckCircle } from "react-icons/fa"
import { motion } from "framer-motion"

const highlights = [
  "Formação em Educação Física pela UFPE",
  "Especialização em Musculação e Treinamento Funcional",
  "Certificação Internacional NSCA-CPT",
  "Pós-graduação em Fisiologia do Exercício",
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/professional-male-personal-trainer-portrait-confid.jpg"
                alt="Rafael Mendes - Personal Trainer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-2xl">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm font-medium">Anos de Experiência</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Mim</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Transformando vidas através do treino inteligente
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sou Rafael Mendes, personal trainer especializado em transformação corporal e performance. Há mais de 10
              anos ajudo pessoas a alcançarem seus objetivos físicos com uma metodologia baseada em ciência e resultados
              comprovados.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Minha abordagem é única: combino técnicas avançadas de treinamento com acompanhamento nutricional
              personalizado, garantindo que cada aluno receba atenção individualizada para maximizar seus resultados.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }} 
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}