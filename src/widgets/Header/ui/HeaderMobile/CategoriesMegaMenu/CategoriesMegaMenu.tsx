'use client'
import React, { useState, useRef, useEffect } from 'react'
import {
  Box,
  Button,
  Paper,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
  Collapse,
  Fade
} from '@mui/material'
import CategoryIcon from '@mui/icons-material/Category'
import StorefrontIcon from '@mui/icons-material/Storefront'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'
import HomeIcon from '@mui/icons-material/Home'
import MusicNoteIcon from '@mui/icons-material/MusicNote'

const categories = [
  {
    label: 'Fashion',
    icon: <StorefrontIcon />,
    subCategories: [
      {
        title: 'Man Clothes',
        items: ['Shirt', 'T-shirt', 'Pant', 'Underwear']
      },
      {
        title: 'Accessories',
        items: ['Belt', 'Hat', 'Watches', 'Sunglasses']
      },
      {
        title: 'Shoes',
        items: ['Sneakers', 'Sandals', 'Formal', 'Casual']
      },
      {
        title: 'Bags',
        items: ['Backpack', 'Crossbody Bags', 'Side Bags', 'Slides']
      }
    ]
  },
  {
    label: 'Electronics',
    icon: <CategoryIcon />,
    subCategories: []
  },
  {
    label: 'Bikes',
    icon: <DirectionsBikeIcon />,
    subCategories: []
  },
  {
    label: 'Home & Garden',
    icon: <HomeIcon />,
    subCategories: []
  },
  {
    label: 'Music',
    icon: <MusicNoteIcon />,
    subCategories: []
  }
]

export const CategoriesMegaMenu = () => {
  const [open, setOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const activeCategory =
    hoveredCategory !== null &&
    hoveredCategory >= 0 &&
    hoveredCategory < categories.length
      ? categories[hoveredCategory]
      : null

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
        setHoveredCategory(null)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const handleScroll = () => {
      setOpen(false)
      setHoveredCategory(null)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [open])

  return (
    <Box
      sx={{ position: 'relative', display: 'inline-block' }}
      ref={wrapperRef}
    >
      <Button
        onClick={() => {
          setOpen((prev) => !prev)
          setHoveredCategory(null)
        }}
        sx={{ backgroundColor: '#f4f4f4', textTransform: 'none' }}
        startIcon={<CategoryIcon />}
      >
        Categories
      </Button>

      <Box
        sx={{
          position: 'absolute',
          top: '100%',
          left: 0,
          zIndex: 10,
          mt: 1,
          display: 'flex',
          alignItems: 'flex-start'
        }}
        onMouseLeave={() => setHoveredCategory(null)}
      >
        <Paper elevation={3}>
          <Collapse
            in={open}
            orientation="vertical"
            timeout={250}
            unmountOnExit
          >
            <Box sx={{ width: 250 }}>
              <List>
                {categories.map((cat, index) => (
                  <ListItemButton
                    key={cat.label}
                    selected={hoveredCategory === index}
                    onMouseEnter={() => setHoveredCategory(index)}
                  >
                    <ListItemIcon>{cat.icon}</ListItemIcon>
                    <ListItemText primary={cat.label} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Collapse>
        </Paper>

        {activeCategory?.subCategories?.length ? (
          <Paper
            elevation={3}
            sx={{
              width: 600,
              p: 3,
              borderRadius: 2,
              ml: 1
            }}
          >
            <Grid container spacing={2}>
              {activeCategory.subCategories.map((group) => (
                <Grid item xs={3} key={group.title}>
                  <Typography fontWeight={600} mb={1}>
                    {group.title}
                  </Typography>
                  <List dense disablePadding>
                    {group.items.map((item) => (
                      <ListItemButton key={item} sx={{ py: 0.5 }}>
                        <ListItemText primary={item} />
                      </ListItemButton>
                    ))}
                  </List>
                </Grid>
              ))}
              <Grid item xs={3}>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#fcefe6',
                    borderRadius: 2,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <Typography color="error" fontWeight={700}>
                    40% OFF
                  </Typography>
                  <Typography fontSize={14}>Limited time offer</Typography>
                  <Button variant="contained" size="small" sx={{ mt: 1 }}>
                    Shop Now
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ) : null}
      </Box>
    </Box>
  )
}
