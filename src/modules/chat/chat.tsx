"use client"

import React, { useState, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"

interface Mensaje {
  id: number
  tipo: "bot" | "user"
  texto: string
}

interface RespuestasSimuladas {
  [key: string]: {
    [key: string]: string
  }
}

const preguntasPorSeccion = {
  globales: [
    "¿Cómo vendo joyas?",
    "¿Cómo ser mayorista?",
    "Dudas sobre el catálogo",
    "¿Cómo es el envío?"
  ],
  Inicio: [
    "¿Qué es esta tienda?",
    "¿Por qué registrarme como mayorista?",
    "¿Qué ventajas ofrece la plataforma?"
  ],
  Catalogo: [
    "¿Cómo veo los precios mayoristas?",
    "¿Cómo agrego productos al carrito?",
    "¿Tienen disponibilidad en todos los productos?"
  ],
  Contacto: [
    "¿Dónde están ubicados?",
    "¿Cómo puedo comunicarme con ustedes?",
    "¿En cuánto tiempo responden el formulario?"
  ],
  Nosotros: [
    "¿Quiénes son ustedes?",
    "¿Tienen experiencia en el mercado?",
    "¿Dónde fabrican sus joyas?"
  ],
  Perfil: [
    "¿Cómo actualizo mi información?",
    "¿Cómo cambio mi contraseña?",
    "¿Dónde veo mis pedidos anteriores?"
  ],
  Carrito: [
    "¿Cómo finalizo mi compra?",
    "¿Puedo modificar mi carrito?",
    "¿Cuáles son los métodos de pago?"
  ]
}

const respuestasSimuladas: RespuestasSimuladas = {
  globales: {
    "¿Cómo vendo joyas?": "Para vender joyas, primero debes registrarte en nuestra plataforma y seleccionar tus productos favoritos.",
    "¿Cómo ser mayorista?": "Para ser mayorista, necesitas un mínimo de compra mensual y te damos precios especiales.",
    "Dudas sobre el catálogo": "Nuestro catálogo está disponible en línea 24/7 con todos los productos actualizados.",
    "¿Cómo es el envío?": "El envío es rápido y seguro, generalmente toma entre 3 y 5 días hábiles."
  },
  Inicio: {
    "¿Qué es esta tienda?": "Somos una tienda especializada en joyería de alta calidad para mayoristas.",
    "¿Por qué registrarme como mayorista?": "Tendrás acceso a precios preferenciales y productos exclusivos.",
    "¿Qué ventajas ofrece la plataforma?": "Ofrecemos catálogo actualizado, soporte y envíos rápidos."
  },
  Catalogo: {
    "¿Cómo veo los precios mayoristas?": "Debes estar registrado como mayorista para ver los precios especiales.",
    "¿Cómo agrego productos al carrito?": "Haz clic en el ícono del carrito en cada producto.",
    "¿Tienen disponibilidad en todos los productos?": "Actualizamos el stock en tiempo real."
  },
  Contacto: {
    "¿Dónde están ubicados?": "Nuestra sede está en Ciudad de México.",
    "¿Cómo puedo comunicarme con ustedes?": "Puedes escribirnos por el formulario o WhatsApp.",
    "¿En cuánto tiempo responden el formulario?": "Generalmente respondemos en menos de 24 horas."
  },
  Nosotros: {
    "¿Quiénes son ustedes?": "Somos una empresa familiar con más de 10 años en el mercado.",
    "¿Tienen experiencia en el mercado?": "Sí, trabajamos con cientos de clientes mayoristas.",
    "¿Dónde fabrican sus joyas?": "Todas nuestras piezas se fabrican artesanalmente en México."
  },
  Perfil: {
    "¿Cómo actualizo mi información?": "Desde la sección de perfil puedes editar tus datos personales.",
    "¿Cómo cambio mi contraseña?": "Dentro de perfil, busca la opción 'Cambiar contraseña'.",
    "¿Dónde veo mis pedidos anteriores?": "En tu perfil, entra a 'Mis pedidos'."
  },
  Carrito: {
    "¿Cómo finalizo mi compra?": "Haz clic en 'Finalizar pedido' y sigue los pasos de pago.",
    "¿Puedo modificar mi carrito?": "Sí, puedes agregar o quitar productos antes de pagar.",
    "¿Cuáles son los métodos de pago?": "Aceptamos tarjeta, transferencia y PayPal."
  }
}

export default function ChatBot() {
  const pathname = usePathname()
  const [showChat, setShowChat] = useState(false)
  const [chatMensajes, setChatMensajes] = useState<Mensaje[]>([
    { id: 0, tipo: "bot", texto: "Hola, ¿en qué puedo ayudarte?" }
  ])
  const [input, setInput] = useState("")
  const mensajesRef = useRef<HTMLDivElement>(null)

  const seccionActual = (() => {
    if (pathname.includes("catalogo")) return "Catalogo"
    if (pathname.includes("contacto")) return "Contacto"
    if (pathname.includes("nosotros")) return "Nosotros"
    if (pathname.includes("perfil")) return "Perfil"
    if (pathname.includes("carrito")) return "Carrito"
    return "Inicio"
  })()

  useEffect(() => {
    if (mensajesRef.current) {
      mensajesRef.current.scrollTop = mensajesRef.current.scrollHeight
    }
  }, [chatMensajes])

  const manejarPregunta = (pregunta: string) => {
    if (!pregunta.trim()) return

    setChatMensajes(prev => [...prev, { id: prev.length + 1, tipo: "user", texto: pregunta }])
    setInput("")

    const respuesta =
      respuestasSimuladas[seccionActual]?.[pregunta] ||
      respuestasSimuladas.globales?.[pregunta] ||
      "Disculpa, no entiendo la pregunta."

    setTimeout(() => {
      setChatMensajes(prev => [...prev, { id: prev.length + 2, tipo: "bot", texto: respuesta }])
    }, 1000)
  }

  const manejarEnviar = (e: React.FormEvent) => {
    e.preventDefault()
    manejarPregunta(input)
  }

  const preguntasMostradas = [
    ...(preguntasPorSeccion[seccionActual] || []),
    ...preguntasPorSeccion.globales
  ].filter((pregunta, index, self) => 
    self.indexOf(pregunta) === index
  )

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setShowChat(!showChat)}
        className="bg-rose text-rose-dark px-4 py-2 rounded-full shadow-md text-lg hover:bg-rose-light transition-colors duration-200"
        aria-label="Abrir chat"
      >
        💬 Chat
      </button>

      {showChat && (
        <div className="mt-2 w-[350px] h-[450px] bg-pearl border border-rose rounded-xl shadow-lg flex flex-col">
          <div
            ref={mensajesRef}
            className="flex-grow p-4 overflow-y-auto flex flex-col gap-3 no-scrollbar"
          >
            {chatMensajes.map(m => (
              <div
                key={m.id}
                className={`max-w-[80%] p-3 rounded-lg ${
                  m.tipo === "bot"
                    ? "bg-rose/50 text-rose-dark self-start"
                    : "bg-rose-light text-rose-dark self-end"
                }`}
              >
                {m.texto}
              </div>
            ))}
          </div>

          <div className="border-t border-rose p-2 grid grid-cols-2 gap-2">
            {preguntasMostradas.map((pregunta) => (
              <button
                key={pregunta}
                onClick={() => manejarPregunta(pregunta)}
                className="bg-rose/50 text-rose-dark rounded-md py-1 text-sm hover:bg-rose transition-colors duration-200"
              >
                {pregunta}
              </button>
            ))}
          </div>

          <form
            onSubmit={manejarEnviar}
            className="border-t border-rose p-2 flex gap-2 items-center"
          >
            <input
              type="text"
              placeholder="Escribe tu pregunta..."
              value={input}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
              className="flex-grow bg-pearl border border-elegant rounded-md px-3 py-2 text-rose-dark placeholder-rose-dark focus:border-gold focus:ring-1 focus:ring-gold outline-none font-body"
            />
            <button
              type="submit"
              className="bg-rose rounded-full w-9 h-9 flex justify-center items-center text-rose-dark hover:bg-rose-light transition-colors duration-200"
              aria-label="Enviar pregunta"
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
