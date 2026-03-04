'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import {
  Box,
  Chip,
  Grid,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import type { Product } from '@/entities/product/model/types'
import type { Locale } from '@/shared/i18n/routing'
import { routing } from '@/shared/i18n/routing'

const badgeKeys: Record<'new' | 'sale' | 'bestseller', 'badgeNew' | 'badgeSale' | 'badgeBestseller'> = {
  new: 'badgeNew',
  sale: 'badgeSale',
  bestseller: 'badgeBestseller'
}

function ProductImage({
  src,
  alt,
  fill,
  noImageLabel
}: {
  src: string
  alt: string
  fill?: boolean
  noImageLabel: string
}) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <Box
        sx={{
          ...(fill && { position: 'absolute', inset: 0 }),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'grey.200',
          color: 'text.secondary',
          fontSize: 'body2.fontSize'
        }}
      >
        {noImageLabel}
      </Box>
    )
  }
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      onError={() => setError(true)}
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        ...(fill && { position: 'absolute', inset: 0 })
      }}
    />
  )
}

function formatPrice(product: Product): string {
  const { amount, currency } = product.price
  return `${amount.toFixed(2)} ${currency}`
}

function getLocalizedText(
  text: Record<Locale, string> | undefined,
  locale: Locale
): string {
  if (!text) return ''
  return text[locale] ?? text[routing.defaultLocale] ?? ''
}

interface ProductDetailViewProps {
  product: Product
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const locale = useLocale() as Locale
  const t = useTranslations('product')
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const {
    title,
    description,
    images,
    variants,
    badges
  } = product

  const titleText = getLocalizedText(title, locale)
  const descriptionText = getLocalizedText(description, locale)

  const hasVariants = variants && variants.length > 0
  const inStockVariants = variants?.filter((v) => v.inStock) ?? []
  const sizes = [...new Set(variants?.map((v) => v.size).filter(Boolean))] as string[]
  const colors = [...new Set(variants?.map((v) => v.color).filter(Boolean))] as string[]

  const currentImageSrc = images[selectedImageIndex]
  const hasMultipleImages = images.length > 1

  const goPrev = () => {
    setSelectedImageIndex((i) => (i <= 0 ? images.length - 1 : i - 1))
  }
  const goNext = () => {
    setSelectedImageIndex((i) => (i >= images.length - 1 ? 0 : i + 1))
  }

  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 0 } }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: 'relative',
              aspectRatio: '1',
              borderRadius: 1,
              overflow: 'hidden',
              bgcolor: 'grey.100'
            }}
          >
            {currentImageSrc && (
              <ProductImage
                src={currentImageSrc}
                alt={titleText}
                fill
                noImageLabel={t('noImage')}
              />
            )}
            {hasMultipleImages && (
              <>
                <IconButton
                  size="small"
                  onClick={goPrev}
                  sx={{
                    position: 'absolute',
                    left: 8,
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
                  size="small"
                  onClick={goNext}
                  sx={{
                    position: 'absolute',
                    right: 8,
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
          </Box>
          {hasMultipleImages && (
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              {images.slice(0, 4).map((src, i) => (
                <Box
                  key={i}
                  onClick={() => setSelectedImageIndex(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Image ${i + 1}`}
                  aria-pressed={selectedImageIndex === i}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedImageIndex(i)
                    }
                  }}
                  sx={{
                    position: 'relative',
                    width: 72,
                    height: 72,
                    borderRadius: 1,
                    overflow: 'hidden',
                    bgcolor: 'grey.200',
                    cursor: 'pointer',
                    border: 2,
                    borderColor: selectedImageIndex === i ? 'primary.main' : 'transparent',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <ProductImage
                    src={src}
                    alt={`${titleText} ${i + 1}`}
                    fill
                    noImageLabel={t('noImage')}
                  />
                </Box>
              ))}
            </Stack>
          )}
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={2}>
            {badges && badges.length > 0 && (
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {badges.map((badge) => (
                  <Chip
                    key={badge}
                    label={t(badgeKeys[badge])}
                    size="small"
                    color={badge === 'sale' ? 'error' : badge === 'new' ? 'primary' : 'default'}
                    variant="outlined"
                  />
                ))}
              </Stack>
            )}

            <Typography component="h1" variant="h4">
              {titleText}
            </Typography>

            <Typography variant="h5" color="primary.main">
              {formatPrice(product)}
            </Typography>

            {descriptionText && (
              <Typography variant="body1" color="text.secondary">
                {descriptionText}
              </Typography>
            )}

            {hasVariants && (
              <Stack spacing={1.5}>
                {sizes.length > 0 && (
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      {t('size')}
                    </Typography>
                    <ToggleButtonGroup size="small" exclusive>
                      {sizes.map((size) => {
                        const available = inStockVariants.some((v) => v.size === size)
                        return (
                          <ToggleButton
                            key={size}
                            value={size}
                            disabled={!available}
                            aria-label={size}
                          >
                            {size}
                          </ToggleButton>
                        )
                      })}
                    </ToggleButtonGroup>
                  </Box>
                )}
                {colors.length > 0 && (
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      {t('color')}
                    </Typography>
                    <ToggleButtonGroup size="small" exclusive>
                      {colors.map((color) => {
                        const available = inStockVariants.some((v) => v.color === color)
                        return (
                          <ToggleButton
                            key={color}
                            value={color}
                            disabled={!available}
                            aria-label={color}
                          >
                            {color}
                          </ToggleButton>
                        )
                      })}
                    </ToggleButtonGroup>
                  </Box>
                )}
              </Stack>
            )}

            <Typography variant="caption" color="text.secondary">
              {inStockVariants.length > 0 || !hasVariants
                ? t('inStock')
                : t('outOfStock')}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
