'use client'
import { useState, useRef } from 'react'
import { Box } from '@mui/material'
import { categoriesArray } from '@/entities/category/model'
import { CategoriesCollapseList } from './CategoriesCollapseList'
import { CategorySubMenu } from './CategorySubMenu'
import {
  CategoriesTriggerButton,
  CategoriesTriggerIconButton
} from '@/widgets/CategoriesMegaMenu'
import { useClickOutside, useHideOnScroll } from '@/shared/lib/hooks'

interface CategoriesMegaMenuProps {
  openButton?: boolean
}

export const CategoriesMegaMenu = ({
  openButton = false
}: CategoriesMegaMenuProps) => {
  const [open, setOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const activeCategory =
    categoriesArray.find((cat) => cat.id === hoveredCategory) ?? null

  const closeMenu = () => {
    setOpen(false)
    setHoveredCategory(null)
  }

  useClickOutside(wrapperRef, closeMenu, open)
  useHideOnScroll(closeMenu, open)

  return (
    <Box sx={{ position: 'relative', cursor: 'pointer' }} ref={wrapperRef}>
      <Box
        onClick={() => {
          setOpen((prev) => !prev)
          setHoveredCategory(null)
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: openButton ? 0 : '16px',
          cursor: 'pointer'
        }}
      >
        {openButton ? (
          <CategoriesTriggerButton isOpen={open} />
        ) : (
          <CategoriesTriggerIconButton />
        )}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 'calc(100% + 13px)',
          left: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'flex-start'
        }}
        onMouseLeave={() => setHoveredCategory(null)}
      >
        <CategoriesCollapseList
          categories={categoriesArray}
          open={open}
          hoveredCategory={hoveredCategory}
          onHover={setHoveredCategory}
        />

        {open && activeCategory?.subCategories?.length ? (
          <CategorySubMenu subCategories={activeCategory.subCategories} />
        ) : null}
      </Box>
    </Box>
  )
}
