'use client'

import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { bottomBarItemsStructure } from '@/shared/config/bottomBarItemsStructure'
import type { BottomBarItemType } from '@/shared/types'

export function useBottomBarItems(): BottomBarItemType[] {
  const t = useTranslations('nav')
  return useMemo(
    () =>
      bottomBarItemsStructure.map((item) => ({
        id: item.id,
        icon: item.icon,
        title: t(item.titleKey as any),
        href: item.href,
        withBadge: item.withBadge
      })),
    [t]
  )
}
