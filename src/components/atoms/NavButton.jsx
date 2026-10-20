import { Button } from '@radix-ui/themes'

const NavButton = ({ active = false, onClick, children }) => (
  <Button
    variant={active ? 'solid' : 'ghost'}
    color={active ? 'red' : 'gray'}
    aria-current={active ? 'location' : undefined}
    onClick={onClick}
    style={active ? undefined : { color: '#fff' }}
    mx="2"
  >
    {children}
  </Button>
)

export default NavButton