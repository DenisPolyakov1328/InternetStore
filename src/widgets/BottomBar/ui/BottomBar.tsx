import { Box } from '@mui/material'
import { BottomBarItem } from '@/widgets/BottomBar/ui/BottomBarItem/BottomBarItem'
import { bottomBarItems } from '@/shared/config/bottomBarItems'

export const BottomBar = () => {
  return (
    <Box
      sx={{
        display: { xs: 'flex', lgp: 'none' },
        width: '100vw',
        height: 70,
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1201,
        backgroundColor: 'secondary.contrastText',
        justifyContent: 'space-around',
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
        />
      ))}
    </Box>
  )
}
