import { useMemo, useState } from 'react'

const ALL_TAGS = 'Todos'

export const useProjects = (projects) => {
  const [selectedTag, setSelectedTag] = useState(ALL_TAGS)

  const tags = useMemo(() => [ALL_TAGS, ...new Set(projects.flatMap((project) => project.tags ?? []))], [projects])

  const visibleProjects = useMemo(
    () => (selectedTag === ALL_TAGS ? projects : projects.filter((project) => project.tags?.includes(selectedTag))),
    [projects, selectedTag],
  )

  return { tags, selectedTag, setSelectedTag, visibleProjects }
}