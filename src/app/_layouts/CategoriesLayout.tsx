import React from 'react'
import { HeaderMobile } from '@/widgets/Header'
import { MainContentWrapper } from '@/shared/ui'
import { BottomBar } from '@/widgets/BottomBar'
import { Container } from '@mui/material'

export const CategoriesLayout = ({
  children
}: {
  children: React.ReactNode
}) => (
  <>
    <Container sx={{ height: '100%', display: 'block' }}>
      <HeaderMobile sx={{ display: 'flex' }} />
    </Container>
    <MainContentWrapper>{children}</MainContentWrapper>
    <BottomBar />
  </>
)
