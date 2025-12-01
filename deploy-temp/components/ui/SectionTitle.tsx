import { cn } from "@/lib/utils"

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
  light?: boolean
}

export function SectionTitle({
  label,
  title,
  subtitle,
  className,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {label && (
        <span
          className={cn(
            "inline-block text-sm font-semibold uppercase tracking-wider mb-3",
            light ? "text-secondary-light" : "text-secondary",
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold text-balance",
          light ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl max-w-3xl text-pretty",
            centered && "mx-auto",
            light ? "text-white/80" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
