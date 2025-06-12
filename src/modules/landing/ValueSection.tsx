import React from "react"

const benefits = [
  {
    title: "DEVOLUCIÓN DEL 100% DE LA INVERSIÓN",
    description: "Estamos tan seguros que vas a generar dinero, que si no logras ninguna venta te vamos a devolder toda el dinero de la inversión.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    <section id="beneficios" className="py-16 sm:py-20 md:py-24 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-black/50 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
        
        {/* Encabezado de sección */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-amber-400 font-accent text-sm tracking-wider uppercase mb-3 inline-block">Ventajas exclusivas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6 font-title">Beneficios de ser Mayorista</h2>
          <p className="text-amber-300/80 text-base md:text-lg font-body">
            Únete a nuestra red exclusiva de mayoristas y disfruta de todas estas ventajas para hacer crecer tu negocio de joyería con un socio confiable.
          </p>
        </div>
        
        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} 
              className="bg-gradient-to-b from-black/80 to-black/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg text-center hover:shadow-amber-500/5 transition-all duration-300 border border-amber-500/20 hover:border-amber-500/40 transform hover:translate-y-[-8px] group"
            >
              {/* Icono con círculo decorativo */}
              <div className="relative mb-6 inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-md group-hover:bg-amber-500/20 transition-colors duration-300"></div>
                <div className="relative bg-black/60 p-4 rounded-full border border-amber-500/30 group-hover:border-amber-500/50 transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>
              
              {/* Título y descripción */}
              <h3 className="text-xl font-bold mb-3 text-amber-400 font-title group-hover:text-amber-300 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-amber-300/70 font-body text-sm sm:text-base mb-4">{benefit.description}</p>
              
              {/* Lista de características */}
              <ul className="text-left mt-4 space-y-2">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-amber-300/80 text-sm">
                    <svg className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Decoración inferior */}
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* CTA - Mejorado */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-b from-black/70 to-black/90 backdrop-blur-sm p-8 rounded-xl border border-amber-500/20">
            <h3 className="text-xl md:text-2xl font-bold text-amber-400 mb-4 font-title">¡Únete Hoy y Empieza a Vender con Ventaja!</h3>
            <p className="text-amber-300/80 mb-6 font-body max-w-xl mx-auto">
              Registro rápido y sencillo sin trámites complicados. Comienza a disfrutar de los beneficios sin compromisos iniciales ni riesgos.
            </p>
            <a 
              href="#formulario" 
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-black rounded-md hover:from-amber-500 hover:to-yellow-400 transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-amber-500/20 font-body text-base font-medium"
            >
              Solicita Acceso como Mayorista
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
      </div>
    </section>
  )
}

export default ValueSection 