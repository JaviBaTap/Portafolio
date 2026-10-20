import { Grid, Text } from '@radix-ui/themes'
import Seccion from './Seccion'
import ProjectCard from './ProjectCard'

const ProjectsSection = ({ sectionRef, projects }) => (
  <Seccion id="proyectos" sectionRef={sectionRef} title="Desarrollos y Proyectos">
    {projects.length === 0 ? (
      <Text color="gray">Próximamente nuevos proyectos</Text>
    ) : (
      <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="5">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </Grid>
    )}
  </Seccion>
)

export default ProjectsSection