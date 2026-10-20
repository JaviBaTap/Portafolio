import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Theme } from '@radix-ui/themes'
import Hero from './Hero'
import ExperienceSection from './ExperienceSection'
import EducationSection from './EducationSection'
import ProjectsSection from './ProjectsSection'
import Footer from './Footer'

const wrap = (ui) => render(<Theme>{ui}</Theme>)

describe('organismos principales del portafolio', () => {
  it('renderiza la sección personal con nombre y presentación', () => {
    wrap(<Hero name="Ana Pérez" greeting="Desarrolladora Front-End" photo="" background={{ type: 'gradient' }} />)
    expect(screen.getByRole('heading', { name: 'Ana Pérez' })).toBeInTheDocument()
    expect(screen.getByText('Desarrolladora Front-End')).toBeInTheDocument()
  })

  it('renderiza la experiencia laboral disponible', () => {
    wrap(<ExperienceSection experiences={[{
      id: 'exp-1', company: 'Empresa Demo', role: 'Desarrolladora', startDate: '2024', endDate: '2025',
      description: 'Desarrollo de interfaces',
    }]} emptyState={{ title: 'Sin experiencia', description: 'Aún no hay experiencia registrada' }} onNavigate={() => {}} />)
    expect(screen.getByText('Experiencia Laboral')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Desarrolladora · Empresa Demo/ })).toBeInTheDocument()
  })

  it('renderiza los estudios', () => {
    wrap(<EducationSection education={[{
      id: 'edu-1', institution: 'DUOC UC', title: 'Analista Programador', year: '2026',
    }]} />)
    expect(screen.getByText('Estudios')).toBeInTheDocument()
    expect(screen.getByText('DUOC UC')).toBeInTheDocument()
  })

  it('renderiza los proyectos y el enlace al repositorio', () => {
    wrap(<ProjectsSection projects={[{
      id: 'proj-1', title: 'Proyecto Demo', description: 'Proyecto de prueba',
      tags: ['React'], image: '', repoUrl: 'https://github.com/demo/proyecto',
    }]} />)
    expect(screen.getByText('Desarrollos y Proyectos')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Proyecto Demo' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Ver repositorio/i })).toHaveAttribute('href', 'https://github.com/demo/proyecto')
  })

  it('muestra el año actual y la información de contacto en el footer', () => {
    wrap(<Footer name="Ana Pérez" email="ana@example.com" phone="+56 9 1234 5678" />)
    expect(screen.getByText(new RegExp(`©${new Date().getFullYear()} Ana Pérez`))).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /ana@example.com/i })).toHaveAttribute('href', 'mailto:ana@example.com')
  })
})
