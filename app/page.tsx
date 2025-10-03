import Link from "next/link"
import { Briefcase, Users, Shield, Clock, Heart } from "lucide-react"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { PackageGrid } from "@/components/package-grid"
import { CTABanner } from "@/components/cta-banner"
import { Testimonial } from "@/components/testimonial"
import { Button } from "@/components/ui/button"
import { corporatePackages, familyPackages, testimonials } from "@/lib/data"

export default function HomePage() {
  // Featured packages - mix of both categories
  const featuredPackages = [
    corporatePackages[0], // Miami Premium
    familyPackages[0], // Disney Orlando
    corporatePackages[3], // Dubai
    familyPackages[1], // Riviera Maya
    corporatePackages[6], // Punta Cana
    familyPackages[4], // Europa
  ]

  const pillars = [
    {
      icon: Briefcase,
      title: "Asesoramiento Personalizado",
      description: "Diseñamos cada viaje según tus necesidades específicas, ya sea para tu empresa o familia.",
    },
    {
      icon: Users,
      title: "Financiación Flexible",
      description: "Opciones de pago adaptadas a tu presupuesto para que puedas viajar sin preocupaciones.",
    },
    {
      icon: Clock,
      title: "Soporte 24/7",
      description: "Asistencia permanente durante tu viaje. Estamos contigo en cada momento.",
    },
    {
      icon: Shield,
      title: "Seguros Completos",
      description: "Cobertura integral en todos nuestros paquetes para tu tranquilidad total.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Creamos experiencias de viaje inolvidables"
        subtitle="Especialistas en viajes corporativos y familiares. Tu próxima aventura comienza aquí."
        size="large"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            asChild
            size="lg"
            className="bg-(--color-gold) hover:bg-(--color-gold-dark) text-(--color-primary) text-lg px-8"
          >
            <Link href="#paquetes">Ver paquetes</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-(--color-primary) text-lg px-8 bg-transparent"
          >
            <Link href="/contacto">Contactanos</Link>
          </Button>
        </div>
      </Hero>

      {/* What We Do Section */}
      <Section title="¿Qué hacemos?" subtitle="Somos tu socio de confianza para crear experiencias de viaje memorables">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-(--color-gold)/10 text-(--color-gold) mb-4">
                <pillar.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-(--color-foreground) mb-2">{pillar.title}</h3>
              <p className="text-(--color-muted-foreground) leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Packages Section */}
      <Section
        id="paquetes"
        title="Paquetes destacados"
        subtitle="Descubrí nuestras propuestas más populares para empresas y familias"
        variant="muted"
      >
        <PackageGrid items={featuredPackages} variant="home" />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/corporativo">
              <Briefcase className="mr-2" size={20} />
              Ver viajes corporativos
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/familiar">
              <Heart className="mr-2" size={20} />
              Ver viajes familiares
            </Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section title="Lo que dicen nuestros clientes" subtitle="Experiencias reales de quienes confiaron en nosotros">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <Section variant="muted">
        <CTABanner
          title="¿Listo para tu próximo viaje?"
          description="Contactanos hoy y empecemos a planificar la experiencia perfecta para vos y tu equipo o familia."
          primaryLabel="Consultar ahora"
          primaryHref="/contacto"
          secondaryLabel="Conocer más"
          secondaryHref="/nosotros"
        />
      </Section>
    </>
  )
}
