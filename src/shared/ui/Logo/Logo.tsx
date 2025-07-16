import { Box, SxProps, Theme } from '@mui/material'
import Image from 'next/image'
import { ElementType } from 'react'

interface LogoProps {
  href?: string
  component?: ElementType
  sx?: SxProps<Theme>
  src?: string
}

export const Logo = ({
  href,
  component = 'div',
  sx = {},
  src = '/KAPPEL_MARC_BLACK.svg'
}: LogoProps) => {
  return (
    <Box
      href={href}
      component={component}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        ...sx
      }}
    >
      <Image src={src} alt="Логотип" width={105} height={63} priority />
    </Box>
  )
}
