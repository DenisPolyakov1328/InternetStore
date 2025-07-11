import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      border: string
    }
  }
  interface PaletteOptions {
    custom?: {
      border?: string
    }
  }
}
