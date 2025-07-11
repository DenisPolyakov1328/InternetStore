import React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Category } from '@/shared/types'

interface CategoriesListViewProps {
  categories: Category[]
  hoveredCategory: string | null
  onHover: (id: string) => void
  minWidthValue?: string
}

export const CategoriesList = ({
  categories,
  hoveredCategory,
  onHover,
  minWidthValue = 'auto'
}: CategoriesListViewProps) => {
  return (
    <List>
      {categories.map((cat) => (
        <ListItemButton
          key={cat.id}
          selected={hoveredCategory === cat.id}
          onMouseEnter={() => onHover(cat.id)}
          sx={{
            height: '40px',
            minWidth: minWidthValue,
            whiteSpace: 'nowrap'
          }}
        >
          {cat.icon && (
            <ListItemIcon sx={{ minWidth: 0 }}>{cat.icon}</ListItemIcon>
          )}
          <ListItemText
            primary={cat.label}
            sx={{ paddingLeft: cat.icon ? '12px' : 0 }}
          />
          {cat.subCategories?.length ? <KeyboardArrowRightIcon /> : null}
        </ListItemButton>
      ))}
    </List>
  )
}
