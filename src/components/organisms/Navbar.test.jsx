import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../test/renderWithTheme'
import Navbar from './Navbar'

const items = [
  { key: 'inicio', label: 'Inicio' },
  { key: 'contacto', label: 'Contacto' },
]

describe('Navbar', () => {
  it('muestra todas las opciones del menú', () => {
    renderWithTheme(<Navbar items={items} activeSection="inicio" onNavigate={() => {}} />)
    expect(screen.getByRole('navigation', { name: /Navegación principal/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Inicio' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Contacto' })).toBeInTheDocument()
  })

  it('marca como activa la sección actual', () => {
    renderWithTheme(<Navbar items={items} activeSection="contacto" onNavigate={() => {}} />)
    expect(screen.getByRole('button', { name: 'Contacto' })).toHaveAttribute('aria-current', 'location')
    expect(screen.getByRole('button', { name: 'Inicio' })).not.toHaveAttribute('aria-current')
  })

  it('llama a onNavigate con la clave de la sección', async () => {
    const onNavigate = vi.fn()
    renderWithTheme(<Navbar items={items} activeSection="inicio" onNavigate={onNavigate} />)
    await userEvent.click(screen.getByRole('button', { name: 'Contacto' }))
    expect(onNavigate).toHaveBeenCalledWith('contacto')
  })

  it('es una barra fija (sticky) para que no desaparezca al hacer scroll', () => {
    renderWithTheme(<Navbar items={items} activeSection="inicio" onNavigate={() => {}} />)
    expect(screen.getByRole('navigation')).toHaveStyle({ position: 'sticky', top: '0px' })
  })
})