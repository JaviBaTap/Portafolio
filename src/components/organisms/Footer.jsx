import { Container, Flex, Text } from '@radix-ui/themes'
import { EnvelopeClosedIcon, MobileIcon } from '@radix-ui/react-icons'
import ContactLink from '../atoms/ContactLink'
import { colors, gradients } from '../../theme/palette'

const toTelHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`

const Footer = ({ name, email, phone }) => (
  <footer
    style={{
      background: colors.purple.darkest,
      padding: 24,
      borderTop: '4px solid transparent',
      borderImage: `${gradients.accent} 1`,
    }}
  >
    <Container size="4">
      <Flex justify="between" align="center" wrap="wrap" gap="4">
        <Text size="2" style={{ color: 'rgba(255,255,255,.85)' }}>
          ©{new Date().getFullYear()} {name}. Todos los derechos reservados.
        </Text>
        <Flex gap="5" wrap="wrap">
          <ContactLink href={toTelHref(phone)} icon={<MobileIcon />}>
            {phone}
          </ContactLink>
          <ContactLink href={`mailto:${email}`} icon={<EnvelopeClosedIcon />}>
            {email}
          </ContactLink>
        </Flex>
      </Flex>
    </Container>
  </footer>
)

export default Footer