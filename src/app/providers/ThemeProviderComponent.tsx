'use client'
import React, { useMemo } from 'react'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { createMuiTheme } from '@/shared/theme/Theme'

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
