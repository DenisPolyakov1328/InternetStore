'use client'
import React from 'react'
import { Paper } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { SubCategoryGroup } from '@/shared/types'
import { PromoBlockWithAnimation } from '@/shared/ui'
import { CategorySubMenuGroup } from '@/widgets/CategoriesMegaMenu/ui/CategorySubMenuGroup'

interface CategorySubMenuProps {
  subCategories: SubCategoryGroup[]
}

export const CategorySubMenu = ({ subCategories }: CategorySubMenuProps) => {
  return (
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
        {subCategories.map((group) => (
          <CategorySubMenuGroup key={group.id} group={group} />
        ))}
        <Grid size={{ xs: 3 }}>
          <PromoBlockWithAnimation
            discountText="СКИДКА 40%"
            offerText="Предложение ограничено"
            buttonText="Купить сейчас"
          />
        </Grid>
      </Grid>
    </Paper>
  )
}
