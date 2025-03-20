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
      sx={{
        '.MuiPaper-root': {
          mt: '8px',
          minWidth: '180px',
          boxShadow: '#2b34450d 0px 0px 24px 0px'
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
