import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "large" | "full"
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "default" && "max-w-5xl",
        size === "large" && "max-w-6xl",
        size === "full" && "max-w-7xl",
        className,
      )}
    >
      {children}
    </div>
  )
}
