import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  nombre: string;
  apellido: string;
  email: string;
  celular: string;
  mensaje: string;
}

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    setIsSubmitting(true);
    setError(null);
    try {
      // Simulación de envío (reemplazar con llamada real a API)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Datos enviados:", data);
      setIsSubmitted(true);
      reset();
    } catch (err) {
      setError("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-black/80 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md mx-auto text-center border border-amber-500/20">
        <h3 className="text-2xl font-bold text-amber-400 mb-4">¡Gracias por registrarte!</h3>
        <p className="text-amber-300/80 mb-6">
          Hemos recibido tu solicitud de registro. Pronto nos pondremos en contacto contigo para brindarte información adicional y acceso a nuestro catálogo.
        </p>
 