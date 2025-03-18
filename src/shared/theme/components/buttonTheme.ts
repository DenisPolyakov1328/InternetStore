import type { Components, Theme } from '@mui/material';

export const buttonTheme: Components<Theme>['MuiButton'] = {
    styleOverrides: {
        root: {
            fontSize: '14px',
            height: '100%',
            textTransform: 'none',
        },
    }
}
