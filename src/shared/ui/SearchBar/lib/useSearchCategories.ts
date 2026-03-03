'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useMemo } from 'react'
import type { SearchKey } from '@/shared/i18n/messageKeys'

const SEARCH_CATEGORY_KEYS: readonly SearchKey[] = [
  'allCategories',
  'clothes',
  'shoes',
  'underwear',
  'accessories'
]

export function useSearchCategories(): string[] {
  const locale = useLocale()
  const t = useTranslations('search')
  return useMemo(() => SEARCH_CATEGORY_KEYS.map((key) => t(key)), [t, locale])
}
