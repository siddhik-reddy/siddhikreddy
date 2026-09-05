import type { Command } from '../types'

export const commands: Command[] = [
  {
    name: 'help',
    description: 'Show available commands',
    action: () => ({
      output: `
Available commands:

  about       - Learn about Siddhik
  skills      - View technical skills
  projects    - See real projects
  journey     - View journey timeline
  learning    - Current learning status
  contact     - Get in touch
  github      - Open GitHub profile
  linkedin    - Open LinkedIn profile
  clear       - Clear terminal
  help        - Show this help

Tip: You can also use the navigation menu or click on sections.
      `,
      type: 'info'
    })
  },
  {
    name: 'about',
    description: 'Learn about Siddhik',
    aliases: ['whoami', 'who'],
    action: () => ({
      output: `
Siddhik Reddy

Cybersecurity learner. Problem solver. Builder.

Currently pursuing M.Sc. in Cyber Security.
Focused on networking, security fundamentals,
and building practical projects.

MAYA: "He's building his foundation in cybersecurity
while creating real projects along the way."
      `,
      type: 'text'
    })
  },
  {
    name: 'skills',
    description: 'View technical skills',
    aliases: ['stack', 'tech'],
    action: () => ({
      output: `
SKILL GROUPS:

NETWORKING:      Linux, TCP/IP, Network protocols
SECURITY:        Security fundamentals, SOC concepts
CLOUD:           Microsoft 365, Cloud basics
TOOLS:           Git, GitHub, VS Code
PROGRAMMING:     Python, JavaScript, TypeScript
SOFT SKILLS:     Problem solving, Communication

MAYA: "He's building strong foundations
before claiming expertise."
      `,
      type: 'text'
    })
  },
  {
    name: 'projects',
    description: 'See real projects',
    aliases: ['work', 'portfolio'],
    action: () => ({
      output: `
REAL PROJECTS:

01. AgriAgent
    - React + Vite frontend
    - FastAPI backend
    - MongoDB database
    - Deployed on Vercel + Render

    This isn't a tutorial project.
    It was actually built and deployed.

MAYA: "Real work. Real code. Real deployment."
      `,
      type: 'text'
    })
  },
  {
    name: 'journey',
    description: 'View journey timeline',
    aliases: ['history', 'path'],
    action: () => ({
      output: `
JOURNEY TIMELINE:

2021 ─── B.Sc. Completed

2024 ─── Started M.Sc. Cyber Security

2024 → Present ─── Building foundation
                   ├── Networking
                   ├── Security concepts
                   ├── Microsoft 365
                   └── Cloud fundamentals

Present ─── Building real projects
            └── Preparing for professional roles
      `,
      type: 'text'
    })
  },
  {
    name: 'learning',
    description: 'Current learning status',
    aliases: ['education', 'courses'],
    action: () => ({
      output: `
LEARNING STATUS:

COMPLETED:
> B.Sc. Degree

IN PROGRESS:
> M.Sc. Cyber Security
> Networking fundamentals
> SOC concepts
> Microsoft 365

NEXT:
> Keep learning
> Keep building
> Professional certifications

MAYA: "Learning is a journey, not a destination."
      `,
      type: 'text'
    })
  },
  {
    name: 'contact',
    description: 'Get in touch',
    aliases: ['email', 'connect'],
    action: () => ({
      output: `
CONNECT WITH SIDDHIK:

Email:    [your email]
LinkedIn: [your LinkedIn URL]
GitHub:   [your GitHub URL]

MAYA: "You've reached the end of the terminal.
But Siddhik's journey is just beginning."
      `,
      type: 'text'
    })
  },
  {
    name: 'clear',
    description: 'Clear terminal',
    aliases: ['cls', 'reset'],
    action: () => ({
      output: '',
      type: 'text'
    })
  }
]

export function findCommand(input: string): Command | undefined {
  const normalized = input.toLowerCase().trim()
  return commands.find(cmd => 
    cmd.name === normalized || 
    cmd.aliases?.includes(normalized)
  )
}
