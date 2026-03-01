'use client'

import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

const searchCategoryKeys = [
  'allCategories',
  'clothes',
  'shoes',
  'underwear',
  'accessories',
  'homePage'
] as const

export function useSearchCategories(): string[] {
  const t = useTranslations('search')
  return useMemo(
    () => searchCategoryKeys.map((key) => t(key as any)),
    [t]
  )
}
