'use client'
import React from 'react'
import { Paper, Grid } from '@mui/material'
import { useTranslations } from 'next-intl'
import { SubCategoryGroup } from '@/shared/types'
import { PromoBlockWithAnimation } from '@/widgets/CategoriesMegaMenu/ui/PromoBlockWithAnimation'
import { CategorySubMenuGroup } from '@/widgets/CategoriesMegaMenu/ui/CategorySubMenuGroup'

interface CategorySubMenuProps {
  subCategories: SubCategoryGroup[]
}

export const CategorySubMenu = ({ subCategories }: CategorySubMenuProps) => {
  const t = useTranslations('common')
  return (
    <Paper
      elevation={5}
      sx={{
        minWidth: 760,
        paddingY: 1.25,
        paddingX: 2.5,
        borderRadius: 2,
        ml: 2,
        color: 'secondary.main'
      }}
    >
      <Grid container spacing={4}>
        {subCategories.map((group) => (
          <CategorySubMenuGroup key={group.id} group={group} />
        ))}
        <Grid size={{ xs: 3 }}>
          <PromoBlockWithAnimation
            discountText={t('discount40')}
            offerText={t('offerLimited')}
            buttonText={t('buyNow')}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}
