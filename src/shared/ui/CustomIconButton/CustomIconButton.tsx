import { IconButton } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'
import { ElementType } from 'react'

interface CustomIconButtonProps {
  href?: string
  component?: ElementType
  icon: SvgIconComponent
}

export const CustomIconButton = ({
  href,
  component = 'button',
  icon: Icon
}: CustomIconButtonProps) => {
  return (
    <IconButton href={href} component={component}>
      <Icon sx={{ fontSize: '24px' }} />
    </IconButton>
  )
}
