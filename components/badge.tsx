import { cn } from "@/lib/utils"
import type { BadgeType } from "@/lib/types"

interface BadgeProps {
  type: BadgeType
  className?: string
}

export function Badge({ type, className }: BadgeProps) {
  const variants = {
    Nuevo: "bg-green-500 text-white",
    Promo: "bg-red-500 text-white",
    Top: "bg-(--color-gold) text-(--color-primary)",
  }

  return (
    <span
      className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold", variants[type], className)}
    >
      {type}
    </span>
  )
}
