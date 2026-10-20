import { Container } from '@radix-ui/themes'
import NavLinks from '../molecules/NavLinks'
import { NAVBAR_HEIGHT } from '../../theme/layout'
import { colors, gradients } from '../../theme/palette'

const Navbar = ({ items, activeSection, onNavigate }) => (
  <nav
    aria-label="Navegación principal"
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      height: NAVBAR_HEIGHT,
      display: 'flex',
      alignItems: 'center',
      background: colors.purple.darkest,
      borderBottom: '3px solid transparent',
      borderImage: `${gradients.accent} 1`,
      boxShadow: '0 4px 16px rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    }}
  >
    <Container size="4" px="4" style={{ width: '100%' }}>
      <NavLinks items={items} activeSection={activeSection} onNavigate={onNavigate} />
    </Container>
  </nav>
)

export default Navbar