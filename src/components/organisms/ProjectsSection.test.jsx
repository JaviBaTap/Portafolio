import { describe, it, expect } from 'vitest'
import { screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../test/renderWithTheme'
import ProjectsSection from './ProjectsSection'

const projects = [
  { id: 'a', title: 'Proyecto A', description: 'Desc A', image: '/projects/a.png', repoUrl: 'https://github.com/u/a', tags: ['React'] },
  { id: 'b', title: 'Proyecto B', description: 'Desc B', image: null, repoUrl: 'https://github.com/u/b', tags: ['JavaScript'] },
]

describe('ProjectsSection', () => {
  it('muestra una tarjeta por proyecto con su título', () => {
    renderWithTheme(<ProjectsSection projects={projects} />)
    expect(screen.getAllByTestId('project-card')).toHaveLength(2)
    expect(screen.getByText('Proyecto A')).toBeInTheDocument()
    expect(screen.getByText('Proyecto B')).toBeInTheDocument()
  })

  it('cada proyecto enlaza directo a su repositorio en pestaña nueva', () => {
    renderWithTheme(<ProjectsSection projects={projects} />)
    const links = screen.getAllByRole('link', { name: /Ver repositorio/i })
    expect(links[0]).toHaveAttribute('href', 'https://github.com/u/a')
    expect(links[1]).toHaveAttribute('href', 'https://github.com/u/b')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
    })
  })

  it('muestra la previsualización y usa una portada de respaldo si falla', () => {
    renderWithTheme(<ProjectsSection projects={projects} />)
    const image = screen.getByAltText('Previsualización de Proyecto A')
    expect(image).toHaveAttribute('src', '/projects/a.png')
    fireEvent.error(image)
    expect(screen.queryByAltText('Previsualización de Proyecto A')).not.toBeInTheDocument()
  })

  it('filtra los proyectos por etiqueta', async () => {
    renderWithTheme(<ProjectsSection projects={projects} />)
    await userEvent.click(screen.getByRole('button', { name: 'JavaScript' }))
    expect(screen.getAllByTestId('project-card')).toHaveLength(1)
    expect(screen.getByText('Proyecto B')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: 'Todos' }))
    expect(screen.getAllByTestId('project-card')).toHaveLength(2)
  })

  it('muestra un mensaje si no hay proyectos', () => {
    renderWithTheme(<ProjectsSection projects={[]} />)
    expect(screen.getByText(/Próximamente nuevos proyectos/i)).toBeInTheDocument()
  })
})