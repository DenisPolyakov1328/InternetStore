import { Typography, List, ListItemButton, ListItemText } from '@mui/material'
import { SubCategoryGroup } from '@/shared/types'
import Grid from '@mui/material/Grid2'

interface Props {
  group: SubCategoryGroup
}

export const CategorySubMenuGroup = ({ group }: Props) => (
  <Grid size={{ xs: 3 }} key={group.id}>
    <Typography fontWeight={600} mb={1}>
      {group.title}
    </Typography>
    <List dense disablePadding>
      {group.items.map((item) => (
        <ListItemButton
          key={item}
          sx={{
            paddingY: 1,
            paddingX: 0,
            ':hover': { backgroundColor: 'transparent' }
          }}
        >
          <ListItemText
            primary={item}
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
