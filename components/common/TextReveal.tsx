import styles from './TextReveal.module.scss'
import useScrollInfo from "/lib/hooks/useScrollInfo"
import { useEffect, useState } from "react"
import cn from 'classnames'
import Children from 'react-children-utilities';


export default function TextReveal({children}){
  const text = Children.onlyText(children)

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
          {c === ' ' ? <>&nbsp;</> : c}
        </span>
      )}
    </>
  )
}
