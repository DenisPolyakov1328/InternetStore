import { Box } from '@mui/material'
import { CustomIconButton } from '@/shared/ui'
import CloseIcon from '@mui/icons-material/Close'
import { navItems } from '@/shared/config'
import { BurgerMenuItem } from '@/features/BurgerMenu/ui/BurgerMenuItem'

interface BurgerMenuContentProps {
  close: () => void
}

export const BurgerMenuContent = ({ close }: BurgerMenuContentProps) => {
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
          <BurgerMenuItem key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  )
}
