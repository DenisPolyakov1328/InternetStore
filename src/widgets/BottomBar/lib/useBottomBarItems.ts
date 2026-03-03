'use client'

import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import type { SvgIconComponent } from '@mui/icons-material'
import { bottomBarItemsStructure } from '../model/bottomBarItemsStructure'
import type { BottomBarItemType } from '@/shared/types'

const BOTTOM_BAR_ICON_MAP: Record<number, SvgIconComponent> = {
  1: HomeOutlinedIcon,
  2: GridViewOutlinedIcon,
  3: ShoppingBagOutlinedIcon,
  4: PermIdentityOutlinedIcon
}

export function useBottomBarItems(): BottomBarItemType[] {
  const t = useTranslations('nav')
  return useMemo(
    () =>
      bottomBarItemsStructure.map((item) => ({
        id: item.id,
        icon: BOTTOM_BAR_ICON_MAP[item.id]!,
        title: t(item.titleKey),
        href: item.href,
        withBadge: item.withBadge
      })),
    [t]
  )
}
