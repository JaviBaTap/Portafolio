import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import { Theme } from '@radix-ui/themes'
import ContactForm from './ContactForm'

beforeEach(() => {
  vi.spyOn(global, 'fetch').mockResolvedValue({
    json: async () => ({ success: true }),
  })
})

describe('ContactForm', () => {
  it('muestra los campos requeridos del formulario', () => {
    render(<Theme><ContactForm /></Theme>)
    expect(screen.getByLabelText(/Nombre Completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Correo Electrónico/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Enviar Mensaje/i })).toBeInTheDocument()
  })

  it('envía los valores ingresados cuando el formulario es válido', async () => {
    const user = userEvent.setup()
    render(<Theme><ContactForm /></Theme>)

    await user.type(screen.getByPlaceholderText(/christofer Robin/i), 'Ana Pérez')
    await user.type(screen.getByPlaceholderText('ejemplo@correo.com'), 'ana@example.com')
    await user.type(screen.getByPlaceholderText(/Cuéntame sobre tu proyecto/i), 'Hola, quisiera contactarte')
    
    await user.click(screen.getByRole('button', { name: /Enviar Mensaje/i }))


    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.web3forms.com/submit",
      expect.any(Object)
    )
  })
})