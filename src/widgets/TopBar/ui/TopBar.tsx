'use client'
import { useState } from 'react'
import { Box, Chip, Container, IconButton, Link } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export const TopBar = () => {
  const [isAddIcon, setIsAddIcon] = useState(true)

  const handleClick = () => {
    setIsAddIcon((prev) => !prev)
  }

  return (
    <>
      <Box
        sx={(theme) => ({
          fontSize: '12px',
          height: '40px',
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.secondary.main
        })}
      >
        <Container
          sx={{
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box>
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
          </Box>
          <IconButton
            disableRipple
            onClick={handleClick}
            sx={{
              display: { sm: 'inline-flex', smp: 'none' },
              height: '40px',
              '&:hover': {
                backgroundColor: 'transparent'
              },
              '&:focus': {
                outline: 'none'
              }
            }}
          >
            {isAddIcon ? (
              <AddIcon
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText
                })}
              />
            ) : (
              <RemoveIcon
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText
                })}
              />
            )}
          </IconButton>
          <Box
            sx={{
              display: { sm: 'none', smp: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <Link underline="none">
              <TwitterIcon
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText,
                  fontSize: '16px'
                })}
              />
            </Link>
            <Link underline="none">
              <FacebookIcon
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText,
                  fontSize: '16px'
                })}
              />
            </Link>
            <Link underline="none">
              <InstagramIcon
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText,
                  fontSize: '16px'
                })}
              />
            </Link>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          display: { xs: 'block', smp: 'none' },
          overflow: 'hidden',
          height: isAddIcon ? 0 : '40px',
          transition: 'height 0.3s ease, opacity 0.3s ease',
          opacity: isAddIcon ? 0 : 1,
          backgroundColor: (theme) => theme.palette.secondary.main
        }}
      >
        <Container sx={{ gap: '12px' }}>
          <Link underline="none">
            <TwitterIcon
              sx={(theme) => ({
                color: theme.palette.primary.contrastText,
                fontSize: '16px'
              })}
            />
          </Link>
          <Link underline="none">
            <FacebookIcon
              sx={(theme) => ({
                color: theme.palette.primary.contrastText,
                fontSize: '16px'
              })}
            />
          </Link>
          <Link underline="none">
            <InstagramIcon
              sx={(theme) => ({
                color: theme.palette.primary.contrastText,
                fontSize: '16px'
              })}
            />
          </Link>
        </Container>
      </Box>
    </>
  )
}
