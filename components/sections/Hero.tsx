import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/Container"

interface HeroProps {
  title: string
  subtitle: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  backgroundImage?: string
  overlay?: boolean
  id?: string
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage = "/hero.png",
  overlay = true,
  id,
}: HeroProps) {
  return (
    <section id={id} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/50" />
        )}
      </div>

      <Container size="large" className="relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">{title}</h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed text-pretty">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryCta && (
                <Button href={primaryCta.href} variant="secondary" size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="glass" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
