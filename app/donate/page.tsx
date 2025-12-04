import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/card"
import { donationOptions, bankDetails } from "@/lib/constants"
import { Heart, Building, ArrowRight, Smartphone, QrCode } from "lucide-react"

export const metadata: Metadata = {
  title: "Donate",
  description: "Support IRIS Foundation's mission through your generous contribution.",
}

export default function DonatePage() {

  // Helper to generate clean UPI links
  const createUpiLink = (amountString: string) => {
    const cleanAmount = amountString.replace(/[^0-9.]/g, "")
    const vpa = "Vyapar.169031370951@hdfcbank"
    const name = "IRIS"
    return `upi://pay?pa=${vpa}&pn=${name}&am=${cleanAmount}&cu=INR`
  }

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pb-24 sm:pb-32">
        <div className="absolute inset-0">
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
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[60px] sm:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path d="M0,96L80,106.7C160,117,320,139,480,144C640,149,800,139,960,122.7C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" className="fill-white"/>
          </svg>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden select-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-10" />
          <div className="absolute -top-12 -left-12 w-96 h-96 opacity-20 rotate-12 blur-[1px] z-0" />
        </div>

        <Container size="large" className="relative z-20">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-accent mx-auto mb-4 drop-shadow-md" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose How to Give</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Select a giving option or scan the QR code to support our mission.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* --- LEFT COLUMN: Donation Options --- */}
            <div className="lg:col-span-7 grid gap-6 md:grid-cols-2">
              {donationOptions.map((option, index) => (
                <Card
                  key={option.title}
                  variant="bordered"
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="group flex flex-col h-full bg-white/40 backdrop-blur-md border-white/50 shadow-lg hover:shadow-xl hover:bg-white/60 hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards"
                >
                  <div className="flex-1 flex flex-col justify-between p-6">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-2xl font-bold text-secondary mb-4">{option.amount}</p>
                      <p className="text-foreground/80 text-sm leading-relaxed font-medium">
                        {option.description}
                      </p>
                    </div>
                    
                    {/* --- DYNAMIC VISIBILITY BUTTON --- */}
                    {/* Logic: opacity-100 (visible on mobile) -> lg:opacity-0 (hidden on desktop) -> lg:group-hover:opacity-100 (visible on hover) */}
                    <div className="mt-6 pt-6 border-t border-dashed border-black/10 transition-all duration-300 transform 
                                    opacity-100 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                      <a 
                        href={createUpiLink(option.amount)}
                        className="inline-flex items-center justify-between w-full text-primary font-semibold group/btn"
                      >
                        <span className="flex items-center gap-2">
                          <Smartphone className="w-4 h-4" />
                          Select this plan
                        </span>
                        <span className="p-2 rounded-full bg-primary/10 text-primary group-hover/btn:bg-primary group-hover/btn:text-white transition-all duration-300">
                           <ArrowRight className="w-4 h-4" />
                        </span>
                      </a>
                    </div>

                  </div>
                </Card>
              ))}
            </div>

            {/* --- RIGHT COLUMN: Bank Details & QR (Sticky) --- */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-24">
                <div className="rounded-2xl p-8 bg-white/40 backdrop-blur-lg border border-white/50 shadow-2xl relative overflow-hidden">
                  
                  {/* Shine line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                  {/* Bank Heading */}
                  <div className="flex items-center gap-3 mb-6 border-b border-black/5 pb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Bank Transfer</h3>
                      <p className="text-xs text-muted-foreground">Direct & Secure</p>
                    </div>
                  </div>

                  {/* Bank Details Grid */}
                  <div className="space-y-4">
                     <div className="p-3 bg-white/60 border border-white/40 rounded-lg shadow-sm">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Account Number</p>
                      <p className="font-bold text-lg text-foreground tracking-wide">{bankDetails.accountNumber}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-white/60 border border-white/40 rounded-lg shadow-sm">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">IFSC</p>
                        <p className="font-bold text-sm text-foreground">{bankDetails.ifscCode}</p>
                      </div>
                      <div className="p-3 bg-white/60 border border-white/40 rounded-lg shadow-sm">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Bank</p>
                        <p className="font-bold text-sm text-foreground">{bankDetails.bankName}</p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-8 flex items-center gap-4">
                    <div className="h-px bg-black/10 flex-1"></div>
                    <span className="text-xs text-muted-foreground font-medium uppercase flex items-center gap-1">
                      <QrCode className="w-3 h-3" />
                      Scan to Pay
                    </span>
                    <div className="h-px bg-black/10 flex-1"></div>
                  </div>

                  {/* --- QR CODE SECTION (RESTORED WITH UPI LABEL) --- */}
                  <div className="flex flex-col items-center">
                    <div className="relative group cursor-pointer">
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <Image
                          src="/qr.png"
                          alt="UPI QR Code"
                          width={200}
                          height={200}
                          className="relative rounded-xl shadow-sm border border-white/50 bg-white p-2 w-48 h-48"
                        />
                    </div>
                    
                    <p className="text-xs text-muted-foreground font-medium mt-4 bg-white/50 px-3 py-1 rounded-full border border-white/50">
                      UPI ID: <span className="select-all font-bold text-foreground">Vyapar.169031370951@hdfcbank</span>
                    </p>
                  </div>

                  {/* General Donate Button */}
                  <div className="mt-8">
                    <a
                      href="upi://pay?pa=Vyapar.169031370951@hdfcbank&pn=IRIS&cu=INR"
                      className="flex items-center justify-center w-full py-4 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/20
                                hover:bg-primary/90 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      Donate Custom Amount
                    </a>
                  </div>

                </div>
              </div>
            </div>
            
          </div>
        </Container>
      </section>
    </>
  )
}