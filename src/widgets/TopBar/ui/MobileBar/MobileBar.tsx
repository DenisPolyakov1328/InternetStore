import { Box, Container } from '@mui/material'
import { SocialLinks } from '@/shared/ui'
import type { LinkItem } from '@/shared/types'

interface Props {
  isSocialOpen: boolean
  links: LinkItem[]
}

export const MobileBar = ({ isSocialOpen, links }: Props) => {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'block', smp: 'none' },
          overflow: 'hidden',
          height: isSocialOpen ? 0 : 40,
          transition: 'height 0.3s ease, opacity 0.3s ease',
          opacity: isSocialOpen ? 0 : 1,
          backgroundColor: 'secondary.main'
        }}
      >
        <Container sx={{ gap: 1.5 }}>
          <SocialLinks links={links} />
        </Container>
      </Box>
    </>
  )
}
