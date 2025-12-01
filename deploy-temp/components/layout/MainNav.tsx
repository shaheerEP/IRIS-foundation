"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/siteConfig"
import { Button } from "@/components/ui/button"

interface MainNavProps {
  mobile?: boolean
  onItemClick?: () => void
}

export function MainNav({ mobile = false, onItemClick }: MainNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn(mobile ? "flex flex-col space-y-4" : "hidden md:flex items-center space-x-8")}>
      {siteConfig.navLinks.map((link) => {
        const linkPath = link.href?.split("#")?.[0] || link.href
        const isActive = pathname === linkPath
        // Render Donate as a prominent button in the navbar
        if (link.href === "/donate") {
          return (
            <Button asChild key={link.href} size={mobile ? "default" : "sm"}>
              <Link
                href={link.href}
                onClick={() => onItemClick?.()}
                className={cn(
                  mobile ? "w-full text-center" : "",
                )}
              >
                {link.label}
              </Link>
            </Button>
          )
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => {
              const [path, hash] = (link.href || "").split("#")
              // If we're already on the same path and the href contains a hash, perform smooth scroll
              if (hash && pathname === (path || "/")) {
                e.preventDefault()
                const el = document.getElementById(hash)
                if (el) el.scrollIntoView({ behavior: "smooth" })
                onItemClick?.()
                return
              }
              onItemClick?.()
            }}
            className={cn(
              "text-sm font-medium transition-colors duration-200",
              // derive the path part (before the #) so anchors still match active state
              pathname === (link.href?.split('#')?.[0] || link.href)
                ? "text-primary"
                : "text-foreground/80 hover:text-primary",
              mobile && "text-lg py-2",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
