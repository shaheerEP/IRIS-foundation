"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Book,
  Briefcase,
  Building,
  Shield,
  Utensils,
  Droplet,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { services } from "@/lib/constants"

const iconMap: Record<string, React.ReactNode> = {
  book: <Book className="w-8 h-8" />,
  briefcase: <Briefcase className="w-8 h-8" />,
  building: <Building className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
  utensils: <Utensils className="w-8 h-8" />,
  droplet: <Droplet className="w-8 h-8" />,
}

export function HomeServicesOverview() {
  return (
    <section id="services" className="py-24 bg-background">
      <Container size="large">
        <SectionTitle
          label="What We Do"
          title="Our Services"
          subtitle="Scroll down to see each focus area of IRIS Foundation"
          centered
        />

        <div className="mt-10 space-y-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                href={service.href}
                variant="bordered"
                className="overflow-hidden"
              >
                <div
                  className={`grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-stretch ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text + icon */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    {/* Icon animation */}
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="mb-4 text-primary"
                    >
                      {iconMap[service.icon]}
                    </motion.div>

                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Images */}
                  <div className="relative bg-muted/40">
                    {Array.isArray(service.images) && service.images.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 h-full p-4">
                        {service.images.slice(0, 3).map((src, idx) => (
                          <motion.div
                            key={src + idx}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="relative w-full h-40 sm:h-44 md:h-52 lg:h-56 overflow-hidden rounded-xl"
                          >
                            <Image
                              src={src}
                              alt={`${service.title} image ${idx + 1}`}
                              fill
                              className="object-cover"
                              sizes="(min-width: 1024px) 50vw, 100vw"
                            />
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex h-full items-center justify-center p-6 text-sm text-muted">
                        Images coming soon
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
