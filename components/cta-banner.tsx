import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTABannerProps {
  title: string
  description: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTABanner({
  title,
  description,
  primaryLabel = "Contactanos",
  primaryHref = "/contacto",
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <div className="relative bg-gradient-to-r from-(--color-accent) to-(--color-primary) text-white rounded-2xl p-8 md:p-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-(--color-gold) opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-200 mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-(--color-gold) hover:bg-(--color-gold-dark) text-(--color-primary)">
            <Link href={primaryHref}>
              {primaryLabel}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-(--color-primary) bg-transparent"
            >
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
