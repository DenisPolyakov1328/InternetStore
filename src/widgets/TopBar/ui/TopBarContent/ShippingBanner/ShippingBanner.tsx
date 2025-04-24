import { Box, Chip } from '@mui/material'

export const ShippingBanner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Chip
        label="HOT"
        sx={(theme) => ({
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.primary.main,
          height: '24px',
          fontFamily: 'inherit',
          '.MuiChip-label': {
            fontSize: '13px',
            fontWeight: '700'
          }
        })}
      ></Chip>
      <Box component="span" sx={{ fontSize: '12px' }}>
        Free Express Shipping
      </Box>
    </Box>
  )
}
