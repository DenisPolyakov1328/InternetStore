import React from 'react'
import { Menu, MenuItem } from '@mui/material'

interface CategoryMenuProps {
  anchorEl: HTMLElement | null
  onClose: () => void
  onSelect: (category: string) => void
  categories: string[]
}

export const CategoryMenu = ({
  anchorEl,
  onClose,
  onSelect,
  categories
}: CategoryMenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      slotProps={{
        root: {
          sx: { zIndex: 2000 }
        },
        paper: {
          sx: {
            mt: 1,
            minWidth: 180,
            boxShadow: '#2b34450d 0 0 24px 0'
          }
        }
      }}
    >
      {categories.map((cat) => (
        <MenuItem key={cat} onClick={() => onSelect(cat)}>
          {cat}
        </MenuItem>
      ))}
    </Menu>
  )
}
