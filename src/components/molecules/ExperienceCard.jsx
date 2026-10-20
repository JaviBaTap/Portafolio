import { Badge, Card, Flex, Heading, Text } from '@radix-ui/themes'
import { colors } from '../../theme/palette'

const ExperienceCard = ({ experience }) => {
  const { company, role, startDate, endDate, description } = experience
  return (
    <Card size="3" style={{ borderLeft: `5px solid ${colors.red.main}` }}>
      <Flex justify="between" align="center" wrap="wrap" gap="2">
        <Heading as="h3" size="4">
          {role} · {company}
        </Heading>
        <Badge color="blue" size="2">
          {startDate} – {endDate}
        </Badge>
      </Flex>
      <Text as="p" size="3" mt="2">
        {description}
      </Text>
    </Card>
  )
}

export default ExperienceCard