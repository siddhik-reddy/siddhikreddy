import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Networking',
    skills: [
      { name: 'TCP/IP', level: 6, status: 'learning' },
      { name: 'Network protocols', level: 5, status: 'learning' },
      { name: 'Linux', level: 5, status: 'learning' },
      { name: 'Windows', level: 6, status: 'practiced' }
    ]
  },
  {
    category: 'Cybersecurity',
    skills: [
      { name: 'Security fundamentals', level: 5, status: 'learning' },
      { name: 'SOC concepts', level: 4, status: 'learning' },
      { name: 'Risk assessment', level: 4, status: 'learning' }
    ]
  },
  {
    category: 'Cloud & Productivity',
    skills: [
      { name: 'Microsoft 365', level: 5, status: 'learning' },
      { name: 'Cloud basics', level: 4, status: 'learning' },
      { name: 'Git & GitHub', level: 6, status: 'practiced' }
    ]
  },
  {
    category: 'Programming',
    skills: [
      { name: 'Python', level: 6, status: 'practiced' },
      { name: 'JavaScript', level: 5, status: 'practiced' },
      { name: 'TypeScript', level: 4, status: 'learning' }
    ]
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Problem solving', level: 7, status: 'practiced' },
      { name: 'Communication', level: 6, status: 'practiced' },
      { name: 'Customer support', level: 6, status: 'practiced' }
    ]
  }
]
