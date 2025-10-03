import { Star } from "lucide-react"
import type { Testimonial as TestimonialType } from "@/lib/types"

interface TestimonialProps {
  testimonial: TestimonialType
}

export function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-md border border-(--color-border) h-full flex flex-col">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-(--color-gold) text-(--color-gold)" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-(--color-muted-foreground) leading-relaxed mb-6 flex-grow">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="pt-4 border-t border-(--color-border)">
        <p className="font-semibold text-(--color-foreground)">{testimonial.name}</p>
        <p className="text-sm text-(--color-muted-foreground)">
          {testimonial.role}
          {testimonial.company && ` • ${testimonial.company}`}
        </p>
      </div>
    </div>
  )
}
