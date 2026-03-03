'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Box, Card, CardContent, Chip, Typography } from '@mui/material'
import { Link } from '@/shared/i18n/navigation'
import type { Product } from '../model/types'
import type { Locale } from '@/shared/i18n/routing'
import { routing } from '@/shared/i18n/routing'

function getLocalizedTitle(title: Product['title'], locale: Locale): string {
  return title[locale] ?? title[routing.defaultLocale] ?? ''
}

function formatPrice(price: Product['price']): string {
  return `${price.amount.toFixed(2)} ${price.currency}`
}

const badgeTKey: Record<
  'new' | 'sale' | 'bestseller',
  'badgeNew' | 'badgeSale' | 'badgeBestseller'
> = {
  new: 'badgeNew',
  sale: 'badgeSale',
  bestseller: 'badgeBestseller'
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const locale = useLocale() as Locale
  const t = useTranslations('product')
  const [imgError, setImgError] = useState(false)
  const titleText = getLocalizedTitle(product.title, locale)
  const firstBadge = product.badges?.[0]

  return (
    <Link href={`/product/${product.slug}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'box-shadow 0.2s',
          '&:hover': { boxShadow: 2 }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            aspectRatio: '1',
            bgcolor: 'grey.100',
            minWidth: '320px',
            minHeight: '320px'
          }}
        >
          {product.images[0] && !imgError ? (
            <Box
              component="img"
              src={product.images[0]}
              alt={titleText}
              onError={() => setImgError(true)}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'text.secondary',
                fontSize: 'body2.fontSize'
              }}
            >
              —
            </Box>
          )}
          {firstBadge && (
            <Chip
              label={t(badgeTKey[firstBadge])}
              size="small"
              sx={{
                position: 'absolute',
                top: 8,
                left: 8,
                textTransform: 'uppercase',
                fontSize: '0.7rem'
              }}
            />
          )}
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="subtitle1"
            component="h3"
            noWrap
            title={titleText}
          >
            {titleText}
          </Typography>
          <Typography variant="body2" color="primary.main" fontWeight={600}>
            {formatPrice(product.price)}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}
