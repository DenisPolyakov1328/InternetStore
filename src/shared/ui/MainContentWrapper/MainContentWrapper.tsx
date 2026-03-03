import { ReactNode } from 'react'
import { Box, BoxProps } from '@mui/material'

interface MainContentWrapperProps extends BoxProps {
  children: ReactNode
}

export const MainContentWrapper = ({
  children,
  ...props
}: MainContentWrapperProps) => {
  return (
    <Box
      component="main"
      sx={[
        {
          flex: 1,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'secondary.light',
          pb: { xs: '70px', lgp: 0 }
        }
      ]}
      {...props}
    >
      {children}
    </Box>
  )
}
