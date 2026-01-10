"use client"

import { FaAward, FaUsers, FaCalendarAlt, FaTrophy } from "react-icons/fa"
import { motion } from "framer-motion"

const stats = [
  {
    icon: FaUsers,
    value: "+500",
    label: "Alunos Transformados",
  },
  {
    icon: FaCalendarAlt,
    value: "10+",
    label: "Anos de Experiência",
  },
  {
    icon: FaAward,
    value: "15+",
    label: "Certificações",
  },
  {
    icon: FaTrophy,
    value: "98%",
    label: "Taxa de Satisfação",
  },
]

export function AuthoritySection() {
  return (
    <section className="py-16 lg:py-20 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}