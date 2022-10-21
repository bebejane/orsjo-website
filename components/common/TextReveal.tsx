import styles from './TextReveal.module.scss'
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

export default function TextReveal({children, speed = 0.5}){
  const text = childrenToText(children)

  const { scrolledPosition, viewportHeight } = useScrollInfo()
  const [chars, setChars] = useState(text.length)

  useEffect(()=>{
    const r = Math.min(1, scrolledPosition/(viewportHeight/(speed*10)))
    const chars = text.length-Math.ceil(text.length*r)
    setChars(chars)
  }, [scrolledPosition, viewportHeight, setChars, text, speed])
  
  let count = 0;

  return (
    <>
      {text?.split(' ').map((word, widx) => 
        <span key={widx} className={styles.word}>
          {word.split('').map((c, idx) => 
            <span key={idx} className={cn(styles.letter, (++count > chars) && styles.hide)}>
              {c === '\n' ? <br/> : c}
            </span>
          )}
          &nbsp;
        </span>
      )}
    </>
  )
}
