import { skillGroups } from '../../data/skills'
import type { SkillGroup } from '../../types'

export default function SkillsSection() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-content">
        <h2 className="section-heading">
          <span className="text-accent">$</span> scan skills
        </h2>
        
        <div className="skills-grid">
          {skillGroups.map((group: SkillGroup) => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-group-title">{group.category}</h3>
              
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-status skill-status-${skill.status}`}>
                        {skill.status}
                      </span>
                    </div>
                    
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${(skill.level / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
