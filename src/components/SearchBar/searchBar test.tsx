'use client'
import React, { useState, MouseEvent } from 'react'
import { Box, TextField, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CategoryMenu from './CategoryMenu/CategoryMenu'

const categories = [
  'All Categories',
  'Electronics',
  'Clothing',
  'Books',
  'Home'
]

interface SearchBarProps {
  showCategories?: boolean
  showSearchButton?: boolean
}

const SearchBarTest: React.FC<SearchBarProps> = ({
  showCategories = false,
  showSearchButton = false
}) => {
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
            height: showSearchButton ? '44px' : '46px',
            paddingLeft: showSearchButton ? '14px' : '0',
            ':hover .MuiOutlinedInput-notchedOutline': {
              borderColor: showSearchButton ? 'transparent' : '#2b3445'
            },
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: showSearchButton ? 'transparent' : '#dae1e7'
            },
            '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
              {
                borderColor: showSearchButton ? 'transparent' : '#1f2937'
              }
          }
        }}
        InputProps={{
          startAdornment: showCategories ? (
            <Box
              sx={{
                display: 'grid',
                mr: '16px',
                paddingInline: '16px',
                borderRight: '1px solid rgb(218, 225, 231)'
              }}
            >
              <SearchIcon />
            </Box>
          ) : (
            <SearchIcon sx={{ mr: '6px' }} />
          ),
          endAdornment: showCategories ? (
            <Button
              onClick={handleCategoryClick}
              sx={{
                justifyContent: 'flex-end',
                gap: '4px',
                height: '100%',
                textTransform: 'none',
                fontSize: '14px',
                width: '160px',
                minWidth: '160px',
                color: '#4B566B',
                padding: '0 24px',
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
          ) : showSearchButton ? (
            <Button
              sx={{
                height: '100%',
                textTransform: 'none',
                fontSize: '14px',
                color: '#e9edf8',
                backgroundColor: '#1F2937',
                borderRadius: 0,
                padding: '6px 48px',
                ':hover': {
                  backgroundColor: '#404f64'
                }
              }}
            >
              Search
            </Button>
          ) : null
        }}
      />
      {showCategories && (
        <CategoryMenu
          anchorEl={anchorEl}
          onClose={handleCategoryClose}
          onSelect={handleCategorySelect}
          categories={categories}
        />
      )}
    </Box>
  )
}

export default SearchBarTest
