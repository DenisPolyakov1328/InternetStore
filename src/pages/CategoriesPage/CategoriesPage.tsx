'use client'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Container
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTranslations } from 'next-intl'
import { useCategories } from '@/widgets/CategoriesMegaMenu/lib/useCategories'
import { NextLink } from '@/shared/ui'
import type { SubCategoryGroup } from '@/shared/types'

function SubCategoryBlock({ group }: { group: SubCategoryGroup }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography
        component={NextLink}
        href={group.href}
        variant="subtitle2"
        fontWeight={600}
        sx={{
          display: 'block',
          mb: 0.5,
          textDecoration: 'none',
          color: 'primary.main'
        }}
      >
        {group.title}
      </Typography>
      <List
        dense
        disablePadding
        sx={{
          pl: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        {group.items.map((item) => (
          <ListItemButton
            key={item.id}
            component={NextLink}
            href={item.href}
            sx={{
              py: 0.25,
              px: 0,
              display: 'block',
              width: '100%'
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ variant: 'body2' }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}

export function CategoriesPage() {
  const t = useTranslations('nav')
  const categories = useCategories()

  return (
    <Container
      sx={{
        py: 2,
        pb: 4,
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      {categories.map((cat) =>
        cat.subCategories?.length ? (
          <Accordion
            key={cat.id}
            defaultExpanded={false}
            disableGutters
            sx={{
              width: '100%',
              maxWidth: '100%',
              '&:before': { display: 'none' },
              boxShadow: 'none',
              borderBottom: '1px solid',
              borderColor: 'divider',
              flexShrink: 0
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ px: 1, minHeight: 48 }}
            >
              {cat.icon && (
                <ListItemIcon sx={{ minWidth: 36, mr: 1 }}>
                  {cat.icon}
                </ListItemIcon>
              )}
              <ListItemText primary={cat.label} />
            </AccordionSummary>
            <AccordionDetails
              sx={{ pt: 0, px: 0, pb: 2, pl: cat.icon ? 5 : 2 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%'
                }}
              >
                {cat.subCategories.map((sub) => (
                  <SubCategoryBlock key={sub.id} group={sub} />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ) : (
          <ListItemButton
            key={cat.id}
            component={NextLink}
            href={cat.href}
            sx={{
              display: 'flex',
              width: '100%',
              py: 1.5,
              px: 1,
              borderBottom: '1px solid',
              borderColor: 'divider',
              flex: '0 0 auto'
            }}
          >
            {cat.icon && (
              <ListItemIcon sx={{ minWidth: 36, mr: 1 }}>
                {cat.icon}
              </ListItemIcon>
            )}
            <ListItemText primary={cat.label} />
          </ListItemButton>
        )
      )}
    </Container>
  )
}
