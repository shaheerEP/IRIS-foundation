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
          <Image src="/hero.png" alt="Donate" fill className="object-cover" />
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
        
        {/* --- SCATTERED BACKGROUND START --- */}
        <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none">
          {/* Base gradient - made lighter to allow glass effect to pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-10" />
          
          {/* Scattered Image 1: Top Left - Visible */}
          <div className="absolute -top-12 -left-12 w-96 h-96 opacity-20 rotate-12 blur-[1px] z-0">
             <Image src="/hero.png" alt="" fill className="object-cover rounded-full grayscale mix-blend-multiply" />
          </div>

          {/* Scattered Image 2: Right/Middle - Passing under cards */}
          <div className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] opacity-15 -rotate-12 blur-sm z-0">
             <Image src="/hero.png" alt="" fill className="object-cover rounded-[4rem] grayscale mix-blend-multiply" />
          </div>

          {/* Scattered Image 3: Bottom Left - Large */}
          <div className="absolute bottom-0 left-10 w-[500px] h-[500px] opacity-15 rotate-6 blur-[2px] z-0">
             <Image src="/hero.png" alt="" fill className="object-cover rounded-full grayscale mix-blend-multiply" />
          </div>

           {/* Scattered Image 4: Center/Top - Detail */}
           <div className="absolute top-20 left-1/2 w-48 h-48 opacity-20 rotate-45 blur-[1px] z-0">
             <Image src="/hero.png" alt="" fill className="object-cover rounded-3xl grayscale mix-blend-multiply" />
          </div>
        </div>
        {/* --- SCATTERED BACKGROUND END --- */}

        <Container size="large" className="relative z-20">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-accent mx-auto mb-4 drop-shadow-md" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Choose How to Give</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Select a giving option that resonates with you. Every contribution, big or small, helps us continue our
              mission.
            </p>
          </div>

          {/* Grid auto-fit for cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {donationOptions.map((option) => (
              <Card 
                key={option.title} 
                variant="bordered" 
                // GLASS EFFECT HERE:
                // bg-white/40: Semi-transparent white
                // backdrop-blur-md: Blurs whatever is behind the card
                // border-white/50: Adds a nice 'glass edge' shine
                className="flex flex-col h-full bg-white/40 backdrop-blur-md border-white/50 shadow-xl hover:bg-white/50 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex-1 flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{option.title}</h3>
                    <p className="text-2xl font-bold text-secondary mb-3">{option.amount}</p>
                    <p className="text-foreground/80 text-sm leading-relaxed font-medium">{option.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bank transfer details - Glass Card */}
          <div className="rounded-2xl p-8 mt-16 max-w-2xl mx-auto bg-white/40 backdrop-blur-lg border border-white/50 shadow-2xl relative overflow-hidden">
            {/* Optional shine effect on the bank card */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <Building className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Bank Transfer Details</h3>
            </div>
            <p className="text-foreground/80 font-medium mb-6 relative z-10">You can also donate directly via bank transfer using the details below:</p>
            
            <div className="grid sm:grid-cols-2 gap-4 relative z-10">
              {/* Inner cards are slightly more opaque for readability */}
              <div className="p-4 bg-white/60 border border-white/40 rounded-lg shadow-sm">
                <p className="text-xs uppercase tracking-wider text-muted mb-1">Bank Name</p>
                <p className="font-bold text-foreground">{bankDetails.bankName}</p>
              </div>
              <div className="p-4 bg-white/60 border border-white/40 rounded-lg shadow-sm">
                <p className="text-xs uppercase tracking-wider text-muted mb-1">Account Name</p>
                <p className="font-bold text-foreground">{bankDetails.accountName}</p>
              </div>
              <div className="p-4 bg-white/60 border border-white/40 rounded-lg shadow-sm">
                <p className="text-xs uppercase tracking-wider text-muted mb-1">Account Number</p>
                <p className="font-bold text-foreground">{bankDetails.accountNumber}</p>
              </div>
              <div className="p-4 bg-white/60 border border-white/40 rounded-lg shadow-sm">
                <p className="text-xs uppercase tracking-wider text-muted mb-1">IFSC Code</p>
                <p className="font-bold text-foreground">{bankDetails.ifscCode}</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70 mt-4 font-medium text-center">Branch: {bankDetails.branch}</p>
          </div>
        </Container>
      </section>

      
    </>
  )
}