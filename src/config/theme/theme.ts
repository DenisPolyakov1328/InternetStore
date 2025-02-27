import { createTheme } from '@mui/material/styles';
import { Public_Sans } from 'next/font/google';

declare module '@mui/material/styles' {
    interface PaletteOptions {
        custom: {
            orange: string;
            green: string;
        };
    }
}

const publicSans = Public_Sans({
    weight: ["400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
})


const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        custom: {
            orange: '#ff5722',
            green: '#4caf50',
        },
    },
    typography: {
        fontSize: 14,
        fontFamily: publicSans.style.fontFamily,
    },
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#4b566b8a',
                    borderRadius: '12px',
                    '&:hover': {
                        backgroundColor: '#4b566b0a',
                    }
                },
            },
        },
        MuiBadge: {
            styleOverrides: {
                root: {
                    '.MuiBadge-standard': {
                        fontSize: '12px',
                        color: 'white',
                        backgroundColor: '#1f2937'
                    }
                },
            },
        },
    },
});

export default theme;