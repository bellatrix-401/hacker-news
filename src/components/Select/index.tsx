import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react'
import styles from './Select.module.css'

type option = {
  value: string
  name: string
  icon: string
}

type SelectProps = {
  placeholder: string
  options: Array<option>
  handleChange: ChangeEventHandler<HTMLSelectElement>
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  handleChange,
}) => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    setValue(localStorage.getItem('query') || 'angular')
  }, [])

  const handleValue: ChangeEventHandler = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setValue(event.target.value)
    handleChange(event)
  }

  return (
    <select className={styles.main} onChange={handleValue} value={value}>
      <option disabled value="">
        {placeholder}
      </option>
      {options.map((op) => (
        <option value={op.value} key={op.value}>
          {op.name}
        </option>
      ))}
    </select>
  )
}

export default Select
