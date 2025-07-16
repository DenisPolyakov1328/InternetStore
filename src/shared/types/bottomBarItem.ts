import { SvgIconComponent } from '@mui/icons-material'

export interface BottomBarItemType {
  id: number
  icon: SvgIconComponent
  title: string
  href: string
  withBadge?: boolean
}
