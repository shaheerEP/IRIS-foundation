"use client"

import Link from "next/link"
import { siteConfig } from "@/lib/siteConfig"
import { Container } from "@/components/ui/Container"

export function MIRFooter() {
    return (
        <footer className="bg-primary text-primary-foreground mt-auto">
            <Container size="large" className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-xl">MIR Center</h3>
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

                    {/* Column 3 */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact</h4>
                        <p className="text-primary-foreground/80 text-sm">
                            Info@mircenter.org<br />
                            +91 123 456 7890
                        </p>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-primary-foreground/60 text-sm">
                    <p>© {new Date().getFullYear()} MIR Center. Part of IRIS Foundation.</p>
                </div>
            </Container>
        </footer>
    )
}
