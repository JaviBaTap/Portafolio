import { Button, Callout, Card, Flex, Heading, Text, TextArea, TextField } from '@radix-ui/themes'
import * as Form from '@radix-ui/react-form'
import { CheckCircledIcon, EnvelopeClosedIcon, GitHubLogoIcon, InfoCircledIcon, LinkedInLogoIcon, PersonIcon } from '@radix-ui/react-icons'
import Seccion from '../atoms/Section'
import { useContactForm } from '../../hooks/useContactForm'


const FieldError = ({ match, children }) => (
  <Form.Message match={match} asChild>
    <Text as="div" size="2" color="red" mt="1">{children}</Text>
  </Form.Message>
)

const ContactSection = ({ sectionRef, github, linkedin, formOptions }) => {
  const { isSubmitting, isSubmitted, isApiReady, onFinishContact, handleResetFormState } = useContactForm(formOptions)

  const handleSubmit = (event) => {
    event.preventDefault()
    onFinishContact(Object.fromEntries(new FormData(event.currentTarget)))
  }

  return (
    <Seccion id="contacto" sectionRef={sectionRef} title="Contacto" alternate>
      <Flex  direction="column" align="center" gap="6">
        <Text as="p" size="4" mb="2">
          ¿Quieres contactarme? ¡Completa el formulario y te responderé lo antes posible!
        </Text>

        {!isApiReady ? (
          <Callout.Root color="blue" style={{ maxWidth: 600 }}>
            <Callout.Icon><InfoCircledIcon /></Callout.Icon>
            <Callout.Text>Cargando módulo de mensajería de forma segura...</Callout.Text>
          </Callout.Root>
        ) : isSubmitted ? (
          <Card size="3" style={{ maxWidth: 600 }}>
            <Flex direction="column" align="center" gap="3" py="4">
              <CheckCircledIcon width={48} height={48} color="var(--green-9)" />
              <Heading as="h3" size="5">¡Mensaje enviado con éxito!</Heading>
              <Text color="gray">Gracias por comunicarte, revisaré tu correo muy pronto.</Text>
              <Button variant="soft" onClick={handleResetFormState}>Enviar otro mensaje</Button>
            </Flex>
          </Card>
        ) : (
          <Form.Root onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 600 }}>
            <Flex direction="column" gap="4">
              <Form.Field name="nombre">
                <Form.Label><Text weight="medium" size="2">Nombre Completo</Text></Form.Label>
                <Form.Control asChild>
                  <TextField.Root size="3" required placeholder="Ej: Christofer Robin">
                    <TextField.Slot><PersonIcon /></TextField.Slot>
                  </TextField.Root>
                </Form.Control>
                <FieldError match="valueMissing">Por favor, ingresa tu nombre</FieldError>
              </Form.Field>

              <Form.Field name="email">
                <Form.Label><Text weight="medium" size="2">Correo Electrónico</Text></Form.Label>
                <Form.Control asChild>
                  <TextField.Root size="3" type="email" required placeholder="ejemplo@correo.com">
                    <TextField.Slot><EnvelopeClosedIcon /></TextField.Slot>
                  </TextField.Root>
                </Form.Control>
                <FieldError match="valueMissing">Por favor, ingresa tu correo</FieldError>
                <FieldError match="typeMismatch">Por favor, ingresa un correo válido</FieldError>
              </Form.Field>

              <Form.Field name="mensaje">
                <Form.Label><Text weight="medium" size="2">Mensaje</Text></Form.Label>
                <Form.Control asChild>
                  <TextArea size="3" rows={4} required placeholder="Cuéntame sobre tu proyecto u oferta laboral..." />
                </Form.Control>
                <FieldError match="valueMissing">Por favor, escribe un mensaje</FieldError>
              </Form.Field>

              <Form.Submit asChild>
                <Button size="3" loading={isSubmitting}>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</Button>
              </Form.Submit>
            </Flex>
          </Form.Root>
        )}

        <Flex gap="3" wrap="wrap" justify="center">
          <Button asChild size="3" color="purple" highContrast>
            <a href={github} target="_blank" rel="noopener noreferrer"><GitHubLogoIcon /> GitHub</a>
          </Button>
          <Button asChild size="3" color="blue">
            <a href={linkedin} target="_blank" rel="noopener noreferrer"><LinkedInLogoIcon /> LinkedIn</a>
          </Button>
        </Flex>

      </Flex>
    </Seccion>
  )
}

export default ContactSection