import styles from './Logo.module.scss'
import Link from 'next/link'
import cn from 'classnames'
import useScrollInfo from '/lib/hooks/useScrollInfo'
import { useEffect, useState } from 'react'

type Props = {
  inverted:boolean
}
const orsjo = ['Ö', 'r', 's', 'j', 'ö'];

export default function Logo({inverted = false} : Props){
  
  const [text, setText] = useState(orsjo)
  const [characters, setCharacters] = useState(5)
  const { isPageBottom, isPageTop, isScrolledUp, scrolledPosition, viewportHeight } = useScrollInfo()
  
  useEffect(()=>{
    const r = Math.min(1, scrolledPosition/viewportHeight)
    const characters = orsjo.length-Math.ceil(4*r)
    setCharacters(characters)
  }, [scrolledPosition, viewportHeight,  setCharacters])

  const r = Math.min(1, scrolledPosition/viewportHeight)

  return(
    <Link scroll={false} href="/">
      <a className={cn(styles.logo, inverted && styles.inverted)}>
        {text.map((c, idx) => 
          <span 
            key={idx}
            //style={idx === 0 ? {fontSize:`${1 + (r*0.5)}rem`} : {}}
            className={cn(idx+1 > characters && styles.hide, (idx === 0 && characters === 1) && styles.big)}
          >
            {c}
          </span>
        )}
      </a>
    </Link>
  )
}
      