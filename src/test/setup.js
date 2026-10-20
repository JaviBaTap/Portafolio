import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => cleanup())

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false, media: query, onchange: null,
    addListener: vi.fn(), removeListener: vi.fn(),
    addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn(),
  }),
})
class ResizeObserverMock { observe() {} unobserve() {} disconnect() {} }
window.ResizeObserver = window.ResizeObserver || ResizeObserverMock
window.HTMLElement.prototype.scrollIntoView = vi.fn()