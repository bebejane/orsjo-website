import styles from './TextReveals.module.scss'
import useScrollInfo from "/lib/hooks/useScrollInfo"
import { useEffect, useState } from "react"
import cn from 'classnames'
import React, {Children} from 'react';


const childrenToText = (children) => {
  const chars = Children.toArray(children).map(c => 
      typeof c === 'string' ? [c] 
    : 
      c.props.children.map(c2 => typeof c2 === 'string' ? c2 : c2.type === 'br' ? '\n' : '')
  )
  return chars.filter(arr => arr.join('')).map(arr => arr.join('')).join('')
}

export default function TextReveal({children}){
  const text = childrenToText(children)

  const { scrolledPosition, viewportHeight } = useScrollInfo()
  const [characters, setCharacters] = useState(text.length)

  useEffect(()=>{
    const r = Math.min(1, scrolledPosition/(viewportHeight/4))
    const characters = text.length-Math.ceil(text.length*r)
    setCharacters(characters)
  }, [scrolledPosition, viewportHeight, setCharacters, text])
  
  return (
    <>
      {text?.split('').map((c, idx) => 
        <span key={idx}className={cn(styles.letter, idx >= characters && styles.hide)}>
          {c === ' ' ? <>&nbsp;</> : c === '\n' ? <br/> : c}
        </span>
      )}
    </>
  )
}
