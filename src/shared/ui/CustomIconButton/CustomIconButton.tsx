import { IconButton } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'
import { ElementType, MouseEventHandler } from 'react'

interface CustomIconButtonProps {
  href?: string
  component?: ElementType
  icon: SvgIconComponent
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const CustomIconButton = ({
  href,
  component = 'button',
  icon: Icon,
  onClick
}: CustomIconButtonProps) => {
  return (
    <IconButton href={href} component={component} onClick={onClick}>
      <Icon sx={{ fontSize: '24px' }} />
    </IconButton>
  )
}
