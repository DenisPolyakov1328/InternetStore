import { TopBar } from '@/widgets/TopBar'
import { Header } from '@/widgets/Header'
import { Box } from '@mui/material'
import { CategoriesPanel } from '@/widgets/CategoriesPanel'
import { Footer } from '@/widgets/Footer'
import { BottomBar } from '@/widgets/BottomBar'
import { MainContentWrapper } from '@/shared/ui'

export default function Home() {
  return (
    <div>
      <TopBar />
      <Header />
      <CategoriesPanel />
      <MainContentWrapper>
        <Box sx={{ p: 2 }}>
          {[...Array(50)].map((_, i) => (
            <p key={i}>Это временный контент для проверки скролла #{i + 1}</p>
          ))}
        </Box>
      </MainContentWrapper>

      <BottomBar />
      <Footer />
    </div>
  )
}
