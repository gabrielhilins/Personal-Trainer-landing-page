"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "Preciso ter experiência com treinos?",
    answer:
      "Não! Atendo alunos de todos os níveis, desde iniciantes completos até atletas avançados. O treino é 100% personalizado para o seu nível atual e objetivos.",
  },
  {
    question: "Os treinos funcionam para iniciantes?",
    answer:
      "Com certeza! Na verdade, iniciantes costumam ter os melhores resultados iniciais. Desenvolvo um programa adequado ao seu condicionamento atual, com evolução progressiva.",
  },
  {
    question: "Os treinos são personalizados mesmo?",
    answer:
      "Sim, cada treino é único e desenvolvido especificamente para você. Levo em conta seu biotipo, objetivos, disponibilidade de tempo, possíveis restrições e preferências pessoais.",
  },
  {
    question: "Vocês atendem online ou apenas presencial?",
    answer:
      "Oferecemos ambas as modalidades! Temos atendimento presencial em São Paulo e acompanhamento online completo com vídeo-chamadas e suporte via app.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "Com comprometimento, a maioria dos alunos percebe mudanças significativas entre 4 a 8 semanas. Porém, cada organismo responde de forma diferente.",
  },
  {
    question: "O acompanhamento nutricional está incluso?",
    answer:
      "Nos planos Premium e Elite, sim! Oferecemos orientação nutricional completa integrada ao seu plano de treino para resultados maximizados.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Tire suas dúvidas sobre nossos planos e metodologia de treino.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-secondary border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-all duration-300 shadow-sm"
                >
                  <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline hover:text-primary py-6 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}