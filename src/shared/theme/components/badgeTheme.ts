import type { Components, Theme } from '@mui/material';

export const BadgeTheme: Components<Theme>['MuiBadge'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            '.MuiBadge-standard': {
                fontSize: '12px',
                color: 'white',
                backgroundColor: theme.palette.custom.dark
            }
        }),

    }
};
