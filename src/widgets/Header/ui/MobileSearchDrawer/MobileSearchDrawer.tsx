import { CustomIconButton } from '@/shared/ui'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Drawer } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { SearchBar } from '@/features/SearchBar'

export const MobileSearchDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <CustomIconButton icon={SearchIcon} onClick={toggleDrawer} />
      <Drawer
        anchor="top"
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          zIndex: 9999,
          '& .MuiDrawer-paper': {
            backgroundColor: 'secondary.contrastText',
            boxShadow: 'none',
            overflow: 'hidden'
          }
        }}
      >
        <Box sx={{ width: 'auto', padding: 2, height: '100vh' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 1
            }}
          >
            <Box component="p">Поиск по магазину</Box>
            <CustomIconButton icon={CloseIcon} onClick={toggleDrawer} />
          </Box>
          <SearchBar showSearchButton={true} />
        </Box>
      </Drawer>
    </>
  )
}
