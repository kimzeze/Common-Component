import React from 'react'
import './button.css'

interface BtnProps {
  option: number
  label: string
  width: number
  onClick: () => void
}

const Button: React.FC<BtnProps> = ({ option, label, width, onClick }) => {
  // 옵션이 1일경우 "button—primary" 옵션이 2일경우 "button—secondary" 2가 아닐경우에는 "button—third"
  const mode =
    option === 1
      ? 'button—primary'
      : option === 2
      ? 'button—secondary'
      : 'button—third'

  return (
    <button
      type="button"
      className={['button', mode].join(' ')}
      style={{ width: width }}
      onClick={() => onClick()}
    >
      {label}
    </button>
  )
}

export default Button
