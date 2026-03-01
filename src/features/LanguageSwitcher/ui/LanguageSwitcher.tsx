'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { setLocaleCookie } from '@/shared/i18n/actions'

const locales = [
  { code: 'ru' as const, label: 'RU' },
  { code: 'en' as const, label: 'EN' }
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newLocale: string | null
  ) => {
    if (newLocale) setLocaleCookie(newLocale as 'ru' | 'en', pathname || '/')
  }

  return (
    <ToggleButtonGroup
      value={locale}
      exclusive
      onChange={handleChange}
      size="small"
    >
      {locales.map(({ code, label }) => (
        <ToggleButton key={code} value={code} aria-label={label}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
