import { CustomIconButton } from '@/shared/ui'
import { Box, Badge, SxProps, Theme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'

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
      {isMobile && <CustomIconButton icon={SearchIcon} />}
      <CustomIconButton
        icon={AccountCircleOutlinedIcon}
        href="/Login"
        component="a"
      />
      <Badge badgeContent="3">
        <CustomIconButton
          icon={ShoppingBagOutlinedIcon}
          href="/cart"
          component="a"
        />
      </Badge>
    </Box>
  )
}
