import React from 'react'
import { Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchIconWithBox: React.FC = () => {
  return (
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
  )
}

export default SearchIconWithBox
