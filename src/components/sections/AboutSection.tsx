import MayaSpeech from '../MayaSpeech'

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="section-content">
        <h2 className="section-heading">
          <span className="text-accent">$</span> about_siddhik
        </h2>
        
        <MayaSpeech 
          message="This is Siddhik. He's interested in cybersecurity, technology, and solving problems that require understanding how things work underneath the surface."
          isActive={true}
        />
        
        <div className="about-grid">
          <div className="about-card">
            <h3>Current Focus</h3>
            <p>Pursuing M.Sc. in Cyber Security while building practical skills in networking, security fundamentals, and cloud technologies.</p>
          </div>
          
          <div className="about-card">
            <h3>Approach</h3>
            <p>Learning by building. Applying theoretical knowledge through real projects and practical implementations.</p>
          </div>
          
          <div className="about-card">
            <h3>Goal</h3>
            <p>Building a strong foundation in cybersecurity to solve real-world problems and contribute to meaningful projects.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
