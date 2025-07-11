import { PaletteOptions } from '@mui/material'

import { black, grey, mono, red } from '../colors'

export const palette: PaletteOptions = {
  primary: {
    main: black[500],
    light: black[300],
    dark: black[200],
    contrastText: mono[50]
  },
  secondary: {
    main: black[100],
    light: grey[700],
    dark: grey[900],
    contrastText: mono[0]
  },
  error: {
    main: red[100]
  },
  warning: {
    main: red[100]
  },
  info: {
    main: black[500]
  },
  success: {
    main: grey[800]
  },
  text: {
    primary: black[200],
    secondary: grey[800],
    disabled: grey[400]
  },
  background: {
    default: mono[0]
  },
  grey: {
    100: grey[100],
    200: grey[200],
    300: grey[300],
    400: grey[400],
    500: grey[500],
    600: grey[600],
    700: grey[700],
    800: grey[800],
    900: grey[900]
  },
  custom: {
    border: mono[100]
  }
}
