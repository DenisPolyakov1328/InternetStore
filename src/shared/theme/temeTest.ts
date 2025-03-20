'use client';

import { createTheme } from '@mui/material';

import { breakpoints } from './breakpoints';
import { createColorTheme } from './colorTheme';
import {
    badgeTheme,
    buttonTheme,
    iconButtonTheme,
    svgIconTheme,
    textFieldTheme
} from './components';

import { fontFamily } from './fontTheme';

export const createMuiTheme = () => {
    const colorTheme = createColorTheme();

    return createTheme({
        palette: colorTheme,
        typography: {
            allVariants: {
                fontFamily,
            },
        },
        breakpoints,
        components: {
            MuiBadge: badgeTheme,
            MuiButton: buttonTheme,
            MuiIconButton: iconButtonTheme,
            MuiSvgIcon: svgIconTheme,
            MuiTextField: textFieldTheme
        },
    });
};
