import { describe, it, expect } from 'vitest'
import { getInitials } from './getInitials'

describe('getInitials', () => {
  it('devuelve las iniciales de nombre y apellido', () => {
    expect(getInitials('Javiera Bañares')).toBe('JB')
  })
  it('usa solo las dos primeras palabras y mayúsculas', () => {
    expect(getInitials('ana maría pérez')).toBe('AM')
  })
  it('devuelve un valor por defecto si no hay nombre válido', () => {
    expect(getInitials('')).toBe('U')
    expect(getInitials(undefined)).toBe('U')
  })
})