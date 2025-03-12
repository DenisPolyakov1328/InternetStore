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
      onClick={onCategoryClick}
      sx={{
        justifyContent: 'flex-end',
        gap: '4px',
        width: '160px',
        minWidth: '160px',
        color: '#4B566B',
        padding: '0 24px',
        whiteSpace: 'pre',
        borderLeft: '1px solid rgb(218, 225, 231)',
        borderRadius: 0,
        ':hover': {
          backgroundColor: '#F3F5F9'
        }
      }}
    >
      {category}
      <KeyboardArrowDownIcon sx={{ fontSize: '20px' }} />
    </Button>
  )
}
