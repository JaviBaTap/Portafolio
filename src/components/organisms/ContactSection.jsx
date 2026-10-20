import { Flex, Text } from '@radix-ui/themes'
import SectionBlock from '../molecules/SectionBlock'
import SocialLinks from '../molecules/SocialLinks'
import ContactForm from '../molecules/ContactForm'
import FormSuccess from '../molecules/FormSuccess'
import { useContactForm } from '../../hooks/useContactForm'

const ContactSection = ({ sectionRef, github, linkedin, formOptions }) => {
  const { isSubmitting, isSubmitted, isApiReady, onFinishContact, handleResetFormState } = useContactForm(formOptions)

  
  const renderForm = () => {
    if (!isApiReady) return <Text color="gray">Cargando módulo de mensajería de forma segura...</Text>
    if (isSubmitted) return <FormSuccess onReset={handleResetFormState} />
    return <ContactForm onSubmit={onFinishContact} isSubmitting={isSubmitting} />
  }

  return (
    <SectionBlock id="contacto" sectionRef={sectionRef} title="Contacto" alternate>
      <Flex direction="column" align="center" gap="6">
        <Text as="p" size="4" align="center" style={{ width: '100%', maxWidth: 600 }}>
          ¿Quiere contactarme? ¡Complete el formulario y le responderé lo antes posible!
        </Text>
        {renderForm()}
        <SocialLinks github={github} linkedin={linkedin} />
      </Flex>
    </SectionBlock>
  )
}

export default ContactSection