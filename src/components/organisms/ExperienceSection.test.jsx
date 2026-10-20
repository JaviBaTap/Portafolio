import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../test/renderWithTheme'
import ExperienceSection from './ExperienceSection'

const emptyState = { title: 'Buscando mi primera oportunidad', description: 'Desc', buttonText: '¿Conversamos?' }
const experiences = [
  { id: '1', company: 'Acme', role: 'Dev Frontend', startDate: 'Mar 2025', endDate: 'Actualidad', description: 'Hice cosas' },
]

describe('ExperienceSection', () => {
  it('muestra el empty state cuando no hay experiencias', () => {
    renderWithTheme(<ExperienceSection experiences={[]} emptyState={emptyState} onNavigate={() => {}} />)
    expect(screen.getByTestId('empty-state')).toBeInTheDocument()
    expect(screen.getByText('Buscando mi primera oportunidad')).toBeInTheDocument()
  })

  it('el botón del empty state navega a contacto', async () => {
    const onNavigate = vi.fn()
    renderWithTheme(<ExperienceSection experiences={[]} emptyState={emptyState} onNavigate={onNavigate} />)
    await userEvent.click(screen.getByRole('button', { name: '¿Conversamos?' }))
    expect(onNavigate).toHaveBeenCalledWith('contacto')
  })

  it('muestra empresa, cargo y fechas de inicio y término', () => {
    renderWithTheme(<ExperienceSection experiences={experiences} emptyState={emptyState} onNavigate={() => {}} />)
    expect(screen.getByText(/Dev Frontend · Acme/)).toBeInTheDocument()
    expect(screen.getByText(/Mar 2025 – Actualidad/)).toBeInTheDocument()
    expect(screen.queryByTestId('empty-state')).not.toBeInTheDocument()
  })
})