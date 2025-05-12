'use client'

import { useState } from 'react'
import s from './page.module.scss'
import Link from '@components//nav/Link'

export default function Register() {

  const [errors, setErrors] = useState<string | string[] | null>(null)
  const [success, setSuccess] = useState(false)

  const register: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setErrors(null)
    setSuccess(false)

    try {
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)
      const body: any = {
        ...Object.fromEntries(formData.entries()),
        acceptsMarketing: formData.get('acceptsMarketing') === 'on' ? true : false
      }

      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      const data = await res.json()

      if (data.errors)
        setErrors(data.errors)
      else
        setSuccess(true)

    } catch (err) {
      setErrors((err as any).message)
      setSuccess(false)
    }
  }

  return (
    <div className={s.container}>
      {!success ?
        <>
          <form method="post" action="/api/shopify/account/register" onSubmit={register}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="firstName">First name</label>
            <input type="first_name" name="firstName" id="first_name" />
            <label htmlFor="lastName">First name</label>
            <input type="last_name" name="lastName" id="last_name" />
            <label htmlFor="phone">Phone</label>
            <input type="phone" name="phone" id="phone" />
            <label htmlFor="acceptsMarketing">Accept marketing</label>
            <input type="checkbox" name="acceptsMarketing" id="accepts_marketing" />

            <button type="submit">Register</button>
          </form>
          {errors &&
            <div className={s.errors}>
              {typeof errors === 'string' ? errors : errors.map((e, i) => <div key={i}>{e}</div>)}
            </div>
          }
          <p>
            Already have an account? Login <Link href="/account/auth/login">here</Link>
          </p>
        </>
        :
        <p>
          Thanks!. Your account has has now been registered. Please login <Link href="/account/auth/login">here</Link>
        </p>
      }
    </div >
  )
}