"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/Container"

interface HeroProps {
  title: string
  subtitle: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  backgroundImage?: string
  overlay?: boolean
  id?: string
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage = "/hero.pn",
  overlay = true,
  id,
}: HeroProps) {
  return (
    <section
      id={id}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
       
        {overlay && (
         <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/40 to-secondary/30" />

        )}
      </motion.div>

      {/* Content */}
      <Container size="large" className="relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed text-pretty"
          >
            {subtitle}
          </motion.p>

          {/* Buttons with stagger */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {primaryCta && (
              <motion.div
                variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              >
                <Button href={primaryCta.href} variant="secondary" size="lg">
                  {primaryCta.label}
                </Button>
              </motion.div>
            )}

            {secondaryCta && (
              <motion.div
                variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              >
                <Button href={secondaryCta.href} variant="glass" size="lg">
                  {secondaryCta.label}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
