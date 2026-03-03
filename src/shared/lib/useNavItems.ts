'use client'

import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { navItemsStructure } from '@/shared/config/navItemsStructure'
import type { NavItem, SubCategory } from '@/shared/types'

export function useNavItems(): NavItem[] {
  const t = useTranslations('nav')
  return useMemo(
    () =>
      navItemsStructure.map((item) => ({
        id: item.id,
        title: t(item.titleKey),
        subCategories: item.subCategories.map(
          (sub): SubCategory => ({
            id: sub.id,
            label: t(sub.labelKey),
            href: sub.href
          })
        )
      })),
    [t]
  )
}
