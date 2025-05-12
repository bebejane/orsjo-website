'use client'

import { useState } from 'react'
import s from './page.module.scss'
import Link from '@components//nav/Link'

export default function Login() {

  const [errors, setErrors] = useState<string | string[] | null>(null)

  const login: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setErrors(null)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const body = Object.fromEntries(formData.entries())

    const res = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    const data = await res.json()

    if (data.errors)
      setErrors(data.errors)
    else
      window.location.href = '/account'
  }

  return (
    <div className={s.container}>
      <form method="post" action="/api/shopify/account/login" onSubmit={login}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
      </form>
      {errors &&
        <div className={s.errors}>
          {typeof errors === 'string' ? errors : errors.map((e, i) => <div key={i}>{e}</div>)}
        </div>
      }
      <Link href="/account/auth/register">Register</Link>
    </div>
  )
}