import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import CategoryIcon from '@mui/icons-material/Category'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

interface CategoriesTriggerButtonProps {
   isOpen: boolean
}

export const CategoriesTriggerButton = ({
   isOpen
}: CategoriesTriggerButtonProps) => {
   return (
      <IconButton
         sx={{
            borderRadius: '8px',
            padding: '6px 8px',
            display: 'flex',
            gap: 1,
            transition: 'color 0.2s'
         }}
      >
         <CategoryIcon />
         <Typography variant="body2">Категории</Typography>
         <Box
            component="span"
            sx={{
               display: 'flex',
               transition: 'transform 0.3s ease',
               transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
         >
            <KeyboardArrowDownIcon />
         </Box>
      </IconButton>
   )
}
