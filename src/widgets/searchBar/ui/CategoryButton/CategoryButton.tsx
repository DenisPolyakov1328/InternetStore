import React, { MouseEvent } from 'react'
import { Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

interface CategoryButtonProps {
   category: string
   onCategoryClick: (event: MouseEvent<HTMLElement>) => void
}

export const CategoryButton = ({
   category,
   onCategoryClick
}: CategoryButtonProps) => {
   return (
      <Button
         variant="text"
         onClick={onCategoryClick}
         sx={(theme) => ({
            justifyContent: 'flex-end',
            gap: '4px',
            width: '160px',
            minWidth: '160px',
            color: theme.palette.secondary.dark,
            padding: '0 17px',
            whiteSpace: 'pre',
            borderLeft: `1px solid ${theme.palette.custom.border}`,
            borderRadius: 0,
            ':hover': {
               backgroundColor: theme.palette.grey[300]
            }
         })}
      >
         {category}
         <KeyboardArrowDownIcon sx={{ fontSize: '20px' }} />
      </Button>
   )
}
