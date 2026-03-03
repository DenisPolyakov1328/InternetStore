'use client'

import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { footerColumnsStructure } from '../model/footerColumnsStructure'
import type { FooterColumn } from '@/shared/types'

export function useFooterColumns(): FooterColumn[] {
  const t = useTranslations('footer')
  return useMemo(
    () =>
      footerColumnsStructure.map((col) => ({
        id: col.id,
        title: col.titleKey ? t(col.titleKey) : undefined,
        items: col.items?.map((item) => ({
          id: item.id,
          label: t(item.labelKey),
          ...(item.href != null && { href: item.href })
        })),
        withCustomContent: col.withCustomContent
      })),
    [t]
  )
}
