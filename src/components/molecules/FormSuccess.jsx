import { Button, Card, Flex, Heading, Text } from '@radix-ui/themes'
import { CheckCircledIcon } from '@radix-ui/react-icons'

const FormSuccess = ({ onReset }) => (
  <Card size="3" style={{ width: '100%', maxWidth: 600 }}>
    <Flex direction="column" align="center" gap="3" py="4">
      <CheckCircledIcon width={48} height={48} color="var(--green-9)" />
      <Heading as="h3" size="5">
        ¡Mensaje enviado con éxito!
      </Heading>
      <Text color="gray">Gracias por comunicarte, revisaré tu correo muy pronto.</Text>
      <Button variant="soft" onClick={onReset}>
        Enviar otro mensaje
      </Button>
    </Flex>
  </Card>
)

export default FormSuccess