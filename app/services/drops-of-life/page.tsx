import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplet, Home, CheckCircle, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Drops of Life",
  description: "Clean water initiatives and water access programs by IRIS Foundation.",
}

const initiatives = [
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Water Wells",
    description: "Installing bore wells in water-scarce areas",
  },
  { icon: <Home className="w-6 h-6" />, title: "Water Tanks", description: "Community water storage solutions" },
  { icon: <Sparkles className="w-6 h-6" />, title: "Purification", description: "Clean drinking water systems" },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Maintenance",
    description: "Ongoing upkeep of water infrastructure",
  },
]

export default function DropsOfLifePage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/sample-hero.jpg" alt="Drops of Life" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/70" />
        </div>
        <Container size="large" className="relative z-10 pt-24">
          <SectionTitle
            label="Drops of Life"
            title="Clean Water for All"
            subtitle="Bringing safe, accessible water to communities in need"
            light
          />
        </Container>
      </section>

      <section className="py-24 bg-background">
        <Container size="large">
          <div className="max-w-3xl mb-16">
            <p className="text-muted leading-relaxed text-lg">
              Access to clean water is a fundamental human right. Our Drops of Life initiative works to ensure that
              every community we serve has access to safe, clean drinking water through well installation, water storage
              systems, and purification solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {initiatives.map((item) => (
              <Card key={item.title} variant="bordered" className="text-center">
                <div className="text-primary flex justify-center mb-4">{item.icon}</div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted text-sm">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center">
            <Droplet className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Sponsor a Water Well</h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              A single water well can serve an entire village. Your contribution creates lasting impact for generations.
            </p>
            <Button href="/donate" variant="glass">
              Sponsor Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
