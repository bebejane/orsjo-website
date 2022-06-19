import styles from './ArrowButton.module.scss'
import cn from 'classnames'
import type { MouseEventHandler } from 'react'

export type ArrowButtonProps = { inverted?:boolean, reverse?:boolean, onClick?: MouseEventHandler<HTMLButtonElement>, className?:string }

export default function ArrowButton({ className, inverted, reverse, onClick }: ArrowButtonProps) {
  
  const buttonStyles = cn(styles.arrowButton, className, inverted && styles.inverted)

	return (
		<button className={buttonStyles} onClick={onClick}>
      <img src="/images/arrow.svg" className={cn(styles.arrow, reverse && styles.reverse)}/>
    </button>
	)
}