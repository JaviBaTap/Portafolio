import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Theme } from '@radix-ui/themes'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('muestra los campos requeridos del formulario', () => {
    render(<Theme><ContactForm onSubmit={vi.fn()} isSubmitting={false} /></Theme>)
    expect(screen.getByLabelText(/Nombre Completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Correo Electrónico/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Enviar Mensaje/i })).toBeInTheDocument()
  })

  it('envía los valores ingresados cuando el formulario es válido', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<Theme><ContactForm onSubmit={onSubmit} isSubmitting={false} /></Theme>)
    await user.type(screen.getByPlaceholderText(/christofer Robin/i), 'Ana Pérez')
    await user.type(screen.getByPlaceholderText('ejemplo@correo.com'), 'ana@example.com')
    await user.type(screen.getByPlaceholderText(/Cuéntame sobre tu proyecto/i), 'Hola, quisiera contactarte')
    await user.click(screen.getByRole('button', { name: /Enviar Mensaje/i }))
    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    expect(onSubmit).toHaveBeenCalledWith({
      nombre: 'Ana Pérez',
      email: 'ana@example.com',
      mensaje: 'Hola, quisiera contactarte',
    })
  })

  it('cambia el texto del botón durante el envío', () => {
    render(<Theme><ContactForm onSubmit={vi.fn()} isSubmitting /> </Theme>)
    expect(screen.getByRole('button', { name: /Enviando/i })).toBeInTheDocument()
  })
})
