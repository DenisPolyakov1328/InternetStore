import type { Components, Theme } from '@mui/material'

export const svgIconTheme: Components<Theme>['MuiSvgIcon'] = {
   styleOverrides: {
      root: ({ theme }) => ({
         fontSize: '24px',
         color: theme.palette.grey[800]
      })
   }
}
