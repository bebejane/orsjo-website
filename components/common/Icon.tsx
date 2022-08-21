import styles from './Icon.module.scss'
import cn from 'classnames'

export type IconProps = {
  children?: React.ReactNode,
  type?: string,
  label?: string,
  disabled?: boolean
}

export default function Icon({ type, label, children, disabled = false }: IconProps) {

  return (
    <div className={cn(styles.icon, disabled && styles.disabled)}>
      <span className={cn(styles.type, "small")}>
        {type || children}
      </span>
      {label && 
        <span className={cn(styles.label, "medium")}>
          {label}
        </span>
      }
      <div className={cn(styles.arrow, "medium")}>
        <div>→</div>
      </div>
    </div>
  )
}