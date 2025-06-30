'use client'

import { createTheme } from '@mui/material'

import { breakpoints } from './breakpoints'
import { createColorTheme } from './colorTheme'
import {
   containerTheme,
   badgeTheme,
   buttonTheme,
   iconButtonTheme,
   svgIconTheme,
   textFieldTheme,
   listItemButtonTheme
} from './components'

import { fontFamily } from './fontTheme'

export const createMuiTheme = () => {
   const colorTheme = createColorTheme()

   return createTheme({
      palette: colorTheme,
      typography: {
         allVariants: {
            fontFamily
         }
      },
      breakpoints,
      components: {
         MuiContainer: containerTheme,
         MuiBadge: badgeTheme,
         MuiButton: buttonTheme,
         MuiIconButton: iconButtonTheme,
         MuiSvgIcon: svgIconTheme,
         MuiTextField: textFieldTheme,
         MuiListItemButton: listItemButtonTheme
      }
   })
}
