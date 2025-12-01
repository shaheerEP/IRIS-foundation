import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Utensils, Users, Calendar, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Feeding Food",
  description: "IRIS Foundation's food distribution and hunger relief programs.",
}

const stats = [
  { icon: <Utensils className="w-6 h-6" />, value: "500+", label: "Meals Daily" },
  { icon: <Users className="w-6 h-6" />, value: "10+", label: "Communities" },
  { icon: <Calendar className="w-6 h-6" />, value: "365", label: "Days a Year" },
]

export default function FeedingFoodPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero.png" alt="Feeding Programs" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/70" />
        </div>
        <Container size="large" className="relative z-10 pt-24">
          <SectionTitle
            label="Feeding Food"
            title="No One Goes Hungry"
            subtitle="Ensuring food security in underprivileged communities"
            light
          />
        </Container>
      </section>

      <section className="py-24 bg-background">
        <Container size="large">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle label="Our Mission" title="Fighting Hunger" />
              <p className="text-muted leading-relaxed mb-6">
                Our feeding programs ensure that no one in our communities goes hungry. We operate regular food
                distribution drives, community kitchens, and special meal programs for students in our educational
                institutions.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Beyond immediate hunger relief, we focus on sustainable solutions including community gardens and
                nutrition education to help families achieve long-term food security.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <Card key={stat.label} variant="bordered" className="text-center p-4">
                    <div className="text-secondary flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <Heart className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Feed a Family</h3>
              <p className="text-muted mb-6">
                A small contribution can provide nutritious meals to families in need. Join us in fighting hunger in our
                communities.
              </p>
              <Button href="/donate" variant="primary">
                Donate for Food
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
