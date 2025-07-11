import type { Components, Theme } from '@mui/material'

export const buttonTheme: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'contained'
  },
  styleOverrides: {
    root: {
      fontSize: '14px',
      height: '100%',
      borderRadius: '12px',
      textTransform: 'none',
      boxShadow: 'none',
      '&:hover': { boxShadow: 'none' }
    }
  }
}
