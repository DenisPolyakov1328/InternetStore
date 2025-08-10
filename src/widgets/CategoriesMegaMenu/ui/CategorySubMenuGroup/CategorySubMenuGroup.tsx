import { Typography, List, ListItemButton, ListItemText } from '@mui/material'
import { SubCategoryGroup } from '@/shared/types'
import Grid from '@mui/material/Grid2'
import { NextLink } from '@/shared/ui'

interface Props {
  group: SubCategoryGroup
}

export const CategorySubMenuGroup = ({ group }: Props) => (
  <Grid size={{ xs: 3 }}>
    <Typography fontWeight={600} mb={1}>
      {group.title}
    </Typography>
    <List dense disablePadding>
      {group.items.map((item) => (
        <NextLink href={item.href} key={item.id}>
          <ListItemButton
            sx={{
              paddingY: 1,
              paddingX: 0,
              ':hover': { backgroundColor: 'transparent' }
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                m: 0,
                '.MuiTypography-root': { fontSize: 14 }
              }}
            />
          </ListItemButton>
        </NextLink>
      ))}
    </List>
  </Grid>
)
