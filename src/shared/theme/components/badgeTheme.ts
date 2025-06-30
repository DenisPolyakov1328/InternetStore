import type { Components, Theme } from '@mui/material'

export const badgeTheme: Components<Theme>['MuiBadge'] = {
   styleOverrides: {
      root: ({ theme }) => ({
         '.MuiBadge-standard': {
            fontFamily: 'inherit',
            fontSize: '12px',
            color: 'white',
            backgroundColor: theme.palette.primary.main
         }
      })
   }
}
