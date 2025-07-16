import { SearchBar } from '@/features/SearchBar'
import { Box, SxProps, Theme } from '@mui/material'
import { HeaderActions } from '../HeaderActions/HeaderActions'
import { Logo } from '@/shared/ui'
import { CategoriesMegaMenu } from '@/widgets/CategoriesMegaMenu'

interface HeaderDesktopProps {
  isFixed?: boolean
  sx?: SxProps<Theme>
}

export const HeaderDesktop = ({
  isFixed = false,
  sx = {}
}: HeaderDesktopProps) => {
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
      <Logo />
      {isFixed && <CategoriesMegaMenu />}
      <SearchBar showCategories={true} />
      <HeaderActions />
    </Box>
  )
}
