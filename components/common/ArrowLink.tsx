import styles from './ArrowLink.module.scss'
import cn from 'classnames'
import Arrow from '/public/images/arrow.svg'
import { useEffect, useState } from 'react'

export type ArrowLinkProps = { 
  title:string,
  href?:string,
  hoverRef?: React.MutableRefObject<HTMLElement>
}

export default function ArrowLink({ title, href, hoverRef }: ArrowLinkProps) {
  
  const [hover, setHover] = useState(false)

  const handleHover = ({type}) => setHover(type === 'mousemove')

  useEffect(()=>{
    if(!hoverRef?.current) return 

    hoverRef.current.addEventListener('mousemove', handleHover)
    hoverRef.current.addEventListener('mouseleave', handleHover)

    return () => {
      hoverRef.current?.removeEventListener('mousemove', handleHover)
      hoverRef.current?.removeEventListener('mouseleave', handleHover)
    }
  }, [hoverRef])

  return (
		<span 
      className={cn('medium', styles.arrowLink, hover && styles.hover)} 
      onMouseEnter={handleHover} 
      onMouseLeave={handleHover}
    >
      <Arrow className={styles.arrow} /> {title}
    </span>
	)
}