'use client'
import { Box } from '@mui/material'
import { usePathname } from '@/shared/i18n'
import { BottomBarItem } from './BottomBarItem/BottomBarItem'
import { useBottomBarItems } from '../lib/useBottomBarItems'

export const BottomBar = () => {
  const pathname = usePathname() ?? ''
  const bottomBarItems = useBottomBarItems()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <Box
      sx={{
        display: { xs: 'flex', lgp: 'none' },
        width: '100vw',
        height: '70px',
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1201,
        backgroundColor: 'secondary.contrastText',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 4px 3px'
      }}
    >
      {bottomBarItems.map((item) => (
        <BottomBarItem
          key={item.id}
          href={item.href}
          title={item.title}
          icon={item.icon}
          withBadge={item.withBadge}
          badgeContent={3}
          active={isActive(item.href)}
        />
      ))}
    </Box>
  )
}
