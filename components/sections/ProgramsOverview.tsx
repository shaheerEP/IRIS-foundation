"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/card"
import { GraduationCap, Users, Award, Building } from "lucide-react"

const programs = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Hifzul Qur’an Model Academy",
    description:
      "A residential academy in rural Punjab where children memorize the Qur’an while continuing their mainstream studies...",
    stats: "Established 2022 · 1 campus · first batch of 15 students",
    images: ["/hqma-1.jpg", "/hqma-2.jpg"],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Makatib-e-Imam Rabbani",
    description:
      "A village maktab network providing basic Islamic learning, Qur’an reading, and academic support for children...",
    stats: "Multiple village maktabs · 500+ children reached",
    images: ["/maktab-1.jpg", "/maktab-2.jpg"],
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Rabbani Fellowship",
    description:
      "An intensive fellowship that trains young men and women to become community leaders, teachers, and social workers...",
    stats: "200+ fellows trained · Active in 15+ states",
    images: ["/fellow-1.jpg"],
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Village Education & Cultural Centers",
    description:
      "Centers attached to mosques and community buildings hosting classes, mentoring sessions, and cultural programs...",
    stats: "40+ centers active in Punjab and nearby states",
    images: ["/center-1.jpg", "/center-2.jpg"],
  },
]

export function ProgramsOverview() {
  return (
    <section id="programs" className="py-24 bg-background">
      <Container size="large">
        <SectionTitle
          label="Programs"
          title="Our Key Initiatives"
          subtitle="Focused programs that turn village children and youth into tomorrow’s leaders."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <p className="text-muted leading-relaxed text-lg">
            Each IRIS program addresses an urgent village need: Quranic and formal education for children,
            guidance for youth, and cultural spaces where communities can thrive...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <Card
                variant="bordered"
                className="group overflow-hidden p-6 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col gap-5 h-full">

                  {/* Icon + Title */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <span className="text-primary text-3xl">{program.icon}</span>
                    <h3 className="text-2xl font-semibold text-foreground">{program.title}</h3>
                  </motion.div>

                  {/* Images */}
                  <div className="flex flex-wrap gap-3">
                    {Array.isArray(program.images) &&
                      program.images.map((img, idx) => (
                        <motion.div
                          key={img + idx}
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.3 }}
                          className="relative h-36 w-36 rounded-xl overflow-hidden bg-muted/20"
                        >
                          <Image
                            src={img}
                            alt={`${program.title} image ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      ))}
                  </div>

                  {/* Description */}
                  <p className="text-muted text-sm leading-relaxed">
                    {program.description}
                  </p>

                  {/* Stats */}
                  <p className="text-secondary text-sm font-medium mt-auto">
                    {program.stats}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
