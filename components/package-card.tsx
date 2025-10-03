import Image from "next/image"
import Link from "next/link"
import { Plane, Hotel, Shield, Car, Utensils, Sparkles } from "lucide-react"
import type { Package } from "@/lib/types"
import { formatCurrency, formatNights, cn } from "@/lib/utils"
import { Badge } from "./badge"
import { Button } from "@/components/ui/button"

interface PackageCardProps {
  package: Package
  className?: string
}

export function PackageCard({ package: pkg, className }: PackageCardProps) {
  const icons = {
    flight: Plane,
    hotel: Hotel,
    insurance: Shield,
    transfers: Car,
    meals: Utensils,
    activities: Sparkles,
  }

  return (
    <div
      className={cn(
        "group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-(--color-border) hover:border-(--color-gold)",
        className,
      )}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={pkg.image || "/placeholder.svg"}
          alt={pkg.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {pkg.badge && (
          <div className="absolute top-4 right-4">
            <Badge type={pkg.badge} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-(--color-foreground) mb-1 group-hover:text-(--color-accent) transition-colors">
            {pkg.title}
          </h3>
          <p className="text-sm text-(--color-muted-foreground)">{pkg.destination}</p>
        </div>

        {/* Highlights */}
        <ul className="space-y-2 mb-4">
          {pkg.highlights.slice(0, 3).map((highlight, index) => (
            <li key={index} className="text-sm text-(--color-muted-foreground) flex items-start gap-2">
              <span className="text-(--color-gold) mt-0.5">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Includes */}
        <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-(--color-border)">
          {Object.entries(pkg.includes).map(([key, value]) => {
            if (!value) return null
            const Icon = icons[key as keyof typeof icons]
            return (
              <div key={key} className="flex items-center gap-1 text-xs text-(--color-muted-foreground)" title={key}>
                <Icon size={14} className="text-(--color-accent)" />
              </div>
            )
          })}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-(--color-muted-foreground) mb-1">Desde</p>
            <p className="text-2xl font-bold text-(--color-primary)">{formatCurrency(pkg.priceFrom)}</p>
            <p className="text-xs text-(--color-muted-foreground)">{formatNights(pkg.nights)}</p>
          </div>
          <Button asChild className="bg-(--color-gold) hover:bg-(--color-gold-dark) text-(--color-primary)">
            <Link href={`/${pkg.category}?id=${pkg.id}`}>Ver detalles</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
