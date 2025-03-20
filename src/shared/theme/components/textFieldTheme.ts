import type { Components, Theme } from '@mui/material';

export const textFieldTheme: Components<Theme>['MuiTextField'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            '.MuiOutlinedInput-root': {
                padding: 0,
                overflow: 'hidden',
                cursor: 'text',
                color: theme.palette.secondary.main,
                borderRadius: '8px',
                border: '0px solid',
                backgroundColor: theme.palette.grey[300],
                '.MuiOutlinedInput-input': {
                    padding: '8.5px 0',
                    height: '1.8em'
                }
            }
        }),

    }
};