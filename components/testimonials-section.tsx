"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Marcelo Silva",
    role: "Empresário",
    image: "/professional-man-headshot-corporate.jpg",
    result: "Perdeu 15kg em 4 meses",
    text: "O Rafael mudou minha vida. Não é só sobre treino, é sobre mentalidade. Em 4 meses perdi 15kg e ganhei uma energia que não tinha há anos.",
    rating: 5,
  },
  {
    name: "Ana Carolina",
    role: "Médica",
    image: "/professional-woman-headshot-doctor.jpg",
    result: "Ganhou 8kg de massa muscular",
    text: "Sempre quis ganhar massa muscular mas nunca conseguia. Com a metodologia do Rafael, em 6 meses ganhei 8kg de massa magra.",
    rating: 5,
  },
  {
    name: "Pedro Henrique",
    role: "Atleta Amador",
    image: "/athletic-man-headshot-fitness.jpg",
    result: "Alcançou sua melhor forma",
    text: "Preparação impecável para minha primeira competição. O acompanhamento é diferenciado, cada detalhe é pensado para o resultado.",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Executiva",
    image: "/professional-woman-headshot-business.png",
    result: "Transformação completa",
    text: "Minha autoestima melhorou 100%. O Rafael entende que cada pessoa é única e adapta tudo às nossas necessidades.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) 

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            O que nossos alunos dizem
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Histórias reais de transformação que comprovam a eficácia da nossa metodologia.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-8 lg:p-12 relative">
              <FaQuoteLeft className="w-12 h-12 text-primary/30 mb-6" />
              
              <div className="min-h-[200px] lg:min-h-[150px] relative">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -50 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                      {testimonials[currentIndex].text}
                    </p>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                        />
                        <div>
                          <div className="font-bold text-foreground">{testimonials[currentIndex].name}</div>
                          <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
                        </div>
                      </div>

                      <div className="text-left sm:text-right">
                        <div className="flex items-center sm:justify-end gap-1 mb-1">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <FaStar key={i} className="w-4 h-4 text-primary" />
                          ))}
                        </div>
                        <div className="text-sm text-primary font-bold tracking-tight">
                          {testimonials[currentIndex].result}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all active:scale-90"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 w-2"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all active:scale-90"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}