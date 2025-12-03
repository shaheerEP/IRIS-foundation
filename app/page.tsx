import { Hero } from "@/components/sections/Hero"
import { HomeServicesOverview } from "@/components/sections/HomeServicesOverview"
import { ImpactStatsStrip } from "@/components/sections/ImpactStatsStrip"
import { ProgramsOverview } from "@/components/sections/ProgramsOverview"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { AnimatedSection } from "@/components/AnimatedSection"
import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* Hero already animated */}
      <Hero
        id="home"
        title="Touching Hearts, Changing Lives"
        subtitle="IRIS Foundation is dedicated to supporting education and social uplift in underprivileged villages across India. Together, we can create lasting change."
      />

      

      {/* ABOUT SECTION */}
      <AnimatedSection>
        <section id="about" className="py-24 bg-white">
          <Container size="large">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Left */}
              <AnimatedSection>
                <div>
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
                </div>
              </AnimatedSection>

              {/* Right Quote Card */}
              <AnimatedSection>
                <div className="relative">
                  <div className="glass-card rounded-3xl p-8">
                    <blockquote className="text-lg italic text-foreground/80 mb-4">
                      “I was dispatched as a teacher”
                    </blockquote>
                    <cite className="text-sm text-muted">— Prophet Muhammed (s)</cite>
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </Container>
        </section>
      </AnimatedSection>

   
      {/* IMPACT STATS */}
      <AnimatedSection>
        <ImpactStatsStrip />
      </AnimatedSection>

      {/* PROGRAMS */}
      <AnimatedSection>
        <ProgramsOverview />
      </AnimatedSection>



       <AnimatedSection>
        <HomeServicesOverview />
      </AnimatedSection>

            {/* CTA SECTION */}
<AnimatedSection>
  {/* Changed bg-white to bg-white/80 for transparency and added backdrop-blur */}
  <section className="relative mt-150 py-24 overflow-hidden bg-white ">
    
    <Container size="large" className="relative z-10">
      <div className="text-center max-w-2xl mx-auto">
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

      </div>
    </Container>
  </section>
</AnimatedSection>

    </>
  )
}
