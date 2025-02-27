'use client'

import React, { useState, MouseEvent } from 'react'
import {
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  Menu,
  Button
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const categories = [
  'All Categories',
  'Electronics',
  'Clothing',
  'Books',
  'Home'
]

function SearchBar2() {
  const [category, setCategory] = useState<string>(categories[0])
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [searchText, setSearchText] = useState<string>('')

  const handleCategoryClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCategoryClose = () => {
    setAnchorEl(null)
  }

  const handleCategorySelect = (category: string) => {
    setCategory(category)
    handleCategoryClose()
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const handleSearchSubmit = () => {
    console.log('Search Text:', searchText)
    console.log('Selected Category:', category)
    // логика поиска
  }

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '670px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Searching for..."
        value={searchText}
        onChange={handleSearchChange}
        fullWidth
        sx={{
          '.MuiOutlinedInput-root': {
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            width: '100%',
            p: 0,
            height: '46px',
            overflow: 'hidden',
            cursor: 'text',
            color: '#2B3445',
            borderRadius: '8px',
            border: '0px solid',
            backgroundColor: '#F3F5F9',
            '.MuiOutlinedInput-input': {
              p: '8px 0',
              height: '1.8em'
            }
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                mr: '16px',
                paddingInline: '16px',
                borderRight: '1px solid rgb(218, 225, 231)'
              }}
            >
              <SearchIcon sx={{ fontSize: '17px' }} />
            </InputAdornment>
          ),
          endAdornment: (
            <Button
              onClick={handleCategoryClick}
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '4px',
                height: '100%',
                textTransform: 'none',
                fontSize: '14px',
                width: '160px',
                minWidth: '160px',
                color: '#4B566B',
                p: '0',
                m: '0',
                paddingInline: '24px',
                whiteSpace: 'pre',
                borderLeft: '1px solid rgb(218, 225, 231)',
                borderRadius: 0,
                ':hover': {
                  backgroundColor: '#F3F5F9'
                }
              }}
            >
              {category}
              <KeyboardArrowDownIcon sx={{ fontSize: '20px' }} />
            </Button>
          )
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCategoryClose}
        sx={{
          '.MuiPaper-root': {
            mt: '8px',
            minWidth: '180px',
            boxShadow: 'rgba(43, 52, 69, 0.05) 0px 0px 24px 0px'
          }
        }}
      >
        {categories.map((cat) => (
          <MenuItem key={cat} onClick={() => handleCategorySelect(cat)}>
            {cat}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default SearchBar2
