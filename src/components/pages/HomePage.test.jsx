import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../test/renderWithTheme'
import HomePage from './HomePage'
import { profile } from '../../data/profile'

describe('HomePage (integración)', () => {
  it('renderiza todas las secciones exigidas por la pauta', () => {
    renderWithTheme(<HomePage />)
    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
    ;['Experiencia Laboral', 'Estudios', 'Desarrollos y Proyectos', 'Contacto'].forEach((title) =>
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument(),
    )
    expect(screen.getByRole('contentinfo')).toBeInTheDocument() // footer
  })

  it('cada botón del menú lleva a su sección', async () => {
    renderWithTheme(<HomePage />)
    await userEvent.click(screen.getByRole('button', { name: 'Contacto' }))
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
  })
})
