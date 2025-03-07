'use client'
import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchBarCopy: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('')

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
            height: '44px',
            paddingLeft: '14px',
            '.MuiOutlinedInput-notchedOutline': {
              border: 0
            }
          }
        }}
        InputProps={{
          startAdornment: (
            <SearchIcon
              sx={{ fontSize: '17px', color: '#7d879c', mr: '6px' }}
            />
          ),
          endAdornment: (
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
          )
        }}
      />
    </Box>
  )
}

export default SearchBarCopy
