import { Badge, Card, Flex, Heading, Text } from '@radix-ui/themes'
import { colors } from '../../theme/palette'

const EducationCard = ({ item }) => (
  <Card size="3" style={{ borderLeft: `5px solid ${colors.purple.main}` }}>
    <Flex justify="between" align="center" wrap="wrap" gap="2">
      <Heading as="h3" size="4">
        {item.title}
      </Heading>
      <Badge color="purple" size="2">
        {item.year}
      </Badge>
    </Flex>
    <Text as="p" size="3" color="gray" mt="2">
      {item.institution}
    </Text>
  </Card>
)

export default EducationCard