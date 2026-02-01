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
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

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


  const [showBackground, setShowBackground] = useState(false)

  // Use simple Intersection Observer or Framer Motion's onViewportEnter/useInView
  // Since we have framer-motion, let's use a wrapper for the trigger area

  return (
    <>
      {showBackground && (
        <div className="fixed inset-0 z-[-1]">
          <Image
            src="/new/home-bg1.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Hero already animated */}
      <Hero
        id="home"
        title="Touching Hearts, Changing Lives"
        subtitle="IRIS Foundation is dedicated to supporting education and social uplift in underprivileged villages across India. Together, we can create lasting change."
        //  sideImage="/new/above (2).png"
        backgroundImage="/new/home-bg3.jpeg"
        enableZoomEffect={true}
      />




      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white">
        <Container size="large">
          <div className="flex flex-col gap-12 max-w-5xl mx-auto">

            {/* Header: Title (Left) & Quote (Right) */}
            <div className="grid md:grid-cols-2 gap-8 items-center">

              {/* Left: Section Title */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInLeft}
              >
                <SectionTitle
                  label="Our Vision & Mission"
                  title="Shaping Communities Through Education and Values"
                  subtitle="Reaching children and families in underserved regions with quality education, ethical guidance, and opportunities that empower them to contribute positively to society and the nation."
                />
              </motion.div>

              {/* Right: Quote Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInRight}
                className="flex justify-center md:justify-end"
              >
                <div className="glass-card rounded-3xl p-8 text-center max-w-md w-full">
                  <blockquote className="text-lg italic text-foreground/80 mb-4">
                    “Indeed i was sent as a teacher”
                  </blockquote>
                  <cite className="text-sm text-muted">— Prophet Muhammed (s)</cite>
                </div>
              </motion.div>
            </div>

            {/* Vision & Mission - 2 Columns & Text Centered */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                {/* Vision Card */}
                <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5 0-3-2.5-5.5-5.5-5.5S7 5 7 8c0 1.5.5 2.5 1.5 3.5.8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
                    </div>
                    <h4 className="font-bold text-lg text-primary uppercase tracking-wide">VISION</h4>
                  </div>
                  <p className="text-muted leading-relaxed">
                    An India where a faith-inspired Muslim civil society leads in education, uplifts the marginalized, strengthens social harmony, and contributes to the nation’s moral and economic progress.
                  </p>
                </div>

                {/* Mission Card */}
                <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                    <h4 className="font-bold text-lg text-primary uppercase tracking-wide">MISSION</h4>
                  </div>
                  <p className="text-muted leading-relaxed">
                    To empower individuals and communities through quality education, ethical values, and skill development, nurturing responsible citizens committed to nation building and social harmony.
                  </p>
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
      <motion.div
        onViewportEnter={() => setShowBackground(true)}
        viewport={{ once: true, amount: 0.1 }}
      >
        <ProgramsOverview />
      </motion.div>



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
