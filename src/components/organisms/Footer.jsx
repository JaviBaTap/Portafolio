import { Container, Flex, Text } from '@radix-ui/themes'
import { EnvelopeClosedIcon, MobileIcon } from '@radix-ui/react-icons'
import { colors, gradients } from '../theme/palette'

const linkStyle = { color: '#fff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }

const Footer = ({ name, email, phone }) => {
  const telHref = `tel:${phone.replace(/[^\d+]/g, '')}`
  return (
    <footer
      style={{
        background: colors.purple.darkest, padding: 24,
        borderTop: '4px solid transparent', borderImage: `${gradients.accent} 1`,
      }}
    >
      <Container size="4">
        <Flex justify="between" align="center" wrap="wrap" gap="4">
          <Text size="2" style={{ color: 'rgba(255,255,255,.85)' }}>
            ©{new Date().getFullYear()} {name}. Todos los derechos reservados.
          </Text>
          <Flex gap="5" wrap="wrap">
            <a href={telHref} style={linkStyle}><MobileIcon /> {phone}</a>
            <a href={`mailto:${email}`} style={linkStyle}><EnvelopeClosedIcon /> {email}</a>
          </Flex>
        </Flex>
      </Container>
    </footer>
  )
}

export default Footer