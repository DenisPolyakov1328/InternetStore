import React from 'react'
import { Paper, Collapse } from '@mui/material'
import { Category } from '@/shared/types'
import { CategoriesList } from '@/shared/ui'

interface CategoriesListProps {
  categories: Category[]
  open: boolean
  hoveredCategory: string | null
  onHover: (id: string) => void
}

export const CategoriesCollapseList = ({
  categories,
  open,
  hoveredCategory,
  onHover
}: CategoriesListProps) => {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: '8px',
        color: 'secondary.main'
      }}
    >
      <Collapse in={open} orientation="vertical" timeout={250} unmountOnExit>
        <CategoriesList
          categories={categories}
          hoveredCategory={hoveredCategory}
          onHover={onHover}
          minWidthValue={'278px'}
        />
      </Collapse>
    </Paper>
  )
}
