import { Hero } from "@/components/hero"
import { Section } from "@/components/section"

export default function TerminosPage() {
  return (
    <>
      <Hero title="Términos y Condiciones" subtitle="Última actualización: Enero 2025" />

      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-(--color-foreground) mb-4">1. Aceptación de términos</h2>
          <p className="text-(--color-muted-foreground) leading-relaxed mb-6">
            Al utilizar los servicios de MC CREATIONS, usted acepta estar sujeto a estos términos y condiciones. Si no
            está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
          </p>

          <h2 className="text-2xl font-bold text-(--color-foreground) mb-4">2. Servicios ofrecidos</h2>
          <p className="text-(--color-muted-foreground) leading-relaxed mb-4">
            MC CREATIONS ofrece servicios de agencia de viajes, incluyendo pero no limitado a:
          </p>
          <ul className="list-disc list-inside text-(--color-muted-foreground) leading-relaxed mb-6 space-y-2">
            <li>Organización de viajes corporativos</li>
            <li>Paquetes turísticos familiares</li>
            <li>Reservas de vuelos, hoteles y servicios relacionados</li>
            <li>Asesoramiento y planificación de viajes</li>
          </ul>

          <h2 className="text-2xl font-bold text-(--color-foreground) mb-4">3. Reservas y pagos</h2>
          <p className="text-(--color-muted-foreground) leading-relaxed mb-4">
            Las reservas están sujetas a disponibilidad y confirmación. Los precios pueden variar según la temporada y
            disponibilidad. Se requiere un depósito para confirmar la reserva.
          </p>

          <h2 className="text-2xl font-bold text-(--color-foreground) mb-4">4. Cancelaciones y reembolsos</h2>
          <p className="text-(--color-muted-foreground) leading-relaxed mb-4">
            Las políticas de cancelación varían según el proveedor y el tipo de servicio. Los reembolsos están sujetos a
            las condiciones específicas de cada reserva y pueden incluir cargos administrativos.
          </p>

          <h2 className="text-2xl font-bold text-(--color-foreground) mb-4">5. Responsabilidades</h2>
          <p className="text-(--color-muted-foreground) leading-relaxed mb-4">
            MC CREATIONS actúa como intermediario entre el cliente y los proveedores de servicios turísticos. No nos
            hacemos responsables por cambios, cancelaciones o problemas causados por terceros proveedores.
          </p>

          <h2 className="text-2xl font-bold text-(--color-foreground) mb-4">6. Documentación de viaje</h2>
          <p className="text-(--color-muted-foreground) leading-relaxed mb-4">
            Es responsabilidad del cliente asegurarse de tener toda la documentación necesaria (pasaporte, visas,
            vacunas) para su viaje. MC CREATIONS puede asesorar pero no se hace responsable por documentación faltante o
            incorrecta.
          </p>

          <h2 className="text-2xl font-bold text-(--color-foreground) mb-4">7. Modificaciones</h2>
          <p className="text-(--color-muted-foreground) leading-relaxed mb-6">
            MC CREATIONS se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en
            vigencia inmediatamente después de su publicación en nuestro sitio web.
          </p>
        </div>
      </Section>
    </>
  )
}
