import React from "react"
import Hero from "./Hero"
import ValueSection from "./value_section"
import Testimonials from "./testimonials"
import ContactForm from "./contactForm"
import Navbar from "../common/components/Navbar"
import Footer from "../common/components/Footer"
import GoldenBackground from "../common/components/GoldenBackground"
import ChatBot from "../chat/chat"


const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-pearl">
      <GoldenBackground />
      
      {/* 1. Header */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Sección de Valor */}
      <ValueSection />

      {/* 4. Testimonios */}
      <Testimonials />

      {/* 5. Formulario de contacto/registro */}
      <div id="formulario" className="flex-grow container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-black">Regístrate como Mayorista</h2>
        <p className="text-grey-100 text-center max-w-xl mx-auto mb-8">
          Completa el formulario y únete a nuestra red exclusiva de mayoristas
        </p>
        <ContactForm />
      </div>

      {/* 6. Sección Agendar Reunión */}
      <div id="agendar" className="py-16 relative z-10 bg-champagne/30">
        <div className="container mx-auto px-4 text-center relative">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
          <h2 className="text-3xl font-bold mb-6 text-black">¿Prefieres hablar con nosotros?</h2>
          <p className="text-grey-100 max-w-lg mx-auto mb-8">
            Agenda una reunión con uno de nuestros asesores para recibir información personalizada sobre nuestro programa de mayoristas.
          </p>
          <a 
            href="https://calendly.com/devkevinjewelry/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gold text-black px-8 py-3 rounded-md font-semibold hover:bg-gold-light transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
          >
            Agendar Reunión
          </a>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        </div>
      </div>

      {/* 7. Footer */}
      <Footer />
      {/* 8. ChatBot con contexto de sección */}
      <ChatBot/>
    </div>
  )
}

export default LandingPage 