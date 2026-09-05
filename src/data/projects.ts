import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'agriagent',
    name: 'AgriAgent',
    description: 'Agricultural assistant platform connecting farmers with AI-powered insights',
    problem: 'Farmers lack easy access to agricultural information and modern farming techniques',
    solution: 'Built a full-stack web application that provides agricultural assistance through an intuitive interface',
    features: [
      'AI-powered agricultural assistant',
      'User-friendly interface',
      'Real-time information processing',
      'Responsive design for mobile access',
      'MongoDB for efficient data storage'
    ],
    technologies: [
      'React',
      'Vite',
      'TypeScript',
      'FastAPI',
      'Python',
      'MongoDB',
      'Tailwind CSS'
    ],
    architecture: {
      frontend: 'React + Vite + TypeScript',
      backend: 'FastAPI (Python)',
      database: 'MongoDB',
      deployment: ['Vercel (Frontend)', 'Render (Backend)']
    },
    contribution: 'Full-stack development including frontend interface, backend API, and database integration',
    challenges: [
      'Connecting frontend with backend API',
      'Managing data flow between components',
      'Deploying to production environment',
      'Ensuring responsive design across devices'
    ],
    deployment: {
      frontend: 'Vercel',
      backend: 'Render'
    },
    links: {
      github: 'https://github.com/yourusername/agriagent',
      live: 'https://agriagent.vercel.app'
    },
    status: 'completed'
  }
]
