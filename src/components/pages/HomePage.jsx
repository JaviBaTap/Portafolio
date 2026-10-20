import { profile } from '../../data/profile'
import { projects } from '../../data/projects'
import { education } from '../../data/education.js'
import { experiences, emptyExperience } from '../../data/experiences'
import { menuItems } from '../../data/menu'
import { useScrollSections } from '../../hooks/useScrollSections'
import MainLayout from '../templates/MainLayout'
import Navbar from '../organisms/Navbar'
import Hero from '../organisms/Hero'
import ExperienceSection from '../organisms/ExperienceSection'
import EducationSection from '../organisms/EducationSection'
import ProjectsSection from '../organisms/ProjectsSection'
import ContactSection from '../organisms/ContactSection'
import Footer from '../organisms/Footer'

const HomePage = () => {
  const { activeSection, registerRef, scrollToSection } = useScrollSections(menuItems.map((item) => item.key))

  return (
    <MainLayout
      navbar={<Navbar items={menuItems} activeSection={activeSection} onNavigate={scrollToSection} />}
      footer={<Footer name={profile.name} email={profile.email} phone={profile.phone} />}
    >
      <Hero
        sectionRef={registerRef('inicio')}
        name={profile.name}
        greeting={profile.greeting}
        photo={profile.photo}
        background={profile.hero.background}
      />
      <ExperienceSection
        sectionRef={registerRef('experiencia-laboral')}
        experiences={experiences}
        emptyState={emptyExperience}
        onNavigate={scrollToSection}
      />
      <EducationSection sectionRef={registerRef('estudios')} education={education} />
      <ProjectsSection sectionRef={registerRef('proyectos')} projects={projects} />
      <ContactSection sectionRef={registerRef('contacto')} github={profile.github} linkedin={profile.linkedin} />
    </MainLayout>
  )
}

export default HomePage