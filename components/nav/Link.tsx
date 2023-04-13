import { useRouter } from 'next/router'
import { default as NextLink } from 'next/link'
import useStore, { shallow } from '/lib/store'
import { useEffect } from 'react'

export type Props = {
  href: string
  children: React.ReactNode | React.ReactNode[]
  className?: string
  prefetch?: boolean
  scroll?: boolean
  passHref?: boolean
}

export default function Link({ href, className, children, prefetch, scroll, passHref }: Props) {

  const router = useRouter()
  const [url, setUrl, transitioning] = useStore((state) => [state.url, state.setUrl, state.transitioning], shallow)
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setUrl(href)
    return false
  }


  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      className={className}
      style={{ cursorEvents: 'none !important' }}
      scroll={scroll}
      passHref={passHref}
      onClick={handleClick}
      legacyBehavior={false}
    >
      {children}
    </NextLink>
  )
}