import React from 'react'
import { HeaderMobile } from '@/widgets/Header'
import { MainContentWrapper } from '@/shared/ui'
import { BottomBar } from '@/widgets/BottomBar'
import { Box, Container } from '@mui/material'

export const CategoriesLayout = ({
  children
}: {
  children: React.ReactNode
}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Container sx={{ display: 'block', flexShrink: 0 }}>
      <HeaderMobile sx={{ display: 'flex' }} />
    </Container>
    <MainContentWrapper>{children}</MainContentWrapper>
    <BottomBar />
  </Box>
)
