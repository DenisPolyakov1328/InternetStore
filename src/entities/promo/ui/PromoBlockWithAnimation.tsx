'use client'
import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import Lottie from 'lottie-react'

interface PromoBlockWithAnimationProps {
  discountText: string
  offerText: string
  buttonText: string
  animationPath?: string
}

export const PromoBlockWithAnimation = ({
  discountText,
  offerText,
  buttonText,
  animationPath = '/AnimationSale.json'
}: PromoBlockWithAnimationProps) => {
  const [animationData, setAnimationData] = useState<object | null>(null)

  useEffect(() => {
    fetch(animationPath)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Ошибка при загрузке анимации:', err)
      })
  }, [animationPath])

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'warning.light',
        borderRadius: 2,
        p: '20px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <Typography color="error" fontWeight={700}>
        {discountText}
      </Typography>
      <Typography fontSize={12}>{offerText}</Typography>
      <Button variant="contained" size="small" sx={{ mt: 1 }}>
        {buttonText}
      </Button>

      {animationData && (
        <Box sx={{ width: 100, mt: 1 }}>
          <Lottie animationData={animationData} loop autoplay />
        </Box>
      )}
    </Box>
  )
}
