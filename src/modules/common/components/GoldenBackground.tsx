import React from 'react'

const GoldenBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Fondo base con gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-pearl via-elegant to-pearl">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#F5F5F5_12%,transparent_12.5%,transparent_87%,#F5F5F5_87.5%,#F5F5F5_100%)] bg-[length:20px_20px] opacity-5"></div>
      </div>

      {/* Formas decorativas suaves */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-gold/10 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-rose/10 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-champagne/10 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Línea decorativa superior suave */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      {/* Efecto de brillo adicional */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent opacity-10"></div>

      {/* Patrón de puntos sutiles */}
      <div className="absolute inset-0 bg-[radial-gradient(#FAD6A5_1px,transparent_1px)] bg-[size:20px_20px] opacity-5"></div>
    </div>
  )
}

export default GoldenBackground 