import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Users, Calendar, Music } from "lucide-react"

export const metadata: Metadata = {
  title: "Cultural Center",
  description: "IRIS Foundation's cultural centers preserving heritage and fostering community.",
}

const features = [
  {
    icon: <Music className="w-6 h-6" />,
    title: "Cultural Events",
    description: "Regular programs celebrating heritage",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Gatherings",
    description: "Space for social and religious events",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Educational Programs",
    description: "Workshops and learning sessions",
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Multi-purpose Hall",
    description: "Modern facilities for various activities",
  },
]

export default function CulturalCenterPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero.png" alt="Cultural Center" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/70" />
        </div>
        <Container size="large" className="relative z-10 pt-24">
          <SectionTitle
            label="Cultural Center"
            title="Preserving Heritage"
            subtitle="Community spaces that celebrate our culture and bring people together"
            light
          />
        </Container>
      </section>

      <section className="py-24 bg-background">
        <Container size="large">
          <div className="max-w-3xl mb-12">
            <p className="text-muted leading-relaxed text-lg">
              Our cultural centers serve as vital community hubs where traditions are preserved, knowledge is shared,
              and bonds are strengthened. These spaces host religious gatherings, educational programs, and cultural
              events that bring communities together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature) => (
              <Card key={feature.title} variant="bordered" className="text-center">
                <div className="text-secondary flex justify-center mb-4">{feature.icon}</div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Build a Cultural Center</h3>
            <p className="text-muted mb-6">
              At ₹1,400 per sq ft, you can contribute to building permanent community spaces that will serve
              generations.
            </p>
            <Button href="/donate" variant="primary">
              Contribute Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
