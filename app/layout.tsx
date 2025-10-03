import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MC CREATIONS | Agencia de Viajes Corporativos y Familiares",
  description:
    "Tu agencia de viajes de confianza. Especialistas en viajes corporativos, incentivos, congresos y vacaciones familiares. Asesoramiento personalizado, financiación y soporte 24/7.",
  keywords: [
    "agencia de viajes",
    "viajes corporativos",
    "viajes familiares",
    "incentivos empresariales",
    "vacaciones",
    "turismo",
  ],
  openGraph: {
    title: "MC CREATIONS | Agencia de Viajes",
    description: "Especialistas en viajes corporativos y familiares",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
