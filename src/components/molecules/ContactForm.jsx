import { useRef } from 'react';
import { Button, Flex, TextArea, TextField, Text } from '@radix-ui/themes';
import * as Form from '@radix-ui/react-form';
import { EnvelopeClosedIcon, PersonIcon } from '@radix-ui/react-icons';
import FormField from './FormField';
import { useContactForm } from '../../hooks/useContactForm'; 

export default function ContactForm() {
  const formRef = useRef(null);
  const { handleSubmit, isSubmitting, result } = useContactForm(formRef); 

  return (
    <Form.Root ref={formRef} onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 600 }}>
      <Flex direction="column" gap="4">
        
        <FormField name="name" label="Nombre Completo" errors={[{ match: 'valueMissing', message: 'Por favor, ingresa tu nombre' }]}>
          <TextField.Root name="name" size="3" required placeholder="Ej: christofer Robin">
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
          <TextField.Root name="email" size="3" type="email" required placeholder="ejemplo@correo.com">
            <TextField.Slot>
              <EnvelopeClosedIcon />
            </TextField.Slot>
          </TextField.Root>
        </FormField>

        <FormField name="message" label="Mensaje" errors={[{ match: 'valueMissing', message: 'Por favor, escribe un mensaje' }]}>
          <TextArea name="message" size="3" rows={5} required placeholder="Cuéntame sobre tu proyecto u oferta laboral..." />
        </FormField>

        <Form.Submit asChild>
          <Button size="3" disabled={isSubmitting} style={{ cursor: 'pointer' }}>
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </Button>
        </Form.Submit>

        {result && (
          <Text size="2" align="center" color={result.includes("éxito") ? "green" : result.includes("Enviando") ? "gray" : "red"}>
            {result}
          </Text>
        )}

      </Flex>
    </Form.Root>
  );
}