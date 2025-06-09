import { SearchBar } from '@/widgets/SearchBar'
import { Box, SxProps, Theme } from '@mui/material'
import { Logo } from '@/shared/ui/Logo'
import { HeaderActions } from '../HeaderActions/HeaderActions'

interface HeaderDesktopProps {
  sx: SxProps<Theme>
}

export const HeaderDesktop = ({ sx = {} }: HeaderDesktopProps) => {
  return (
    <>
      <Box
        sx={{
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2px',
          ...sx
        }}
      >
        <Logo />
        <SearchBar showCategories={true} />
        <HeaderActions />
      </Box>
    </>
  )
}
