import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-(--color-primary) text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Tu agencia de viajes de confianza. Creamos experiencias inolvidables para empresas y familias.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-(--color-gold) mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/corporativo" className="text-sm text-gray-300 hover:text-(--color-gold) transition-colors">
                  Viajes Corporativos
                </Link>
              </li>
              <li>
                <Link href="/familiar" className="text-sm text-gray-300 hover:text-(--color-gold) transition-colors">
                  Viajes Familiares
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-sm text-gray-300 hover:text-(--color-gold) transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-gray-300 hover:text-(--color-gold) transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-(--color-gold) mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>info@mccreations.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-(--color-gold) mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-(--color-gold) transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-(--color-gold) transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-(--color-gold) transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} MC CREATIONS. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="/legal/terminos" className="hover:text-(--color-gold) transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="/legal/privacidad" className="hover:text-(--color-gold) transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
