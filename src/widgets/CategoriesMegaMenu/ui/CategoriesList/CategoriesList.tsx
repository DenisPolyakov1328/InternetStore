import React from 'react'
import {
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Category } from '@/shared/types'

interface CategoriesListProps {
  categories: Category[]
  open: boolean
  hoveredCategory: number | null
  onHover: (index: number) => void
}

export const CategoriesList = ({
  categories,
  open,
  hoveredCategory,
  onHover
}: CategoriesListProps) => {
  return (
    <Paper
      elevation={3}
      sx={(theme) => ({
        borderRadius: '8px',
        color: theme.palette.secondary.main
      })}
    >
      <Collapse in={open} orientation="vertical" timeout={250} unmountOnExit>
        <List>
          {categories.map((cat, index) => (
            <ListItemButton
              key={cat.label}
              selected={hoveredCategory === index}
              onMouseEnter={() => onHover(index)}
              sx={{
                height: '40px',
                minWidth: '278px'
              }}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>{cat.icon}</ListItemIcon>
              <ListItemText primary={cat.label} sx={{ paddingLeft: '12px' }} />
              {cat.subCategories.length > 0 && <KeyboardArrowRightIcon />}
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </Paper>
  )
}
