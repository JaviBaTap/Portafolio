import { useState } from 'react';

export const useContactForm = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Enviando...");

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", "96387775-1e0a-4bab-a929-99e2af3f6aa6");

      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (data.success) {
        setResult("¡Mensaje enviado con éxito!");
        event.currentTarget.reset();
      } else {
        setResult(data.message || "Error al enviar el mensaje.");
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        setResult("La petición tardó demasiado. Inténtalo de nuevo.");
      } else {
        setResult("Error de conexión. Revisa tu internet.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting, result };
};