'use client'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { type PropsWithChildren } from 'react'

export const ScrollWrapper = ({ children }: PropsWithChildren) => {
  return (
    <OverlayScrollbarsComponent
      defer
      options={{
        scrollbars: {
          theme: 'os-theme-light',
          autoHide: 'move',
          autoHideDelay: 100
        },
        overflow: {
          x: 'hidden',
          y: 'scroll'
        }
      }}
      style={{
        maxHeight: '100%',
        height: '100vh'
      }}
    >
      {children}
    </OverlayScrollbarsComponent>
  )
}
