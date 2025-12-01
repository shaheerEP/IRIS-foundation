import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Users, Award, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Training",
  description: "Skill development and vocational training programs by IRIS Foundation.",
}

const programs = [
  { title: "Tailoring & Stitching", description: "Comprehensive courses for women to learn garment making" },
  { title: "Computer Literacy", description: "Basic to advanced computer skills training" },
  { title: "Handicrafts", description: "Traditional arts and crafts skill development" },
  { title: "Agriculture Training", description: "Modern farming techniques for better yields" },
]

const stats = [
  { icon: <Users className="w-6 h-6" />, value: "100+", label: "Trainees" },
  { icon: <Award className="w-6 h-6" />, value: "8", label: "Programs" },
  { icon: <Clock className="w-6 h-6" />, value: "3 Months", label: "Avg Duration" },
]

export default function TrainingPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/sample-hero.jpg" alt="Training Programs" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/70" />
        </div>
        <Container size="large" className="relative z-10 pt-24">
          <SectionTitle
            label="Training"
            title="Skills for Self-Reliance"
            subtitle="Vocational training programs that empower individuals with practical skills"
            light
          />
        </Container>
      </section>

      <section className="py-24 bg-background">
        <Container size="large">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionTitle label="Our Approach" title="Building Livelihoods" />
              <p className="text-muted leading-relaxed mb-6">
                Our training programs are designed to equip individuals with marketable skills that can help them earn a
                sustainable livelihood. We focus on practical, hands-on training that prepares participants for
                real-world opportunities.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Each program includes theoretical knowledge, practical sessions, and guidance on starting small
                businesses or finding employment. We also provide ongoing support to our graduates.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat) => (
                  <Card key={stat.label} variant="bordered" className="text-center p-4">
                    <div className="text-secondary flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Available Programs</h3>
              <div className="space-y-4">
                {programs.map((program) => (
                  <Card key={program.title} variant="bordered">
                    <div className="flex items-start gap-4">
                      <div className="text-primary">
                        <Wrench className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{program.title}</h4>
                        <p className="text-muted text-sm">{program.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-primary">
        <Container size="large" className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Support Our Training Programs</h3>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Help us expand our training centers and reach more individuals in need.
          </p>
          <Button href="/donate" variant="glass">
            Donate Now
          </Button>
        </Container>
      </section>
    </>
  )
}
