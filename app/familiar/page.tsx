"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { PackageGrid } from "@/components/package-grid"
import { CTABanner } from "@/components/cta-banner"
import { familyPackages } from "@/lib/data"

export default function FamiliarPage() {
  const [filteredPackages, setFilteredPackages] = useState(familyPackages)

  return (
    <>
      <Hero
        title="Viajes Familiares"
        subtitle="Escapadas inolvidables para toda la familia. Desde playas paradisíacas hasta aventuras en la nieve, con opciones de financiación flexibles."
      />

      {/* Intro Section */}
      <Section
        title="Vacaciones para toda la familia"
        subtitle="Creamos experiencias que todos disfrutarán, con actividades para cada edad y opciones all-inclusive para tu comodidad."
        align="left"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-xl border border-(--color-border)">
            <h3 className="text-xl font-bold text-(--color-foreground) mb-2">All Inclusive</h3>
            <p className="text-(--color-muted-foreground)">
              Resorts con todo incluido para que solo te preocupes por disfrutar en familia.
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-(--color-border)">
            <h3 className="text-xl font-bold text-(--color-foreground) mb-2">Kids Friendly</h3>
            <p className="text-(--color-muted-foreground)">
              Destinos y actividades pensadas especialmente para los más chicos de la familia.
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-(--color-border)">
            <h3 className="text-xl font-bold text-(--color-foreground) mb-2">Financiación</h3>
            <p className="text-(--color-muted-foreground)">
              Planes de pago flexibles para que puedas viajar sin comprometer tu presupuesto.
            </p>
          </div>
        </div>
      </Section>

      {/* Packages Section */}
      <Section variant="muted" title="Nuestros paquetes familiares">
        <PackageGrid items={filteredPackages} />
      </Section>

      {/* CTA Section */}
      <Section>
        <CTABanner
          title="¿Soñás con unas vacaciones perfectas?"
          description="Contanos qué destino te gustaría visitar y armaremos el paquete ideal para tu familia."
          primaryLabel="Consultar ahora"
          primaryHref="/contacto"
        />
      </Section>
    </>
  )
}
