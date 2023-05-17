import s from './404.module.scss'
import Link from 'next/link'

export default function FiveZeroZero() {
  return (
    <div style={s.container}>
      <h1>500 - Server-side error occurred</h1>
      <Link prefetch={false} href="/">
        Go back home
      </Link>
    </div>
  )
}