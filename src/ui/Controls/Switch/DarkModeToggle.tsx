'use client'
import { MaterialUISwitch } from './DarkModeToggle.style'
import FormControlLabel from '@mui/material/FormControlLabel'

interface DarkModeToggleProps {
  label?: string
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
}

export default function DarkModeToggle({
  label = 'MUI switch',
  defaultChecked = false,
  onChange
}: DarkModeToggleProps) {
  return (
    <div>
      <FormControlLabel
        control={
          <MaterialUISwitch
            sx={{ m: 1 }}
            defaultChecked={defaultChecked}
            onChange={(e) => onChange?.(e.target.checked)}
          />
        }
        label={label}
      />
    </div>
  )
}
