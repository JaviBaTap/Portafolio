import { useState, useEffect } from 'react'

export const useContactForm = ({ readyDelay = 1000, submitDelay = 1500 } = {}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isApiReady, setIsApiReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsApiReady(true), readyDelay)
    return () => clearTimeout(timer)            // limpieza al desmontar
  }, [readyDelay])

  const onFinishContact = (values) => {
    setIsSubmitting(true)
    console.log('Formulario enviado:', values)   // aquí va tu envío real (EmailJS, Formspree...)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, submitDelay)
  }

  const handleResetFormState = () => setIsSubmitted(false)

  return { isSubmitting, isSubmitted, isApiReady, onFinishContact, handleResetFormState }
}