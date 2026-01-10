"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { FaCheck, FaStar } from "react-icons/fa"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Básico",
    price: "297",
    description: "Ideal para quem está começando sua jornada fitness",
    features: [
      "Treino personalizado mensal",
      "2 sessões presenciais/semana",
      "Suporte via WhatsApp",
      "Reavaliação mensal",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "497",
    description: "Para quem busca resultados consistentes e rápidos",
    features: [
      "Treino personalizado semanal",
      "4 sessões presenciais/semana",
      "Orientação nutricional básica",
      "Suporte prioritário 24h",
      "Reavaliação quinzenal",
      "Acesso ao app exclusivo",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "997",
    description: "Acompanhamento completo para alta performance",
    features: [
      "Treino 100% personalizado",
      "Sessões ilimitadas",
      "Plano nutricional completo",
      "Suporte VIP 24h",
      "Reavaliação semanal",
      "Acesso VIP ao app",
      "Acompanhamento de suplementação",
    ],
    popular: false,
  },
]

export function PlansSection() {
  return (
    <section id="planos" className="py-20 lg:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Título com animação de subida */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Planos de Treino</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Escolha o plano ideal para seus objetivos
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cada plano foi desenvolvido para atender diferentes necessidades e níveis de comprometimento com sua
            transformação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex" // Garante que o motion div não quebre o items-stretch
            >
              <Card
                className={`relative bg-secondary border-border transition-all duration-500 hover:-translate-y-2 cursor-default flex flex-col w-full ${
                  plan.popular 
                    ? "border-primary/60 shadow-xl shadow-primary/10 md:scale-105 z-10" 
                    : "hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                      <FaStar className="w-4 h-4" />
                      Mais Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4 pt-8">
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="text-center pb-6 flex-1">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-muted-foreground text-lg font-medium">R$</span>
                    <span className="text-5xl font-bold text-foreground tracking-tight">{plan.price}</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>

                  <div className="mt-8 space-y-4 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaCheck className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-4 mt-auto">
                  <Button
                    asChild
                    className={`w-full font-bold py-6 text-base transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/20"
                        : "bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    }`}
                  >
                    <a href="#contato">Começar Agora</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}