import { Container, Flex, Heading, Text, Box } from '@radix-ui/themes';
import SectionBlock from '../molecules/SectionBlock'
import SocialLinks from '../molecules/SocialLinks'
import ContactForm from '../molecules/ContactForm'
import FormSuccess from '../molecules/FormSuccess'

import { useContactForm } from '../../hooks/useContactForm';

const ContactSection = ({ sectionRef, github, linkedin, formOptions }) => {
  const { handleSubmit, isSubmitting, result, handleResetFormState } = useContactForm();

  const renderForm = () => {
    if (result === "¡Mensaje enviado con éxito!") {
      return <FormSuccess onReset={handleResetFormState} />
    }
    return <ContactForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
  };

  return (
    <SectionBlock id="contacto" sectionRef={sectionRef} title="Contacto" alternate>
      <Flex direction="column" align="center" gap="6">
        <Text as="p" size="4" align="center" mb="-3" style={{ width: '100%' }}>
          ¿Quiere contactarme? ¡Complete el formulario y le responderé lo antes posible!
        </Text>
        {renderForm()}
        <SocialLinks github={github} linkedin={linkedin} />
      </Flex>
    </SectionBlock>
  )

};

export default ContactSection;