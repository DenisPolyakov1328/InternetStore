import React from 'react'
import { Button } from '@mui/material'

interface SearchButtonProps {
  onClick?: () => void
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <Button
      sx={{
        color: '#e9edf8',
        backgroundColor: '#1F2937',
        borderRadius: 0,
        padding: '6px 48px',
        ':hover': {
          backgroundColor: '#404f64'
        }
      }}
      onClick={onClick}
    >
      Search
    </Button>
  )
}

export default SearchButton
