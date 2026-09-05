import { journeyEvents } from '../../data/journey'
import type { JourneyEvent } from '../../types'

export default function JourneySection() {
  return (
    <section className="section journey-section" id="journey">
      <div className="section-content">
        <h2 className="section-heading">
          <span className="text-accent">$</span> history
        </h2>
        
        <div className="journey-timeline">
          {journeyEvents.map((event: JourneyEvent, index: number) => (
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
