import { Section } from '@radix-ui/themes'
import { colors } from '../../theme/palette'
import { NAVBAR_HEIGHT } from '../../theme/layout'

const PageSection = ({ id, sectionRef, alternate = false, children }) => (
  <Section
    id={id}
    ref={sectionRef}
    size="3"
    style={{
      minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      scrollMarginTop: NAVBAR_HEIGHT,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: alternate ? colors.lavender : colors.white,
      borderBottom: `1px solid ${colors.border}`,
    }}
  >
    {children}
  </Section>
)

export default PageSection