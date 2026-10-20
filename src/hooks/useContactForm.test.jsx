import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useContactForm } from './useContactForm'

describe('useContactForm', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => ({ success: true }),
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('inicia con los estados correctos', () => {
    const { result } = renderHook(() => useContactForm())
    expect(result.current.isSubmitting).toBe(false)
    expect(result.current.result).toBe('')
  })

  it('maneja el envío del formulario de forma exitosa', async () => {
    const { result } = renderHook(() => useContactForm())

    const fakeEvent = {
      preventDefault: vi.fn(),
      currentTarget: document.createElement('form')
    }

    let promise
    act(() => {
      promise = result.current.handleSubmit(fakeEvent)
    })

    expect(result.current.isSubmitting).toBe(true)
    expect(result.current.result).toBe('Enviando...')

    await act(async () => {
      await promise
    })

    expect(result.current.isSubmitting).toBe(false)
    expect(result.current.result).toBe('¡Mensaje enviado con éxito!')
    expect(global.fetch).toHaveBeenCalledTimes(1)
  })
})