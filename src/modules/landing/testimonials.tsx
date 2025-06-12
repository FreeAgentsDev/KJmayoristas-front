"use client"

import React, { useState, useEffect, useRef } from "react"

// Datos de testimonios con videos locales
const testimonials = [
  {
    id: 1,
    videoUrl: "/videos/vid1.mp4",
    thumbnail: "/images/jewerly.png",
    title: "Colección Primavera"
  },
  {
    id: 2,
    videoUrl: "/videos/vid2.mp4",
    thumbnail: "/images/jewerly.png",
    title: "Colección Diamantes"
  },
  {
    id: 3,
    videoUrl: "/videos/vid3.mp4",
    thumbnail: "/images/jewerly.png",
    title: "Colección Oro"
  },
  {
    id: 4,
    videoUrl: "/videos/vid 4.mp4",
    thumbnail: "/images/jewerly.png",
    title: "Colección Exclusiva"
  },
  {
    id: 5,
    videoUrl: "https://kevinjewelry.com/cdn/shop/videos/c/vp/94e0c29625864a4d98f7b8a908de6bfa/94e0c29625864a4d98f7b8a908de6bfa.HD-1080p-7.2Mbps-42844590.mp4?v=0",
    thumbnail: "/images/jewerly.png",
    title: "Colección Premium"
  }
]

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(4); // Índice anterior (inicialmente el último)
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [transitioning, setTransitioning] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Inicializar referencias de video
  const setVideoRef = (el: HTMLVideoElement | null, index: number) => {
    if (el) {
      videoRefs.current[index] = el;
    }
  };
  
  // Autoplay para el carrusel
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay && !transitioning) {
      interval = setInterval(() => {
        nextSlide(false);
      }, 8000); // Cambiar cada 8 segundos
    }
    
    return () => {
      if (interval) clearInterval(interval);
    }
  }, [currentIndex, autoplay, transitioning]);

  // Reactivar autoplay después de inactividad
  useEffect(() => {
    if (userInteracted) {
      // Limpiar timeout existente si hay uno
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
      
      // Configurar nuevo timeout para reactivar autoplay después de 10 segundos
      autoplayTimeoutRef.current = setTimeout(() => {
        setUserInteracted(false);
        setAutoplay(true);
      }, 10000);
    }
    
    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, [userInteracted]);
  
  // Obtener índice anterior
  const getPrevIndex = (index: number) => {
    return (index - 1 + testimonials.length) % testimonials.length;
  };
  
  // Obtener índice siguiente
  const getNextIndex = (index: number) => {
    return (index + 1) % testimonials.length;
  };
  
  // Gestionar reproducción de videos
  useEffect(() => {
    // Reproducir todos los videos pero solo activar el sonido del video actual
    videoRefs.current.forEach((videoRef, idx) => {
      if (videoRef) {
        // Asegurarnos de que todos los videos se están reproduciendo
        const playPromise = videoRef.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Reproducción automática bloqueada, no hay problema
          });
        }
        
        // Solo el video actual debe tener sonido potencialmente
        if (idx === currentIndex) {
          videoRef.muted = !isPlaying; // Si isPlaying es true, no silenciamos
        } else {
          videoRef.muted = true; // Todos los demás videos siempre silenciados
        }
      }
    });
  }, [currentIndex, isPlaying]);

  // Manejar la transición
  const handleTransition = (newIndex: number, dir: 'next' | 'prev') => {
    if (transitioning) return;
    
    setPrevIndex(currentIndex);
    setDirection(dir);
    setTransitioning(true);
    
    // Establecer un pequeño retraso para iniciar la animación
    setTimeout(() => {
      setCurrentIndex(newIndex);
      
      // Limpieza de la transición después de completarse
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      
      transitionTimeoutRef.current = setTimeout(() => {
        setTransitioning(false);
      }, 600); // Duración de la transición
    }, 50);
  };
  
  // Navegar al siguiente testimonio
  const nextSlide = (manual: boolean = true) => {
    if (transitioning) return;
    
    if (manual) {
      setUserInteracted(true);
      setAutoplay(false);
    }
    
    const nextIndex = getNextIndex(currentIndex);
    handleTransition(nextIndex, 'next');
  }
  
  // Navegar al testimonio anterior
  const prevSlide = () => {
    if (transitioning) return;
    
    setUserInteracted(true);
    setAutoplay(false);
    
    const prevIndex = getPrevIndex(currentIndex);
    handleTransition(prevIndex, 'prev');
  }
  
  // Navegar a un testimonio específico
  const goToSlide = (index: number) => {
    if (transitioning || index === currentIndex) return;
    
    setUserInteracted(true);
    setAutoplay(false);
    
    const dir = index > currentIndex ? 'next' : 'prev';
    handleTransition(index, dir);
  }

  // Toggle sonido del video
  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  }
  
  return (
    <section id="nuestro-trabajo" className="py-16 sm:py-20 md:py-24 relative z-10 overflow-hidden bg-pearl">
      <div className="container mx-auto px-4 relative">
        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black font-title">Nuestras Colecciones Exclusivas</h2>
        <p className="text-grey-100 text-center max-w-xl mx-auto mb-12 font-body">
          Explora nuestra variedad de diseños únicos y descubre la perfección en cada pieza. Joyas que cuentan historias y realzan tu estilo.
        </p>
        
        {/* Carrusel de videos */}
        <div className="relative w-full max-w-[800px] mx-auto">
          {/* Flechas de navegación */}
          <button 
            className={`absolute top-1/2 left-2 md:left-4 z-30 -translate-y-1/2 p-2 md:p-3 rounded-full bg-pearl/90 text-black hover:bg-gold hover:text-black transition-all focus:outline-none border border-grey-90/20 hover:border-gold shadow-lg ${transitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={prevSlide}
            aria-label="Video anterior"
            disabled={transitioning}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className={`absolute top-1/2 right-2 md:right-4 z-30 -translate-y-1/2 p-2 md:p-3 rounded-full bg-pearl/90 text-black hover:bg-gold hover:text-black transition-all focus:outline-none border border-grey-90/20 hover:border-gold shadow-lg ${transitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => nextSlide()}
            aria-label="Siguiente video"
            disabled={transitioning}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Carrusel tipo coverflow */}
          <div className="overflow-visible h-[580px] md:h-[650px] py-10 perspective">
            <div className="relative h-full w-full preserve-3d flex items-center justify-center">
              {/* Video anterior */}
              <div 
                className={`absolute w-[160px] md:w-[200px] h-[85%] transition-all duration-700 ease-in-out transform rounded-xl overflow-hidden shadow-lg ${transitioning ? 'transition-all duration-700' : ''}`}
                style={{ 
                  transform: `translateX(-170px) scale(0.85) translateZ(-120px) rotateY(20deg)`,
                  filter: 'brightness(0.7) blur(1px)',
                  opacity: transitioning && direction === 'prev' ? '0' : '0.4',
                  zIndex: transitioning && direction === 'prev' ? '0' : '10',
                }}
              >
                <div className="w-full h-full bg-pearl rounded-xl overflow-hidden border border-gold/20 relative">
                  <video
                    ref={(el) => setVideoRef(el, getPrevIndex(currentIndex))}
                    className="w-full h-full object-cover object-center"
                    muted
                    playsInline
                    loop
                    autoPlay
                  >
                    <source src={testimonials[getPrevIndex(currentIndex)].videoUrl} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
                  
                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gold/80 rounded-full p-2 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video actual (central) */}
              <div 
                className={`absolute w-[320px] md:w-[360px] h-[95%] transform z-20 rounded-xl overflow-hidden shadow-2xl border-2 border-gold/40 transition-all duration-700 ease-in-out ${
                  transitioning 
                    ? direction === 'next' 
                      ? 'slide-out-left' 
                      : 'slide-out-right'
                    : 'slide-in'
                }`}
                style={{ 
                  transform: transitioning
                    ? direction === 'next'
                      ? 'translateX(-170px) scale(0.85) translateZ(-120px) rotateY(20deg)'
                      : 'translateX(170px) scale(0.85) translateZ(-120px) rotateY(-20deg)'
                    : 'translateX(0) scale(1) translateZ(0) rotateY(0deg)',
                  filter: transitioning ? 'brightness(0.7) blur(1px)' : 'brightness(1)',
                  opacity: transitioning ? '0.4' : '1',
                  zIndex: transitioning ? '10' : '20',
                }}
              >
                <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
                  <video
                    key={`video-${currentIndex}`}
                    ref={(el) => setVideoRef(el, currentIndex)}
                    className="w-full h-full object-cover object-center cursor-pointer"
                    poster={testimonials[currentIndex].thumbnail}
                    onClick={toggleSound}
                    muted={!isPlaying}
                    playsInline
                    loop
                    autoPlay
                  >
                    <source src={testimonials[currentIndex].videoUrl} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                  </video>
                  
                  {/* Controles de sonido */}
                  <button 
                    className="absolute bottom-4 right-4 z-30 p-2 rounded-full bg-pearl/90 text-black hover:bg-gold hover:text-black transition-all focus:outline-none border border-grey-90/20 hover:border-gold shadow-lg"
                    onClick={toggleSound}
                    aria-label={isPlaying ? "Silenciar" : "Activar sonido"}
                  >
                    {isPlaying ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                        <path d="M12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Nuevo video central (durante la transición) */}
              {transitioning && (
                <div 
                  className={`absolute w-[320px] md:w-[360px] h-[95%] transform rounded-xl overflow-hidden shadow-2xl border-2 border-gold/40 transition-all duration-700 ease-in-out ${
                    direction === 'next' ? 'slide-in-right' : 'slide-in-left'
                  }`}
                  style={{ 
                    transform: direction === 'next' 
                      ? 'translateX(0) scale(1) translateZ(0) rotateY(0deg)' 
                      : 'translateX(0) scale(1) translateZ(0) rotateY(0deg)',
                    zIndex: 15,
                    opacity: '1',
                    filter: 'brightness(1)'
                  }}
                >
                  <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
                    <video
                      ref={(el) => setVideoRef(el, direction === 'next' ? getNextIndex(prevIndex) : getPrevIndex(prevIndex))}
                      className="w-full h-full object-cover object-center cursor-pointer"
                      onClick={toggleSound}
                      muted={true}
                      playsInline
                      loop
                      autoPlay
                    >
                      <source src={testimonials[direction === 'next' ? getNextIndex(prevIndex) : getPrevIndex(prevIndex)].videoUrl} type="video/mp4" />
                      Tu navegador no soporta videos HTML5.
                    </video>
                    
                    {/* Controles de sonido */}
                    <button 
                      className="absolute bottom-4 right-4 z-30 p-2 rounded-full bg-pearl/90 text-black hover:bg-gold hover:text-black transition-all focus:outline-none border border-grey-90/20 hover:border-gold shadow-lg"
                      onClick={toggleSound}
                      aria-label="Silenciar"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                        <path d="M12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Video siguiente */}
              <div 
                className={`absolute w-[160px] md:w-[200px] h-[85%] transition-all duration-700 ease-in-out transform rounded-xl overflow-hidden shadow-lg ${transitioning ? 'transition-all duration-700' : ''}`}
                style={{ 
                  transform: `translateX(170px) scale(0.85) translateZ(-120px) rotateY(-20deg)`,
                  filter: 'brightness(0.7) blur(1px)',
                  opacity: transitioning && direction === 'next' ? '0' : '0.4',
                  zIndex: transitioning && direction === 'next' ? '0' : '10',
                }}
              >
                <div className="w-full h-full bg-black rounded-xl overflow-hidden border border-gold/20 relative">
                  <video
                    ref={(el) => setVideoRef(el, getNextIndex(currentIndex))}
                    className="w-full h-full object-cover object-center"
                    muted
                    playsInline
                    loop
                    autoPlay
                  >
                    <source src={testimonials[getNextIndex(currentIndex)].videoUrl} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
                  
                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gold/80 rounded-full p-2 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Indicadores del carrusel simplificados */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all focus:outline-none ${
                  idx === currentIndex 
                    ? 'bg-black w-8 h-2 rounded-md' 
                    : 'bg-grey-90/30 w-4 h-2 rounded-full hover:bg-black/60'
                }`}
                aria-label={`Ir al video ${idx + 1}`}
                disabled={transitioning}
              />
          ))}
          </div>
        </div>
        
        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </div>

      {/* Estilos CSS adicionales para el efecto 3D y animaciones */}
      <style jsx>{`
        .perspective {
          perspective: 1500px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .slide-out-left {
          animation: slideOutLeft 0.7s forwards;
        }
        
        .slide-out-right {
          animation: slideOutRight 0.7s forwards;
        }
        
        .slide-in-right {
          animation: slideInRight 0.7s forwards;
        }
        
        .slide-in-left {
          animation: slideInLeft 0.7s forwards;
        }
        
        .slide-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes slideOutLeft {
          0% {
            transform: translateX(0) scale(1) translateZ(0) rotateY(0deg);
            opacity: 1;
            filter: brightness(1);
          }
          100% {
            transform: translateX(-170px) scale(0.85) translateZ(-120px) rotateY(20deg);
            opacity: 0.4;
            filter: brightness(0.7) blur(1px);
          }
        }
        
        @keyframes slideOutRight {
          0% {
            transform: translateX(0) scale(1) translateZ(0) rotateY(0deg);
            opacity: 1;
            filter: brightness(1);
          }
          100% {
            transform: translateX(170px) scale(0.85) translateZ(-120px) rotateY(-20deg);
            opacity: 0.4;
            filter: brightness(0.7) blur(1px);
          }
        }
        
        @keyframes slideInRight {
          0% {
            transform: translateX(170px) scale(0.85) translateZ(-120px) rotateY(-20deg);
            opacity: 0.4;
            filter: brightness(0.7) blur(1px);
          }
          100% {
            transform: translateX(0) scale(1) translateZ(0) rotateY(0deg);
            opacity: 1;
            filter: brightness(1);
          }
        }
        
        @keyframes slideInLeft {
          0% {
            transform: translateX(-170px) scale(0.85) translateZ(-120px) rotateY(20deg);
            opacity: 0.4;
            filter: brightness(0.7) blur(1px);
          }
          100% {
            transform: translateX(0) scale(1) translateZ(0) rotateY(0deg);
            opacity: 1;
            filter: brightness(1);
          }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0.8; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}

export default Testimonials 