import { useEffect, useState } from 'react'
import { SELECT_OPTIONS } from '@component/constants'
import { isEmpty } from '@component/utils/intes'
import Image from 'next/image'
import styles from './Select.module.css'

type Option = {
  value: string
  name: string
  icon: string
}

type SelectProps = {
  placeholder: string
  options: Array<Option>
  handleChange: (value: string) => void
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  handleChange,
}) => {
  const [open, setOpen] = useState(false)
  const [option, setOption] = useState<Option>({
    value: '',
    name: '',
    icon: '',
  })

  useEffect(() => {
    const query = localStorage.getItem('query') || 'angular'
    const obj = SELECT_OPTIONS.find((it) => it.value === query)

    if (obj) setOption(obj)
  }, [])

  const handleOpenMenu = () => {
    setOpen(!open)
  }

  const handleChangeOption = (op: Option) => {
    setOption(op)
    setOpen(false)
    handleChange(op.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.main} onClick={handleOpenMenu}>
        <div className={styles.listItem}>
          {isEmpty(option.value) ? (
            <span>{placeholder}</span>
          ) : (
            <>
              <Image
                src={option.icon}
                alt={option.value}
                width={24}
                height={24}
                className={styles.icon}
              />
              {option.name}
            </>
          )}
        </div>
        <Image
          src="/icons/arrow-down.svg"
          alt="arrow-down"
          width={12}
          height={12}
        />
      </div>
      <ul className={`${styles.list} ${open ? styles.showMenu : ''}`}>
        {options.map((op) => (
          <li
            key={op.value}
            className={styles.listItem}
            onClick={() => handleChangeOption(op)}
          >
            <Image
              src={op.icon}
              alt={op.value}
              width={24}
              height={24}
              className={styles.icon}
            />
            {op.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select
