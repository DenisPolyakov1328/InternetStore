import React from 'react'
import { TopBar } from '@/widgets/TopBar'
import { Header } from '@/widgets/Header'
import { CategoriesPanel } from '@/widgets/CategoriesPanel'
import { Footer } from '@/widgets/Footer'
import { BottomBar } from '@/widgets/BottomBar'
import { MainContentWrapper } from '@/shared/ui'

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <TopBar />
    <Header />
    <CategoriesPanel />
    <MainContentWrapper>{children}</MainContentWrapper>
    <BottomBar />
    <Footer />
  </>
)
