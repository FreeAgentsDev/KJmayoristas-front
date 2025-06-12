// input.tsx
import React from "react"

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input {...props} />
}

// button.tsx
import React from "react"

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props} />
}

// textarea.tsx
import React from "react"

export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return <textarea {...props} />
}
