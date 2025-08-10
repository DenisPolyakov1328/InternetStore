'use client'
import { Box, SxProps, Theme } from '@mui/material'
import { Logo } from '@/shared/ui'
import { HeaderActions } from '../HeaderActions'
import { BurgerMenu } from '@/features/BurgerMenu'

interface HeaderMobileProps {
  sx?: SxProps<Theme>
}

export const HeaderMobile = ({ sx = {} }: HeaderMobileProps) => {
  return (
    <Box
      sx={{
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 0.25,
        ...sx
      }}
    >
      <Box sx={{ flex: '1 1 0%' }}>
        <BurgerMenu />
      </Box>
      <Logo sx={{ display: 'block' }} href="/" priority={true} />
      <HeaderActions
        isMobile={true}
        sx={{
          display: 'flex',
          justifyContent: 'end',
          flex: '1 1 0%'
        }}
      />
    </Box>
  )
}
