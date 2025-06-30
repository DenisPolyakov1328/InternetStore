'use client'
import React from 'react'
import {
   Paper,
   Typography,
   List,
   ListItemButton,
   ListItemText
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { SubCategoryGroup } from '@/shared/types'
import { PromoBlockWithAnimation } from '@/shared/ui'

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
