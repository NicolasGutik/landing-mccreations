import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HeroProps {
  title: string
  subtitle?: string
  children?: ReactNode
  className?: string
  size?: "default" | "large"
}

export function Hero({ title, subtitle, children, className, size = "default" }: HeroProps) {
  return (
    <section
      className={cn(
        "relative bg-gradient-to-br from-[#0B1F3A] via-[#0E4A7B] to-[#1a3a5c] text-white",
        size === "large" ? "py-24 md:py-32" : "py-16 md:py-24",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={cn(
              "font-bold text-white mb-6",
              size === "large" ? "text-4xl md:text-6xl lg:text-7xl" : "text-3xl md:text-5xl lg:text-6xl",
            )}
          >
            {title}
          </h1>
          {subtitle && <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">{subtitle}</p>}
          {children}
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-(--color-gold) to-transparent" />
    </section>
  )
}
