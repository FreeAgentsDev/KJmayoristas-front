"use client"
import React, { useState, FormEvent } from 'react'

const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email) {
      localStorage.setItem('nosotrosSubscribedEmail', email)
      setSubmitted(true)
    }
  }

  return (
    <div className="mt-12 text-center">
      <h2 className="text-xl font-medium text-amber-400 mb-4">Suscribe tu email para novedades</h2>
      {submitted ? (
        <p className="text-amber-300">¡Gracias por suscribirte!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            required
            className="border border-amber-300 text-amber-300 placeholder-amber-500 px-4 py-2 rounded-l-md bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="bg-amber-400 text-black px-4 py-2 rounded-r-md hover:bg-amber-500 transition-colors"
          >
            →
          </button>
        </form>
      )}
    </div>
  )
}

export default SubscriptionForm 