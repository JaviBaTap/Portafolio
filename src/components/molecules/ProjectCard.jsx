import { useState } from 'react'
import { Badge, Button, Card, Flex, Heading, Inset, Text } from '@radix-ui/themes'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { colors, gradients } from '../../theme/palette'

// OJO: el 'display' va aparte, en cada caso (si lo pones aquí, pisa al Flex y la letra queda arriba a la izquierda)
const coverStyle = { width: '100%', height: 200, borderBottom: `3px solid ${colors.red.main}` }

const ProjectCard = ({ project }) => {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = project.image && !imageFailed

  return (
    <Card size="2" data-testid="project-card">
      <Inset clip="padding-box" side="top" pb="current">
        {showImage ? (
          <img
            src={project.image}
            alt={`Previsualización de ${project.title}`}
            onError={() => setImageFailed(true)}
            style={{ ...coverStyle, display: 'block', objectFit: 'cover', objectPosition: 'top' }}
          />
        ) : (
          <Flex
            align="center"
            justify="center"
            aria-hidden="true"
            style={{ ...coverStyle, background: gradients.card, color: '#fff', fontSize: 56, fontWeight: 800 }}
          >
            {project.title.charAt(0)}
          </Flex>
        )}
      </Inset>

      <Heading as="h3" size="5" mb="2" style={{ color: colors.purple.dark }}>
        {project.title}
      </Heading>
      <Text as="p" size="2" color="gray" mb="3">
        {project.description}
      </Text>
      <Flex gap="2" wrap="wrap" mb="4">
        {project.tags?.map((tag) => (
          <Badge key={tag} color="blue">
            {tag}
          </Badge>
        ))}
      </Flex>
      <Button asChild>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          <GitHubLogoIcon /> Ver repositorio
        </a>
      </Button>
    </Card>
  )
}

export default ProjectCard