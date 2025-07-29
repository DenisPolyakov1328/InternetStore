import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { NavItem } from '@/shared/types'
import { BurgerSubMenuItem } from '@/features/BurgerMenu/ui/BurgerSubMenuItem'

export const BurgerMenuItem = ({ item }: { item: NavItem }) => {
  return (
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
      <AccordionSummary
        expandIcon={<KeyboardArrowDownIcon />}
        sx={{
          p: 0,
          backgroundColor: 'transparent'
        }}
      >
        <Typography component="span" fontWeight={600}>
          {item.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: 0,
          backgroundColor: 'transparent'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            pl: 2
          }}
        >
          {item.subCategories.map((subCategory) => (
            <BurgerSubMenuItem key={subCategory.id} item={subCategory} />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}
