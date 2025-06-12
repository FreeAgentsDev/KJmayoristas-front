import React, { useState } from "react"
import Navbar from "../common/components/Navbar"
import Footer from "../common/components/Footer"
import ChatBot from "../chat/chat"


export default function NosotrosPage() {
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-pearl">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="flex-grow px-6 py-12 max-w-6xl mx-auto space-y-12">
        {/* Encabezado */}
        <div className="text-center">
          <h1 className="text-4xl font-bold font-title text-gold mb-4">Quiénes Somos</h1>
          <p className="text-grey-70 text-lg font-body">
            En Kevin Jewelry nos dedicamos a ofrecer joyas de oro laminado de la más alta calidad. Nuestra pasión es ayudarte a emprender y hacer brillar tu negocio.
          </p>
        </div>

        {/* Video */}
        <div className="w-full flex justify-center">
          <video className="rounded-2xl shadow-lg max-w-full" controls>
            <source src="/videos/kevinjewelry-presentacion.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>

        {/* Infografía */}
        <div className="grid md:grid-cols-2 gap-6">
          {[{
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M16 4l4 4-4 4M8 20l-4-4 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Fabricantes Directos",
              desc: "Joyas de oro laminado 18K fabricadas por nosotros con los más altos estándares de calidad.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M2.5 19.5l19-7-19-7v5l14 2-14 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Envíos Rápidos",
              desc: "Entregas ágiles, seguras y confiables a nivel nacional e internacional.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 20h5v-2a4 4 0 00-4-4h-1M7 20H2v-2a4 4 0 014-4h1m4-4a4 4 0 11-8 0 4 4 0 018 0zm10 0a4 4 0 11-8 0 4 4 0 018 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Acompañamiento Real",
              desc: "Brindamos asesoría continua para ayudarte a crecer como emprendedor(a).",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M8 16l-3.5-4.5L8 7m8 9l3.5-4.5L16 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Diseño Exclusivo",
              desc: "Modelos únicos y actuales que enamoran al cliente final y destacan en el mercado.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/90 border border-gold/15 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-gold">{item.icon}</div>
              <h4 className="text-xl font-semibold text-grey-80 font-title mb-3">
                {item.title}
              </h4>
              <p className="text-base text-grey-70 font-body">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonios */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gold font-title mb-6">Testimonios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Laura Martínez",
                testimony: "Gracias a Kevin Jewelry inicié mi negocio de joyería desde casa. Su acompañamiento fue clave para crecer.",
              },
              {
                name: "Carlos Pérez",
                testimony: "Las joyas son de excelente calidad y a mis clientes les encantan. Muy feliz con el servicio.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/90 border border-gold/15 rounded-xl p-6 shadow-md"
              >
                <p className="text-grey-70 text-base font-body italic mb-4">
                  “{item.testimony}”
                </p>
                <p className="text-grey-80 font-semibold font-title">— {item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario de contacto */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gold font-title mb-6">Contáctanos</h2>
          <form className="grid gap-4 max-w-xl mx-auto">
            <input type="text" placeholder="Nombre" className="p-3 rounded-xl border border-grey-30" />
            <input type="email" placeholder="Correo electrónico" className="p-3 rounded-xl border border-grey-30" />
            <textarea placeholder="Mensaje" className="p-3 rounded-xl border border-grey-30 h-32 resize-none" />
            <button type="submit" className="bg-gold text-white py-3 px-6 rounded-xl hover:bg-gold-dark transition">
              Enviar mensaje
            </button>
          </form>
        </div>
      </main>


      {/* Footer */}
      <Footer />
      <ChatBot />
    </div>
  )
}
