"use client"
import React from "react"
import Link from "next/link"

const Footer: React.FC = () => {
  // Maneja scroll suave para anclajes
  const handleScroll = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-white backdrop-blur-md text-black pt-16 pb-8 border-t border-gold/20 relative z-10">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Columna 1: NAVEGACIÓN RÁPIDA */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">NAVEGACIÓN RÁPIDA</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/landing" className="text-black hover:text-grey-90 font-medium text-sm transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-black hover:text-grey-90 font-medium text-sm transition-colors">Nosotros</Link>
              </li>
              <li>
                <Link href="/contacto" className="text-black hover:text-grey-90 font-medium text-sm transition-colors">Contacto</Link>
              </li>
              <li>
                <Link href="/catalogos" className="text-black hover:text-grey-90 font-medium text-sm transition-colors">Catálogo</Link>
              </li>
            </ul>
          </div>

          {/* Columna 2: LEGAL */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">LEGAL</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/politicas/privacidad" className="text-black hover:text-grey-90 font-medium text-sm transition-colors">Política de Privacidad</Link>
              </li>
              <li>
                <Link href="/politicas/terminos" className="text-black hover:text-grey-90 font-medium text-sm transition-colors">Términos y Condiciones</Link>
              </li>
              <li>
                <Link href="/politicas/envios" className="text-black hover:text-grey-90 font-medium text-sm transition-colors">Política de Envíos</Link>
              </li>
              <li>
                <Link href="/politicas/devoluciones" className="text-black hover:text-grey-90 font-medium text-sm transition-colors">Política de Devoluciones</Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: CONTACTO */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">CONTACTO</h3>
            <ul className="space-y-3">
              <li className="text-black text-sm">
                <span className="text-gold font-semibold block">Dirección:</span> 
                <span>Av. Principal 123, Ciudad</span>
              </li>
              <li className="text-black text-sm">
                <span className="text-gold font-semibold block">Email:</span> 
                <a href="mailto:mayoristas@kevinjewelry.com" className="text-black hover:text-grey-90 font-medium transition-colors">
                  mayoristas@kevinjewelry.com
                </a>
              </li>
              <li className="text-black text-sm">
                <span className="text-gold font-semibold block">Teléfono:</span> 
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-black hover:text-grey-90 font-medium transition-colors">
                  +1 234 567 890
                </a>
              </li>
              <li className="text-black text-sm">
                <span className="text-gold font-semibold block">Nombre de contacto:</span> 
                <span>Asesoría Kevin Jewelry</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: REDES SOCIALES */}
          <div className="col-span-1">
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-black">REDES SOCIALES</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com/kevinjewelry" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-black transition-colors duration-200 text-sm bg-pearl/50 rounded-full w-10 h-10 flex items-center justify-center border border-gold/30">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/kevinjewelry" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-black transition-colors duration-200 text-sm bg-pearl/50 rounded-full w-10 h-10 flex items-center justify-center border border-gold/30">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://facebook.com/kevinjewelry" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-black transition-colors duration-200 text-sm bg-pearl/50 rounded-full w-10 h-10 flex items-center justify-center border border-gold/30">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Logo */}
            <Link href="/" className="inline-block mb-4">
              <img src="/images/jewerly.png" alt="Kevin Jewelry" className="h-40 md:h-56 brightness-125" />
            </Link>
          </div>
        </div>

        {/* Pie del footer */}
        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-grey-90 text-sm font-medium">
            © {new Date().getFullYear()} Kevin Jewelry. Todos los derechos reservados.
          </p>
          <p className="text-grey-90 text-sm mt-4 md:mt-0 italic font-medium">
            Dirección superior en joyería desde 2010
          </p>
        </div>
      </div>
      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
    </footer>
  )
}

export default Footer
