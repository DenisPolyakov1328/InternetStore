import React from 'react'
import { Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const SearchIconWithBox = () => {
  return (
    <Box
      sx={(theme) => ({
        display: 'grid',
        mr: 2,
        paddingInline: 2,
        borderRight: `1px solid ${theme.palette.custom.border}`
      })}
    >
      <SearchIcon />
    </Box>
  )
}
