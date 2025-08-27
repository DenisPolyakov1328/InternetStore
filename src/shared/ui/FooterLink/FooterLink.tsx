import { Box } from '@mui/material'
import { NextLink } from '@/shared/ui'

interface FooterLinkProps {
  label: string
  href?: string
}

export const FooterLink = ({ label, href }: FooterLinkProps) => {
  if (!href) {
    return (
      <Box
        component="p"
        sx={{
          display: 'block',
          cursor: 'text',
          paddingY: '5px'
        }}
      >
        {label}
      </Box>
    )
  }

  return (
    <NextLink href={href}>
      <Box
        component="a"
        sx={{
          display: 'block',
          cursor: 'pointer',
          paddingY: '5px',
          '&:hover': {
            color: 'background.default'
          }
        }}
      >
        {label}
      </Box>
    </NextLink>
  )
}
