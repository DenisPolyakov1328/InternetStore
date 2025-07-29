import { Typography } from '@mui/material'
import { SubCategory } from '@/shared/types'

export const BurgerSubMenuItem = ({ item }: { item: SubCategory }) => {
  return (
    <Typography component="a" href={item.href} sx={{ p: 1 }}>
      {item.label}
    </Typography>
  )
}
