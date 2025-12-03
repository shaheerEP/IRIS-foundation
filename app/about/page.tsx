import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Button } from "@/components/ui/button"
import { CheckCircle, Target, Eye, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about IRIS Foundation's mission, vision, and the story behind our work in rural India.",
}

const values = [
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Compassion",
    description: "Serving with mercy and care for every child and family.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Impact",
    description: "Focusing on real change in villages, not just numbers.",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Transparency",
    description: "Working with clarity and accountability in all projects.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Excellence",
    description: "Striving for quality in teaching, management, and service.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.pn"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <Container size="large" className="relative z-10 pt-24">
          <div className="max-w-2xl">
            <SectionTitle
              label="About Us"
              title="Our Story"
              subtitle="Touching hearts and changing lives in the forgotten villages of North India."
              light
            />
          </div>
        </Container>
      </section>

      {/* Content with soft background image */}
      <section className="relative py-24 bg-background overflow-hidden">
        {/* low‑opacity image on the right/back */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-10">
          <Image
            src="/about-bg-education.jpg"
            alt="Children studying at IRIS Foundation center"
            fill
            className="object-cover"
          />
        </div>

        <Container size="large" className="relative z-10">
          <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] gap-16">
            {/* Left: about + mission + vision */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Who We Are
              </h3>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  IRIS Foundation is an educational and social initiative working
                  among backward and neglected communities in North India. Through
                  different projects, the foundation supports children who lose
                  their chance to study because of poverty, distance, and family
                  responsibilities.
                </p>
                <p>
                  Our teams reach villages that lie beyond the tarred roads, where
                  schools are weak, health facilities are limited, and children
                  rarely see opportunities outside traditional work. In these
                  places IRIS Foundation becomes a door to learning, care, and
                  hope.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="glass-card rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Our Mission
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    To awaken the hopes of children in neglected villages and give
                    them Quranic and formal education, skill development, and
                    social care so that they can stand on their own feet with
                    dignity.
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Our Vision
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Rural communities where no child is left behind because of
                    poverty or geography, and where every village becomes a center
                    of learning, responsibility, and mercy.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: values + CTA, lighter layout */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Values
                </h3>
                <ul className="space-y-3 text-sm text-muted">
                  {values.map((value) => (
                    <li key={value.title} className="flex gap-3 items-start">
                      <span className="mt-1 text-secondary">{value.icon}</span>
                      <div>
                        <p className="font-semibold text-foreground">
                          {value.title}
                        </p>
                        <p>{value.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-primary rounded-2xl text-white shadow-lg/40">
                <h4 className="font-bold text-xl mb-3">Join Our Journey</h4>
                <p className="text-white/80 text-sm mb-6">
                  Your support helps us keep village schools alive, run maktabs,
                  distribute relief, and bring clean water to families that have
                  been forgotten.
                </p>
                <Button href="/contact" variant="glass">
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
