import { CustomIconButton } from '@/shared/ui'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

interface BurgerMenuButtonProps {
  toggle: () => void
}

export const BurgerMenuButton = ({ toggle }: BurgerMenuButtonProps) => {
  return <CustomIconButton icon={MenuOutlinedIcon} onClick={toggle} />
}
