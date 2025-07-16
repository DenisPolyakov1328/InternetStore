import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import { BottomBarItemType } from '@/shared/types'

export const bottomBarItems: BottomBarItemType[] = [
  { id: 1, icon: HomeOutlinedIcon, title: 'Главная', href: '#' },
  { id: 2, icon: GridViewOutlinedIcon, title: 'Категории', href: '#' },
  {
    id: 3,
    icon: ShoppingBagOutlinedIcon,
    title: 'Корзина',
    href: '#',
    withBadge: true
  },
  { id: 4, icon: PermIdentityOutlinedIcon, title: 'Аккаунт', href: '#' }
]
