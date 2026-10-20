import { Container } from '@radix-ui/themes'
import PageSection from '../atoms/PageSection'
import SectionTitle from '../atoms/SectionTitle'

const SectionBlock = ({ id, sectionRef, title, alternate = false, children }) => (
  <PageSection id={id} sectionRef={sectionRef} alternate={alternate}>
    <Container size="4" px="4" style={{ width: '100%' }}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Container>
  </PageSection>
)

export default SectionBlock