import React from 'react'

interface MayaAvatarProps {
  state?: 'idle' | 'thinking' | 'speaking'
}

export default function MayaAvatar({ state = 'idle' }: MayaAvatarProps) {
  return (
    <div className={`maya-avatar maya-avatar-${state}`}>
      <div className="maya-avatar-circle">
        <div className="maya-avatar-core">
          <div className="maya-avatar-ring"></div>
          <div className="maya-avatar-eye left"></div>
          <div className="maya-avatar-eye right"></div>
        </div>
      </div>
      <div className="maya-avatar-label">MAYA</div>
    </div>
  )
}
