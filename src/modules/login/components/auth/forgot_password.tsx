"use client"

import { useState } from "react"
import Link from "next/link"
import AuthBackground from "./shared/auth_background"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Simular envío de email
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSuccess(true)
    } catch (err) {
      setError("Ocurrió un error. Por favor intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative h-screen flex items-center justify-center bg-pearl overflow-hidden">
      <AuthBackground />
      <div className="relative w-full max-w-md mx-auto p-6 z-10">
        <div className="bg-pearl shadow-2xl rounded-2xl p-8 border border-gold/30">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent rounded-t-2xl" />
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-black mb-2">Recuperar contraseña</h2>
            <p className="text-grey-90 text-base">Te enviaremos un enlace para restablecer tu contraseña</p>
          </div>
          {success ? (
            <div className="text-center">
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gold">¡Correo enviado!</h3>
              <p className="mt-2 text-grey-90 text-base">Revisa tu bandeja de entrada para encontrar el enlace de recuperación</p>
              <div className="mt-6">
                <Link
                  href="/login"
                  className="text-sm text-gold hover:text-black transition-colors"
                >
                  Volver al inicio de sesión
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="text-sm text-red-600 bg-red-100 p-3 rounded-md border border-red-300">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gold rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-pearl text-black placeholder:text-grey-80"
                  placeholder="tu@ejemplo.com"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold text-black font-bold rounded-lg hover:bg-black hover:text-pearl transition-all shadow-md py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Enviar enlace de recuperación"
                )}
              </button>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gold/30"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-pearl text-grey-90">
                      ¿Recordaste tu contraseña?
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Link
                    href="/login"
                    className="text-sm text-gold hover:text-black transition-colors"
                  >
                    Volver al inicio de sesión
                  </Link>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword 