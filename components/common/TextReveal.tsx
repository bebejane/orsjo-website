import styles from './TextReveal.module.scss'
import { useScrollInfo } from 'dato-nextjs-utils/hooks'
import { useEffect, useState } from "react"
import { styleVariables } from '/lib/utils'
import cn from 'classnames'
import React, { Children } from 'react';
import { useWindowSize } from 'rooks';

const childrenToText = (children) => {
  const chars = Children.toArray(children).map(c =>
    typeof c === 'string' ? [c]
      :
      c.props.children.map(c2 => typeof c2 === 'string' ? c2 : c2.type === 'br' ? '\n' : '')
  )
  return chars.filter(arr => arr.join('')).map(arr => arr.join('')).join('')
}

export default function TextReveal({ children = undefined, speed = 0.5, block = false }) {

  const text = childrenToText(children)
  const { scrolledPosition, viewportHeight } = useScrollInfo()
  const [isMobile, setIsMobile] = useState(true)
  const [chars, setChars] = useState(text.length)
  const { innerWidth } = useWindowSize()

  useEffect(() => {
    setIsMobile(innerWidth <= styleVariables.tablet)
  }, [setIsMobile, innerWidth])

  useEffect(() => {
    if (isMobile) return setChars(text.length)
    const r = Math.min(1, scrolledPosition / (viewportHeight / (speed * 10)))
    const chars = text.length - Math.ceil(text.length * r)
    setChars(chars)
  }, [scrolledPosition, viewportHeight, setChars, text, speed])

  let count = 0;

  return (
    <>
      {text?.split(' ').map((word, widx) =>
        <span key={widx} className={cn(styles.word, block && styles.block)}>
          {word.split('').map((c, idx) =>
            <span key={idx} className={cn(styles.letter, (++count > chars) && styles.hide)}>
              {c === '\n' ? <br /> : c}
            </span>
          )}
          {widx < text.split(' ').length - 1 ? <>&nbsp;</> : undefined}
        </span>
      )}
    </>
  )
}
