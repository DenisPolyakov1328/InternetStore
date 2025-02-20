'use client'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export default function Search() {
  return (
    <IconButton
      aria-label="search"
      sx={{
        borderRadius: '10px'
      }}
    >
      <SearchIcon />
    </IconButton>
  )
}
