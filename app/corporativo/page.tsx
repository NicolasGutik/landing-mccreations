"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { PackageGrid } from "@/components/package-grid"
import { CTABanner } from "@/components/cta-banner"
import { corporatePackages } from "@/lib/data"

export default function CorporativoPage() {
  const [filteredPackages, setFilteredPackages] = useState(corporatePackages)

  return (
    <>
      <Hero
        title="Viajes Corporativos"
        subtitle="Incentivos, congresos, ferias y eventos empresariales. Diseñamos experiencias que fortalecen equipos y generan resultados."
      />

      {/* Intro Section */}
      <Section
        title="Soluciones para tu empresa"
        subtitle="Desde viajes de incentivos hasta participación en ferias internacionales, ofrecemos soluciones integrales con convenios corporativos y beneficios exclusivos."
        align="left"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-xl border border-(--color-border)">
            <h3 className="text-xl font-bold text-(--color-foreground) mb-2">Viajes de Incentivos</h3>
            <p className="text-(--color-muted-foreground)">
              Recompensá a tu equipo con experiencias únicas que motivan y fortalecen el compromiso.
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-(--color-border)">
            <h3 className="text-xl font-bold text-(--color-foreground) mb-2">Congresos y Ferias</h3>
            <p className="text-(--color-muted-foreground)">
              Organizamos tu participación en eventos internacionales con logística completa.
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-(--color-border)">
            <h3 className="text-xl font-bold text-(--color-foreground) mb-2">Convenios Empresariales</h3>
            <p className="text-(--color-muted-foreground)">
              Beneficios exclusivos y tarifas preferenciales para empresas con viajes frecuentes.
            </p>
          </div>
        </div>
      </Section>

      {/* Packages Section */}
      <Section variant="muted" title="Nuestros paquetes corporativos">
        <PackageGrid items={filteredPackages} />
      </Section>

      {/* CTA Section */}
      <Section>
        <CTABanner
          title="¿Necesitás un paquete personalizado?"
          description="Cada empresa es única. Contanos tus necesidades y diseñaremos una propuesta a medida para tu equipo."
          primaryLabel="Solicitar cotización"
          primaryHref="/contacto"
        />
      </Section>
    </>
  )
}
