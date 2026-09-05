import React, { useEffect, useRef } from 'react'
import { useTerminal } from '../hooks/useTerminal'
import TerminalInput from './TerminalInput'
import MayaAvatar from './MayaAvatar'
import MayaSpeech from './MayaSpeech'

interface TerminalProps {
  children?: React.ReactNode
}

export default function Terminal({ children }: TerminalProps) {
  const { history, currentInput, setCurrentInput, executeCommand } = useTerminal()
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (command: string) => {
    executeCommand(command)
    setCurrentInput('')
  }

  return (
    <div className="terminal-container" ref={terminalRef}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button terminal-button-close"></span>
          <span className="terminal-button terminal-button-minimize"></span>
          <span className="terminal-button terminal-button-maximize"></span>
        </div>
        <div className="terminal-title">maya@portfolio:~</div>
      </div>
      
      <div className="terminal-body">
        <div className="terminal-output">
          {history.map((line, index) => (
            <div key={index} className="terminal-line">
              {line.startsWith('maya@portfolio') ? (
                <span className="terminal-command">{line}</span>
              ) : (
                <span className="terminal-result">{line}</span>
              )}
            </div>
          ))}
        </div>
        
        <TerminalInput
          value={currentInput}
          onChange={setCurrentInput}
          onSubmit={handleCommand}
        />
      </div>
      
      <div className="terminal-sidebar">
        <MayaAvatar />
        <MayaSpeech />
      </div>
      
      {children}
    </div>
  )
}
