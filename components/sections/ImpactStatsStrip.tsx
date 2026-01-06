"use client"

import type React from "react"
import { Users, MapPin, Heart, Globe } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { impactStats } from "@/lib/constants"
import CountUp from "@/components/CountUp";
import { motion } from "framer-motion"

const iconMap: Record<string, React.ReactNode> = {
  users: <Users className="w-10 h-10" />,
  "map-pin": <MapPin className="w-10 h-10" />,
  heart: <Heart className="w-10 h-10" />,
  globe: <Globe className="w-10 h-10" />,
}

export function ImpactStatsStrip() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, delay: 0.5, ease: "easeOut" as const }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-secondary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <Container size="large" className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {impactStats.map((stat) => (
            <motion.div variants={fadeInUp} key={stat.label} className="text-center group">
              <div className="glass rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-white/80 flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[stat.icon]}
                </div>

                {/* Animated Value */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <CountUp
                    end={parseInt(stat.value)}
                    suffix={stat.value.replace(/[0-9]/g, "")}
                  />
                </div>

                <div className="text-white/70 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
