import { useRef, KeyboardEvent } from 'react'

interface TerminalInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: (value: string) => void
}

export default function TerminalInput({ value, onChange, onSubmit }: TerminalInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim()) {
      onSubmit(value)
    }
  }

  const focusInput = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="terminal-input-container" onClick={focusInput}>
      <span className="terminal-prompt">maya@portfolio:~$</span>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="terminal-input"
        placeholder="Type a command..."
        aria-label="Terminal input"
        autoFocus
      />
      <span className="terminal-cursor"></span>
    </div>
  )
}
