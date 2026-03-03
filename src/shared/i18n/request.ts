import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'
import { hasLocale } from 'next-intl'
import { routing } from './routing'

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const saved = cookieStore.get('NEXT_LOCALE')?.value

  const locale =
    saved && hasLocale(routing.locales, saved) ? saved : routing.defaultLocale

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  }
})
