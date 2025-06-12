"use client"
import React, { useState } from 'react'

const PurchaseContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { contactName, email, phone } = formData
    if (!contactName || !email || !phone) {
      setError('Por favor, completa los campos obligatorios: Nombre, Email y Teléfono.')
      setLoading(false)
      return
    }
    setTimeout(() => {
      console.log('Consulta de producto:', formData)
      setSubmitted(true)
      setLoading(false)
    }, 1500)
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto bg-black/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl text-center border border-amber-500/20">
        <h3 className="text-2xl font-semibold text-amber-400 mb-4">¡Gracias por tu consulta!</h3>
        <p className="text-amber-300/80 mb-6">Pronto te enviaremos información sobre el producto solicitado.</p>
        <button onClick={() => setSubmitted(false)} className="text-amber-400 hover:text-amber-300">
          Realizar otra consulta
        </button>
      </div>
    )
  }

  return (
    <form id="formulario" className="max-w-xl mx-auto bg-black/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl space-y-6 border border-amber-500/20 relative" onSubmit={handleSubmit}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      {error && <p className="text-red-400 p-3 bg-red-900/20 rounded-md border border-red-800/50">{error}</p>}
      <div className="space-y-4">
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-amber-300 mb-1">Nombre *</label>
          <input id="contactName" name="contactName" type="text" value={formData.contactName} onChange={handleChange} required className="w-full px-3 py-2 border border-amber-500/30 rounded-md bg-black/50 text-amber-50 placeholder-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-400" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-amber-300 mb-1">Email *</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-amber-500/30 rounded-md bg-black/50 text-amber-50 placeholder-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-400" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-amber-300 mb-1">Teléfono *</label>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border border-amber-500/30 rounded-md bg-black/50 text-amber-50 placeholder-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-400" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-amber-300 mb-1">Mensaje (opcional)</label>
          <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border border-amber-500/30 rounded-md bg-black/50 text-amber-50 placeholder-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-400"></textarea>
        </div>
      </div>
      <p className="text-sm text-amber-300/60">* Campos obligatorios</p>
      <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-amber-600 to-yellow-500 text-black px-6 py-3 rounded-md font-medium hover:from-amber-500 hover:to-yellow-400 transition duration-200 disabled:opacity-50">{loading ? 'Enviando...' : 'Enviar Consulta'}</button>
    </form>
  )
}

export default PurchaseContactForm 