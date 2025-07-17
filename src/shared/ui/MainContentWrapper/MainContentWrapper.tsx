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
      sx={{ backgroundColor: 'secondary.light' }}
      {...props}
    >
      {children}
    </Box>
  )
}
