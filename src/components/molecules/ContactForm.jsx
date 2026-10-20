import { Button, Flex, TextArea, TextField } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form'
import { EnvelopeClosedIcon, PersonIcon } from '@radix-ui/react-icons'
import FormField from './FormField'

const ContactForm = ({ onSubmit, isSubmitting }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(Object.fromEntries(new FormData(event.currentTarget)))
  }

  return (
    <Form.Root onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 600 }}>
      <Flex direction="column" gap="4">
        <FormField name="nombre" label="Nombre Completo" errors={[{ match: 'valueMissing', message: 'Por favor, ingresa tu nombre' }]}>
          <TextField.Root size="3" required placeholder="Ej: christofer Robin">
            <TextField.Slot>
              <PersonIcon />
            </TextField.Slot>
          </TextField.Root>
        </FormField>

        <FormField
          name="email"
          label="Correo Electrónico"
          errors={[
            { match: 'valueMissing', message: 'Por favor, ingresa tu correo' },
            { match: 'typeMismatch', message: 'Por favor, ingresa un correo válido' },
          ]}
        >
          <TextField.Root size="3" type="email" required placeholder="ejemplo@correo.com">
            <TextField.Slot>
              <EnvelopeClosedIcon />
            </TextField.Slot>
          </TextField.Root>
        </FormField>

        <FormField name="mensaje" label="Mensaje" errors={[{ match: 'valueMissing', message: 'Por favor, escribe un mensaje' }]}>
          <TextArea size="3" rows={5} required placeholder="Cuéntame sobre tu proyecto u oferta laboral..." />
        </FormField>

        <Form.Submit asChild>
          <Button size="3" loading={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </Button>
        </Form.Submit>
      </Flex>
    </Form.Root>
  )
}

export default ContactForm