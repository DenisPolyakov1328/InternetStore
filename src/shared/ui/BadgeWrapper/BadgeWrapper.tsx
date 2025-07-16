import { Badge } from '@mui/material'
import { ReactNode } from 'react'

type BadgeWrapperProps = {
  badgeContent: number
  children: ReactNode
}

export const BadgeWrapper = ({ badgeContent, children }: BadgeWrapperProps) => {
  return <Badge badgeContent={badgeContent}>{children}</Badge>
}
