import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../test/renderWithTheme'
import EducationSection from './EducationSection'

const education = [
  { id: '1', institution: 'Duoc UC', title: 'Ingeniería en Informática', year: '2027' },
  { id: '2', institution: 'Liceo X', title: 'Educación Media', year: '2024' },
]

describe('EducationSection', () => {
  it('muestra institución, título y año de cada estudio', () => {
    renderWithTheme(<EducationSection education={education} />)
    expect(screen.getByText('Ingeniería en Informática')).toBeInTheDocument()
    expect(screen.getByText('Duoc UC')).toBeInTheDocument()
    expect(screen.getByText('2027')).toBeInTheDocument()
    expect(screen.getByText('Educación Media')).toBeInTheDocument()
  })
})