import React from 'react'
import { IconButton } from '@mui/material'
import CategoryIcon from '@mui/icons-material/Category'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const CategoriesTriggerIconButton = () => {
  return (
    <IconButton sx={{ borderRadius: 2, paddingY: 0.75, paddingX: 1 }}>
      <CategoryIcon />
      <KeyboardArrowDownIcon />
    </IconButton>
  )
}
