'use client'

import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { CacheProvider } from '@emotion/react'
// import theme from '@/shared/theme/theme'
import { createEmotionCache } from '@/shared/lib/createEmotionCache'
import { createMuiTheme } from './../../shared/theme/temeTest'

const clientSideEmotionCache = createEmotionCache()

export default function ThemeProviderComponent({
  children
}: {
  children: React.ReactNode
}) {
  const theme = useMemo(() => createMuiTheme(), [])

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  )
}
