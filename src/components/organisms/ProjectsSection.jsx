import { Grid, Text } from '@radix-ui/themes'
import SectionBlock from '../molecules/SectionBlock'
import ProjectCard from '../molecules/ProjectCard'
import TagFilter from '../molecules/TagFilter'
import { useProjects } from '../../hooks/useProjects'

const ProjectsSection = ({ sectionRef, projects }) => {
  const { tags, selectedTag, setSelectedTag, visibleProjects } = useProjects(projects)

  return (
    <SectionBlock id="proyectos" sectionRef={sectionRef} title="Desarrollos y Proyectos">
      {projects.length === 0 ? (
        <Text color="gray">Próximamente nuevos proyectos</Text>
      ) : (
        <>
          <TagFilter tags={tags} selectedTag={selectedTag} onSelect={setSelectedTag} />
          <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="6">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Grid>
        </>
      )}
    </SectionBlock>
  )
}

export default ProjectsSection