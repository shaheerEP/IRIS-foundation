import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { donationOptions, bankDetails } from "@/lib/constants"
import { Heart, Building } from "lucide-react"

export const metadata: Metadata = {
  title: "Donate",
  description: "Support IRIS Foundation's mission through your generous contribution.",
}

export default function DonatePage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/sample-hero.jpg" alt="Donate" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/80" />
        </div>
        <Container size="large" className="relative z-10 pt-24">
          <div className="max-w-2xl">
            <SectionTitle
              label="Donate"
              title="Make a Difference Today"
              subtitle="Your contribution directly supports education and community development programs"
              light
            />
          </div>
        </Container>
      </section>

      {/* Donation options with background */}
      <section className="relative py-24 bg-background overflow-hidden">
        {/* Faint background image with overlay blur behind the cards */}
        <div className="pointer-events-none absolute inset-0 w-full h-full">
          <Image
            src="/sample-hero.jpg"
            alt=""
            fill
            priority={false}
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
        </div>
        <Container size="large" className="relative z-10">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Choose How to Give</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Select a giving option that resonates with you. Every contribution, big or small, helps us continue our
              mission.
            </p>
          </div>

          {/* Grid auto-fit for cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {donationOptions.map((option) => (
              <Card key={option.title} variant="bordered" className="flex flex-col h-full shadow-lg/30 bg-white/90 backdrop-blur-md">
                <div className="flex-1 flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{option.title}</h3>
                    <p className="text-2xl font-bold text-secondary mb-3">{option.amount}</p>
                    <p className="text-muted text-sm leading-relaxed">{option.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bank transfer details */}
          <div className="glass-card rounded-2xl p-8 mt-16 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Building className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Bank Transfer Details</h3>
            </div>
            <p className="text-muted mb-6">You can also donate directly via bank transfer using the details below:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-background rounded-lg">
                <p className="text-sm text-muted mb-1">Bank Name</p>
                <p className="font-semibold text-foreground">{bankDetails.bankName}</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <p className="text-sm text-muted mb-1">Account Name</p>
                <p className="font-semibold text-foreground">{bankDetails.accountName}</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <p className="text-sm text-muted mb-1">Account Number</p>
                <p className="font-semibold text-foreground">{bankDetails.accountNumber}</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <p className="text-sm text-muted mb-1">IFSC Code</p>
                <p className="font-semibold text-foreground">{bankDetails.ifscCode}</p>
              </div>
            </div>
            <p className="text-sm text-muted mt-4">Branch: {bankDetails.branch}</p>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <Container size="large">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Have Questions?</h3>
              <p className="text-white/70">Our team is happy to help you with your donation.</p>
            </div>
            <Button href="/contact" variant="glass" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
