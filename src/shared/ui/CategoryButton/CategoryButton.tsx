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
        gap: 0.5,
        width: 160,
        minWidth: 160,
        color: 'secondary.dark',
        paddingY: 0,
        paddingX: 2,
        whiteSpace: 'pre',
        borderLeft: `1px solid ${theme.palette.custom.border}`,
        borderRadius: 0,
        ':hover': {
          backgroundColor: 'grey.300'
        }
      })}
    >
      {category}
      <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
    </Button>
  )
}
