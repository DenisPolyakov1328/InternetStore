import {
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemText
} from '@mui/material'
import { SubCategoryGroup } from '@/shared/types'
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
        <ListItemButton
          component={NextLink}
          href={item.href}
          key={item.id}
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
      ))}
    </List>
  </Grid>
)
