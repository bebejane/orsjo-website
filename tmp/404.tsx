import s from './404.module.scss'
import Link from 'next/link'

export default function FourOhFour() {
  return (
    <div className={s.container}>
      <h1>404 - Page Not Found</h1>
      <Link prefetch={false} href="/">
        Go back home
      </Link>
    </div>
  )
}