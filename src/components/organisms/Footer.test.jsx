import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../test/renderWithTheme'
import Footer from './Footer'

describe('Footer', () => {
  it('muestra el teléfono y el correo como enlaces tel: y mailto:', () => {
    renderWithTheme(<Footer name="Javiera Bañares" email="javiera@gmail.com" phone="+56 9 1234 5678" />)
    expect(screen.getByRole('link', { name: /\+56 9 1234 5678/ })).toHaveAttribute('href', 'tel:+56912345678')
    expect(screen.getByRole('link', { name: /javiera@gmail.com/ })).toHaveAttribute('href', 'mailto:javiera@gmail.com')
  })

  it('calcula el año actual por código y muestra los derechos de autor', () => {
    renderWithTheme(<Footer name="Javiera Bañares" email="a@a.cl" phone="+56 9 0000 0000" />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year} Javiera Bañares. Todos los derechos reservados`))).toBeInTheDocument()
  })
})