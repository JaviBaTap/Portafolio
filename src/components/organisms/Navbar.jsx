import { Button, Container, Flex } from '@radix-ui/themes'
import { gradients } from '../../theme/palette'
import { menuItems } from '../../data/menu'

const Navbar = ({ activeSection, onNavigate }) => (
  <nav
    aria-label="Navegación principal"
    style={{
      position: 'sticky', top: 0, zIndex: 100, background: '#fff',
      borderBottom: '3px solid transparent', borderImage: `${gradients.accent} 1`,
    }}
  >
    <Container size="4" px="4">
      <Flex gap="2" py="2" wrap="wrap">
        {menuItems.map((item) => {
          const active = activeSection === item.key
          return (
            <Button
              key={item.key}
              variant={active ? 'soft' : 'ghost'}
              color={active ? 'red' : 'gray'}
              onClick={() => onNavigate(item.key)}
            >
              {item.label}
            </Button>
          )
        })}
      </Flex>
    </Container>
  </nav>
)

export default Navbar