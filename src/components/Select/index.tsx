import { ChangeEventHandler } from 'react'
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
  return (
    <select className={styles.main} onChange={handleChange}>
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
