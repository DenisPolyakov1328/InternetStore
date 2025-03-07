import React from 'react'
import { Menu, MenuItem } from '@mui/material'

interface CategoryMenuProps {
  anchorEl: HTMLElement | null
  onClose: () => void
  onSelect: (category: string) => void
  categories: string[]
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  anchorEl,
  onClose,
  onSelect,
  categories
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      sx={{
        '.MuiPaper-root': {
          mt: '8px',
          minWidth: '180px',
          boxShadow: 'rgba(43, 52, 69, 0.05) 0px 0px 24px 0px'
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

export default CategoryMenu
