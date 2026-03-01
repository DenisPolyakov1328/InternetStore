'use client'
import React from 'react'
import { Button } from '@mui/material'
import { useTranslations } from 'next-intl'

interface SearchButtonProps {
  onClick?: () => void
}

export const SearchButton = ({ onClick }: SearchButtonProps) => {
  const t = useTranslations('common')
  return (
    <Button
      sx={{
        color: 'primary.contrastText',
        borderRadius: 0,
        padding: '6px 48px',
        ':hover': {
          backgroundColor: 'primary.light'
        }
      }}
      onClick={onClick}
    >
      {t('search')}
    </Button>
  )
}
