'use client'
import IconButton from '@mui/material/IconButton'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

export default function Account() {
  return (
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      sx={{
        borderRadius: '10px'
      }}
    >
      <AccountCircleOutlinedIcon />
    </IconButton>
  )
}
