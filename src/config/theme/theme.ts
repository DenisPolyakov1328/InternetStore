import { createTheme } from '@mui/material/styles';
import { Public_Sans } from 'next/font/google';

interface CustomPalette {
    custom: {
        background: {
            primary: string;
            secondary: string;
            inputGray: string;
            buttonDark: string;
            iconGrey: string;
        },
        dark: string;
        black: string;
        grey: string;
    };
}

declare module '@mui/material/styles' {
    interface Palette extends CustomPalette { }
    interface PaletteOptions extends CustomPalette { }
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
        custom: {
            background: {
                primary: '#f9f9f9',
                secondary: '#fff',
                inputGray: '#f3f5f9',
                buttonDark: '#191D23',
                iconGrey: '#4b566b0a'
            },
            dark: '#1f2937',
            black: '#2B3445',
            grey: '#7d879c',
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
                root: (props) => ({
                    color: props.theme.palette.custom.grey,
                    borderRadius: '12px',
                    '&:hover': {
                        backgroundColor: props.theme.palette.custom.background.iconGrey,
                    }
                }),
            },
        },
        MuiBadge: {
            styleOverrides: {
                root: (props) => ({
                    '.MuiBadge-standard': {
                        fontSize: '12px',
                        color: 'white',
                        backgroundColor: props.theme.palette.custom.dark
                    }
                }),
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: (props) => ({
                    '.MuiOutlinedInput-root': {
                        padding: 0,
                        overflow: 'hidden',
                        cursor: 'text',
                        color: props.theme.palette.custom.black,
                        borderRadius: '8px',
                        border: '0px solid',
                        backgroundColor: props.theme.palette.custom.background.inputGray,
                        '.MuiOutlinedInput-input': {
                            padding: '8.5px 0',
                            height: '1.8em'
                        }
                    }
                }),
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: (props) => ({
                    fontSize: '17px',
                    color: props.theme.palette.custom.grey,
                }),
            },
        },
    },
});

export default theme;