import React, { useState } from 'react'
import './checkbox.css'

interface CheckProps {
  option: number
  id: string
  label: string
  // width: number
  // height: number
  onClick: () => void
}

const Checkbox: React.FC<CheckProps> = ({ option, id, label, onClick }) => {
  const [isToggle, setIsToggle] = useState(false)

  const inputMode =
    option === 1
      ? 'input-checkbox-primary'
      : option === 2
      ? 'input-checkbox-secondary'
      : 'input-checkbox-third'

  const spanMode =
    option === 1
      ? 'span-checkbox-primary'
      : option === 2
      ? 'span-checkbox-secondary'
      : 'span-checkbox-third'

  return (
    <label className="input-checkbox-container" htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        name={id}
        className={['input-checkbox', inputMode].join(' ')}
        onClick={() => {
          onClick()
          setIsToggle(!isToggle)
        }}
      />
      <span className={['input-checkbox-span', spanMode].join(' ')}>
        {label}
      </span>
    </label>
  )
}

export default Checkbox
