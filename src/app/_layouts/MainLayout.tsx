import React from 'react'
import { TopBar } from '@/widgets/TopBar'
import { Header } from '@/widgets/Header'
import { CategoriesPanel } from '@/widgets/CategoriesPanel'
import { Footer } from '@/widgets/Footer'
import { BottomBar } from '@/widgets/BottomBar'
import { MainContentWrapper } from '@/shared/ui'
import { Box } from '@mui/material'

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}
  >
    <TopBar />
    <Header />
    <CategoriesPanel />
    <MainContentWrapper>{children}</MainContentWrapper>
    <BottomBar />
    <Footer />
  </Box>
)
