import type { Components, Theme } from '@mui/material'

export const toggleButtonGroupTheme: Components<Theme>['MuiToggleButtonGroup'] =
  {
    styleOverrides: {
      grouped: ({ theme }) => ({
        minWidth: 44,
        padding: theme.spacing(0.5, 1.5),
        fontSize: 12,
        textTransform: 'none',
        fontWeight: 600,
        color: theme.palette.grey[800],
        borderColor: theme.palette.primary.light,
        '&:hover': {
          backgroundColor: theme.palette.primary.light
        },
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.main
          }
        }
      })
    }
  }
