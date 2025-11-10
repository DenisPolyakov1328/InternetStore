import { Box } from '@mui/material'

export default function Page() {
  return (
    <Box sx={{ p: 2 }}>
      {[...Array(30)].map((_, i) => (
        <p key={i}>Корзина #{i + 1}</p>
      ))}
    </Box>
  )
}
