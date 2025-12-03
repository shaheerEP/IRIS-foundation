"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/siteConfig"
import { Container } from "@/components/ui/Container"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // UPDATED: Increased padding values below (py-5 and py-8) to increase height
        isScrolled 
          ? "bg-white/90 backdrop-blur-lg shadow-lg py-5" // increased from py-3
          : "bg-transparent py-8", // increased from py-5
      )}
    >
      <Container size="large">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="IRIS Foundation" width={40} height={40} />
            <span className={cn("font-bold text-xl transition-colors", isScrolled ? "text-primary" : "text-white")}>
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-8">
              {siteConfig.navLinks.map((link) => {
                const basePath = link.href?.split("#")?.[0] || link.href
                const isActive = pathname === basePath
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors duration-200",
                      isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white",
                      isActive ? "text-primary" : "",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>

          <button
            className={cn("md:hidden p-2", isScrolled ? "text-foreground" : "text-white")}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl border-t">
            <div className="px-4 py-6 space-y-4">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-foreground/80 hover:text-primary py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}