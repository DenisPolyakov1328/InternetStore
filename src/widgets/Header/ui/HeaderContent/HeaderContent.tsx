import { Container } from '@mui/material'
import { HeaderDesktop } from '../HeaderDesktop'
import { HeaderMobile } from '../HeaderMobile'

interface HeaderContentProps {
  isFixed?: boolean
}

export const HeaderContent = ({ isFixed }: HeaderContentProps) => {
  return (
    <Container sx={{ height: '100%', display: 'block' }}>
      <HeaderDesktop
        isFixed={isFixed}
        sx={{ display: { xs: 'none', lg: 'flex' } }}
      />
      <HeaderMobile sx={{ display: { xs: 'flex', lg: 'none' } }} />
    </Container>
  )
}
