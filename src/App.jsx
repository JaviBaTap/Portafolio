import { Flex } from '@radix-ui/themes'
import { profile } from './data/profile'
import { projects } from './data/projects'
import { experiences, emptyExperience } from './data/experiences'
import { menuItems } from './data/menu'
import { useScrollSections } from './hooks/useScrollSections'
import Navbar from './components/organisms/Navbar'
import Hero from './components/organisms/Hero'
import ExperienceSection from './components/organisms/ExperienceSection'
import EducationSection from './components/organisms/EducationSection'
import ProjectsSection from './components/organisms/ProjectsSection'
import ContactSection from './components/organisms/ContactSection'
import Footer from './components/organisms/Footer'
import { NAVBAR_HEIGHT } from './theme/layout'

const App = () => {
  const { activeSection, registerRef, scrollToSection } = useScrollSections(menuItems.map((i) => i.key))

  return (
    <Flex direction="column" style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`}}>
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <main style={{ flex: 1 }}>
        <Hero sectionRef={registerRef('inicio')} name={profile.name} greeting={profile.greeting}
          photo={profile.photo} background={profile.hero.background} />
        <ExperienceSection sectionRef={registerRef('experiencia-laboral')} experiences={experiences}
          emptyState={emptyExperience} onNavigate={scrollToSection} />
        <EducationSection sectionRef={registerRef('estudios')} />
        <ProjectsSection sectionRef={registerRef('proyectos')} projects={projects} />
        <ContactSection sectionRef={registerRef('contacto')} github={profile.github} linkedin={profile.linkedin} />
      </main>
      <Footer name={profile.name} email={profile.email} phone={profile.phone} />
    </Flex>
  )
}

export default App