"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/corporativo", label: "Corporativo" },
  { href: "/familiar", label: "Familiar" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#0B1F3A] backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white hover:text-(--color-gold) transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-(--color-gold) hover:bg-(--color-gold-dark) text-(--color-primary)">
              <Link href="/contacto">Consultar ahora</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-white hover:text-(--color-gold) transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-(--color-gold) hover:bg-(--color-gold-dark) text-(--color-primary) w-full">
                <Link href="/contacto" onClick={() => setIsOpen(false)}>
                  Consultar ahora
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
