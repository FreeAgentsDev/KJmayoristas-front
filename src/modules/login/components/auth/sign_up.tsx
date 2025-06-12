"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import AuthBackground from "./shared/auth_background"

interface User {
  firstName: string
  lastName: string
  email: string
  password: string
}

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden")
      setLoading(false)
      return
    }

    try {
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]")
      const userExists = existingUsers.some((user: User) => user.email === formData.email)

      if (userExists) {
        setError("Este correo electrónico ya está registrado")
        setLoading(false)
        return
      }

      const newUser: User = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      }

      localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]))
      router.push("/login")
    } catch (err) {
      setError("Ocurrió un error durante el registro")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-pearl overflow-hidden">
      <AuthBackground />
      <div className="max-w-md w-full space-y-8 bg-pearl shadow-2xl p-8 rounded-2xl border border-gold/30 relative overflow-hidden z-10">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent rounded-t-2xl" />
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-black tracking-tight mb-2">Crear una cuenta</h2>
          <p className="mt-2 text-grey-90 text-base">Únete a nuestra comunidad</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="text-sm text-red-600 bg-red-100 p-3 rounded-md border border-red-300">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-black">Nombre</label>
                <div className="mt-1">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gold rounded-md shadow-sm placeholder:text-grey-80 bg-pearl text-black focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold sm:text-sm"
                    placeholder="Juan"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-black">Apellido</label>
                <div className="mt-1">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gold rounded-md shadow-sm placeholder:text-grey-80 bg-pearl text-black focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold sm:text-sm"
                    placeholder="Pérez"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">Correo electrónico</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gold rounded-md shadow-sm placeholder:text-grey-80 bg-pearl text-black focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold sm:text-sm"
                  placeholder="tu@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black">Contraseña</label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gold rounded-md shadow-sm placeholder:text-grey-80 bg-pearl text-black focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold sm:text-sm"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">Confirmar Contraseña</label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gold rounded-md shadow-sm placeholder:text-grey-80 bg-pearl text-black focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold sm:text-sm"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-black font-bold rounded-lg hover:bg-black hover:text-pearl transition-all shadow-md py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {loading ? "Creando cuenta..." : "Crear cuenta"}
            </button>
          </div>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gold/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-pearl text-grey-90">¿Ya tienes una cuenta?</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="font-medium text-gold hover:text-black transition-colors"
              >
                Inicia sesión aquí
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp 