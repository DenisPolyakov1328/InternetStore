import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      border: string
      footer: string
      social: string
    }
  }
  interface PaletteOptions {
    custom?: {
      border?: string
      footer?: string
      social?: string
    }
  }
}
