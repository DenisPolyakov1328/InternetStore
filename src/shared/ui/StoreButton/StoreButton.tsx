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
          gap: 1,
          backgroundColor: 'text.primary',
          color: 'secondary.contrastText',
          paddingY: 1.5,
          paddingX: 2,
          margin: 1,
          borderRadius: 2
        }}
      >
        <Image src={icon} alt={title} width={24} height={24} />
        <Box>
          <Box
            component="p"
            sx={{ fontSize: 8, textAlign: 'left', lineHeight: 1 }}
          >
            {subtitle}
          </Box>
          <Box component="p">{title}</Box>
        </Box>
      </Box>
    </Box>
  )
}
