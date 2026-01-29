import React from 'react'
import Image from "next/image"

import { Outfit } from "next/font/google"
import "./../globals.css"

const outfit = Outfit({ subsets: ["latin"] })

import { MIRHeader } from "@/components/mir/MIRHeader"
import { MIRFooter } from "@/components/mir/MIRFooter"

export default function MIRLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={`relative min-h-screen mir-theme ${outfit.className} flex flex-col`}>
            <MIRHeader />

            {/* Background Image Space */}
            <div className="fixed inset-0 z-[-1]">

                <Image
                    src="/new/mir-bg.jpg"
                    alt="MIR Background"
                    fill
                    className="object-cover opacity-100"
                    priority
                />

                <div className="w-full h-full bg-slate-50" /> {/* Fallback/Placeholder background */}
            </div>

            <main className="relative z-0 flex-1">
                {children}
            </main>
            <MIRFooter />
        </div>
    )
}
