'use client'
import Image from 'next/image'
import { Box, SxProps, Theme } from '@mui/material'
import { NextLink } from '@/shared/ui'
import { useTranslations } from 'next-intl'

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
  const t = useTranslations('common')
  return (
    <Box
      component={NextLink}
      href={href}
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
        alt={t('logoAlt')}
        width={105}
        height={63}
        priority={priority}
      />
    </Box>
  )
}
