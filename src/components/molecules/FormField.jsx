import { Text } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form'
import FieldError from '../atoms/FieldError'


const FormField = ({ name, label, errors, children }) => (
  <Form.Field name={name}>
    <Form.Label>
      <Text weight="medium" size="2">
        {label}
      </Text>
    </Form.Label>
    <Form.Control asChild>{children}</Form.Control>
    {errors.map(({ match, message }) => (
      <FieldError key={match} match={match}>
        {message}
      </FieldError>
    ))}
  </Form.Field>
)

export default FormField