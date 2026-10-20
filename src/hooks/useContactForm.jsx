import { useState } from 'react';

export const useContactForm = (formRef) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Enviando...");

    try {
      const formData = new FormData(event.currentTarget);
      
      formData.append("access_key", "96387775-1e0a-4bab-a929-99e2af3f6aa6");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("¡Mensaje enviado con éxito!");
        if (formRef && formRef.current) {
          formRef.current.reset();
        }
      } else {
        setResult(data.message || "Ocurrió un error al procesar el mensaje.");
      }
    } catch (error) {
      console.error("Web3Forms Submit Error:", error);
      setResult("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetFormState = () => {
    setResult("");
    setIsSubmitting(false);
  };

  return { handleSubmit, isSubmitting, result, handleResetFormState };
};