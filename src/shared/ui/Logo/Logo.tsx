import { Box, SxProps, Theme } from '@mui/material'
import Image from 'next/image'
import { ElementType } from 'react'

interface LogoProps {
  href?: string
  component?: ElementType
  sx?: SxProps<Theme>
}

export const Logo = ({ href, component = 'div', sx = {} }: LogoProps) => {
  return (
    <Box
      href={href}
      component={component}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx
      }}
    >
      <Image
        src="/KAPPEL_MARC.svg"
        alt="Логотип"
        width={105}
        height={63}
        priority
      />
    </Box>
  )
}
