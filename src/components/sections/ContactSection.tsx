import React from 'react'
import MayaSpeech from '../MayaSpeech'

export default function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-content">
        <h2 className="section-heading">
          <span className="text-accent">$</span> connect siddhik
        </h2>
        
        <MayaSpeech 
          message="You've reached the end. But Siddhik's journey isn't finished. If you'd like to talk, build something, or discuss an opportunity, here's where you can find him."
          isActive={true}
        />
        
        <div className="contact-actions">
          <a href="mailto:your.email@example.com" className="btn-primary">
            Email
          </a>
          <a href="https://linkedin.com/in/yourusername" className="btn-secondary" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/yourusername" className="btn-secondary" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
