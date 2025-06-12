"use client"
import React, { useEffect } from 'react'

interface ModalProps {
  title?: string
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  // Desactivar scroll de fondo cuando el modal está abierto
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-grey-90/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-pearl rounded-lg w-full md:w-[65%] p-12 relative border border-gold/30 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-grey-80 hover:text-grey-90 text-2xl font-bold transition-colors"
          aria-label="Cerrar modal"
        >
          &times;
        </button>
        {title && <h2 className="text-2xl font-semibold text-grey-90 mb-4">{title}</h2>}
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal 