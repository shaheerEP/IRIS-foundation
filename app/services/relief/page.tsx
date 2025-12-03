import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Package, HeartHandshake, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Relief",
  description: "Emergency relief and disaster response programs by IRIS Foundation.",
}

const reliefAreas = [
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Disaster Response",
    description: "Immediate assistance during natural calamities",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Essential Supplies",
    description: "Food, clothing, and medical supplies distribution",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Rehabilitation",
    description: "Long-term support for affected families",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Emergency Shelter",
    description: "Temporary housing for displaced individuals",
  },
]

export default function ReliefPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero.pn" alt="Relief Programs" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-primary/70" />
        </div>
        <Container size="large" className="relative z-10 pt-24">
          <SectionTitle
            label="Relief"
            title="Emergency Assistance"
            subtitle="Rapid response and support during times of crisis"
            light
          />
        </Container>
      </section>

      <section className="py-24 bg-background">
        <Container size="large">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionTitle label="Our Response" title="When Crisis Strikes" />
              <p className="text-muted leading-relaxed mb-6">
                IRIS Foundation maintains a rapid response capability to assist communities affected by natural
                disasters, emergencies, or economic hardships. Our relief programs provide immediate assistance while
                also supporting long-term recovery.
              </p>
              <p className="text-muted leading-relaxed">
                We work closely with local authorities and community leaders to ensure our relief efforts reach those
                who need it most. From distributing essential supplies to providing temporary shelter, we stand ready to
                help.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {reliefAreas.map((area) => (
                <Card key={area.title} variant="bordered">
                  <div className="text-accent mb-3">{area.icon}</div>
                  <h4 className="font-semibold text-foreground mb-2">{area.title}</h4>
                  <p className="text-muted text-sm">{area.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-accent">
        <Container size="large" className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Support Emergency Relief</h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Your contribution helps us respond quickly when communities face emergencies.
          </p>
          <Button href="/donate" variant="glass">
            Donate to Relief Fund
          </Button>
        </Container>
      </section>
    </>
  )
}
