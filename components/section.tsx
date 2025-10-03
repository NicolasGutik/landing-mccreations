import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  variant?: "default" | "dark" | "muted"
  align?: "left" | "center"
}

export function Section({ title, subtitle, children, className, variant = "default", align = "center" }: SectionProps) {
  const bgClass = {
    default: "bg-background",
    dark: "bg-(--color-primary) text-white",
    muted: "bg-(--color-muted)",
  }[variant]

  return (
    <section className={cn("py-16 md:py-24", bgClass, className)}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className={cn("mb-12", align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-4xl")}>
            {title && <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>}
            {subtitle && (
              <p
                className={cn(
                  "text-lg leading-relaxed",
                  variant === "dark" ? "text-gray-300" : "text-(--color-muted-foreground)",
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
