import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import type { SvgIconComponent } from '@mui/icons-material'

export interface BottomBarItemStructure {
  id: number
  icon: SvgIconComponent
  titleKey: string
  href: string
  withBadge?: boolean
}

export const bottomBarItemsStructure: BottomBarItemStructure[] = [
  { id: 1, icon: HomeOutlinedIcon, titleKey: 'home', href: '/' },
  { id: 2, icon: GridViewOutlinedIcon, titleKey: 'categories', href: '/categories' },
  { id: 3, icon: ShoppingBagOutlinedIcon, titleKey: 'cart', href: '/cart', withBadge: true },
  { id: 4, icon: PermIdentityOutlinedIcon, titleKey: 'account', href: '/account' }
]
