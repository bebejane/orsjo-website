import styles from './ArrowLink.module.scss'
import cn from 'classnames'
import Arrow from '/public/images/arrow.svg'
import { useEffect, useState } from 'react'
import { styleVariables } from '/lib/utils'
import { useWindowSize } from 'rooks'

export type ArrowLinkProps = { 
  title:string,
  href?:string,
  hoverRef?: React.MutableRefObject<HTMLElement>
}

export default function ArrowLink({ title, href, hoverRef }: ArrowLinkProps) {
  
  const [hover, setHover] = useState(false)
  const [disable, setDisable] = useState(false)

  const { innerWidth } = useWindowSize();

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

  useEffect(()=>{ setDisable(innerWidth <= styleVariables.tablet)}, [innerWidth])

  return (
		<span 
      className={cn('medium', styles.arrowLink, (hover || disable) && styles.hover)}
      onMouseEnter={handleHover} 
      onMouseLeave={handleHover}
    >
      <Arrow className={styles.arrow} /> {title}
    </span>
	)
}