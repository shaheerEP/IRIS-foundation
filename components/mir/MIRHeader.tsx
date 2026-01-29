"use client"

import { useState, useEffect } from "react"
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
                isScrolled
                    ? "bg-gradient-to-r from-white via-primary via-30% to-primary shadow-md py-4"
                    : "bg-transparent py-6",
            )}
        >
            <Container size="large">
                <div className="flex items-center justify-between">
                    {/* Logo Area */}
                    <Link href="/mir" className="flex items-center space-x-3">
                        {/* Integrated Logo - larger and standalone as requested */}
                        <Image src="/mir-logo.png" alt="MIR Center" width={140} height={50} className="w-auto h-12 object-contain" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        <nav className="flex items-center space-x-8">
                            {siteConfig.navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
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
                            {siteConfig.navLinks.map((link) => (
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
