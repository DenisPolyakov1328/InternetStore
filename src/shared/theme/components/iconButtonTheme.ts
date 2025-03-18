import type { Components, Theme } from '@mui/material';

export const selectTheme: Components<Theme>['MuiSelect'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            color: theme.palette.custom.grey,
            borderRadius: '12px',
            '&:hover': {
                backgroundColor: theme.palette.custom.background.iconGrey,
            }
        }),

    }
};
