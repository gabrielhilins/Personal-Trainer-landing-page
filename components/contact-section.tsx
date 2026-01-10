"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FiSend } from "react-icons/fi"
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  return (
    <section id="contato" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contato</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Vamos começar sua jornada
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Preencha o formulário ao lado ou entre em contato diretamente pelos canais abaixo. Respondo em até 24
              horas.
            </p>

            <div className="space-y-6">
              {[
                { icon: FaWhatsapp, label: "WhatsApp", value: "(81) 99999-9999" },
                { icon: FaEnvelope, label: "E-mail", value: "contato@rafaelmendes.com" },
                { icon: FaMapMarkerAlt, label: "Local", value: "Recife, PE" },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-5 h-5 transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="text-foreground font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-xl shadow-black/5"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Agende sua avaliação gratuita</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Nome completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  required
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-foreground font-medium">
                  WhatsApp
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  required
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goal" className="text-foreground font-medium">
                  Qual seu objetivo?
                </Label>
                <select
                  id="goal"
                  required
                  className="w-full h-10 px-3 bg-secondary border border-border rounded-md text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                >
                  <option value="" className="bg-secondary text-muted-foreground">Selecione seu objetivo</option>
                  <option value="perda-peso" className="bg-secondary">Perda de peso</option>
                  <option value="ganho-massa" className="bg-secondary">Ganho de massa muscular</option>
                  <option value="condicionamento" className="bg-secondary">Condicionamento físico</option>
                  <option value="performance" className="bg-secondary">Alta performance</option>
                  <option value="saude" className="bg-secondary">Qualidade de vida</option>
                </select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-black hover:text-primary hover:border-primary border-2 border-transparent font-bold py-6 transition-all duration-300 active:scale-95"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <>
                    Enviar Mensagem
                    <FiSend className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}