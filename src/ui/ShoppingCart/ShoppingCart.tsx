'use client'
import { StyledBadge } from './ShoppingCart.styles'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import IconButton from '@mui/material/IconButton'
import Link from 'next/link'

interface ShoppingCartProps {
  itemCount: number
}

export default function ShoppingCart({ itemCount }: ShoppingCartProps) {
  return (
    <Link href="/cart">
      <IconButton
        aria-label="cart"
        sx={{
          borderRadius: '10px'
        }}
      >
        <StyledBadge badgeContent={itemCount} color="secondary">
          <ShoppingBagOutlinedIcon />
        </StyledBadge>
      </IconButton>
    </Link>
  )
}
