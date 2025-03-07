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
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
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
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    height: '100%',
                    textTransform: 'none',
                },
            },
        },
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
        MuiTextField: {
            styleOverrides: {
                root: {
                    '.MuiOutlinedInput-root': {
                        padding: 0,
                        overflow: 'hidden',
                        cursor: 'text',
                        color: '#2B3445',
                        borderRadius: '8px',
                        border: '0px solid',
                        backgroundColor: '#F3F5F9',
                        '.MuiOutlinedInput-input': {
                            padding: '8.5px 0',
                            height: '1.8em'
                        }
                    }
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: '17px',
                    color: '#7d879c',
                },
            },
        },
    },
});

export default theme;