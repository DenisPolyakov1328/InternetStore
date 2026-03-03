import { routes } from '@/shared/router'
import type { NavKey } from '@/shared/i18n/messageKeys'

export interface BottomBarItemStructure {
  id: number
  titleKey: NavKey
  href: string
  withBadge?: boolean
}

export const bottomBarItemsStructure: BottomBarItemStructure[] = [
  { id: 1, titleKey: 'home', href: routes.home },
  { id: 2, titleKey: 'categories', href: routes.categories },
  {
    id: 3,
    titleKey: 'cart',
    href: routes.cart,
    withBadge: true
  },
  { id: 4, titleKey: 'account', href: routes.account }
]
