import type { Components, Theme } from '@mui/material'

export const badgeTheme: Components<Theme>['MuiBadge'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '.MuiBadge-standard': {
        fontFamily: 'inherit',
        fontSize: '12px',
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.primary.main
      }
    })
  }
}
