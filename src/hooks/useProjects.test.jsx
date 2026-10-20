import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useProjects } from './useProjects'

const sampleProjects = [
  { id: 1, title: 'Eatify', tags: ['React', 'Mobile'] },
  { id: 2, title: 'Portafolio', tags: ['React', 'Web'] },
  { id: 3, title: 'Sistema de biblioteca', tags: ['Java'] },
]

describe('useProjects', () => {
  it('muestra todos los proyectos al iniciar', () => {
    const { result } = renderHook(() => useProjects(sampleProjects))
    expect(result.current.selectedTag).toBe('Todos')
    expect(result.current.visibleProjects).toHaveLength(3)
  })

  it('genera las etiquetas sin duplicados', () => {
    const { result } = renderHook(() => useProjects(sampleProjects))
    expect(result.current.tags).toEqual(['Todos', 'React', 'Mobile', 'Web', 'Java'])
  })

  it('filtra los proyectos por la etiqueta seleccionada', () => {
    const { result } = renderHook(() => useProjects(sampleProjects))
    act(() => result.current.setSelectedTag('React'))
    expect(result.current.visibleProjects.map((project) => project.title)).toEqual(['Eatify', 'Portafolio'])
  })

  it('muestra una lista vacía si no hay proyectos', () => {
    const { result } = renderHook(() => useProjects([]))
    expect(result.current.visibleProjects).toEqual([])
    expect(result.current.tags).toEqual(['Todos'])
  })
})
