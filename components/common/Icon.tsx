import styles from './Icon.module.scss'
import cn from 'classnames'
import React from 'react'

export type IconProps = {
  children?: React.ReactNode,
  type?: string,
  label?: string,
  disabled?: boolean,
  download?: boolean
}

export default function Icon({ type, label, children, disabled = false, download = true }: IconProps) {

  return (
    <div className={cn(styles.icon, disabled && styles.disabled)}>
      {type &&
        <span className={cn(styles.type, "icon")}>
          <div className={styles.corner}></div>
          {type || children}
        </span>
      }
      {label &&
        <span className={cn(styles.label, "small")}>
          {label}
        </span>
      }
      {download &&
        <div className={cn(styles.arrow, "medium")}>
          <div><img src="/images/arrow.svg" className={styles.arrow} /></div>
        </div>
      }
    </div>
  )
}