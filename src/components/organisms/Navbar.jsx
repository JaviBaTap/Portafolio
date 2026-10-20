import { Button, Container, Flex } from '@radix-ui/themes'
import { menuItems } from '../../data/menu'
import { NAVBAR_HEIGHT } from '../../theme/layout'
import { colors, gradients } from '../../theme/palette'

const Navbar = ({ activeSection, onNavigate }) => (
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
      <Flex gap="4" mt="1" wrap="nowrap" align="center" style={{ overflowX: 'auto', justifyContent: 'safe center' }}>
        {menuItems.map((item) => {
          const isActive = activeSection === item.key
          return (
            <Button
              key={item.key}
              variant={isActive ? 'solid' : 'ghost'}
              color={isActive ? 'red' : 'gray'}
              aria-current={isActive ? 'location' : undefined}
              style={isActive ? undefined : { color: '#fff' }}
              onClick={() => onNavigate(item.key)}
              mx="1.5"
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