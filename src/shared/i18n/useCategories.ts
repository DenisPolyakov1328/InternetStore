'use client'

import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { categoriesArray } from '@/entities/category/model/categoriesArray'
import type { Category } from '@/shared/types'
import {
  getCategoryLabelKey,
  getSubCategoryTitleKey,
  getCategoryItemLabelKey
} from '@/entities/category/model/categoryTranslationKeys'

export function useCategories(): Category[] {
  const t = useTranslations('categories')
  return useMemo(() => {
    return categoriesArray.map((cat) => ({
      ...cat,
      label: t(getCategoryLabelKey(cat.id) as any),
      subCategories: cat.subCategories?.map((sub) => ({
        ...sub,
        title: t(getSubCategoryTitleKey(cat.id, sub.id) as any),
        items: sub.items.map((item) => ({
          ...item,
          label: t(getCategoryItemLabelKey(cat.id, sub.id, item.id) as any)
        }))
      }))
    }))
  }, [t])
}
