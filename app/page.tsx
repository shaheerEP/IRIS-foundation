"use client"

import { Hero } from "@/components/sections/Hero"
import { HomeServicesOverview } from "@/components/sections/HomeServicesOverview"
import { ImpactStatsStrip } from "@/components/sections/ImpactStatsStrip"
import { ProgramsOverview } from "@/components/sections/ProgramsOverview"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        router.push('/mir?transition=auto-scroll')
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [router])
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, delay: 0.2, ease: "easeOut" as const }
    }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, delay: 0.2, ease: "easeOut" as const }
    }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, delay: 0.2, ease: "easeOut" as const }
    }
  }

  return (
    <>
      {/* Hero already animated */}
      <Hero
        id="home"
        title="Touching Hearts, Changing Lives"
        subtitle="IRIS Foundation is dedicated to supporting education and social uplift in underprivileged villages across India. Together, we can create lasting change."
        //  sideImage="/new/above (2).png"
        backgroundImage="/new/home-bg3.jpeg"
      />



      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white">
        <Container size="large">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInLeft}
            >
              <SectionTitle
                label="Our Mission"
                title="Touching Hearts in Forgotten Villages"
                subtitle="Reaching children and families in places beyond the main roads, where opportunities are rare and support is limited."
              />

              <p className="text-muted white leading-relaxed mb-6">
                IRIS Foundation serves backward and neglected communities in the rural
                belts of Punjab and other North Indian states...
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Alongside education, our relief work, food programs, and clean
                drinking water projects help families live with dignity...
              </p>
            </motion.div>

            {/* Right Quote Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInRight}
            >
              <div className="relative">
                <div className="glass-card rounded-3xl p-8">
                  <blockquote className="text-lg italic text-foreground/80 mb-4">
                    “I was dispatched as a teacher”
                  </blockquote>
                  <cite className="text-sm text-muted">— Prophet Muhammed (s)</cite>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>


      {/* IMPACT STATS */}
      <div>
        <ImpactStatsStrip />
      </div>

      {/* PROGRAMS */}
      <div>
        <ProgramsOverview />
      </div>



      <div>
        <HomeServicesOverview />
      </div>

      {/* CTA SECTION */}
      {/* Changed bg-white to bg-white/80 for transparency and added backdrop-blur */}
      <section className="relative mt-150 py-24 overflow-hidden bg-white ">

        <Container size="large" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto"
          >
            {/* Gradient Text - Updated to Darker Blues */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 bg-clip-text text-transparent">
              Join Us in Making a Difference
            </h2>

            {/* Paragraph Text - Updated to Deep Blue (almost black-blue) */}
            <p className="text-blue-950 text-lg mb-8 text-pretty">
              Your contribution, big or small, helps us continue our mission...
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Button 1: Unified Color & Hover Effect */}
              <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 transition-all hover:scale-105">
                <Link href="/donate">Donate Now</Link>
              </Button>

              {/* Button 2: Same Color & Hover Effect */}
              <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 transition-all hover:scale-105">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

          </motion.div>
        </Container>
      </section>

    </>
  )
}
