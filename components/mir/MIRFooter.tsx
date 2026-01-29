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
                            <li>
                                <Link href="/mir" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/mir/programs" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                                    Programs
                                </Link>
                            </li>
                            <li>
                                <Link href="/mir/contact" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                                    Contact
                                </Link>
                            </li>
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
