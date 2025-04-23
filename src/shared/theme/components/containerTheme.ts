import type { Components, Theme } from '@mui/material';

export const containerTheme: Components<Theme>['MuiContainer'] = {
    defaultProps: {
        disableGutters: true,
    },
    styleOverrides: {
        root: ({ theme }) => ({
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '16px',
            paddingRight: '16px',
            [theme.breakpoints.up('smp')]: {
                paddingLeft: '24px',
                paddingRight: '24px',
            }
        })
    }
}