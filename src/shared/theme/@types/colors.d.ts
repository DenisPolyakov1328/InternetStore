import { Palette, PaletteOptions } from '@mui/material/styles';

interface CustomPalette {
    custom: {
        border: string;
    }
}

declare module '@mui/material/styles' {
    interface Palette extends CustomPalette { }
    interface PaletteOptions extends CustomPalette { }
}