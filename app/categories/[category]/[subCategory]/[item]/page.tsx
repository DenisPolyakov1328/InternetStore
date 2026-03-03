import { getTranslations } from 'next-intl/server'
import { Container, Grid, Typography } from '@mui/material'
import { getProductsByCategory } from '@/entities/product/api'
import { ProductCard } from '@/entities/product/ui'

interface Props {
  params: Promise<{ category: string; subCategory: string; item: string }>
}

export default async function CategoryItemPage({ params }: Props) {
  const { item } = await params
  const t = await getTranslations('category')
  const products = await getProductsByCategory(item)

  return (
    <Container sx={{ py: 3 }}>
      {products.length > 0 ? (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography color="text.secondary">{t('empty')}</Typography>
      )}
    </Container>
  )
}
