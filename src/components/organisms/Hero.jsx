import { Avatar, Box, Container, Flex, Heading, Text } from '@radix-ui/themes'
import { buildHeroBackground } from '../../theme/heroBackground'
import { getInitials } from '../../utils/getInitials'

const Hero = ({ sectionRef, name, greeting, photo, background }) => {
  const type = background?.type === 'image' ? 'image' : 'gradient'
  return (
    <section
      id="inicio"
      ref={sectionRef}
      data-testid="hero-section"
      data-bg-type={type}
      style={{
        minHeight: '85vh', display: 'flex', alignItems: 'center', color: '#fff',
        backgroundImage: buildHeroBackground(background),
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}
    >
      <Container size="4" px="4" py="9">
        <Flex align="center" gap="7" wrap="wrap">
          <Avatar
            size="9"
            radius="full"
            src={photo}
            fallback={getInitials(name)}
            color="red"
            variant="solid"
            alt={`Foto de perfil de ${name}`}
            style={{ border: '5px solid #fff', boxShadow: '0 8px 30px rgba(0,0,0,.35)' }}
          />
          <Box style={{ flex: '1 1 380px' }}>
            <Heading as="h1" size="9" style={{ color: '#fff' }}>{name}</Heading>
            <Text as="p" size="5" mt="4" style={{ color: 'rgba(255,255,255,.92)', maxWidth: 700 }}>
              {greeting}
            </Text>
          </Box>
        </Flex>
      </Container>
    </section>
  )
}

export default Hero