'use client'

import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { createMuiTheme } from '@/shared/theme/temeTest'

export default function ThemeProviderComponent({
  children
}: {
  children: React.ReactNode
}) {
  const theme = useMemo(() => createMuiTheme(), [])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
