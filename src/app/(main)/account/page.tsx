import { Box } from '@mui/material'

export default function Page() {
  return (
    <Box sx={{ p: 2 }}>
      {[...Array(20)].map((_, i) => (
        <p key={i}>Аккаунт #{i + 1}</p>
      ))}
    </Box>
  )
}
