import { useState, useEffect } from 'react'

// Simula el envío al servidor. Aquí conectarías EmailJS, Formspree, etc.
const sendMessage = (values, delay) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(values), delay)
  })

export const useContactForm = ({ readyDelay = 1000, submitDelay = 1500 } = {}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isApiReady, setIsApiReady] = useState(false)

  // Ciclo de vida: al montar activa el módulo; al desmontar limpia el temporizador
  useEffect(() => {
    const timer = setTimeout(() => setIsApiReady(true), readyDelay)
    return () => clearTimeout(timer)
  }, [readyDelay])

  const onFinishContact = async (values) => {
    setIsSubmitting(true)
    await sendMessage(values, submitDelay)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleResetFormState = () => setIsSubmitted(false)

  return { isSubmitting, isSubmitted, isApiReady, onFinishContact, handleResetFormState }
}