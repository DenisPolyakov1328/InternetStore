'use client'
import React, { useState, MouseEvent } from 'react'
import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import SearchIconWithBox from './SearchIconWithBox/SearchIconWithBox'
import CategoryMenu from './CategoryMenu/CategoryMenu'
import CategoryButton from './Buttons/CategoryButton'
import SearchButton from './Buttons/SearchButton'

interface SearchBarProps {
  showCategories?: boolean
  showSearchButton?: boolean
}

const categories = [
  'All Categories',
  'Electronics',
  'Clothing',
  'Books',
  'Home'
]

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
            <SearchIconWithBox />
          ) : (
            <SearchIcon sx={{ mr: '6px' }} />
          ),
          endAdornment: showCategories ? (
            <CategoryButton
              category={category}
              onCategoryClick={handleCategoryClick}
            />
          ) : (
            <SearchButton />
          )
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
