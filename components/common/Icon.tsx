import styles from './Icon.module.scss'
import cn from 'classnames'

export type IconProps = {
  children?: React.ReactNode,
  label?: string,
}

export default function Icon({ label, children }: IconProps) {

  return (
    <div className={cn(styles.icon)} >
      <span className="small">{label || children}</span>
    </div>
  )
}