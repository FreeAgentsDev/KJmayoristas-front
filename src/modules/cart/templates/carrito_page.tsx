"use client"

import React from "react"
import Navbar from "@modules/common/components/Navbar"
import Footer from "@modules/common/components/Footer"
import GoldenBackground from "@modules/common/components/GoldenBackground"
import ChatBot from "@modules/chat/chat"

const CarritoPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-pearl">
      <GoldenBackground />
      
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-rose-dark mb-8">Mi Carrito</h1>
          
          {/* Aquí irá el contenido del carrito */}
          <div className="bg-pearl rounded-lg shadow-md p-6">
            <p className="text-grey-90 text-center py-8">
              Tu carrito está vacío
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      <ChatBot />
    </div>
  )
}

export default CarritoPage 