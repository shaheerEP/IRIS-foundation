import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { siteConfig } from "@/lib/siteConfig"
import { Container } from "@/components/ui/Container"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container size="large" className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.png" alt="IRIS Foundation" width={40} height={40} className="brightness-200" />
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Touching Hearts, Changing Lives. Supporting education and social uplift in underprivileged villages across
              India.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {siteConfig.serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-white/70 hover:text-white text-sm">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-white/70 hover:text-white text-sm">
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
