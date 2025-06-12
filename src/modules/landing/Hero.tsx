"use client"

import React, { useRef, useEffect } from "react"

const Hero = () => {
  const videoRefMobile = useRef<HTMLVideoElement>(null);
  const videoRefDesktop = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Función para manejar la intersección
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        
        if (entry.isIntersecting) {
          // Si el video está visible en la pantalla
          video.muted = false;
          video.play().catch(e => {
            // Si la reproducción automática falla, hacemos que se reproduzca mudo
            video.muted = true;
            video.play().catch(console.error);
          });
        } else {
          // Si el video no está visible, lo muteamos
          video.muted = true;
        }
      });
    };
    
    // Crear observer para detectar cuando el video está visible
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.3 // Cuando al menos 30% del video es visible
    };
    
    const observer = new IntersectionObserver(handleIntersection, options);
    
    // Observar los videos si existen
    if (videoRefMobile.current) {
      observer.observe(videoRefMobile.current);
    }
    
    if (videoRefDesktop.current) {
      observer.observe(videoRefDesktop.current);
    }
    
    return () => {
      // Limpiar el observer cuando el componente se desmonte
      observer.disconnect();
    };
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Background decorativo con gradiente de lujo */}
      <div className="absolute inset-0 bg-pearl z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-pearl via-gold/10 to-pearl opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      </div>
      
      {/* Contenedor principal con diseño split */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] items-center gap-6 md:gap-8 lg:gap-12">
          {/* Video principal para móviles (visible solo en móviles) */}
          <div className="lg:hidden w-full pt-6">
            <div className="relative w-full h-[50vh] overflow-hidden rounded-xl border border-gold/20 mx-auto">
              <video 
                ref={videoRefMobile}
                className="absolute inset-0 w-full h-full object-cover"
                src="https://kevinjewelry.com/cdn/shop/videos/c/vp/2155e633f53b4ed3992b941de29293fa/2155e633f53b4ed3992b941de29293fa.HD-1080p-7.2Mbps-42844374.mp4?v=0"
                autoPlay
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-grey-80/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-gold text-base font-medium mb-1 font-body">Colección Exclusiva</p>
                <h3 className="text-grey-80 text-xl font-bold font-title">DIRIGIDOS POR NUESTRO FUNDADOR EN JOYERÍA DE LUJO</h3>
              </div>
            </div>
          </div>
          
          {/* Lado izquierdo: Contenido y CTA */}
          <div className="py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0">
              {/* Badge exclusiva */}
              <div className="inline-flex items-center mb-4 md:mb-6 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full">
                <span className="w-2 h-2 rounded-full bg-gold mr-2"></span>
                <span className="text-gold text-xs sm:text-sm font-medium font-body">Programa Exclusivo para Mayoristas</span>
              </div>
              
              {/* Título principal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-grey-80 leading-tight font-title">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Eleva tu Negocio</span> con Joyería Premium
              </h1>
              
              {/* Descripción con beneficios */}
              <p className="text-base sm:text-lg text-grey-80/80 mb-6 md:mb-8 leading-relaxed font-body">
                Conviértete en mayorista de Kevin Jewelry y accede a nuestro catálogo exclusivo con los diseños más actuales del mercado a precios competitivos.
              </p>
              
              {/* Lista de beneficios clave */}
              <div className="space-y-3 mb-8 md:mb-10">
                {[
                  "Catálogo exclusivo con +500 diseños premium",
                  "Soporte personalizado y envíos prioritarios"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start">
                    <div className="text-gold mr-3 flex-shrink-0">✓</div>
                    <p className="text-grey-80/70 font-body text-sm sm:text-base">{benefit}</p>
                  </div>
                ))}
              </div>
              
              {/* Botón CTA principal */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium bg-gold text-grey-80 rounded-md hover:bg-gold-light transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-gold/20 flex items-center justify-center font-body"
                  onClick={() => window.location.hash = '#formulario'}>
                  <span>Regístrate como Mayorista</span>
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
                <a 
                  href="#beneficios"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-gold border border-gold/30 hover:border-gold rounded-md transition-all duration-200 ease-in-out flex items-center justify-center hover:bg-gold/5 font-body"
                >
                  Ver Beneficios
                </a>
              </div>
            </div>
          </div>
          
          {/* Lado derecho: Video de producto premium (solo desktop) */}
          <div className="relative hidden lg:block">
            {/* Contenedor de video con efectos - ajustado para mostrar completo */}
            <div className="relative h-[85vh] w-[90%] mx-auto overflow-hidden rounded-2xl border border-gold/20">
              {/* Video principal de joyería premium */}
              <video
                ref={videoRefDesktop}
                className="absolute inset-0 w-full h-full object-contain"
                src="https://kevinjewelry.com/cdn/shop/videos/c/vp/2155e633f53b4ed3992b941de29293fa/2155e633f53b4ed3992b941de29293fa.HD-1080p-7.2Mbps-42844374.mp4?v=0"
                autoPlay
                muted
                playsInline
              />
              
              {/* Overlay con gradiente para mejorar legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-grey-80/60 via-transparent to-transparent"></div>
              
              {/* Texto sobre el video */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-gold text-lg font-medium mb-2 font-body">Colección Exclusiva</p>
                <h3 className="text-grey-80 text-2xl font-bold font-title">DIRIGIDOS POR NUESTRO FUNDADOR EN JOYERÍA DE LUJO</h3>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-gold/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gold/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos adicionales */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-pearl to-transparent"></div>
    </section>
  )
}

export default Hero
