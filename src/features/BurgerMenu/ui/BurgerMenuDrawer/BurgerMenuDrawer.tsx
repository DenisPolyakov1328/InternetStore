import { DrawerWrapper, ScrollWrapper } from '@/shared/ui'
import { Box } from '@mui/material'
import { BurgerMenuContent } from '@/features/BurgerMenu/ui/BurgerMenuContent'

interface BurgerMenuDrawerProps {
  isOpen: boolean
  close: () => void
}

export const BurgerMenuDrawer = ({ isOpen, close }: BurgerMenuDrawerProps) => {
  return (
    <DrawerWrapper open={isOpen} onClose={close} anchor={'left'}>
      <Box
        sx={{
          width: '100vw',
          height: '100%',
          position: 'relative'
        }}
      >
        <ScrollWrapper>
          <BurgerMenuContent close={close} />
        </ScrollWrapper>
      </Box>
    </DrawerWrapper>
  )
}
