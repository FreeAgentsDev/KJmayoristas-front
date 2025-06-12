import React from "react"

const benefits = [
  {
    title: "DEVOLUCIÓN DEL 100% DE LA INVERSIÓN",
    description: "Estamos tan seguros que vas a generar dinero, que si no logras ninguna venta te vamos a devolder toda el dinero de la inversión.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: [
      "Garantía de devolución completa de la inversión",
      "Sin riesgo financiero para tu negocio"
    ]
  },
  {
    title: "GARANTÍA DE POR VIDA",
    description: "Todas nuestras joyas cuentan con respaldo, lo que te va permitir vender con total tranquilidad a todos tus clientes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: [
      "Respaldo total en tus productos",
      "Tranquilidad garantizada para ti y tus clientes"
    ]
  },
  {
    title: "ROTACIÓN DE INVENTARIO",
    description: "Nunca vas a quedar con inventario estancado, ya que tienes la posibilidad de cambiar joyas que ya tienes por otras diferentes que tengamos en nuestro inventario.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: [
      "Cambio de productos por otros diferentes",
      "Inventario siempre actualizado y fresco"
    ]
  },
  {
    title: "CAPACITACIÓN EVALUDA EN $1.000",
    description: "Posibilidad de vender a nivel nacional, ya que nuestras capacitaciones son en redes sociales, pauta publicitaria, y estrategias de ventas, con la capacitación que te vamos a regalar no hay forma de que no tengas un negocio exitoso.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    features: [
      "Formación en redes sociales y estrategias de venta",
      "Conocimientos avanzados de marketing digital"
    ]
  },
  {
    title: "CONTENIDO DE ALTA CALIDAD",
    description: "Te vamos a ingresar a nuestro grupo privado donde vas a poder tener acceso a todas las fotos y videos de alta calidad que estamos enviando constantemente. no vas a tener que preocuparte por tomar contenido.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Acceso a fotos y videos profesionales",
      "Material listo para usar en tus campañas"
    ]
  }
]

const ValueSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 sm:py-20 md:py-24 relative bg-pearl">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-champagne/30 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        
        {/* Encabezado de sección */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-gold font-accent text-sm tracking-wider uppercase mb-3 inline-block">Ventajas exclusivas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-title">Beneficios de ser Mayorista</h2>
          <p className="text-grey-100 text-base md:text-lg font-body">
            Únete a nuestra red exclusiva de mayoristas y disfruta de todas estas ventajas para hacer crecer tu negocio de joyería con un socio confiable.
          </p>
        </div>
        
        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} 
              className="bg-pearl/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg text-center hover:shadow-gold/10 transition-all duration-300 border border-gold/10 hover:border-gold/30 transform hover:translate-y-[-8px] group"
            >
              {/* Icono con círculo decorativo */}
              <div className="relative mb-6 inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-gold/10 rounded-full blur-md group-hover:bg-gold/20 transition-colors duration-300"></div>
                <div className="relative bg-pearl p-4 rounded-full border border-gold/20 group-hover:border-gold/40 transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>
              
              {/* Título y descripción */}
              <h3 className="text-xl font-bold mb-3 text-black font-title group-hover:text-gold transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-grey-90 font-body text-sm sm:text-base mb-4">{benefit.description}</p>
              
              {/* Lista de características */}
              <ul className="text-left mt-4 space-y-2">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-grey-100 text-sm">
                    <svg className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Decoración inferior */}
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* CTA - Mejorado */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-pearl/90 backdrop-blur-sm p-8 rounded-xl border border-gold/10">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-4 font-title">¡Únete Hoy y Empieza a Vender con Ventaja!</h3>
            <p className="text-grey-100 mb-6 font-body max-w-xl mx-auto">
              Registro rápido y sencillo sin trámites complicados. Comienza a disfrutar de los beneficios sin compromisos iniciales ni riesgos.
            </p>
            <a 
              href="#formulario" 
              className="inline-flex items-center justify-center px-8 py-3 bg-gold text-black rounded-md hover:bg-gold-light transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-md font-body text-base font-semibold"
            >
              Solicita Acceso como Mayorista
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      </div>
    </section>
  )
}

export default ValueSection 