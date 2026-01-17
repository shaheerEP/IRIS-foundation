'use client'

import React from "react"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { motion } from "framer-motion"
import { GraduationCap, Users, Landmark, HeartHandshake, Utensils, Droplets } from "lucide-react"

// Service Icons Data
const servicesList = [
  { label: "Education", icon: GraduationCap },
  { label: "Training", icon: Users },
  { label: "Centers", icon: Landmark },
  { label: "Relief", icon: HeartHandshake },
  { label: "Feeding", icon: Utensils },
  { label: "Water", icon: Droplets },
]

// Data
const services = [
  { images: ["/education-1.jpg", "/education-2.jpg", "/education-3.jpg", "/education-4.jpg"] },
  { images: ["/training-1.jpg", "/training-2.jpg", "/training-3.jpg", "/training-4.jpg"] },
  { images: ["/center-1.jpg", "/center-2.jpg", "/center-3.jpg", "/center-4.jpg"] },
  { images: ["/relief-1.jpg", "/relief-2.jpg", "/relief-3.jpg", "/relief-4.jpg"] },
  { images: ["/feeding-1.jpg", "/feeding-2.jpg", "/feeding-3.jpg", "/feeding-4.jpg"] },
  { images: ["/drops-1.jpg", "/drops-2.jpg", "/drops-3.jpg", "/drops-4.jpg"] },
]

export function HomeServicesOverview() {
  const baseImages = services.flatMap((s) => s.images ?? [])
  const infiniteImages = [...baseImages, ...baseImages]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, delay: 0.5, ease: "easeOut" as const }
    }
  }

  return (
    <section className="relative py-16 overflow-hidden flex flex-col gap-8">

      {/* --- 1. NEW BACKGROUND LAYERS --- */}
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-secondary" />

      {/* Ambient Blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      {/* --- 2. EXISTING CONTENT (Added 'relative z-10' to stay visible) --- */}

      {/* Text Section */}
      <Container size="default" className="text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {/* Label & Title Section */}
          <div className="mb-6 space-y-2">
            {/* Label: Smaller, uppercase, slightly transparent white for hierarchy */}
            <span className="block text-sm font-bold tracking-widest uppercase text-white md:text-base">
              Other Services
            </span>

            {/* Title: Large, bold, purely white */}
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl tracking-tight">
              Holistic Community Development
            </h2>
          </div>

          <div className="mt-4 max-w-2xl mx-auto">
            {/* Paragraph: Changed text-gray-300 to text-white */}
            {/* Paragraph: Changed text-gray-300 to text-white */}
            <p className="text-sm md:text-base leading-relaxed text-white font-light">
              The IRIS Foundation fosters holistic growth in over 40 villages. We address
              critical community needs, ensuring dignity and development go hand in hand.
            </p>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
              {servicesList.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 transition-colors duration-300"
                >
                  <div className="p-2 rounded-full bg-white/20 mb-2 text-white">
                    <service.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-medium text-white tracking-wide text-center">
                    {service.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Infinite Image Slider Section */}

    </section>
  )
}