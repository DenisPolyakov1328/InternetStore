import { Box, Container } from '@mui/material'
import { SocialLinks } from '@/shared/ui'
import type { LinkItem } from '@/shared/types'

interface Props {
   isAddIcon: boolean
   links: LinkItem[]
}

export const MobileBar = ({ isAddIcon, links }: Props) => {
   return (
      <>
         <Box
            sx={{
               display: { xs: 'block', smp: 'none' },
               overflow: 'hidden',
               height: isAddIcon ? 0 : '40px',
               transition: 'height 0.3s ease, opacity 0.3s ease',
               opacity: isAddIcon ? 0 : 1,
               backgroundColor: (theme) => theme.palette.secondary.main
            }}
         >
            <Container sx={{ gap: '12px' }}>
               <SocialLinks links={links} />
            </Container>
         </Box>
      </>
   )
}
