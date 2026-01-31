"use client"

import Link from "next/link"
import { siteConfig } from "@/lib/siteConfig"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/button"

export function MIRFooter() {
    return (
        <footer className="bg-primary text-primary-foreground mt-auto relative z-10">
            <Container size="large" className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1 */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-xl">Markaz Imam Rabbani</h3>
                        <p className="text-primary-foreground/80 text-sm leading-relaxed">
                            Excellence in Islamic and Contemporary Education.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { label: "Home", href: "/mir" },
                                { label: "About", href: "/mir#about" },
                                { label: "Programs", href: "/mir#programs" },
                                { label: "Donate", href: "/donate" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - IRIS Foundation */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">IRIS Foundation</h4>
                        <ul className="space-y-2">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About IRIS", href: "/#about" },
                                { label: "Projects", href: "/#projects" },

                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact</h4>
                        <p className="text-primary-foreground/80 text-sm">
                            markazimamrabbani@gmail.com<br />
                            +91 75083 69313
                        </p>
                        <div className="mt-6">
                            <Button asChild variant="mir-secondary" className="w-full font-bold">
                                <Link href="/donate">
                                    Donate Now
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-primary-foreground/60 text-sm">
                    <p>© {new Date().getFullYear()} Imam Rabbani Center for Education & Guidance. Part of IRIS Foundation.</p>
                </div>
            </Container>
        </footer>
    )
}
