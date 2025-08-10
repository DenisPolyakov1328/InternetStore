import Image from 'next/image'
import { Box, SxProps, Theme } from '@mui/material'
import { NextLink } from '@/shared/ui'

interface LogoProps {
  href?: string
  sx?: SxProps<Theme>
  src?: string
  priority?: boolean
}

export const Logo = ({
  href = '/',
  sx = {},
  src = '/KAPPEL_MARC_BLACK.svg',
  priority = false
}: LogoProps) => {
  return (
    <NextLink href={href} style={{ display: 'inline-flex' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          ...sx
        }}
      >
        <Image
          src={src}
          alt="Логотип"
          width={105}
          height={63}
          priority={priority}
        />
      </Box>
    </NextLink>
  )
}
