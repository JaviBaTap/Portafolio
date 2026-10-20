import { Button, Flex } from '@radix-ui/themes'

const TagFilter = ({ tags, selectedTag, onSelect }) => (
  <Flex gap="2" wrap="wrap" mb="5" role="group" aria-label="Filtrar proyectos por tecnología">
    {tags.map((tag) => (
      <Button
        key={tag}
        size="2"
        variant={selectedTag === tag ? 'solid' : 'soft'}
        aria-pressed={selectedTag === tag}
        onClick={() => onSelect(tag)}
      >
        {tag}
      </Button>
    ))}
  </Flex>
)

export default TagFilter