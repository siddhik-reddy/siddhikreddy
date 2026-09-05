import { useTypewriter } from '../hooks/useTypewriter'

interface MayaSpeechProps {
  message?: string
  isActive?: boolean
}

export default function MayaSpeech({ 
  message = "Hello. I'm MAYA. Let me introduce you to Siddhik.",
  isActive = true 
}: MayaSpeechProps) {
  const { displayedText, isComplete } = useTypewriter(message)

  if (!isActive) return null

  return (
    <div className="maya-speech">
      <div className="maya-speech-bubble">
        <p className="maya-speech-text">
          {displayedText}
          {!isComplete && <span className="maya-speech-cursor">|</span>}
        </p>
      </div>
      <div className="maya-speech-name">MAYA</div>
    </div>
  )
}
