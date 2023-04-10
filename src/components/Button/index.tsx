import styles from './Button.module.css'

type ButtonProps = {
  label: string
  selected?: boolean
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  selected = false,
  type = 'button',
}) => {
  return (
    <button
      className={`${styles.main} ${selected ? styles.selected : ''}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  )
}

export default Button
