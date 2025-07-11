import { TopBar } from '@/widgets/TopBar'
import { Header } from '@/widgets/Header'
import { Box } from '@mui/material'
import { CategoriesPanel } from '@/widgets/CategoriesPanel'

export default function Home() {
  return (
    <div>
      <TopBar />
      <Header />
      <CategoriesPanel />
      <Box sx={{ p: 2 }}>
        {[...Array(100)].map((_, i) => (
          <p key={i}>Это временный контент для проверки скролла #{i + 1}</p>
        ))}
      </Box>
    </div>
  )
}
