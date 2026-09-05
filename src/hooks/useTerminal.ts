import { useState, useCallback } from 'react'
import { findCommand } from '../data/commands'

export function useTerminal() {
  const [history, setHistory] = useState<string[]>([
    'Type "help" to see available commands',
    'Or use the navigation menu below'
  ])
  const [currentInput, setCurrentInput] = useState('')
  const [currentSection, setCurrentSection] = useState('home')

  const executeCommand = useCallback((input: string) => {
    const trimmedInput = input.trim()
    
    if (!trimmedInput) return

    // Add command to history
    setHistory(prev => [...prev, `maya@portfolio:~$ ${trimmedInput}`])

    const command = findCommand(trimmedInput)
    
    if (!command) {
      setHistory(prev => [
        ...prev,
        `Command not found: ${trimmedInput}`,
        'Type "help" to see available commands'
      ])
      return
    }

    if (command.name === 'clear') {
      setHistory([])
      return
    }

    const result = command.action()
    setHistory(prev => [...prev, result.output])
    
    // Map command to section
    const sectionMap: Record<string, string> = {
      'about': 'about',
      'skills': 'skills',
      'projects': 'projects',
      'journey': 'journey',
      'learning': 'learning',
      'contact': 'contact'
    }
    
    if (sectionMap[command.name]) {
      setCurrentSection(sectionMap[command.name])
    }
  }, [])

  const navigateToSection = useCallback((section: string) => {
    setCurrentSection(section)
  }, [])

  return {
    history,
    currentInput,
    currentSection,
    setCurrentInput,
    executeCommand,
    navigateToSection
  }
}
