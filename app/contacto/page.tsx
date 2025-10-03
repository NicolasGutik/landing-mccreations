"use client"

import type React from "react"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactoPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Mock submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo a la brevedad.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <>
      <Hero title="Contacto" subtitle="Estamos aquí para ayudarte a planificar tu próximo viaje" />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-(--color-foreground) mb-6">Envianos tu consulta</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <Input id="nombre" name="nombre" required placeholder="Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="juan@ejemplo.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" name="telefono" type="tel" placeholder="+54 11 1234-5678" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tipo">Tipo de consulta</Label>
                  <select
                    id="tipo"
                    name="tipo"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="corporativo">Viaje Corporativo</option>
                    <option value="familiar">Viaje Familiar</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={6}
                  placeholder="Contanos sobre tu viaje ideal..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-(--color-gold) hover:bg-(--color-gold-dark) text-(--color-primary)"
                size="lg"
              >
                {isSubmitting ? "Enviando..." : "Enviar consulta"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-(--color-foreground) mb-6">Información de contacto</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-(--color-gold)/10 flex items-center justify-center">
                  <Phone className="text-(--color-gold)" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-(--color-foreground) mb-1">Teléfono</h3>
                  <p className="text-(--color-muted-foreground)">+54 11 1234-5678</p>
                  <p className="text-sm text-(--color-muted-foreground)">Lun a Vie: 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-(--color-gold)/10 flex items-center justify-center">
                  <Mail className="text-(--color-gold)" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-(--color-foreground) mb-1">Email</h3>
                  <p className="text-(--color-muted-foreground)">info@mccreations.com</p>
                  <p className="text-sm text-(--color-muted-foreground)">Respondemos en 24hs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-(--color-gold)/10 flex items-center justify-center">
                  <MapPin className="text-(--color-gold)" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-(--color-foreground) mb-1">Oficina</h3>
                  <p className="text-(--color-muted-foreground)">Av. Corrientes 1234, Piso 5</p>
                  <p className="text-(--color-muted-foreground)">Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-(--color-muted) rounded-xl">
                <h3 className="font-semibold text-(--color-foreground) mb-2">Horarios de atención</h3>
                <ul className="space-y-1 text-sm text-(--color-muted-foreground)">
                  <li>Lunes a Viernes: 9:00 - 18:00</li>
                  <li>Sábados: 10:00 - 14:00</li>
                  <li>Domingos: Cerrado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
