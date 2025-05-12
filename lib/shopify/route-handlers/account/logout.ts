import { NextRequest } from 'next/server'
import { redirect } from 'next/navigation'
import { deleteCookie } from 'cookies-next'

export default async function logout(req: NextRequest): Promise<void> {
  deleteCookie('user', { req })
  redirect('/account/auth/login')
}
