import { Box } from '@mui/material'
import { CustomIconButton } from '@/shared/ui'
import { extendedSocialLinks } from '@/shared/config'

export const FooterSocialLinksGroup = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        marginX: '-5px',
        marginTop: 2
      }}
    >
      {extendedSocialLinks.map(({ icon, url }) => (
        <CustomIconButton
          key={url}
          icon={icon}
          href={url}
          component="a"
          sx={{
            padding: 1.25,
            margin: 0.5,
            backgroundColor: 'custom.social'
          }}
          iconSx={{ fontSize: 14, color: 'secondary.contrastText' }}
        />
      ))}
    </Box>
  )
}
