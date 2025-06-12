"use client"
import React, { useState, useEffect } from "react"
import Navbar from "../common/components/Navbar"
import Footer from "../common/components/Footer"
import GoldenBackground from "../common/components/GoldenBackground"
import Image from 'next/image'
import ChatBot from "../chat/chat"

const PerfilPage: React.FC = () => {
  // Estados para campos
  const [fullName, setFullName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [receiveNews, setReceiveNews] = useState(false)
  const [saved, setSaved] = useState(false)
  const [showChangePwd, setShowChangePwd] = useState(false)
  const [showActivity, setShowActivity] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Cargar datos de localStorage al montar
  useEffect(() => {
    setFullName(localStorage.getItem('profileFullName') || 'Usuario Ejemplo')
    setUsername(localStorage.getItem('profileUsername') || 'usuario123')
    setEmail(localStorage.getItem('profileEmail') || 'email@ejemplo.com')
    setPhone(localStorage.getItem('profilePhone') || '+1 234 567 890')
    setDarkMode(localStorage.getItem('profileDarkMode') === 'true')
    setReceiveNews(localStorage.getItem('profileReceiveNews') === 'true')
  }, [])

  // Guardar cambios en localStorage
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('profileFullName', fullName)
    localStorage.setItem('profileUsername', username)
    localStorage.setItem('profileEmail', email)
    localStorage.setItem('profilePhone', phone)
    localStorage.setItem('profileDarkMode', darkMode.toString())
    localStorage.setItem('profileReceiveNews', receiveNews.toString())
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  // Manejo de cambio de contraseña
  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPassword && newPassword === confirmPassword) {
      localStorage.setItem('profilePassword', newPassword)
      setShowChangePwd(false)
      setNewPassword(""); setConfirmPassword("");
    } else {
      alert('Las contraseñas no coinciden')
    }
  }

  return (
    <div className="flex flex-col min-h-screen relative bg-pearl">
      <GoldenBackground />
      
      {/* Header */}
      <Navbar />

      {/* Contenido */}
      <main className="flex-grow relative z-10 py-16">
        <div className="container mx-auto px-4">
          {saved && (
            <div className="mb-4 p-3 bg-green-600 text-white rounded">¡Cambios guardados con éxito!</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Sección superior: avatar y nombre */}
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 bg-pearl border-4 border-gold shadow-lg rounded-full mb-4 flex items-center justify-center">
                {/* Puedes poner aquí un ícono de usuario por defecto si no hay imagen */}
                <svg className="h-20 w-20 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h1 className="text-4xl font-extrabold text-black drop-shadow-lg mb-2">{fullName}</h1>
              <span className="text-grey-90 text-lg font-medium">@{username}</span>
            </div>

            {/* Información Personal */}
            <section className="bg-white/95 backdrop-blur-lg p-6 rounded-xl border-2 border-gold/20 shadow-md">
              <h2 className="text-xl font-bold text-black mb-4 flex items-center justify-between">
                Información Personal
                <span className="block w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full ml-2"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-grey-100 font-semibold mb-1">Nombre Completo</label>
                  <input id="fullName" type="text" value={fullName} onChange={e => setFullName(e.target.value)} className="w-full px-4 py-2 border border-gold bg-pearl text-black rounded focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-grey-80 transition-all" />
                </div>
                <div>
                  <label htmlFor="username" className="block text-grey-100 font-semibold mb-1">Usuario</label>
                  <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-4 py-2 border border-gold bg-pearl text-black rounded focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-grey-80 transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-grey-100 font-semibold mb-1">Email</label>
                  <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gold bg-pearl text-black rounded focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-grey-80 transition-all" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-grey-100 font-semibold mb-1">Teléfono</label>
                  <input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-4 py-2 border border-gold bg-pearl text-black rounded focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-grey-80 transition-all" />
                </div>
              </div>
            </section>

            {/* Sección de Preferencias */}
            <section className="bg-white/95 backdrop-blur-lg p-6 rounded-xl border-2 border-gold/20 shadow-md">
              <h2 className="text-xl font-bold text-black mb-4 flex items-center justify-between">
                Preferencias
                <span className="block w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full ml-2"></span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-grey-100 font-medium">Modo Oscuro</span>
                  <input type="checkbox" checked={darkMode} onChange={e => setDarkMode(e.target.checked)} className="toggle toggle-gold" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-grey-100 font-medium">Recibir Noticias</span>
                  <input type="checkbox" checked={receiveNews} onChange={e => setReceiveNews(e.target.checked)} className="toggle toggle-gold" />
                </div>
              </div>
            </section>

            {/* Sección de Seguridad */}
            <section className="bg-white/95 backdrop-blur-lg p-6 rounded-xl border-2 border-gold/20 shadow-md">
              <h2 className="text-xl font-bold text-black mb-4 flex items-center justify-between">
                Seguridad
                <span className="block w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full ml-2"></span>
              </h2>
              <div className="space-y-4">
                <button type="button" onClick={() => setShowChangePwd(true)} className="w-full text-left text-gold font-semibold hover:text-black bg-transparent transition-colors">Cambiar contraseña</button>
                <button type="button" onClick={() => setShowActivity(true)} className="w-full text-left text-gold font-semibold hover:text-black bg-transparent transition-colors">Ver actividad de cuenta</button>
              </div>
            </section>

            {/* Botón Guardar Cambios */}
            <div className="text-center">
              <button type="submit" className="bg-black text-pearl px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-grey-100 hover:text-black transition-all transform hover:scale-105">Guardar Cambios</button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Cambiar Contraseña */}
      {showChangePwd && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-pearl text-black rounded-lg p-8 w-96 md:w-1/2 max-w-lg border border-gold/20 shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-black">Cambiar Contraseña</h3>
            <form onSubmit={handleChangePassword} className="space-y-4">
              <input type="password" placeholder="Nueva contraseña" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full px-3 py-2 border border-gold rounded bg-pearl text-black focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-grey-80 transition-all" required />
              <input type="password" placeholder="Confirmar contraseña" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full px-3 py-2 border border-gold rounded bg-pearl text-black focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-grey-80 transition-all" required />
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={() => setShowChangePwd(false)} className="px-4 py-2 text-grey-100 font-medium">Cancelar</button>
                <button type="submit" className="bg-black text-pearl px-4 py-2 rounded font-bold hover:bg-grey-100 hover:text-black transition-all transform hover:scale-105">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Actividad de Cuenta */}
      {showActivity && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-pearl text-black rounded-lg p-8 w-96 md:w-2/3 max-w-xl border border-gold/20 shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-black">Actividad de Cuenta</h3>
            <ul className="space-y-2 h-40 overflow-y-auto text-sm text-grey-100">
              <li>Inicio de sesión: 2023-08-01 10:23</li>
              <li>Actualizó perfil: 2023-07-20 14:45</li>
              <li>Cambio de contraseña: 2023-06-15 09:12</li>
              <li>...</li>
            </ul>
            <div className="flex justify-end mt-4">
              <button type="button" onClick={() => setShowActivity(false)} className="px-4 py-2 text-grey-100 font-medium">Cerrar</button>
            </div>
          </div>
        </div>
      )}
      <ChatBot/>
    </div>
  )
}

export default PerfilPage 