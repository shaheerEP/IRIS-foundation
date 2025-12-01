import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Calendar, GraduationCap, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Education",
  description:
    "Learn about IRIS Foundation's education programs including Hifzul Quran Academy and Village Education initiatives.",
}

const academyStats = [
  { icon: <Users className="w-5 h-5" />, label: "Students in First Batch", value: "15" },
  { icon: <Calendar className="w-5 h-5" />, label: "Year Started", value: "2022" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Certified Teachers", value: "5" },
]

const maktabStats = [
  { icon: <BookOpen className="w-5 h-5" />, label: "Active Maktabs", value: "12" },
  { icon: <Users className="w-5 h-5" />, label: "Students Enrolled", value: "500+" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Villages Covered", value: "8" },
]

export default function EducationPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/education-1.jpg" alt="Education Programs" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/70" />
        </div>
        <Container size="large" className="relative z-10 pt-24">
          <SectionTitle
            label="Education"
            title="Empowering Through Knowledge"
            subtitle="Quality education programs designed to unlock potential and transform futures"
            light
          />
        </Container>
      </section>

      <section className="py-16 bg-background">
        <Container size="large">
          <p className="text-lg text-muted leading-relaxed max-w-4xl">
            Education lies at the heart of IRIS Foundation&apos;s mission. We believe that access to quality education
            is the most effective way to break the cycle of poverty and create lasting change in communities. Our
            education initiatives span from formal Islamic education to village-level maktab programs, ensuring that
            every child has the opportunity to learn and grow.
          </p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container size="large">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle label="Flagship Program" title="Hifzul Quran Model Academy" />
              <p className="text-muted leading-relaxed mb-6">
                Our Hifzul Quran Model Academy provides comprehensive Islamic education with a focus on Quran
                memorization. Students receive expert guidance from qualified teachers in a nurturing environment that
                balances religious education with modern learning.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                The academy follows a structured curriculum that ensures students not only memorize the Quran but also
                understand its teachings and apply them in daily life. We provide boarding facilities, meals, and all
                educational materials free of cost.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {academyStats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-background rounded-xl">
                    <div className="text-primary flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image src="/education-2.jpg" alt="Students studying" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mt-8">
                <Image src="/education-3.jpg" alt="Quran education" fill className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-background">
        <Container size="large">
          <SectionTitle
            label="Community Outreach"
            title="Village Education & Maktab Programs"
            subtitle="Bringing quality education directly to rural communities"
          />

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-muted leading-relaxed mb-6">
                Our village education program operates maktabs (community learning centers) across multiple villages.
                These centers provide foundational education in literacy, numeracy, and religious studies to children
                who may not have access to formal schooling.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Each maktab is staffed by trained teachers from the local community, ensuring cultural relevance and
                sustainable operation. We provide curriculum materials, teacher training, and ongoing support to ensure
                quality education.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {maktabStats.map((stat) => (
                  <Card key={stat.label} variant="bordered" className="text-center p-4">
                    <div className="text-secondary flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image src="/education-1.jpg" alt="Village education" fill className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <Container size="large">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Sponsor a Student</h3>
            <p className="text-white/80 mb-8">
              Your sponsorship can provide a child with quality education, meals, and a brighter future. Every
              contribution makes a difference.
            </p>
            <Button href="/donate" variant="glass" size="lg">
              Sponsor Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
