import React from 'react'
import { IconButton } from '@mui/material'
import CategoryIcon from '@mui/icons-material/Category'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const CategoriesTriggerIconButton = () => {
   return (
      <IconButton sx={{ borderRadius: '8px', padding: '6px 8px' }}>
         <CategoryIcon />
         <KeyboardArrowDownIcon />
      </IconButton>
   )
}
