import { Badge, Button, Card, Flex, Heading, Text } from '@radix-ui/themes'
import { BackpackIcon } from '@radix-ui/react-icons'
import Seccion from '../atoms/Section'
import { colors } from '../../theme/palette'

const ExperienceSection = ({ sectionRef, experiences, emptyState, onNavigate }) => (
  <Seccion id="experiencia-laboral" sectionRef={sectionRef} title="Experiencia Laboral">
    {experiences.length === 0 ? (
      <Flex direction="column" align="center" gap="3" py="8" data-testid="empty-state">
        <BackpackIcon width={48} height={48} color={colors.purple.light} />
        <Heading as="h3" size="4" style={{ color: colors.purple.dark }}>{emptyState.title}</Heading>
        <Text size="2" color="gray" align="center" style={{ maxWidth: 500 }}>{emptyState.description}</Text>
        <Button size="3" onClick={() => onNavigate('contacto')}>{emptyState.buttonText}</Button>
      </Flex>
    ) : (
      <Flex direction="column" gap="4">
        {experiences.map((exp) => (
          <Card key={exp.id} style={{ borderLeft: `5px solid ${colors.red.main}` }}>
            <Flex justify="between" align="center" wrap="wrap" gap="2">
              <Heading as="h3" size="3">{exp.role} · {exp.company}</Heading>
              <Badge color="blue">{exp.period}</Badge>
            </Flex>
            <Text as="p" size="2" mt="2">{exp.description}</Text>
          </Card>
        ))}
      </Flex>
    )}
  </Seccion>
)

export default ExperienceSection