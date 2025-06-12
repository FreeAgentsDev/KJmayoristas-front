// src/components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Puedes agregar props extra si quieres
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-gold hover:bg-gold-light text-grey-80 font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-gold/30 transition-all duration-200 transform hover:scale-105 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
