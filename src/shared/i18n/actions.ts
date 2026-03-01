'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { routing } from './routing'

export async function setLocaleCookie(locale: string, pathname: string) {
  if (!routing.locales.includes(locale as 'ru' | 'en')) return
  const store = await cookies()
  store.set('NEXT_LOCALE', locale, { path: '/', maxAge: 60 * 60 * 24 * 365 })
  redirect(pathname || '/')
}
