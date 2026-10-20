import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi, afterEach } from 'vitest'
import { Theme } from '@radix-ui/themes'
import ContactForm from './ContactForm'

const renderForm = () => render(<Theme><ContactForm /></Theme>)
const mockServer = (response) => vi.spyOn(global, 'fetch').mockResolvedValue({ json: async () => response })

const fillValidForm = async (user) => {
  await user.type(screen.getByLabelText(/Nombre Completo/i), 'Ana Pérez')
  await user.type(screen.getByLabelText(/Correo Electrónico/i), 'ana@example.com')
  await user.type(screen.getByLabelText(/Mensaje/i), 'Hola, quisiera contactarte')
}
const submit = (user) => user.click(screen.getByRole('button', { name: /Enviar Mensaje/i }))

afterEach(() => vi.restoreAllMocks())

describe('ContactForm', () => {
  it('muestra los campos y el botón de envío', () => {
    renderForm()
    expect(screen.getByLabelText(/Nombre Completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Correo Electrónico/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Enviar Mensaje/i })).toBeInTheDocument()
  })

  it('muestra errores y NO envía si el formulario está vacío', async () => {
    mockServer({ success: true })
    const user = userEvent.setup()
    renderForm()
    await submit(user)
    expect(await screen.findByText('Por favor, ingresa tu nombre')).toBeInTheDocument()
    expect(screen.getByText('Por favor, ingresa tu correo')).toBeInTheDocument()
    expect(screen.getByText('Por favor, escribe un mensaje')).toBeInTheDocument()
    expect(global.fetch).not.toHaveBeenCalled()
  })

  it('rechaza un correo con formato inválido', async () => {
    mockServer({ success: true })
    const user = userEvent.setup()
    renderForm()
    await user.type(screen.getByLabelText(/Nombre Completo/i), 'Ana')
    await user.type(screen.getByLabelText(/Correo Electrónico/i), 'correo-malo')
    await user.type(screen.getByLabelText(/Mensaje/i), 'Hola')
    await submit(user)
    expect(await screen.findByText('Por favor, ingresa un correo válido')).toBeInTheDocument()
    expect(global.fetch).not.toHaveBeenCalled()
  })

  it('envía nombre, correo y mensaje a Web3Forms', async () => {
    mockServer({ success: true })
    const user = userEvent.setup()
    renderForm()
    await fillValidForm(user)
    await submit(user)
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))
    const [url, options] = global.fetch.mock.calls[0]
    expect(url).toBe('https://api.web3forms.com/submit')
    expect(options.method).toBe('POST')
    expect(options.body.get('name')).toBe('Ana Pérez')
    expect(options.body.get('email')).toBe('ana@example.com')
    expect(options.body.get('message')).toBe('Hola, quisiera contactarte')
  })

  it('muestra el mensaje de éxito y vacía el formulario', async () => {
    mockServer({ success: true })
    const user = userEvent.setup()
    renderForm()
    await fillValidForm(user)
    await submit(user)
    expect(await screen.findByText('¡Mensaje enviado con éxito!')).toBeInTheDocument()
    expect(screen.getByLabelText(/Nombre Completo/i)).toHaveValue('')
  })

  it('muestra el error del servidor cuando el envío falla', async () => {
    mockServer({ success: false, message: 'Clave inválida' })
    const user = userEvent.setup()
    renderForm()
    await fillValidForm(user)
    await submit(user)
    expect(await screen.findByText('Clave inválida')).toBeInTheDocument()
    expect(screen.queryByText('¡Mensaje enviado con éxito!')).not.toBeInTheDocument()
  })

  it('muestra un error de conexión si la red falla', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    vi.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(new Error('network')))
    const user = userEvent.setup()
    renderForm()
    await fillValidForm(user)
    await submit(user)
    expect(await screen.findByText(/Error de conexión/i)).toBeInTheDocument()
  })
})