import { Box } from '@mui/material'
import Image from 'next/image'

export interface StoreButtonProps {
  icon: string
  title: string
  subtitle: string
  href?: string
}

export const StoreButton = ({
  icon,
  title,
  subtitle,
  href = '#'
}: StoreButtonProps) => {
  return (
    <Box component="a" href={href} sx={{ cursor: 'pointer' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'text.primary',
          color: 'secondary.contrastText',
          padding: '12px 16px',
          margin: '8px',
          borderRadius: '8px'
        }}
      >
        <Image src={icon} alt={title} width={24} height={24} />
        <Box>
          <Box
            component="p"
            sx={{ fontSize: '8px', textAlign: 'left', lineHeight: 1 }}
          >
            {subtitle}
          </Box>
          <Box component="p">{title}</Box>
        </Box>
      </Box>
    </Box>
  )
}
