"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/Container"
import { cn } from "@/lib/utils"

interface HeroProps {
  title: string
  subtitle: string
  primaryCta?: { label: string; href: string }
  primaryCtaVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "glass"
  secondaryCta?: { label: string; href: string }
  backgroundImage?: string
  overlay?: boolean
  id?: string
  sideImage?: string
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  primaryCtaVariant = "secondary",
  secondaryCta,
  backgroundImage,
  overlay = true,
  id,
  sideImage,
}: HeroProps) {
  return (
    <section
      id={id}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
      >
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        )}
        {overlay && (
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/90 to-secondary/70" />

          // <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-black/70 to-black/50" />

        )}
      </div>

      {/* Content */}
      <Container size="large" className="relative z-10 pt-32 lg:pt-20">
        <div
          className={cn(
            "mx-auto",
            sideImage
              ? "grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left"
              : "max-w-5xl mx-auto text-center"
          )}
        >
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight",
                sideImage ? "text-balance" : "text-balance"
              )}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
              className={cn(
                "text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light",
                sideImage ? "max-w-xl mx-auto lg:mx-0" : "text-pretty"
              )}
            >
              {subtitle}
            </motion.p>

            {/* Buttons */}
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
              className={cn(
                "flex flex-col sm:flex-row gap-4",
                sideImage ? "items-center justify-center lg:justify-start" : "items-center justify-center"
              )}
            >
              {primaryCta && (
                <motion.div
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                >
                  <Button asChild variant={primaryCtaVariant} size="lg">
                    <Link href={primaryCta.href}>
                      {primaryCta.label}
                    </Link>
                  </Button>
                </motion.div>
              )}

              {secondaryCta && (
                <motion.div
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                >
                  <Button asChild variant="glass" size="lg">
                    <Link href={secondaryCta.href}>
                      {secondaryCta.label}
                    </Link>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Side Image */}
          {sideImage && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="relative block mt-10 lg:mt-0"
            >
              <Image
                src={sideImage}
                alt={title}
                width={600}
                height={600}
                className="object-contain drop-shadow-2xl mx-auto lg:mx-0"
                priority
              />
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  )
}
