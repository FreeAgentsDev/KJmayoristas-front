import React from "react"
import Navbar from "../common/components/Navbar"
import Footer from "../common/components/Footer"
import GoldenBackground from "../common/components/GoldenBackground"
import ContactForm from "../landing/contactForm"
import ChatBot from "../chat/chat"

const ContactoPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <GoldenBackground />
      
      {/* Header */}
      <Navbar />

      {/* Contenido */}
      <main className="flex-grow relative z-10">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-2 text-center drop-shadow-lg">
            ¿Tienes alguna consulta de producto?
          </h1>
          <div className="flex justify-center mb-4">
            <span className="block w-24 h-1 rounded bg-gold"></span>
          </div>
          <p className="text-lg md:text-xl text-grey-90 mb-8 text-center max-w-2xl">
            Rellena el formulario y nuestro equipo te enviará la información detallada sobre el producto que te interese.
          </p>
          <ContactForm />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      <ChatBot/>
    </div>
  )
}

export default ContactoPage 