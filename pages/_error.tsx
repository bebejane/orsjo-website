import s from './_error.module.scss'
import Link from 'next/link'

function Error({ statusCode }) {
  return (
    <div className={s.container}>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
      <Link href="/">
        Go home
      </Link>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error