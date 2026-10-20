import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes'
import ProfileAvatar from '../atoms/ProfileAvatar'
import { buildHeroBackground } from '../../theme/heroBackground'
import { NAVBAR_HEIGHT } from '../../theme/layout'

const Hero = ({ sectionRef, name, greeting, photo, background }) => {
  const type = background?.type === 'image' ? 'image' : 'gradient'
  return (
    <section
      id="inicio"
      ref={sectionRef}
      data-testid="hero-section"
      data-bg-type={type}
      style={{
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        scrollMarginTop: NAVBAR_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        backgroundImage: buildHeroBackground(background),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container size="4" px="4" py="9" style={{ width: '100%' }}>
        <Flex align="center" justify="center" gap="8" wrap="wrap">
          <ProfileAvatar name={name} photo={photo} />
          <Box style={{ flex: '1 1 380px', maxWidth: 720 }}>
            <Heading as="h1" size="9" style={{ color: '#fff' }}>
              {name}
            </Heading>
            <Text as="p" size="6" mt="4" style={{ color: 'rgba(255,255,255,.92)' }}>
              {greeting}
            </Text>
          </Box>
        </Flex>
      </Container>
    </section>
  )
}

export default Hero