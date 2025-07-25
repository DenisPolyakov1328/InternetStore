import type { Metadata } from 'next'
import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import ThemeProviderComponent from '@/app/providers/ThemeProviderComponent'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mark Kappel',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        <AppRouterCacheProvider>
          <ThemeProviderComponent>{children}</ThemeProviderComponent>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
