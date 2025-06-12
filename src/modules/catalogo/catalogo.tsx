import React from "react"
import Navbar from "@modules/common/components/Navbar"
import Footer from "@modules/common/components/Footer"

const CatalogPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">Catálogo</h1>
      </main>

      <Footer />
    </div>
  )
}

export default CatalogPage