'use client'
import { Box } from '@mui/material'
import { CustomIconButton } from '@/shared/ui'
import CloseIcon from '@mui/icons-material/Close'
import { useNavItems } from '@/shared/lib/useNavItems'
import { BurgerMenuItem } from '../BurgerMenuItem'

interface BurgerMenuContentProps {
  close: () => void
}

export const BurgerMenuContent = ({ close }: BurgerMenuContentProps) => {
  const navItems = useNavItems()
  return (
    <Box
      sx={{
        position: 'relative',
        paddingY: 8,
        paddingX: 5,
        height: '100%',
        maxWidth: 500,
        margin: '0 auto'
      }}
    >
      <CustomIconButton
        icon={CloseIcon}
        onClick={close}
        sx={{ position: 'absolute', top: 15, right: 30 }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {navItems.map((item) => (
          <BurgerMenuItem key={item.id} item={item} close={close} />
        ))}
      </Box>
    </Box>
  )
}
