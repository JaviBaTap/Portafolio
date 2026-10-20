import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../test/renderWithTheme'
import Hero from './Hero'
import { buildHeroBackground } from '../../theme/heroBackground'
import { gradients } from '../../theme/palette'

const base = { name: 'Javiera Bañares', greeting: 'Bienvenida a mi portafolio', photo: '/foto.jpg' }

describe('Hero', () => {
  it('muestra nombre y descripción', () => {
    renderWithTheme(<Hero {...base} background={{ type: 'gradient' }} />)
    expect(screen.getByRole('heading', { level: 1, name: 'Javiera Bañares' })).toBeInTheDocument()
    expect(screen.getByText('Bienvenida a mi portafolio')).toBeInTheDocument()
  })

  it('usa fondo degradado o de imagen según la configuración', () => {
    const { unmount } = renderWithTheme(<Hero {...base} background={{ type: 'gradient' }} />)
    expect(screen.getByTestId('hero-section')).toHaveAttribute('data-bg-type', 'gradient')
    unmount()
    renderWithTheme(<Hero {...base} background={{ type: 'image', image: '/fondo.avif' }} />)
    expect(screen.getByTestId('hero-section')).toHaveAttribute('data-bg-type', 'image')
  })

  it('buildHeroBackground devuelve degradado o imagen con capa oscura', () => {
    expect(buildHeroBackground({ type: 'gradient' })).toBe(gradients.hero)
    expect(buildHeroBackground({ type: 'image' })).toBe(gradients.hero) // sin ruta: degradado
    const css = buildHeroBackground({ type: 'image', image: '/fondo.avif', overlay: 0.3 })
    expect(css).toContain('url(/fondo.avif)')
    expect(css).toContain('rgba(0, 0, 0, 0.3)')
  })
})
