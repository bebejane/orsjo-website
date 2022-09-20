import styles from './404.module.scss'
import cn from 'classnames'
import Link from 'next/link'

export default function FourOhFour() {
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