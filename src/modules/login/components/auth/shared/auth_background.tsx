const AuthBackground = () => {
  return (
    <>
      {/* Fondo con gradiente claro y efecto brillante */}
      <div className="fixed inset-0 bg-gradient-to-br from-pearl via-elegant to-pearl">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#F5F5F5_12%,transparent_12.5%,transparent_87%,#F5F5F5_87.5%,#F5F5F5_100%)] bg-[length:20px_20px] opacity-10"></div>
      </div>

      {/* Formas decorativas suaves */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-gold/20 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-rose/20 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-champagne/20 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Línea decorativa superior dorada */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      {/* Efecto de brillo adicional */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/10 to-transparent opacity-20"></div>
    </>
  )
}

export default AuthBackground 