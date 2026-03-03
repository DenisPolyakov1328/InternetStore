'use client'
import { Box } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'
import { NextLink } from '@/shared/ui'
import { BadgeWrapper } from '@/shared/ui/BadgeWrapper'

type BottomBarItemProps = {
  href: string
  title: string
  icon: SvgIconComponent
  withBadge?: boolean
  badgeContent: number
  active?: boolean
}

export const BottomBarItem = ({
  href,
  title,
  icon: Icon,
  withBadge,
  badgeContent,
  active = false
}: BottomBarItemProps) => {
  return (
    <Box
      component={NextLink}
      href={href}
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1 1 0px',
        fontSize: 13,
        color: 'secondary.dark',
        backgroundColor: active ? 'action.hover' : 'transparent'
      }}
    >
      {withBadge ? (
        <BadgeWrapper badgeContent={badgeContent}>
          <Icon />
        </BadgeWrapper>
      ) : (
        <Icon />
      )}
      {title}
    </Box>
  )
}
