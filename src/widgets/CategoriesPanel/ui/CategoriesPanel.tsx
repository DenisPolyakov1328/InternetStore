import { Paper, Container, Box } from '@mui/material'
import { CategoriesMegaMenu } from '@/widgets/CategoriesMegaMenu'
import { NavMenuItem } from '@/features/CategoriesMenu'
import { navItems } from '@/shared/config'

export const CategoriesPanel = () => {
  return (
    <Paper
      elevation={0}
      sx={{ display: { xs: 'none', lg: 'block' }, height: '60px' }}
    >
      <Container sx={{ justifyContent: 'space-between' }}>
        <CategoriesMegaMenu openButton={true} />
        <Box sx={{ display: 'flex', gap: '32px' }}>
          {navItems.map((item) => (
            <NavMenuItem
              key={item.id}
              title={item.title}
              subCategories={item.subCategories}
            />
          ))}
        </Box>
      </Container>
    </Paper>
  )
}
