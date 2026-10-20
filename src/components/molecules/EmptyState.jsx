import { Button, Flex, Heading, Text } from '@radix-ui/themes'
import { BackpackIcon } from '@radix-ui/react-icons'
import { colors } from '../../theme/palette'

const EmptyState = ({ title, description, buttonText, onAction }) => (
  <Flex direction="column" align="center" gap="3" py="8" data-testid="empty-state">
    <BackpackIcon width={56} height={56} color={colors.purple.main} />
    <Heading as="h3" size="5" align="center" style={{ color: colors.purple.dark }}>
      {title}
    </Heading>
    <Text size="3" color="gray" align="center" style={{ maxWidth: 560 }}>
      {description}
    </Text>
    <Button size="3" mt="2" onClick={onAction}>
      {buttonText}
    </Button>
  </Flex>
)

export default EmptyState