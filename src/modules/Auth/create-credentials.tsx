"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AuthBackground from "@modules/login/components/auth/shared/auth_background"

type UserRole = 'admin' | 'mayorista' | 'empresario'

interface FormData {
  nombre: string
  apellido: string
  cedula: string
  telefono: string
  direccion: string
  ciudad: string
  empresa?: string
  email: string
  password: string
}

interface RoleOption {
  id: UserRole
  title: string
  description: string
}

const roleOptions: RoleOption[] = [
  {
    id: 'admin',
    title: 'Administrador',
    description: 'Acceso completo a funcionalidades administrativas'
  },
  {
    id: 'mayorista',
    title: 'Mayorista',
    description: 'Acceso a precios especiales y compras por volumen'
  },
  {
    id: 'empresario',
    title: 'Empresario',
    description: 'Acceso a catálogo y precios estándar'
  }
]

const CreateCredentials = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)
  const [isSuperAdminState, setIsSuperAdminState] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    cedula: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    empresa: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  // Verificar si es super admin usando useEffect
  useEffect(() => {
    try {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}')
      setIsSuperAdminState(currentUser.role === 'superadmin')
    } catch (error) {
      console.error("Error verificando super admin:", error)
      setIsSuperAdminState(false)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedRole) return

    try {
      // Verificar que todos los campos requeridos estén llenos
      const requiredFields = ['nombre', 'apellido', 'cedula', 'telefono', 'direccion', 'ciudad', 'email', 'password']
      if (selectedRole === 'mayorista') {
        requiredFields.push('empresa')
      }

      const missingFields = requiredFields.filter(field => !formData[field as keyof FormData])
      if (missingFields.length > 0) {
        setError(`Por favor complete los siguientes campos: ${missingFields.join(', ')}`)
        return
      }

      // Crear el nuevo usuario
      const newUser = {
        ...formData,
        role: selectedRole,
        createdBy: JSON.parse(localStorage.getItem('currentUser') || '{}').email
      }

      // Guardar en localStorage (esto se reemplazaría por una llamada a la API)
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))

      // Redirigir a la lista de usuarios
      router.push('/admin/usuarios')
    } catch (err) {
      setError('Error al crear el usuario')
    }
  }

  // Si no es super admin, redirigir
  if (!isSuperAdminState) {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AuthBackground />
        <div className="relative w-full max-w-4xl mx-auto p-6">
          <div className="bg-black/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 relative overflow-hidden border border-amber-500/20">
            <div className="text-center text-amber-400">
              No tienes permisos para acceder a esta página
            </div>
            <div className="mt-4 text-center">
              <button
                onClick={() => router.push('/login')}
                className="text-sm text-amber-400 hover:text-amber-300 transition-colors duration-200"
              >
                Volver al inicio de sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AuthBackground />
      
      <div className="relative w-full max-w-4xl mx-auto p-6">
        <div className="bg-black/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 relative overflow-hidden border border-amber-500/20">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-amber-400">
              Crear Nueva Cuenta
            </h2>
            <p className="text-sm text-amber-300/80 mt-2">
              Registra un nuevo usuario en el sistema
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {roleOptions.map((role) => (
                <div
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`
                    cursor-pointer rounded-xl p-6 transition-all duration-200
                    ${selectedRole === role.id 
                      ? 'bg-amber-500/20 border border-amber-500 transform scale-[1.02]' 
                      : 'bg-black/50 border border-amber-500/30 hover:border-amber-500/50'}
                  `}
                >
                  <h3 className="text-xl font-semibold text-amber-400 mb-2">
                    {role.title}
                  </h3>
                  <p className="text-amber-300/80 text-sm">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-amber-300 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-black/50 border border-amber-500/30 rounded-md text-amber-100 placeholder-amber-500/50 focus:outline-none focus:border-amber-500"
                  placeholder="Nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-300 mb-1">
                  Apellido
                </label>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-black/50 border border-amber-500/30 rounded-md text-amber-100 placeholder-amber-500/50 focus:outline-none focus:border-amber-500"
                  placeholder="Apellido"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-300 mb-1">
                  Cédula
                </label>
                <input
                  type="text"
                  name="cedula"
                  value={formData.cedula}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-black/50 border border-amber-500/30 rounded-md text-amber-100 placeholder-amber-500/50 focus:outline-none focus:border-amber-500"
                  placeholder="Número de cédula"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-300 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-black/50 border border-amber-500/30 rounded-md text-amber-100 placeholder-amber-500/50 focus:outline-none focus:border-amber-500"
                  placeholder="Número de teléfono"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-amber-300 mb-1">
                  Dirección
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-black/50 border border-amber-500/30 rounded-md text-amber-100 placeholder-amber-500/50 focus:outline-none focus:border-amber-500"
                  placeholder="Dirección completa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-300 mb-1">
                  Ciudad
                </label>
                <input
                  type="text"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-black/50 border border-amber-500/30 rounded-md text-amber-100 placeholder-amber-500/50 focus:outline-none focus:border-amber-500"
                  placeholder="Ciudad"
                />
              </div>

              {selectedRole === 'mayorista' && (
                <div>
                  <label className="block text-sm font-medium text-amber-300 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black/50 border border-amber-500/30 rounded-md text-amber-100 placeholder-amber-500/50 focus:outline-none focus:border-amber-500"
                    placeholder="Nombre de la empresa"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-amber-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-black/50 border border-amber-500/30 rounded-md text-amber-100 placeholder-amber-500/50 focus:outline-none focus:border-amber-500"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-300 mb-1">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black/50 border border-amber-500/30 rounded-md text-amber-100 placeholder-amber-500/50 focus:outline-none focus:border-amber-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-amber-400 hover:text-amber-300"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!selectedRole}
              className={`
                w-full bg-gradient-to-r from-amber-600 to-yellow-500 text-black py-2 px-4 
                rounded-md text-sm font-medium transition-all duration-200 ease-in-out 
                hover:from-amber-500 hover:to-yellow-400 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 
                disabled:opacity-50 disabled:cursor-not-allowed transform 
                hover:scale-[1.02] active:scale-[0.98]
                ${!selectedRole && 'opacity-50 cursor-not-allowed'}
              `}
            >
              Crear Usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateCredentials 