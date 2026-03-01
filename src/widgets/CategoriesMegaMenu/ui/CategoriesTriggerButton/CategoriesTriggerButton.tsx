'use client'
import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useTranslations } from 'next-intl'
import CategoryIcon from '@mui/icons-material/Category'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

interface CategoriesTriggerButtonProps {
  isOpen: boolean
}

export const CategoriesTriggerButton = ({
  isOpen
}: CategoriesTriggerButtonProps) => {
  const t = useTranslations('nav')
  return (
    <Button
      sx={{
        width: 278,
        borderRadius: 2,
        paddingY: 0.75,
        paddingX: 1,
        gap: 1,
        backgroundColor: 'grey.100',
        color: 'secondary.main'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          flex: '1 1 0%'
        }}
      >
        <CategoryIcon sx={{ color: 'info.main' }} />
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {t('categories')}
        </Typography>
      </Box>
      <Box
        component="span"
        sx={{
          display: 'flex',
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'
        }}
      >
        <KeyboardArrowRightIcon />
      </Box>
    </Button>
  )
}
