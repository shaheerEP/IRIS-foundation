"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
// We might want a different siteConfig or just re-use for now but filtered
import { siteConfig } from "@/lib/siteConfig"
import { Container } from "@/components/ui/Container"

export function MIRHeader() {
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
        // Only run scroll spy on the mir page
        if (pathname !== "/mir") {
            setActiveSection("")
            return
        }

        const sectionIds = ["about", "programs"]

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
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
        if (href.includes("#")) {
            const sectionId = href.split("#")[1]
            return pathname === "/mir" && activeSection === sectionId
        }
        return pathname === href
    }

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-gradient-to-r from-white via-white via-35% to-primary shadow-md py-4"
                    : "bg-transparent py-6",
            )}
        >
            <Container size="large">
                <div className="flex items-center justify-between">
                    {/* Logo Area */}
                    <Link href="/mir" className="flex items-center space-x-3">
                        {/* Integrated Logo - larger and standalone as requested */}
                        <Image src="/mir-logo.png" alt="MIR Center" width={160} height={60} className="w-auto h-16 object-contain" />
                        <span className="text-xl font-bold text-primary tracking-tight hidden md:block">MIR</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        <nav className="flex items-center space-x-8">
                            {[
                                { label: "About", href: "#about" },
                                { label: "Programs", href: "#programs" },
                                { label: "Donate", href: "/donate" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => {
                                const isActive = isLinkActive(link.href)
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "text-sm font-medium transition-all duration-300 px-4 py-1.5 rounded-full border-2",
                                            isActive
                                                ? "border-primary-foreground text-primary-foreground bg-primary-foreground/10 font-bold"
                                                : "border-transparent text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/5"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            })}
                            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                                <Image src="/logo.png" alt="Home" width={40} height={40} className="w-auto h-6 object-contain" />
                                <span className="text-sm font-semibold text-primary-foreground/90">IRIS</span>
                            </Link>
                        </nav>

                    </div>

                    <button
                        className={cn("md:hidden p-2 text-primary-foreground")}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-lg shadow-xl border-t border-primary-foreground/20">
                        <div className="px-4 py-6 space-y-4">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About", href: "#about" },
                                { label: "Programs", href: "#programs" },
                                { label: "Donate", href: "/donate" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-lg font-medium py-2 text-primary-foreground/90 hover:text-white"
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
