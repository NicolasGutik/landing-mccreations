export type PackageCategory = "corporativo" | "familiar"

export type BadgeType = "Nuevo" | "Promo" | "Top"

export interface Package {
  id: string
  category: PackageCategory
  title: string
  destination: string
  nights: number
  priceFrom: number
  highlights: string[]
  image: string
  badge?: BadgeType
  includes: {
    flight?: boolean
    hotel?: boolean
    transfers?: boolean
    insurance?: boolean
    meals?: boolean
    activities?: boolean
  }
  description?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  quote: string
  rating: number
  image?: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}
