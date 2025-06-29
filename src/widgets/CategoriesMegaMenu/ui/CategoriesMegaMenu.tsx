'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Box } from '@mui/material'
import { categories } from '../model/categories'
import { CategoriesList } from './CategoriesList/CategoriesList'
import { CategorySubMenu } from './CategorySubMenu/CategorySubMenu'

interface CategoriesMegaMenuProps {
  trigger: (props: { isOpen: boolean }) => React.ReactNode
}

export const CategoriesMegaMenu = ({ trigger }: CategoriesMegaMenuProps) => {
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
      <Box
        onClick={() => {
          setOpen((prev) => !prev)
          setHoveredCategory(null)
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '16px',
          cursor: 'pointer'
        }}
      >
        {trigger({ isOpen: open })}
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
        <CategoriesList
          categories={categories}
          open={open}
          hoveredCategory={hoveredCategory}
          onHover={setHoveredCategory}
        />

        {activeCategory?.subCategories?.length ? (
          <CategorySubMenu subCategories={activeCategory.subCategories} />
        ) : null}
      </Box>
    </Box>
  )
}
