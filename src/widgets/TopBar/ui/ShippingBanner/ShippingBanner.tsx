import { Box, Chip } from '@mui/material'

export const ShippingBanner = () => {
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
        label="АКЦИЯ"
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
        Бесплатная экспресс-доставка
      </Box>
    </Box>
  )
}
