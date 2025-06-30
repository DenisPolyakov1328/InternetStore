import { Box, SxProps, Theme } from '@mui/material'
import { Logo } from '@/shared/ui'
import { CustomIconButton } from '@/shared/ui'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { HeaderActions } from '../HeaderActions'

interface HeaderMobileProps {
  sx?: SxProps<Theme>
}

export const HeaderMobile = ({ sx = {} }: HeaderMobileProps) => {
  return (
    <>
      <Box
        sx={{
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2px',
          ...sx
        }}
      >
        <Box sx={{ flex: '1 1 0%' }}>
          <CustomIconButton icon={MenuOutlinedIcon} />
        </Box>
        <Logo sx={{ display: 'block' }} component="a" href="/" />
        <HeaderActions
          isMobile={true}
          sx={{
            display: 'flex',
            justifyContent: 'end',
            flex: '1 1 0%'
          }}
        />
      </Box>
    </>
  )
}
