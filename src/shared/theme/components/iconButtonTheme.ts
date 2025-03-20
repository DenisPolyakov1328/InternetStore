import type { Components, Theme } from '@mui/material';

export const iconButtonTheme: Components<Theme>['MuiIconButton'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            color: theme.palette.grey[800],
            borderRadius: '12px',
            '&:hover': {
                backgroundColor: theme.palette.grey[700],
            }
        }),

    }
};
