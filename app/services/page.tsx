import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/constants"
import { Book, Briefcase, Building, Shield, Utensils, Droplet } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore IRIS Foundation's range of services including education, training, cultural centers, and relief programs.",
}

const iconMap: Record<string, React.ReactNode> = {
  book: <Book className="w-10 h-10" />,
  briefcase: <Briefcase className="w-10 h-10" />,
  building: <Building className="w-10 h-10" />,
  shield: <Shield className="w-10 h-10" />,
  utensils: <Utensils className="w-10 h-10" />,
  droplet: <Droplet className="w-10 h-10" />,
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/sample-hero.jpg" alt="Our Services" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/80" />
        </div>
        <Container size="large" className="relative z-10 pt-24">
          <SectionTitle
            label="Services"
            title="What We Offer"
            subtitle="Comprehensive programs designed to uplift communities and create lasting change"
            light
          />
        </Container>
      </section>

      <section className="py-24 bg-background">
        <Container size="large">
          <div className="mb-12">
            <p className="text-muted text-lg max-w-3xl leading-relaxed">
              IRIS Foundation operates across multiple domains to address the diverse needs of underprivileged
              communities. Each of our services is carefully designed to create sustainable impact and empower
              individuals to build better futures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} variant="bordered" className="group hover:border-secondary/50">
                <div className="text-primary group-hover:text-secondary transition-colors mb-6">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted text-sm mb-6 leading-relaxed">{service.description}</p>
                <Button href={service.href} variant="outline" size="sm">
                  View Details →
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-primary">
        <Container size="large">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Want to support our work?</h3>
              <p className="text-white/70">Your contribution helps us expand our reach and impact.</p>
            </div>
            <Button href="/donate" variant="glass" size="lg">
              Donate Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
