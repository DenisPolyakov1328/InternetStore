import React from 'react'
import { Drawer, DrawerProps } from '@mui/material'

interface DrawerWrapperProps
  extends Omit<DrawerProps, 'open' | 'onClose' | 'children'> {
  children: React.ReactNode
  open: boolean
  onClose: () => void
  anchor?: 'top' | 'left' | 'right' | 'bottom'
}

export const DrawerWrapper = ({
  children,
  open,
  onClose,
  anchor = 'top'
}: DrawerWrapperProps) => {
  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      sx={{
        zIndex: 9999,
        '& .MuiDrawer-paper': {
          backgroundColor: 'secondary.contrastText',
          boxShadow: 'none',
          overflow: 'hidden'
        }
      }}
    >
      {children}
    </Drawer>
  )
}
