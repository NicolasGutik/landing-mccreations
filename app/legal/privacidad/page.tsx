import { Hero } from "@/components/hero"
import { Section } from "@/components/section"

export default function PrivacidadPage() {
  return (
    <>
      <Hero title="Política de Privacidad" subtitle="Última actualización: Enero 2025" />

      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-(--color-foreground) mb-4">1. Información que recopilamos</h2>
          <p className="text-(--color-muted-foreground) leading-relaxed mb-4">
            Recopilamos información que usted nos proporciona directamente, incluyendo:
          </p>
          <ul className="list-disc list-inside text-(--color-muted-foreground) leading-relaxed mb-6 space-y-2">
            <li>Nombre completo y datos de contacto</li>
            <li>Información de pasaporte y documentación de viaje</li>
            <li>Preferencias de viaje y necesidades especiales</li>
            <li>Información de pago y facturación</li>
          </ul>

          <h2 className="text-2xl font-bold text-(--color-foreground) mb-4">2. Uso de la información</h2>
          <p className="text-(--color-muted-foreground) leading-relaxed mb-4">Utilizamos su información para:</p>
          <ul className="list-disc list-inside text-(--color-muted-foreground) leading-relaxed mb-6 space-y-2">
            <li>Procesar y gestionar sus reservas de viaje</li>
            <li>Comunicarnos con usted sobre sus viajes</li>
            <li>Mejorar nuestros servicios y experiencia del cliente</li>
            <li>Enviar información promocional (con su consentimiento)</li>
          </ul>

          <h2 className="text-2xl font-bold text-(--color-foreground) mb-4">3. Compartir información</h2>
          <p className="text-(--color-muted-foreground) leading-relaxed mb-6">
            Compartimos su información únicamente con proveedores de servicios turísticos necesarios para completar su
            reserva (aerolíneas, hoteles, etc.) y nunca vendemos su información personal a terceros.
          </p>

          <h2 className="text-2xl font-bold text-(--color-foreground) mb-4">4. Seguridad de datos</h2>
          <p className="text-(--color-muted-foreground) leading-relaxed mb-6">
            Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra
            acceso no autorizado, pérdida o alteración.
          </p>

          <h2 className="text-2xl font-bold text-(--color-foreground) mb-4">5. Sus derechos</h2>
          <p className="text-(--color-muted-foreground) leading-relaxed mb-4">Usted tiene derecho a:</p>
          <ul className="list-disc list-inside text-(--color-muted-foreground) leading-relaxed mb-6 space-y-2">
            <li>Acceder a su información personal</li>
            <li>Solicitar correcciones o actualizaciones</li>
            <li>Solicitar la eliminación de sus datos</li>
            <li>Oponerse al procesamiento de su información</li>
          </ul>

          <h2 className="text-2xl font-bold text-(--color-foreground) mb-4">6. Cookies</h2>
          <p className="text-(--color-muted-foreground) leading-relaxed mb-6">
            Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede configurar su navegador para
            rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
          </p>

          <h2 className="text-2xl font-bold text-(--color-foreground) mb-4">7. Contacto</h2>
          <p className="text-(--color-muted-foreground) leading-relaxed mb-6">
            Si tiene preguntas sobre esta política de privacidad, puede contactarnos en info@mccreations.com
          </p>
        </div>
      </Section>
    </>
  )
}
