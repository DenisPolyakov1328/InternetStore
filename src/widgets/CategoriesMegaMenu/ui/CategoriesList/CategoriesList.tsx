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
import { Category } from './../../model/types'

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
              sx={(theme) => ({
                height: '40px',
                minWidth: '278px',
                padding: '0 16px',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'none',
                '&.Mui-selected': {
                  backgroundColor: theme.palette.grey[700]
                },
                '&.Mui-selected:hover': {
                  backgroundColor: theme.palette.grey[700]
                }
              })}
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
