import { Box, Chip } from '@mui/material'
import { useTranslations } from 'next-intl'

export const ShippingBanner = () => {
  const t = useTranslations('common')
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1
      }}
    >
      <Chip
        label={t('promo')}
        sx={{
          color: 'primary.contrastText',
          backgroundColor: 'primary.main',
          height: 24,
          fontFamily: 'inherit',
          '.MuiChip-label': {
            fontSize: 13,
            fontWeight: 700
          }
        }}
      ></Chip>
      <Box component="span" sx={{ fontSize: 12 }}>
        {t('freeExpressShipping')}
      </Box>
    </Box>
  )
}
