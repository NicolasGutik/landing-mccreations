import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="flex items-center gap-1">
        <span className="text-2xl font-bold text-(--color-primary) group-hover:text-(--color-accent) transition-colors">
          MC
        </span>
        <span className="text-2xl font-light text-(--color-gold)">CREATIONS</span>
      </div>
    </Link>
  )
}
