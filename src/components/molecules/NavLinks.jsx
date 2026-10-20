import { Flex } from '@radix-ui/themes'
import NavButton from '../atoms/NavButton'

const NavLinks = ({ items, activeSection, onNavigate }) => (
  <Flex gap="3" wrap="nowrap" align="center" style={{ overflowX: 'auto', justifyContent: 'safe center' }}>
    {items.map((item) => (
      <NavButton key={item.key} active={activeSection === item.key} onClick={() => onNavigate(item.key)}>
        {item.label}
      </NavButton>
    ))}
  </Flex>
)

export default NavLinks