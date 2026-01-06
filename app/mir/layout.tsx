import React from 'react'
import Image from "next/image"

export default function MIRLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative min-h-screen">
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

            <main className="relative z-0">
                {children}
            </main>
        </div>
    )
}
