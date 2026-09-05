import { projects } from '../../data/projects'
import MayaSpeech from '../MayaSpeech'
import type { Project } from '../../types'

export default function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-content">
        <h2 className="section-heading">
          <span className="text-accent">$</span> open projects
        </h2>
        
        <MayaSpeech 
          message="This isn't just something Siddhik put on a project list. We actually built it."
          isActive={true}
        />
        
        <div className="projects-grid">
          {projects.map((project: Project) => (
            <article key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <span className={`project-status project-status-${project.status}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-details">
                <div className="project-problem">
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </div>
                
                <div className="project-solution">
                  <h4>Solution</h4>
                  <p>{project.solution}</p>
                </div>
              </div>
              
              <div className="project-tech">
                <h4>Technology Stack</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a href={project.links.github} className="btn-primary" target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
                {project.links.live && (
                  <a href={project.links.live} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
