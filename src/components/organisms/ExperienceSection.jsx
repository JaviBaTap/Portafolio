import { Flex } from '@radix-ui/themes'
import SectionBlock from '../molecules/SectionBlock'
import EmptyState from '../molecules/EmptyState'
import ExperienceCard from '../molecules/ExperienceCard'

const ExperienceSection = ({ sectionRef, experiences, emptyState, onNavigate }) => (
  <SectionBlock id="experiencia-laboral" sectionRef={sectionRef} title="Experiencia Laboral">
    {experiences.length === 0 ? (
      <EmptyState {...emptyState} onAction={() => onNavigate('contacto')} />
    ) : (
      <Flex direction="column" gap="4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </Flex>
    )}
  </SectionBlock>
)

export default ExperienceSection