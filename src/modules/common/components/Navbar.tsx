"use client"

import React, { useState } from "react"
import Link from "next/link"

// Componente Nav personalizado para Kevin Jewelry
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white backdrop-blur-sm border-b border-grey-90/10 sticky top-0 z-50">
      <div className="container mx-auto relative py-3 px-4">
        <div className="grid grid-cols-3 items-center">
          {/* Enlaces principales - izquierda (solo desktop) */}
          <nav className="hidden md:flex space-x-8 justify-self-start">
            <Link href="/landing" className="text-grey-100 hover:text-grey-90 font-medium transition-colors">Inicio</Link>
            <Link href="/catalogos" className="text-grey-100 hover:text-grey-90 font-medium transition-colors">Catálogo</Link>
            <Link href="/contacto" className="text-grey-100 hover:text-grey-90 font-medium transition-colors">Contacto</Link>
            <Link href="/nosotros" className="text-grey-100 hover:text-grey-90 font-medium transition-colors">Nosotros</Link>
          </nav>
          
          {/* Logo centrado - más grande */}
          <div className="flex justify-center">
            <Link href="/landing" className="block">
              <img 
                src="/images/jewerly.png" 
                alt="Kevin Jewelry" 
                className="h-16 md:h-20 bg-pearl rounded-lg" 
              />
            </Link>
          </div>
          
          {/* Íconos de usuario y carrito - derecha */}
          <div className="flex space-x-6 justify-self-end justify-end">
            <Link href="/perfil" className="text-black hover:text-grey-90 transition-colors duration-200 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link href="/carrito" className="text-black hover:text-grey-90 transition-colors duration-200 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Botón de menú móvil */}
        <button 
          onClick={toggleMenu}
          aria-label="Abrir menú"
          className="md:hidden absolute left-4 top-1/2 transform -translate-y-1/2 text-black hover:text-grey-90 transition-colors duration-200 focus:outline-none z-50"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Menú móvil desplegable */}
      <div 
        className={`fixed inset-0 bg-pearl z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden pt-28 pb-8 px-6 flex flex-col`}
      >
        {/* Fondo de imagen personalizado */}
        <div className="absolute inset-0 bg-pearl opacity-100 z-0"></div>
        
        <nav className="flex flex-col space-y-6 items-center mt-4 relative z-10">
          <Link 
            href="/" 
            className="text-grey-100 text-xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link 
            href="/catalogos" 
            className="text-grey-100 text-xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Catálogo
          </Link>
          <Link 
            href="/contacto" 
            className="text-grey-100 text-xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
          <Link 
            href="/nosotros" 
            className="text-grey-100 text-xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </Link>
          
          {/* Separador */}
          <div className="w-24 h-0.5 bg-grey-90/10 my-2"></div>
          
          {/* Enlaces adicionales */}
          <Link 
            href="/perfil" 
            className="text-grey-100 text-xl font-medium flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Mi Perfil
          </Link>
          <Link 
            href="/carrito" 
            className="text-grey-100 text-xl font-medium flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Carrito
          </Link>
        </nav>
        
        {/* Información de contacto en móvil */}
        <div className="mt-auto text-center relative z-10">
          <p className="text-rose/70 text-sm mb-2">¿Necesitas ayuda?</p>
          <a href="tel:+123456789" className="text-grey-100 block mb-1 font-body">+1 234 567 890</a>
          <a href="mailto:mayoristas@kevinjewelry.com" className="text-grey-100 text-sm font-body">mayoristas@kevinjewelry.com</a>
        </div>
      </div>
      
      {/* Línea decorativa */}
      <div className="h-0.5 w-full bg-gradient-to-r from-grey-90/5 via-grey-90/10 to-grey-90/5"></div>
    </header>
  )
}

export default Nav
