import { Box, Container } from '@mui/material'
import { socialLinksBase } from '@/shared/data'
import { SocialLinks } from '@/shared/ui'
import type { LinkItem } from '@/shared/types'
import { ShippingBanner } from '../ShippingBanner'
import { MobileToggleButton } from '../MobileToggleButton'

interface Props {
  isSocialOpen: boolean
  toggleIcon: () => void
  links: LinkItem[]
}

export const TopBarContent = ({ isSocialOpen, toggleIcon }: Props) => {
  return (
    <Box
      sx={(theme) => ({
        fontSize: '12px',
        height: '40px',
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        transition: 'height 300ms ease'
      })}
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
            gap: '12px'
          }}
        >
          <SocialLinks links={socialLinksBase} />
        </Box>
      </Container>
    </Box>
  )
}
