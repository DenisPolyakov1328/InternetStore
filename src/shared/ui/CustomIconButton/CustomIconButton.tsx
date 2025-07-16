import { IconButton, SxProps, Theme } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'
import { ElementType, MouseEventHandler } from 'react'

interface CustomIconButtonProps {
  href?: string
  component?: ElementType
  icon: SvgIconComponent
  onClick?: MouseEventHandler<HTMLButtonElement>
  sx?: SxProps<Theme>
  iconSx?: SxProps<Theme>
}

export const CustomIconButton = ({
  href,
  component = 'button',
  icon: Icon,
  onClick,
  sx,
  iconSx
}: CustomIconButtonProps) => {
  return (
    <IconButton href={href} component={component} onClick={onClick} sx={sx}>
      <Icon sx={{ fontSize: 24, ...iconSx }} />
    </IconButton>
  )
}
