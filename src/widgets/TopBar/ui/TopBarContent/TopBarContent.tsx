import { Box, Container } from '@mui/material'
import { SocialLinks } from '@/shared/ui'
import type { LinkItem } from '@/shared/types'
import { ShippingBanner } from '../ShippingBanner'
import { MobileToggleButton } from '../MobileToggleButton'

interface TopBarContentProps {
  isSocialOpen: boolean
  toggleIcon: () => void
  links: LinkItem[]
}

export const TopBarContent = ({
  isSocialOpen,
  toggleIcon,
  links
}: TopBarContentProps) => {
  return (
    <Box
      sx={{
        fontSize: 12,
        height: 40,
        color: 'primary.contrastText',
        backgroundColor: 'secondary.main',
        transition: 'height 300ms ease'
      }}
    >
      <Container
        sx={{
          justifyContent: 'space-between'
        }}
      >
        <ShippingBanner />
        <MobileToggleButton
          isSocialOpen={isSocialOpen}
          toggleIcon={toggleIcon}
        />
        <Box
          sx={{
            display: { xs: 'none', smp: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1.5
          }}
        >
          <SocialLinks links={links} />
        </Box>
      </Container>
    </Box>
  )
}
