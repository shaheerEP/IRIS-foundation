import React from 'react'
import Image from "next/image"

import { Outfit } from "next/font/google"
import "./../globals.css"

const outfit = Outfit({ subsets: ["latin"] })

import type { Metadata } from "next"
import { MIRHeader } from "@/components/mir/MIRHeader"
import { MIRFooter } from "@/components/mir/MIRFooter"

export const metadata: Metadata = {
    title: "Markaz Imam Rabbani",
    description: "Imam Rabbani Centre for Education & Guidance",
    openGraph: {
        title: "Markaz Imam Rabbani",
        images: ["/mir-logo.png"],
    },
}

export default function MIRLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={`relative min-h-screen mir-theme ${outfit.className} flex flex-col`}>
            <MIRHeader />

            {/* Background Image Space - moved to page.tsx */}
            <div className="fixed inset-0 z-[-1]">
                {/* Fallback/Placeholder background if needed, or just let page handle it. 
                     The original code had a bg-slate-50 div. I will keep a base background if implied, 
                     but the user request focuses on the image. 
                     Actually, looking at the file content, there was a bg-slate-50 div as well. 
                     Let's keep the structure clean. The user wants the *image* fetched on scroll.
                     I'll leave the container empty or remove the image part. 
                     The code to remove is lines 34-40 (Image) and 42 (div).
                  */}
                <div className="w-full h-full bg-slate-50" />
            </div>

            <main className="relative z-0 flex-1">
                {children}
            </main>
            <MIRFooter />
        </div>
    )
}
