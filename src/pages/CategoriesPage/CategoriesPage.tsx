'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useCategories } from '@/widgets/CategoriesMegaMenu/lib/useCategories'
import { NextLink } from '@/shared/ui'
import type { SubCategoryGroup } from '@/shared/types'

const NAV_SIZE = 80

const captionEllipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical' as const
}

const CategoryNavButton = ({
  href,
  icon,
  label
}: {
  href: string
  icon?: React.ReactNode
  label: string
}) => (
  <ListItemButton
    component={NextLink}
    href={href}
    sx={{
      width: NAV_SIZE,
      minWidth: NAV_SIZE,
      height: NAV_SIZE,
      maxHeight: NAV_SIZE,
      flexShrink: 0,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      px: 0,
      borderBottom: 1,
      borderColor: 'divider'
    }}
  >
    {icon && (
      <ListItemIcon
        sx={{ minWidth: 'auto', mb: 0.5, justifyContent: 'center' }}
      >
        {icon}
      </ListItemIcon>
    )}
    <ListItemText
      primary={label}
      sx={{ margin: 0, width: '100%', flex: 'none', textAlign: 'center' }}
      primaryTypographyProps={{
        variant: 'caption',
        textAlign: 'center',
        sx: captionEllipsis
      }}
    />
  </ListItemButton>
)

const SubCategoryBlock = ({ group }: { group: SubCategoryGroup }) => (
  <Accordion
    disableGutters
    elevation={0}
    sx={{
      '&:before': { display: 'none' },
      '&.MuiAccordion-root': {
        border: 'none',
        backgroundColor: 'transparent'
      },
      '&.Mui-expanded': { margin: 0 }
    }}
  >
    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 2 }}>
      <Typography component="span" fontWeight={600}>
        {group.title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ py: 0 }}>
      <List
        dense
        disablePadding
        sx={{
          minHeight: 'auto',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 2,
            borderRadius: 1,
            backgroundColor: 'divider'
          }
        }}
      >
        {group.items.map((item) => (
          <ListItemButton key={item.id} component={NextLink} href={item.href}>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ variant: 'body1' }}
            />
          </ListItemButton>
        ))}
      </List>
    </AccordionDetails>
  </Accordion>
)

const verticalTabsSx = {
  flexShrink: 0,
  '& .MuiTabs-flexContainer': { alignItems: 'stretch' },
  '& .MuiTab-root': {
    width: NAV_SIZE,
    minWidth: NAV_SIZE,
    height: NAV_SIZE,
    minHeight: NAV_SIZE,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    px: 0
  },
  '& .MuiTab-label': { ...captionEllipsis, maxWidth: '100%' }
}

export const CategoriesPage = () => {
  const categories = useCategories()
  const withSub = categories.filter((c) => (c.subCategories?.length ?? 0) > 0)
  const withoutSub = categories.filter((c) => !(c.subCategories?.length ?? 0))
  const [tab, setTab] = useState(0)

  return (
    <Stack flex={1} minHeight={0} width="100%">
      <Stack direction="row" flex={1} minHeight={0} width="100%">
        <Stack
          direction="column"
          alignItems="center"
          sx={{
            width: NAV_SIZE,
            flexShrink: 0,
            position: 'sticky',
            top: 70,
            alignSelf: 'flex-start',
            borderRight: 1,
            borderColor: 'divider',
            zIndex: 1
          }}
        >
          {withSub.length > 0 && (
            <Tabs
              orientation="vertical"
              value={tab}
              onChange={(_, v) => setTab(v)}
              sx={verticalTabsSx}
            >
              {withSub.map((cat) => (
                <Tab
                  key={cat.id}
                  icon={cat.icon}
                  iconPosition="top"
                  label={cat.label}
                  sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    fontSize: 10
                  }}
                />
              ))}
            </Tabs>
          )}
          {withoutSub.map((cat) => (
            <CategoryNavButton
              key={cat.id}
              href={cat.href}
              icon={cat.icon}
              label={cat.label}
            />
          ))}
        </Stack>
        {withSub.length > 0 && (
          <Stack
            sx={{
              backgroundColor: 'white',
              overflow: 'auto',
              minHeight: 0
            }}
            width="auto"
            maxWidth="100%"
            flex={1}
          >
            {withSub[tab]?.subCategories?.map((sub) => (
              <SubCategoryBlock key={sub.id} group={sub} />
            ))}
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}
