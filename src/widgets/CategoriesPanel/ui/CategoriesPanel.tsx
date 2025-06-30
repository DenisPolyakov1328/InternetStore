import { Paper, Container, Box } from '@mui/material'
import { CategoriesMegaMenu } from '@/widgets/CategoriesMegaMenu'

export const CategoriesPanel = () => {
   return (
      <Paper elevation={0} sx={{ height: '60px' }}>
         <Container sx={{ justifyContent: 'space-between' }}>
            <CategoriesMegaMenu openButton={true} />
            <Box></Box>
         </Container>
      </Paper>
   )
}
