import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -7,
    top: -5,
    border: `0 solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#1F2937'
  }
}));