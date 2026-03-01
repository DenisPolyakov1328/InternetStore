import { Box } from '@mui/material'

export default function Page() {
  return (
    <Box sx={{ p: 2 }}>
      {[...Array(50)].map((_, i) => (
        <p key={i}>Это временный контент для проверки скролла #{i + 1}</p>
      ))}
    </Box>
  )
}
