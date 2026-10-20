import { act, renderHook, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useContactForm } from './useContactForm'

describe('useContactForm', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('inicia con el módulo de mensajería cargando', () => {
    const { result } = renderHook(() => useContactForm({ readyDelay: 500 }))
    expect(result.current.isApiReady).toBe(false)
    expect(result.current.isSubmitting).toBe(false)
    expect(result.current.isSubmitted).toBe(false)
  })

  it('activa el módulo cuando termina el tiempo de carga', async () => {
    const { result } = renderHook(() => useContactForm({ readyDelay: 500 }))
    await act(async () => { vi.advanceTimersByTime(500) })
    expect(result.current.isApiReady).toBe(true)
  })

  it('muestra el estado de envío y luego confirma el envío', async () => {
    const { result } = renderHook(() => useContactForm({ readyDelay: 0, submitDelay: 300 }))
    await act(async () => { vi.advanceTimersByTime(0) })
    let promise
    act(() => {
      promise = result.current.onFinishContact({
        nombre: 'Ana Pérez',
        email: 'ana@example.com',
        mensaje: 'Quisiera conversar sobre un proyecto',
      })
    })
    expect(result.current.isSubmitting).toBe(true)
    await act(async () => { vi.advanceTimersByTime(300); await promise })
    expect(result.current.isSubmitting).toBe(false)
    expect(result.current.isSubmitted).toBe(true)
  })

  it('permite restablecer el estado después del envío', async () => {
    const { result } = renderHook(() => useContactForm({ readyDelay: 0, submitDelay: 10 }))
    let promise
    act(() => { promise = result.current.onFinishContact({ nombre: 'Ana' }) })
    await act(async () => { vi.advanceTimersByTime(10); await promise })
    act(() => result.current.handleResetFormState())
    expect(result.current.isSubmitted).toBe(false)
  })
})
