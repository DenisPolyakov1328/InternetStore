'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Typography
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const titleText = getLocalizedTitle(product.title, locale)
  const firstBadge = product.badges?.[0]
  const images = product.images
  const currentSrc = images[currentImageIndex]
  const hasMultipleImages = images.length > 1

  const goPrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((i) => (i <= 0 ? images.length - 1 : i - 1))
    setImgError(false)
  }
  const goNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((i) => (i >= images.length - 1 ? 0 : i + 1))
    setImgError(false)
  }

  return (
    <Link href={`/product/${product.slug}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'box-shadow 0.2s',
          cursor: 'pointer',
          '&:hover': { boxShadow: 2 }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            aspectRatio: '1',
            bgcolor: 'grey.100',
            minHeight: '320px',
            '& .card-nav': { opacity: 0, transition: 'opacity 0.2s' },
            '&:hover .card-nav': { opacity: 1 }
          }}
        >
          {currentSrc && !imgError ? (
            <Box
              component="img"
              src={currentSrc}
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
          {hasMultipleImages && (
            <>
              <IconButton
                className="card-nav"
                size="small"
                onClick={goPrev}
                sx={{
                  position: 'absolute',
                  left: 4,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255,255,255,0.9)',
                  '&:hover': { bgcolor: 'background.paper' }
                }}
                aria-label="Previous image"
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                className="card-nav"
                size="small"
                onClick={goNext}
                sx={{
                  position: 'absolute',
                  right: 4,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255,255,255,0.9)',
                  '&:hover': { bgcolor: 'background.paper' }
                }}
                aria-label="Next image"
              >
                <ChevronRightIcon />
              </IconButton>
            </>
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
