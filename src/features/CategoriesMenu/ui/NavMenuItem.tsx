'use client'
import React, { useState } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { SubCategory } from '@/shared/types'
import { CategoriesList } from '@/shared/ui'

interface NavMenuItemProps {
  title: string
  subCategories: SubCategory[]
}

export const NavMenuItem = ({ title, subCategories }: NavMenuItemProps) => {
  const [open, setOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <Box
      sx={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false)
        setHoveredCategory(null)
      }}
    >
      <Box sx={{ display: 'flex', gap: 0.3, cursor: 'pointer' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <KeyboardArrowDownIcon />
      </Box>

      {open && (
        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'flex-start'
          }}
        >
          <Paper
            elevation={3}
            sx={{
              borderRadius: 2,
              color: 'secondary.main',
              marginTop: 2.5
            }}
          >
            <CategoriesList
              categories={subCategories}
              hoveredCategory={hoveredCategory}
              onHover={setHoveredCategory}
            />
          </Paper>
        </Box>
      )}
    </Box>
  )
}
