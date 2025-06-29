import React from 'react'
import { Button } from '@mui/material'

interface SearchButtonProps {
  onClick?: () => void
}

export const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <Button
      color="primary"
      sx={(theme) => ({
        color: theme.palette.primary.contrastText,
        borderRadius: 0,
        padding: '6px 48px',
        ':hover': {
          backgroundColor: theme.palette.primary.light
        }
      })}
      onClick={onClick}
    >
      Поиск
    </Button>
  )
}
