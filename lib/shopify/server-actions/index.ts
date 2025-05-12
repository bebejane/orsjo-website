'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function changeCountry(formData: FormData) {
  const countryCode = formData.get('countryCode') as string
  const pathname = formData.get('pathname') as string
  cookies().set('country', countryCode)
  redirect(pathname ?? '/')
}