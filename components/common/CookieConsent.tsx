import styles from './CookieConsent.module.scss'
import cn from 'classnames'
import { useState } from 'react'
import { setCookie, deleteCookie, getCookie } from 'cookies-next';

const GDPR_CONSENT_COOKIES = 'gdpr_consent_cookies'

export default function CookieConsent() {

  const [show, setShow] = useState(true)

  const confirmConsent = (confirm: boolean) => {
    if (confirm)
      setCookie(GDPR_CONSENT_COOKIES, 'accepted', { maxAge: ((60 * 60) * 24 * 365) })
    else
      deleteCookie(GDPR_CONSENT_COOKIES)

    setShow(false)
  }

  if (getCookie(GDPR_CONSENT_COOKIES) === 'accepted')
    return null

  return (
    <>
      <div className={cn(styles.options, show && styles.show)}>
        <div className={styles.close} onClick={() => setShow(false)}>×</div>
        <h1>Cookie policy</h1>
        <p>
          We use cookies to improve your browsing
          experience on our site.
        </p>
        <p>
          By choosing Accept all, you consent to our use of cookies and other tracking technologies.
        </p>
        <p>
          <button onClick={() => confirmConsent(true)}> Accept all</button>
          <button onClick={() => confirmConsent(false)}> Reject all</button>
        </p>
      </div >
    </>
  )
}