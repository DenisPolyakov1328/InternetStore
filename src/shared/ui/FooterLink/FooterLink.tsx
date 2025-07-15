import { Box } from '@mui/material'

interface FooterLinkProps {
  label: string
  href?: string
}
export const FooterLink = ({ label, href }: FooterLinkProps) => {
  const Component = href ? 'a' : 'p'

  return (
    <Box
      component={Component}
      href={href}
      sx={{
        display: 'block',
        cursor: href ? 'pointer' : 'text',
        paddingY: '5px',
        ...(href && {
          '&:hover': {
            color: 'background.default'
          }
        })
      }}
    >
      {label}
    </Box>
  )
}
