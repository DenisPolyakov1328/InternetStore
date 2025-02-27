'use client'
import { IconButton } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'
import { ElementType } from 'react'

export interface CustomIconButtonProps {
  href?: string
  component?: ElementType
  icon: SvgIconComponent
}

export default function CustomIconButton({
  href,
  component = 'button',
  icon: Icon
}: CustomIconButtonProps) {
  return (
    <IconButton href={href} component={component}>
      <Icon sx={{ fontSize: '24px' }} />
    </IconButton>
  )
}
