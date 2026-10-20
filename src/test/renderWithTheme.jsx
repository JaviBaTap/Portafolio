import { render } from '@testing-library/react'
import { Theme } from '@radix-ui/themes'

export const renderWithTheme = (ui) => render(<Theme>{ui}</Theme>)