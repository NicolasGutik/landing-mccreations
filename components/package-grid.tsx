import type { Package } from "@/lib/types"
import { PackageCard } from "./package-card"
import { cn } from "@/lib/utils"

interface PackageGridProps {
  items: Package[]
  variant?: "home" | "category"
  className?: string
}

export function PackageGrid({ items, variant = "category", className }: PackageGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        variant === "home"
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {items.map((pkg) => (
        <PackageCard key={pkg.id} package={pkg} />
      ))}
    </div>
  )
}
