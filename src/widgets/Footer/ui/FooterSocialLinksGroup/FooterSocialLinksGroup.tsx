import { Box } from '@mui/material'
import { CustomIconButton } from '@/shared/ui'
import { extendedSocialLinks } from '@/shared/config'

export const FooterSocialLinksGroup = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        marginX: '-5px',
        marginTop: '16px'
      }}
    >
      {extendedSocialLinks.map(({ icon, url }) => (
        <CustomIconButton
          key={url}
          icon={icon}
          href={url}
          component="a"
          sx={{
            padding: '10px',
            margin: '4px',
            backgroundColor: 'custom.social'
          }}
          iconSx={{ fontSize: '14px', color: 'secondary.contrastText' }}
        />
      ))}
    </Box>
  )
}
