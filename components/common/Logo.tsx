import styles from './Logo.module.scss'
import Link from 'next/link'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import { usePreviousRoute, useScrollInfo } from 'dato-nextjs-utils/hooks'
import { useRouter } from 'next/router'
import { useStore, shallow } from '/lib/store'

type Props = {
  inverted: boolean
}

const text = ['Ö', 'r', 's', 'j', 'ö'];

export default function Logo({ inverted = false }: Props) {

  const router = useRouter()
  const prevRoute = usePreviousRoute()
  const [characters, setCharacters] = useState(text.length)
  const [transitioning] = useStore((state) => [state.transitioning], shallow)
  const { scrolledPosition, viewportHeight } = useScrollInfo()
  const isStatic = (prevRoute !== null && router.asPath !== '/')

  useEffect(() => {
    if (transitioning)
      return
    const r = Math.min(1, scrolledPosition / (viewportHeight / 2))
    const characters = text.length - Math.ceil(4 * r)
    setCharacters(characters)
  }, [scrolledPosition, viewportHeight, setCharacters, prevRoute, transitioning])


  return (
    <Link scroll={false} href="/" className={styles.logo} style={{ fontFamily: "'logo', Helvetica, sans-serif" }}>
      {text.slice(0, isStatic ? 1 : text.length).map((c, idx) =>
        <span
          key={idx}
          className={cn(
            idx + 1 > characters && styles.hide,
            ((idx === 0 && characters === 1) || isStatic) && styles.big,
            inverted && styles.inverted
          )}
        >
          {c}
        </span>
      )}
    </Link>
  )
}
