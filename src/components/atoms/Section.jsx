import { Box, Container, Heading, Section } from '@radix-ui/themes'
import { colors, gradients } from '../../theme/palette'

const CustomSection = ({ id, sectionRef, title, alternate = false, children }) => (
  <Section
    id={id}
    ref={sectionRef}
    size="3"
    style={{
      minHeight: '70vh',
      background: alternate ? colors.lavender : colors.white,
      borderBottom: `1px solid ${colors.border}`,
    }}
  >
    <Container size="4" px="4">
      <Heading as="h2" size="8" style={{ color: colors.purple.dark }}>
        {title}
      </Heading>
      <Box mt="2" mb="6" style={{ width: 72, height: 4, borderRadius: 4, background: gradients.accent }} />
      {children}
    </Container>
  </Section>
)

export default CustomSection