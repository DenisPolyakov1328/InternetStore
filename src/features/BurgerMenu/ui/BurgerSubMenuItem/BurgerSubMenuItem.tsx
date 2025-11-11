import { Typography } from '@mui/material'
import { SubCategory } from '@/shared/types'
import { NextLink } from '@/shared/ui'

interface BurgerSubMenuItemProps {
  item: SubCategory
  close: () => void
}

export const BurgerSubMenuItem = ({ item, close }: BurgerSubMenuItemProps) => {
  return (
    <Typography
      component={NextLink}
      href={item.href}
      sx={{ p: 1 }}
      onClick={close}
    >
      {item.label}
    </Typography>
  )
}
