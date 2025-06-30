import type { Components, Theme } from '@mui/material'

export const listItemButtonTheme: Components<Theme>['MuiListItemButton'] = {
   styleOverrides: {
      root: ({ theme }) => ({
         padding: '0 16px',
         alignItems: 'center',
         justifyContent: 'space-between',
         transition: 'none',
         '&.Mui-selected': {
            backgroundColor: theme.palette.grey[700]
         },
         '&.Mui-selected:hover': {
            backgroundColor: theme.palette.grey[700]
         }
      })
   }
}
