'use client'

import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { footerColumnsStructure } from '@/shared/config/footerColumnsStructure'
import type { FooterColumn } from '@/shared/types'

export function useFooterColumns(): FooterColumn[] {
  const t = useTranslations('footer')
  return useMemo(
    () =>
      footerColumnsStructure.map((col) => ({
        id: col.id,
        title: col.titleKey ? t(col.titleKey as any) : undefined,
        items: col.items?.map((item) => ({
          id: item.id,
          label: t(item.labelKey as any),
          ...(item.href != null && { href: item.href })
        })),
        withCustomContent: col.withCustomContent
      })),
    [t]
  )
}
