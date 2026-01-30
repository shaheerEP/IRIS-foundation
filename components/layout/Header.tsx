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
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Only run scroll spy on the home page
    if (pathname !== "/") {
      setActiveSection("")
      return
    }

    const sectionIds = siteConfig.navLinks
      .map((link) => {
        if (link.href === "/") return "home"
        if (link.href?.includes("#")) return link.href.split("#")[1]
        return null
      })
      .filter(Boolean) as string[]

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Triggers when the section crosses the middle of the viewport
      threshold: 0,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [pathname])

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && (activeSection === "home" || !activeSection)
    }
    if (href.includes("#")) {
      const sectionId = href.split("#")[1]
      return pathname === "/" && activeSection === sectionId
    }
    return pathname === href
  }

  if (pathname.startsWith("/mir")) return null

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/10 backdrop-blur-lg shadow-lg py-5"
          : "bg-transparent py-8",
      )}
    >
      <Container size="large">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="IRIS Foundation" width={40} height={40} />
            <span
              className={cn(
                "font-bold text-xl transition-colors",
                isScrolled ? "text-primary" : "text-white",
              )}
            >
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-8">
              {siteConfig.navLinks.map((link) => {
                const isActive = isLinkActive(link.href)

                if (link.label === "MIR") {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center space-x-2 transition-opacity duration-300 hover:opacity-80"
                    >
                      <Image
                        src="/mir-logo.png"
                        alt="MIR Center"
                        width={80}
                        height={40}
                        className="object-contain h-8 w-auto"
                      />
                      <span className={cn("text-sm font-semibold", isScrolled ? "text-primary/90" : "text-white/90")}>MIR</span>
                    </Link>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "transition-all duration-300",
                      "text-sm font-medium px-4 py-1.5 rounded-full border-2 transition-all duration-300",
                      // Base colors (Inactive)
                      isScrolled
                        ? "border-transparent text-foreground/80 hover:text-primary hover:bg-slate-50"
                        : "border-transparent text-white/90 hover:text-white hover:bg-white/10",
                      // Active color (Overrides base if active)
                      isActive
                        ? "border-primary text-primary bg-primary/5"
                        : "",
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
              {siteConfig.navLinks.map((link) => {
                const isActive = isLinkActive(link.href)

                if (link.label === "MIR") {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 transition-opacity duration-300 hover:opacity-80"
                    >
                      <Image
                        src="/mir-logo.png"
                        alt="MIR Center"
                        width={60}
                        height={30}
                        className="object-contain h-8 w-auto"
                      />
                    </Link>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block text-lg font-medium py-2",
                      isActive ? "text-primary" : "text-foreground/80 hover:text-primary",
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}