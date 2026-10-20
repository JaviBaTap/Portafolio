import { Box, Heading } from '@radix-ui/themes'
import { colors, gradients } from '../../theme/palette'

const SectionTitle = ({ children }) => (
  <>
    <Heading as="h2" size="8" style={{ color: colors.purple.dark }}>
      {children}
    </Heading>
    <Box mt="2" mb="6" style={{ width: 72, height: 4, borderRadius: 4, background: gradients.accent }} />
  </>
)

export default SectionTitle