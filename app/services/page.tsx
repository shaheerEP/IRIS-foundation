import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Button } from "@/components/ui/button" // Keeping Button only for the bottom CTA
import { Book, Briefcase, Building, Shield, Utensils, Droplet } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore IRIS Foundation's range of services including education, training, cultural centers, and relief programs.",
}

const iconMap: Record<string, React.ReactNode> = {
  book: <Book className="w-8 h-8" />,
  briefcase: <Briefcase className="w-8 h-8" />,
  building: <Building className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
  utensils: <Utensils className="w-8 h-8" />,
  droplet: <Droplet className="w-8 h-8" />,
}

const services = [
  // {
  //   title: "Education",
  //   description:
  //     "Hifzul Quran Model Academy and village maktab programs bringing Quranic and formal education to rural children.",
  //   icon: "book",
  //   images: ["/education-1.jpg", "/education-2.jpg", "/education-3.jpg", "/education-4.jpg"],
  // },
  // {
  //   title: "Training",
  //   description:
  //     "Rabbani Fellowship and other trainings preparing social leaders to serve in underserved regions.",
  //   icon: "briefcase",
  //   images: ["/training-1.jpg", "/training-2.jpg", "/training-3.jpg", "/training-4.jpg"],
  // },
  {
    title: "Cultural Centers",
    description:
      "Masjids and cultural centers that host prayers, classes, and community programs in 40+ villages.",
    icon: "building",
    images: ["/center-1.jpg", "/center-2.jpg", "/center-3.jpg", "/center-4.jpg"],
  },
  {
    title: "Relief",
    description:
      "Blanket drives, home equipment, and food kits for families facing harsh winters and poverty.",
    icon: "shield",
    images: ["/relief-1.jpg", "/relief-2.jpg", "/relief-3.jpg", "/relief-4.jpg"],
  },
  {
    title: "Feeding Food",
    description:
      "Special Day programs and Ramadan iftar meals feeding thousands of children and families.",
    icon: "utensils",
    images: ["/feeding-1.jpg", "/feeding-2.jpg", "/feeding-3.jpg", "/feeding-4.jpg"],
  },
  {
    title: "Drops of Life",
    description:
      "Clean drinking water projects providing safe water in remote villages across four states.",
    icon: "droplet",
    images: ["/drops-1.jpg", "/drops-2.jpg", "/drops-3.jpg", "/drops-4.jpg"],
  },
]

export default function ServicesPage() {
  // 1. Collect ALL images from ALL services into one big array
  const allImages = services.flatMap((s) => s.images ?? [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero.png" alt="Our Services" fill className="object-cover" />
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
          
          {/* Service Text Descriptions (No Cards, No Buttons) */}
          <div className="mb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col gap-4">
                <div className="text-secondary mb-2">
                  {iconMap[service.icon]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-border/50 mb-20" />

          {/* Scattered Image Gallery */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-8">Impact Gallery</h3>
            
            {/* The "Scattered" Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
              {allImages.length > 0 ? (
                allImages.map((src, idx) => {
                  // Logic to create "scattered" sizes based on index
                  // Every 3rd image is large (2x2), every 7th is wide (2x1), rest are small (1x1)
                  let spanClass = "col-span-1 row-span-1"
                  if (idx % 3 === 0) spanClass = "col-span-2 row-span-2"
                  else if (idx % 7 === 0) spanClass = "col-span-2 row-span-1"

                  return (
                    <div 
                      key={src + idx} 
                      className={`relative overflow-hidden rounded-2xl bg-muted/20 ${spanClass}`}
                    >
                      <Image 
                        src={src} 
                        alt={`Gallery image ${idx}`} 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  )
                })
              ) : (
                <div className="col-span-full text-center text-muted py-10">
                  No images available to display.
                </div>
              )}
            </div>
          </div>

        </Container>
      </section>

      {/* Footer CTA */}
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