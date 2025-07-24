import { CustomIconButton } from '@/shared/ui'
import { Box, SxProps, Theme } from '@mui/material'
import { BadgeWrapper } from '@/shared/ui/BadgeWrapper'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { MobileSearchDrawer } from '@/widgets/Header/ui/MobileSearchDrawer'

interface HeaderActionsProps {
  isMobile?: boolean
  sx?: SxProps<Theme>
}

export const HeaderActions = ({
  isMobile = false,
  sx = {}
}: HeaderActionsProps) => {
  return (
    <Box sx={{ ...sx }}>
      {isMobile && <MobileSearchDrawer />}
      <CustomIconButton
        icon={AccountCircleOutlinedIcon}
        href="/Login"
        component="a"
      />
      <BadgeWrapper badgeContent={3}>
        <CustomIconButton
          icon={ShoppingBagOutlinedIcon}
          href="/cart"
          component="a"
        />
      </BadgeWrapper>
    </Box>
  )
}
