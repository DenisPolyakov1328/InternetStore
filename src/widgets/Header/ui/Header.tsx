import { Box, Container } from '@mui/material'
import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop'
import { HeaderMobile } from './HeaderMobile/HeaderMobile'

export const Header = () => {
  return (
    <Box sx={{ paddingTop: 0 }}>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ height: '80px' }}>
          <Container sx={{ display: 'block' }}>
            <HeaderDesktop sx={{ display: { xs: 'none', lg: 'flex' } }} />
            <HeaderMobile sx={{ display: { xs: 'flex', lg: 'none' } }} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
