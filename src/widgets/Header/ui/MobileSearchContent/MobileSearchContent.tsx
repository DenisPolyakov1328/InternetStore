import React from 'react'
import { Box, Typography } from '@mui/material'
import { CustomIconButton } from '@/shared/ui'
import CloseIcon from '@mui/icons-material/Close'
import { SearchBar } from '@/features/SearchBar'

export const MobileSearchContent = ({ onClose }: { onClose: () => void }) => (
  <Box sx={{ width: 'auto', padding: 2, height: '100vh' }}>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 1
      }}
    >
      <Typography variant="subtitle1">Поиск по магазину</Typography>
      <CustomIconButton icon={CloseIcon} onClick={onClose} />
    </Box>
    <SearchBar showSearchButton={true} />
  </Box>
)
