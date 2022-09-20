import styles from './500.module.scss'
import Link from 'next/link'

export default function FiveZeroZero() {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <Link prefetch={false} href="/">
        <a>
          Go back home
        </a>
      </Link>
    </div>
  )
}