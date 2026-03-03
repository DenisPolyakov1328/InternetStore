'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { categoriesStructure } from '@/entities/category/model/categoriesStructure'
import { categoriesIconMap } from '@/entities/category/model/categoriesIconMap'
import type { Category } from '@/shared/types'
import {
  getCategoryLabelKey,
  getSubCategoryTitleKey,
  getCategoryItemLabelKey
} from '@/entities/category/model/categoryTranslationKeys'
import type { CategoriesKey } from '@/shared/i18n/messageKeys'

export function useCategories(): Category[] {
  const locale = useLocale()
  const t = useTranslations('categories')
  return useMemo(
    () =>
      categoriesStructure.map((cat) => ({
        id: cat.id,
        href: cat.href,
        label: t(getCategoryLabelKey(cat.id) as CategoriesKey),
        icon: categoriesIconMap[cat.iconId ?? cat.id],
        subCategories: cat.subCategories.map((sub) => ({
          id: sub.id,
          href: sub.href,
          title: t(getSubCategoryTitleKey(cat.id, sub.id) as CategoriesKey),
          items: sub.items.map((item) => ({
            id: item.id,
            href: item.href,
            label: t(
              getCategoryItemLabelKey(cat.id, sub.id, item.id) as CategoriesKey
            )
          }))
        }))
      })),
    [t, locale]
  )
}
