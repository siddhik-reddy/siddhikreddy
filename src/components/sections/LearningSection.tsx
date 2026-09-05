import React from 'react'
import { learningItems } from '../../data/learning'

export default function LearningSection() {
  const completed = learningItems.filter(item => item.status === 'completed')
  const inProgress = learningItems.filter(item => item.status === 'in-progress')
  const planned = learningItems.filter(item => item.status === 'planned')

  const renderSection = (title: string, items: typeof learningItems) => (
    <div className="learning-group">
      <h3 className="learning-group-title">{title}</h3>
      <ul className="learning-list">
        {items.map((item, index) => (
          <li key={index} className="learning-item">
            <span className={`learning-status learning-status-${item.status}`}></span>
            <span className="learning-title">{item.title}</span>
            <span className="learning-category">{item.category}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section className="section learning-section" id="learning">
      <div className="section-content">
        <h2 className="section-heading">
          <span className="text-accent">$</span> learning --status
        </h2>
        
        {renderSection('COMPLETED', completed)}
        {renderSection('IN PROGRESS', inProgress)}
        {renderSection('NEXT', planned)}
      </div>
    </section>
  )
}
