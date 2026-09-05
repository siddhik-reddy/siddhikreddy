export interface Command {
  name: string
  description: string
  usage?: string
  aliases?: string[]
  action: (args?: string[]) => CommandResult
}

export interface CommandResult {
  output: string
  type?: 'text' | 'error' | 'success' | 'info'
}

export interface Project {
  id: string
  name: string
  description: string
  problem: string
  solution: string
  features: string[]
  technologies: string[]
  architecture?: {
    frontend?: string
    backend?: string
    database?: string
    deployment?: string[]
  }
  contribution: string
  challenges: string[]
  deployment: {
    frontend?: string
    backend?: string
  }
  links: {
    github: string
    live?: string
  }
  status: 'completed' | 'in-progress' | 'planned'
}

export interface SkillGroup {
  category: string
  skills: {
    name: string
    level: number
    status: 'learning' | 'practiced' | 'proficient'
  }[]
}

export interface JourneyEvent {
  year: string
  title: string
  description: string
  type: 'education' | 'career' | 'learning' | 'project'
}

export interface LearningItem {
  title: string
  source?: string
  status: 'completed' | 'in-progress' | 'planned'
  category: string
}

export interface MayaState {
  isActive: boolean
  isThinking: boolean
  currentMessage: string
  position: 'welcome' | 'guiding' | 'transitioning'
}

export interface TerminalState {
  history: string[]
  currentInput: string
  currentSection: string
}
