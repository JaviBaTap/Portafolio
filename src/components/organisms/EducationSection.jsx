import { Flex } from '@radix-ui/themes'
import SectionBlock from '../molecules/SectionBlock'
import EducationCard from '../molecules/EducationCard'

const EducationSection = ({ sectionRef, education }) => (
  <SectionBlock id="estudios" sectionRef={sectionRef} title="Estudios" alternate>
    <Flex direction="column" gap="4">
      {education.map((item) => (
        <EducationCard key={item.id} item={item} />
      ))}
    </Flex>
  </SectionBlock>
)

export default EducationSection