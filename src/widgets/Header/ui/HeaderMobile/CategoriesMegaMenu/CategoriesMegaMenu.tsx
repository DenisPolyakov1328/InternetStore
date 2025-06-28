'use client'
import React, { useState, useRef, useEffect } from 'react'
import {
  Box,
  Button,
  IconButton,
  Paper,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CategoryIcon from '@mui/icons-material/Category'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import DryCleaningIcon from '@mui/icons-material/DryCleaning'
import WatchIcon from '@mui/icons-material/Watch'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import NewReleasesIcon from '@mui/icons-material/NewReleases'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import { Footprints } from 'lucide-react'
import Lottie from 'lottie-react'

const categories = [
  {
    label: 'Одежда',
    icon: <DryCleaningIcon />,
    subCategories: [
      {
        title: 'Верхняя одежда',
        items: ['Куртки', 'Пуховики', 'Пальто', 'Плащи']
      },
      {
        title: 'Классические костюмы',
        items: ['Костюмы', 'Пиджаки', 'Брюки']
      },
      {
        title: 'Футболки и рубашки',
        items: ['Футболки', 'Поло', 'Рубашки', 'Лонгсливы']
      },
      {
        title: 'Толстовки и свитшоты',
        items: ['Худи', 'Свитшоты', 'Толстовки']
      },
      {
        title: 'Штаны',
        items: ['Джинсы', 'Брюки', 'Шорты', 'Спортивные штаны']
      },
      {
        title: 'Домашняя одежда',
        items: ['Пижамы', 'Термобелье', 'Домашние костюмы']
      }
    ]
  },
  {
    label: 'Обувь',
    icon: <Footprints color="#7d879c" />,
    subCategories: [
      {
        title: 'Тип обуви',
        items: ['Кроссовки', 'Ботинки', 'Туфли', 'Лоферы', 'Сланцы']
      },
      {
        title: 'Сезонная одежда',
        items: ['Зимняя', 'Летняя', 'Демисезонная']
      }
    ]
  },
  {
    label: 'Спортивная одежда',
    icon: <FitnessCenterIcon />,
    subCategories: [
      {
        title: 'Одежда для спорта',
        items: ['Футболки', 'Шорты', 'Костюмы']
      },
      {
        title: 'Обувь для спорта',
        items: ['Кроссовки', 'Кеды']
      }
    ]
  },
  {
    label: 'Нижнее белье',
    icon: (
      <svg
        viewBox="1 -65 511.999 511"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#7d879c"
        aria-hidden="true"
        focusable="false"
      >
        <path d="m0 .5.0546875 186.457031 11.1796875 5.488281c97.230469 47.753907 151.113281 102.070313 174.710937 176.117188l4.4375 13.929688h131.234376l4.4375-13.929688c23.597656-74.046875 77.480468-128.363281 174.710937-176.117188l11.179687-5.488281.054688-186.457031zm471.988281 40-.011719 40.996094h-431.953124l-.011719-40.996094zm-431.953125 80.996094h125.777344c-17.433594 39.441406-27.734375 75.089844-33.605469 100.234375-25.183593-21.179688-55.574219-40.824219-92.160156-59.578125zm252.726563 220.996094h-73.523438c-12.15625-32.476563-29.644531-61.425782-52.964843-87.707032 3.582031-20.644531 14.871093-73.910156 43.613281-133.289062h92.226562c28.617188 59.152344 39.984375 112.601562 43.601563 133.304687-23.316406 26.273438-40.796875 55.21875-52.953125 87.691407zm87.03125-120.761719c-5.871094-25.144531-16.171875-60.796875-33.605469-100.234375h125.777344l-.011719 40.65625c-36.585937 18.753906-66.976563 38.398437-92.160156 59.578125zm0 0" />
      </svg>
    ),
    subCategories: [
      {
        title: 'Трусы',
        items: ['Классические', 'Боксеры']
      },
      {
        title: 'Носки',
        items: ['Повседневные', 'Спортивные', 'Теплые']
      }
    ]
  },
  {
    label: 'Аксессуары',
    icon: <WatchIcon />,
    subCategories: [
      {
        title: 'Головные уборы',
        items: ['Бейсболки', 'Шапки', 'Панамы']
      },
      {
        title: 'Мелкие аксессуары',
        items: ['Часы', 'Браслеты', 'Очки', 'Ремни']
      },
      {
        title: 'Сумки и рюкзаки',
        items: ['Рюкзаки', 'Сумки через плечо', 'Поясные сумки']
      }
    ]
  },
  {
    label: 'Новинки',
    icon: <NewReleasesIcon />,
    subCategories: []
  },
  {
    label: 'Скидки',
    icon: <LocalOfferIcon />,
    subCategories: []
  }
]

export const CategoriesMegaMenu = () => {
  const [open, setOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null) //
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [animationData, setAnimationData] = useState<any>(null)

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

  useEffect(() => {
    fetch('/AnimationSale.json')
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => {
        console.error('Ошибка при загрузке анимации:', err)
      })
  }, [])

  return (
    <Box
      sx={{ position: 'relative', display: 'inline-block' }}
      ref={wrapperRef}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '16px' }}>
        <IconButton
          onClick={() => {
            setOpen((prev) => !prev)
            setHoveredCategory(null)
          }}
          sx={{
            borderRadius: '8px',
            padding: '6px 8px'
          }}
        >
          <CategoryIcon />
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 'calc(100% + 11px)',
          left: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'flex-start'
        }}
        onMouseLeave={() => setHoveredCategory(null)}
      >
        <Paper
          elevation={3}
          sx={(theme) => ({
            borderRadius: '8px',
            color: theme.palette.secondary.main
          })}
        >
          <Collapse
            in={open}
            orientation="vertical"
            timeout={250}
            unmountOnExit
          >
            <List>
              {categories.map((cat, index) => (
                <ListItemButton
                  key={cat.label}
                  selected={hoveredCategory === index}
                  onMouseEnter={() => setHoveredCategory(index)}
                  sx={(theme) => ({
                    height: '40px',
                    minWidth: '278px',
                    padding: '0 16px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'none',
                    '&.Mui-selected': {
                      backgroundColor: theme.palette.grey[700]
                    },
                    '&.Mui-selected:hover': {
                      backgroundColor: theme.palette.grey[700]
                    }
                  })}
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>{cat.icon}</ListItemIcon>
                  <ListItemText
                    primary={cat.label}
                    sx={{ paddingLeft: '12px' }}
                  />
                  {cat.subCategories.length > 0 && <KeyboardArrowRightIcon />}
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </Paper>

        {activeCategory?.subCategories?.length ? (
          <Paper
            elevation={5}
            sx={(theme) => ({
              minWidth: '760px',
              p: '10px 20px',
              borderRadius: '12px',
              ml: '16px',
              color: theme.palette.secondary.main
            })}
          >
            <Grid container spacing={4}>
              {activeCategory.subCategories.map((group) => (
                <Grid size={{ xs: 3 }} key={group.title}>
                  <Typography fontWeight={600} mb={1}>
                    {group.title}
                  </Typography>
                  <List dense disablePadding>
                    {group.items.map((item) => (
                      <ListItemButton
                        key={item}
                        sx={{
                          p: '8px 0',
                          ':hover': { backgroundColor: 'transparent' }
                        }}
                      >
                        <ListItemText
                          primary={item}
                          sx={{
                            m: 0,
                            '.MuiTypography-root': { fontSize: '14px' }
                          }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Grid>
              ))}
              <Grid size={{ xs: 3 }}>
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
                  {animationData && (
                    <Box sx={{ width: 100, mt: 1 }}>
                      <Lottie animationData={animationData} loop autoplay />
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ) : null}
      </Box>
    </Box>
  )
}
