import { Text } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form'

const FieldError = ({ match, children }) => (
  <Form.Message match={match} asChild>
    <Text as="div" size="2" color="red" mt="1">
      {children}
    </Text>
  </Form.Message>
)

export default FieldError