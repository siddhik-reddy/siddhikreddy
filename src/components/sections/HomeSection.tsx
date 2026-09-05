import React from 'react'
import MayaSpeech from '../MayaSpeech'

export default function HomeSection() {
  return (
    <section className="section home-section" id="home">
      <div className="section-content">
        <h1 className="section-title">
          <span className="text-accent">Siddhik Reddy</span>
        </h1>
        
        <p className="section-subtitle">
          Cybersecurity learner. Problem solver. Builder.
        </p>
        
        <div className="home-description">
          <MayaSpeech 
            message="Let's explore what Siddhik is learning, what he's building, and where he's going next."
            isActive={true}
          />
        </div>
        
        <div className="home-actions">
          <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
            View Projects
          </button>
          <a href="https://github.com/yourusername" className="btn-secondary" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" className="btn-secondary" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
