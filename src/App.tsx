import { useState } from 'react'
import Terminal from './components/Terminal'
import HomeSection from './components/sections/HomeSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import JourneySection from './components/sections/JourneySection'
import LearningSection from './components/sections/LearningSection'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  const [currentSection, setCurrentSection] = useState('home')

  const sections = [
    { id: 'home', label: 'Home', component: HomeSection },
    { id: 'about', label: 'About', component: AboutSection },
    { id: 'skills', label: 'Skills', component: SkillsSection },
    { id: 'projects', label: 'Projects', component: ProjectsSection },
    { id: 'journey', label: 'Journey', component: JourneySection },
    { id: 'learning', label: 'Learning', component: LearningSection },
    { id: 'contact', label: 'Contact', component: ContactSection }
  ]

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-brand">
          <span className="brand-maya">MAYA</span>
          <span className="brand-separator">×</span>
          <span className="brand-siddhik">Siddhik</span>
        </div>
        
        <nav className="header-nav" aria-label="Main navigation">
          {sections.map(section => (
            <button
              key={section.id}
              className={`nav-link ${currentSection === section.id ? 'nav-link-active' : ''}`}
              onClick={() => {
                setCurrentSection(section.id)
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </header>
      
      <main className="app-main">
        <Terminal>
          <div className="sections-container">
            {sections.map(section => {
              const Component = section.component
              return (
                <div 
                  key={section.id}
                  className={`section-wrapper ${currentSection === section.id ? 'section-visible' : 'section-hidden'}`}
                >
                  <Component />
                </div>
              )
            })}
          </div>
        </Terminal>
      </main>
      
      <footer className="app-footer">
        <p>Built by Siddhik Reddy | Guided by MAYA</p>
      </footer>
    </div>
  )
}
