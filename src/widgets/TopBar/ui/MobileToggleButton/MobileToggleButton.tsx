import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

interface Props {
  isSocialOpen: boolean
  toggleIcon: () => void
}

export const MobileToggleButton = ({ isSocialOpen, toggleIcon }: Props) => {
  return (
    <IconButton
      disableRipple
      onClick={toggleIcon}
      sx={{
        display: { sm: 'inline-flex', smp: 'none' },
        height: 40,
        padding: 0,
        '&:hover': {
          backgroundColor: 'transparent'
        },
        '&:focus': {
          outline: 'none'
        }
      }}
    >
      {isSocialOpen ? (
        <AddIcon
          sx={{
            color: 'primary.contrastText'
          }}
        />
      ) : (
        <RemoveIcon
          sx={{
            color: 'primary.contrastText'
          }}
        />
      )}
    </IconButton>
  )
}
