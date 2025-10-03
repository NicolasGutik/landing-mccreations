import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { CTABanner } from "@/components/cta-banner"
import { Award, Users, Globe, Heart } from "lucide-react"
import Image from "next/image"

export default function NosotrosPage() {
  const values = [
    {
      icon: Heart,
      title: "Pasión por viajar",
      description: "Amamos lo que hacemos y eso se refleja en cada experiencia que creamos.",
    },
    {
      icon: Users,
      title: "Atención personalizada",
      description: "Cada cliente es único y merece un servicio adaptado a sus necesidades.",
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Buscamos la perfección en cada detalle para superar tus expectativas.",
    },
    {
      icon: Globe,
      title: "Experiencia global",
      description: "Años de trayectoria nos respaldan en destinos de todo el mundo.",
    },
  ]

  return (
    <>
      <Hero title="Nosotros" subtitle="Conocé la historia detrás de MC CREATIONS" />

      {/* Our Story */}
      <Section title="Nuestra historia" align="left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-(--color-muted-foreground) leading-relaxed mb-4">
              MC CREATIONS nació de la pasión por crear experiencias de viaje memorables. Desde nuestros inicios, nos
              especializamos en entender las necesidades únicas de cada cliente, ya sea una empresa buscando fortalecer
              su equipo o una familia soñando con sus vacaciones perfectas.
            </p>
            <p className="text-lg text-(--color-muted-foreground) leading-relaxed mb-4">
              Con años de experiencia en la industria del turismo, hemos construido relaciones sólidas con los mejores
              proveedores a nivel mundial, lo que nos permite ofrecer experiencias excepcionales a precios competitivos.
            </p>
            <p className="text-lg text-(--color-muted-foreground) leading-relaxed">
              Hoy, somos el socio de confianza de decenas de empresas y cientos de familias que confían en nosotros para
              hacer realidad sus sueños de viaje.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image src="/travel-agency-team.png" alt="Equipo MC CREATIONS" fill className="object-cover" />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="muted" title="Nuestros valores" subtitle="Los principios que guían cada decisión que tomamos">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-(--color-gold)/10 text-(--color-gold) mb-4">
                <value.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-(--color-foreground) mb-2">{value.title}</h3>
              <p className="text-(--color-muted-foreground) leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Credentials */}
      <Section title="Nuestras credenciales">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card rounded-xl border border-(--color-border)">
            <div className="text-4xl font-bold text-(--color-gold) mb-2">500+</div>
            <p className="text-(--color-muted-foreground)">Viajes organizados</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-(--color-border)">
            <div className="text-4xl font-bold text-(--color-gold) mb-2">50+</div>
            <p className="text-(--color-muted-foreground)">Empresas confían en nosotros</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-(--color-border)">
            <div className="text-4xl font-bold text-(--color-gold) mb-2">98%</div>
            <p className="text-(--color-muted-foreground)">Satisfacción del cliente</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="muted">
        <CTABanner
          title="¿Querés ser parte de nuestra historia?"
          description="Sumate a las empresas y familias que ya confían en MC CREATIONS para sus viajes."
          primaryLabel="Contactanos"
          primaryHref="/contacto"
        />
      </Section>
    </>
  )
}
