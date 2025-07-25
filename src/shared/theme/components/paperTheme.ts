import type { Components, Theme } from '@mui/material'

export const paperTheme: Components<Theme>['MuiPaper'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      position: 'relative',
      borderRadius: 0,
      color: theme.palette.secondary.main,
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
      cursor: 'auto'
    })
  }
}
