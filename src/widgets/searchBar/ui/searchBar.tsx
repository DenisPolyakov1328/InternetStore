'use client'
import React, { useState, MouseEvent } from 'react'
import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { SearchIconWithBox } from './SearchIconWithBox'
import { CategoryButton } from './CategoryButton'
import { SearchButton } from './SearchButton'
import { CategoryMenu } from './CategoryMenu'

interface SearchBarProps {
   showCategories?: boolean
   showSearchButton?: boolean
}

const categories = [
   'Все категории',
   'Одежда',
   'Обувь',
   'Нижнее белье',
   'Аксессуары',
   'Домашняя страница'
]

export const SearchBar = ({
   showCategories = false,
   showSearchButton = false
}: SearchBarProps) => {
   const [category, setCategory] = useState<string>(categories[0])
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   const [searchText, setSearchText] = useState<string>('')

   const handleCategoryClick = (event: MouseEvent<HTMLElement>) => {
      if (anchorEl) {
         setAnchorEl(null)
      } else {
         setAnchorEl(event.currentTarget)
      }
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
            marginRight: 'auto',
            flex: '1 1 0px'
         }}
      >
         <TextField
            variant="outlined"
            placeholder="Поиск..."
            value={searchText}
            onChange={handleSearchChange}
            fullWidth
            sx={(theme) => ({
               '.MuiOutlinedInput-root': {
                  height: showSearchButton ? '44px' : '46px',
                  paddingLeft: showSearchButton ? '14px' : '0',
                  ':hover .MuiOutlinedInput-notchedOutline': {
                     borderColor: showSearchButton
                        ? 'transparent'
                        : theme.palette.secondary.main
                  },
                  '.MuiOutlinedInput-notchedOutline': {
                     borderColor: showSearchButton
                        ? 'transparent'
                        : theme.palette.custom.border
                  },
                  '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                     {
                        borderColor: showSearchButton
                           ? 'transparent'
                           : theme.palette.primary.main
                     }
               }
            })}
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
