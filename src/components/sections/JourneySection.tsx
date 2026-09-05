import React from 'react'
import { journeyEvents } from '../../data/journey'

export default function JourneySection() {
  return (
    <section className="section journey-section" id="journey">
      <div className="section-content">
        <h2 className="section-heading">
          <span className="text-accent">$</span> history
        </h2>
        
        <div className="journey-timeline">
          {journeyEvents.map((event, index) => (
            <div key={index} className="journey-event">
              <div className="journey-year">{event.year}</div>
              <div className="journey-content">
                <h3 className="journey-title">{event.title}</h3>
                <p className="journey-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
