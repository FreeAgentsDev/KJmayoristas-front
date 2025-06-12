// src/components/ui/textarea.tsx
import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // Puedes agregar props extra si quieres
}

export const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <textarea
      className={`bg-white/70 rounded-md border border-gold/20 p-3 text-grey-80 placeholder-grey-60 resize-none focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent ${className}`}
      {...props}
    />
  );
};
