import { SearchBar } from '@/widgets/SearchBar'
import { Box, SxProps, Theme } from '@mui/material'
import { HeaderActions } from '../HeaderActions/HeaderActions'
import { Logo } from '@/shared/ui'
import {
   CategoriesMegaMenu,
   CategoriesTriggerIconButton
} from '@/widgets/CategoriesMegaMenu'

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
               <CategoriesMegaMenu
                  trigger={() => <CategoriesTriggerIconButton />}
               />
            )}
            <SearchBar showCategories={true} />
            <HeaderActions />
         </Box>
      </>
   )
}
