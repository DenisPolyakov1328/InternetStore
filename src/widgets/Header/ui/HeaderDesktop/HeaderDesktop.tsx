import { SearchBar } from '@/widgets/SearchBar'
import { Box, SxProps, Theme } from '@mui/material'
import { Logo } from '@/shared/ui/Logo'
import { HeaderActions } from '../HeaderActions/HeaderActions'
import { CategoriesMegaMenu } from '@/widgets/CategoriesMegaMenu'
import { CategoriesTriggerIconButton } from '@/widgets/CategoriesMegaMenu/ui/CategoriesTriggerIconButton/CategoriesTriggerIconButton'

interface HeaderDesktopProps {
  isFixed?: boolean
  sx?: SxProps<Theme>
}

export const HeaderDesktop = ({
  isFixed = false,
  sx = {}
}: HeaderDesktopProps) => {
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
        {isFixed && (
          <CategoriesMegaMenu trigger={() => <CategoriesTriggerIconButton />} />
        )}
        <SearchBar showCategories={true} />
        <HeaderActions />
      </Box>
    </>
  )
}
