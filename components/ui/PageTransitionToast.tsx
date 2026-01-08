"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpCircle } from "lucide-react"

export function PageTransitionToast() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [showToast, setShowToast] = useState(false)

    useEffect(() => {
        const transitionType = searchParams.get("transition")

        if (transitionType === "auto-scroll") {
            setShowToast(true)

            // Remove the query param after showing the toast to prevent it from showing on refresh
            const timer = setTimeout(() => {
                setShowToast(false)
                // Optional: Clean up URL without reload
                router.replace('/mir', { scroll: false })
            }, 4000)

            return () => clearTimeout(timer)
        }
    }, [searchParams, router])

    return (
        <AnimatePresence>
            {showToast && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-primary text-white px-6 py-4 rounded-full shadow-2xl border border-white/20 backdrop-blur-md"
                >
                    <div className="bg-white/20 p-2 rounded-full">
                        <ArrowUpCircle className="w-6 h-6 animate-bounce" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg">Welcome to MIR</span>
                        <span className="text-sm text-white/80">You've scrolled past the Home Page!</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
